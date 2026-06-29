"use client";

import React from "react";

interface TextInputProps {
  name: string;
  label?: React.ReactNode;
  placeholder?: string;
  type?: string;
  requiredIndicator?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  disabled?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  placeholder,
  type = "text",
  requiredIndicator,
  startAdornment,
  endAdornment,
  value,
  onChange,
  errorMessage,
  disabled = false,
}) => {
  return (
    <div className="w-full relative">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium mb-1 text-[#344054] dark:text-darkModeText"
        >
          {label}{" "}
          {requiredIndicator && <span className="text-primaryColor">*</span>}
        </label>
      )}

      <div
        className={`relative flex items-center border bg-white h-[2.5rem] rounded-lg shadow-sm sm:text-sm w-full
           ring-offset-1 ring-offset-transparent
          ${errorMessage ? "border-red-500" : "border-[#D0D5DD] dark:border-darkModeStroke focus-within:ring-1 ring-primaryColor"}
        `}
        onClick={(e) => {
          const input = e.currentTarget.querySelector("input");
          input?.focus();
        }}
      >
        {startAdornment && (
          <span className="h-full flex items-center pl-3 text-[#667085] dark:text-darkModeText">
            {startAdornment}
          </span>
        )}

        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          autoComplete="off"
          className="w-full h-full px-3 pl-2 text-sm outline-none overflow-hidden rounded-md bg-white dark:bg-transparent placeholder:text-[#667085]"
        />

        {endAdornment && (
          <span className="h-full flex items-center pr-3 text-[#667085]">
            {endAdornment}
          </span>
        )}
      </div>

      {errorMessage && (
        <p className="mt-1 text-xs font-semibold text-red-500">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default TextInput;
