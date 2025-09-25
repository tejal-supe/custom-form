import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    emailId: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isPremiumUser: {
      type: Boolean,
      required: true,
    },
    formCreationLimit: {
      type: Number,
      default: 5,
      required: true,
    },
    subscriptionId: {
      type: String,
      required: true,
    },
    premiumExpiresAt: {
      type: Date,
      default: () => {
        const date = new Date();
        date.setMonth(date.getMonth() + 1);
        return date;
      },
      required: true,
    },
    prioritySupport: {
      type: Boolean,
      default: false,
      required: true,
    },
    formsCreated: {
      type: Number,
      required: true,
    },
    subscriptionType: {
      type: String,
      default: "free",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);

  next();
});

const User = mongoose.model("User", userSchema);
export default User;
