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
      default:false
    },
    formCreationLimit: {
      type: Number,
      default: 5,
      required: true,
    },
    subscriptionId: {
      type: String,
      required: false,
      default: ''
    },
    premiumExpiresAt: {
      type: Date,
      default: null,
      required: false,
    },
    prioritySupport: {
      type: Boolean,
      default: false,
      required: true,
    },
    formsCreated: {
      type: Number,
      required: true,
      default:0
    },
    subscriptionType: {
      type: String,
      default: "free",
      required:false
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
 try {
   this.password = await bcrypt.hash(this.password, 10);
   next();
 } catch (error) {
   next(error); // Pass error to next middleware if hashing fails
 }
});

const User = mongoose.model("User", userSchema);
export default User;
