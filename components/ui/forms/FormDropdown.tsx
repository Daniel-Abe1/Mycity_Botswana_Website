"use client";
import useClickOutside from "@/lib/hooks/useClickOutside";
import { CheckIcon, ChevronDown } from "lucide-react";
import React, { useRef, useState } from "react";
import { useFormContext, get } from "react-hook-form";

interface FormDropdownProps {
  name: string;
  label?: string;
  options: { label: string; value: string | number }[];
  placeholder?: string;
  value: string | number;
  className?: string;
  requiredIndicator?: boolean;
  disabled?: boolean;
}

const FormDropdown: React.FC<FormDropdownProps> = ({
  name,
  label,
  value,
  options,
  placeholder,
  requiredIndicator,
  className,
  disabled,
}) => {
  const {
    register,
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext();

  const [isOpen, setIsOpen] = useState(false);
  const [openUpward, setOpenUpward] = useState(false);

  const dropdown = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useClickOutside(dropdown, () => setIsOpen(false));

  const handleToggle = () => {
    if (disabled) return;

    if (!isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const estimatedHeight = Math.min(options.length * 40, 240); // ~40px per item, capped at 240px
      setOpenUpward(spaceBelow < estimatedHeight);
    }

    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string | number) => {
    setValue(name, option, { shouldTouch: true });
    setIsOpen(false);
    trigger(name);
  };

  const errorMessage = get(errors, name)?.message as string | undefined;

  const selectedValue =
    options.find((option) => option.value === value)?.label ?? "";

  return (
    <div className={`relative w-full ${className ?? ""}`} ref={dropdown}>
      {label && (
        <label htmlFor={name} className="block text-sm text-[#292929] font-medium mb-1">
          {label}{" "}
          {requiredIndicator && <span className="text-primaryColor">*</span>}
        </label>
      )}

      <button
        {...register(name)}
        type="button"
        ref={buttonRef}
        onClick={handleToggle}
        disabled={disabled}
        className="flex h-[2.6rem] outline-none gap-3 items-center w-full px-3 border border-[#D0D5DD] 
        dark:border-darkModeStroke ring-offset-1 ring-offset-transparent focus:ring-2
        ring-primaryColor rounded-lg shadow-sm sm:text-sm cursor-pointer disabled:opacity-50"
      >
        <span className="whitespace-nowrap overflow-hidden text-sm">
          {selectedValue || placeholder}
        </span>
        <ChevronDown
          size={15}
          className={`duration-100 shrink-0 ease-in-out ml-auto ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className={`absolute min-w-full whitespace-nowrap max-h-60 overflow-auto text-sm
          bg-white dark:bg-darkModeBg border border-[#D0D5DD] dark:border-darkModeStroke
          rounded-md shadow-lg z-400 
          ${openUpward ? "bottom-[80%] mb-1" : "top-full mt-1"}`}
        >
          {options.length ? (
            options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                className={`flex items-center w-full px-3 py-2 cursor-pointer justify-between hover:bg-primaryColor/10
                ${value === option.value ? "bg-primaryColor/10" : ""}`}
              >
                {option.label}
                {value === option.value && (
                  <span className="text-primaryColor">
                    <CheckIcon size={17} />
                  </span>
                )}
              </button>
            ))
          ) : (
            <p className="p-3">No options found</p>
          )}
        </div>
      )}

      {errorMessage && (
        <p className="mt-1 text-xs font-semibold text-red-500">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default FormDropdown;
