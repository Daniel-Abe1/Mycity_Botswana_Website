"use client";
import React from "react";
import { useFormContext, get } from "react-hook-form";

interface FormTextAreaProps {
  name: string;
  label?: React.ReactNode;
  placeholder?: string;
  type?: string;
  requiredIndicator?: boolean;
  rows?: number;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({
  name,
  label,
  placeholder,
  requiredIndicator,
  rows = 6,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // Access the form context

  // Get the error message for the field
  const errorMessage = get(errors, name)?.message as string | undefined;

  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="flex gap-1 font-medium text-[#292929] text-sm mb-1"
        >
          {label}{" "}
          {requiredIndicator && <span className="text-primaryColor">*</span>}
        </label>
      )}
      <textarea
        {...register(name)}
        rows={rows}
        placeholder={placeholder}
        className={`relative flex items-center placeholder:text-[#657171] border p-3 rounded-md shadow-sm sm:text-sm w-full outline-none
           ring-offset-1 ring-offset-transparent ${errorMessage ? "border-red-500" : "border-[#CCCFCE] dark:border-darkModeStroke focus-within:ring-2 ring-primaryColor"}
        `}
      />
      {errorMessage && (
        <p className="text-xs font-semibold text-red-500">
          {errorMessage ?? ""}
        </p>
      )}
    </div>
  );
};

export default FormTextArea;
