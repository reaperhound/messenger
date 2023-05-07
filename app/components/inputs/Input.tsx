"use-client";

import { clsx } from "clsx"
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

export default function Input({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
}: InputProps) {
  return (
    <div>
      <label 
        htmlFor={id}
        className="
          block
          text-sm
          font-medium
          leading-6
          text-gray-900
        "
      >
        {label}
      </label>
      <div className="mt-2">
        <input  
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(`
            form-input block w-full rounded-md
            border-0 py-1.5 text-gray-500
            shadow-sm ring-1 ring-inset
            ring-gray-300 placeholder:text-gray-400
            focus:ring-2 focus:ring-sky-600
            sm:text-sm sm:leading-6`,
            errors[id] && `focus:ring-red-600`,
            disabled && `opacity-50 cursor-default`,
            // fullWidth && `w-full`,
            // secondary ? `text-gray-900` : `text-white`,
            // danger && `bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600`
            // !secondary && !danger && `bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600`
            )}
        />
      </div>
    </div>
  )
}
