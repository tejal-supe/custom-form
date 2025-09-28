import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";

import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "@/api/userApi";

const Login = () => {
    const navigate = useNavigate();
     const formSchema = z.object({
        emailId: z.email({ message: "Invalid email address" }),
        password: z
          .string()
          .min(8, { message: "Password must be at least 8 characters" })
          .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
            message:
              "Password must contain at least one letter, one number, and one special character",
          }),
      });
    
      type FormData = z.infer<typeof formSchema>;
    
      const {
        control,
        handleSubmit,
        formState: { errors, isValid },
        trigger, 
      } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          emailId: "",
          password: "",
        },
        mode: "onBlur",
      });
    
      const onSubmit = async (data: FormData) => {
        try {
          const response = await loginUser({
            emailId: data.emailId,
            password: data.password,
          });
          if(response.success){
            navigate("/")
          }
          console.log(response, "response");
        } catch (error) {
          console.log(error, "error in submit user");
        }
      };
  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-gray-100 p-4 md:rounded-2xl md:p-8 dark:bg-black mt-5">
      <h2 className="text-xl font-bold text-center text-neutral-800 dark:text-neutral-200">
        Welcome to Formly
      </h2>

      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
       
        <LabelInputContainer className="mb-4">
          <Label htmlFor="emailId">Email Address</Label>
          <Controller
            name="emailId"
            control={control}
            render={({ field }) => (
              <Input
                id="emailId"
                placeholder="projectmayhem@fc.com"
                type="email"
                {...field}
                onBlur={() => trigger("emailId")}
                className={cn({ "border-red-500": errors.emailId })}
              />
            )}
          />
          {errors.emailId && (
            <p className="text-red-500 text-sm mt-1">
              {errors.emailId.message}
            </p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                {...field}
                onBlur={() => trigger("password")}
                className={cn({ "border-red-500": errors.password })}
              />
            )}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </LabelInputContainer>

        <button
          className={cn(
            "group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] cursor-pointer",
            { "opacity-50 cursor-not-allowed": !isValid } // Disable if invalid
          )}
          type="submit"
          disabled={!isValid} // Disable button until form is valid
        >
          Sign in &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        <p className="mt-2 max-w-sm text-sm text-center text-neutral-600 dark:text-neutral-300">
          New User? Click {" "}
          <span className="text-blue-500 underline cursor-pointer">Here</span> to register
        </p>
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};


export default Login;
