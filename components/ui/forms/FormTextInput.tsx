"use client";

import React from "react";
import { useFormContext, get } from "react-hook-form";

interface FormTextInputProps {
  name: string;
  label?: React.ReactNode;
  placeholder?: string;
  type?: string;
  requiredIndicator?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  showError?: boolean;
  disabled?: boolean;
}

const FormTextInput: React.FC<FormTextInputProps> = ({
  name,
  label,
  placeholder,
  requiredIndicator,
  type = "text",
  startAdornment,
  disabled = false,
  endAdornment,
  showError = true,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = get(errors, name)?.message as string | undefined;

  return (
    <div className="w-full relative">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm text-[#292929] font-medium mb-1"
        >
          {label}{" "}
          {requiredIndicator && <span className="text-primaryColor">*</span>}
        </label>
      )}

      <div
        aria-disabled={disabled}
        className={`relative flex items-center border h-[2.8rem] rounded-md shadow-sm sm:text-sm w-full
           ring-offset-1 ring-offset-transparent  aria-disabled:opacity-50
          ${errorMessage && showError ? "border-red-500" : "border-[#CCCFCE] focus-within:ring-2 focus:border-none ring-primaryColor"}
        `}
        onClick={(e) => {
          if (!disabled) {
            const input = e.currentTarget.querySelector("input");
            input?.focus();
          }
        }}
      >
        {startAdornment && (
          <span className="h-full flex items-center pl-3 ">
            {startAdornment}
          </span>
        )}

        <input
          type={type}
          id={name}
          {...register(name)}
          disabled={disabled}
          placeholder={placeholder}
          className="w-full h-full px-3 outline-none overflow-hidden rounded-md bg-white text-sm placeholder:text-[#657171]"
        />

        {endAdornment && (
          <span className="h-full flex items-center pr-3">{endAdornment}</span>
        )}
      </div>

      {errorMessage && showError && (
        <p className="mt-1 text-xs font-semibold text-red-500">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default FormTextInput;
