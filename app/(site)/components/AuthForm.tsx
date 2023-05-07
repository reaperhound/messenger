'use client';

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import { useCallback, useState } from "react";
import { useForm , FieldValues, SubmitHandler } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs"

type Variant = 'LOGIN' | 'REGISTER'

export default function AuthForm() {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [loading, setLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    variant === "LOGIN" 
      ? setVariant("REGISTER")
      : setVariant("LOGIN")
  },[variant])

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true)

    if(variant === "REGISTER") {
      // Axios register
    }

    if(variant === "LOGIN") {
      // NextAuth Signin
    }
  }

  const socialActions = (action: string) => {
    setLoading(true);

    // NextAuth social signIn
  }

  return (
    <div
      className="mt-8 sm:mx-auto sm:w-full sm:max-w-md "
    >
      <div
        className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10"
      >
        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {variant === "REGISTER" && (
            <Input 
              id="name" 
              label="Name" 
              disabled={loading}
              register={register} 
              errors={errors}
            />
          )}
          <Input 
              id="email" 
              label="Email" 
              type="email"
              disabled={loading}
              register={register} 
              errors={errors}
            />
            <Input 
              id="password" 
              label="Password" 
              type="password"
              disabled={loading}
              register={register} 
              errors={errors}
            />
            <div>
              <Button
                disabled={loading}
                fullWidth
                type="submit"
              >
                {variant === "REGISTER" ? "Register" : "Sign In"}
              </Button>
            </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center "
            >
              <div className=" w-full border-t border-gray-300 " />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                or continue with
              </span>
            </div>
          </div>

            <div className="mt-6 flex gap-2">
              <AuthSocialButton 
                icon={BsGithub} 
                onClick={() => socialActions('github')}
              />

              <AuthSocialButton
                icon={BsGoogle}
                onClick={() => socialActions('google')}
              />
            </div>

            <div className="
              flex gap-2 justify-center text-sm mt-6
              px-2 text-gray-500
            ">
              <div>
                {variant === "LOGIN" ? "New to messenger ?": "Already have an account"}
              </div>
              <div
                onClick={toggleVariant}
                className="underline cursor-pointer"
              >
                {variant === "LOGIN" ? 'Create an account' : "Login"}
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}