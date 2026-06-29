"use client";
import useClickOutside from "@/lib/hooks/useClickOutside";
import { CheckIcon, ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface CustomDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: { label: React.ReactNode; value: string }[];
  label?: string;
  placeholder?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  value,
  onChange,
  options,
  label,
  placeholder = "Select",
  className,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdown = useRef<HTMLDivElement | null>(null);
  useClickOutside(dropdown, () => setIsOpen(false));
  const [x, setX] = useState<number>(0);

  useEffect(() => {
    const updateXPosition = () => {
      const rect = dropdown.current?.getBoundingClientRect();
      if (rect) {
        setX(rect.left);
      }
    };

    updateXPosition();
    window.addEventListener("resize", updateXPosition);
    return () => window.removeEventListener("resize", updateXPosition);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (selectedValue: string) => {
    if (selectedValue === value) {
      onChange("");
    } else {
      onChange(selectedValue);
    }

    setIsOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="relative min-w-[120px] w-full" ref={dropdown}>
      {label && (
        <label
          htmlFor={label}
          className="block text-sm font-semibold mb-1 text-[#344054] dark:text-darkModeText  "
        >
          {label}
        </label>
      )}

      <button
        className={twMerge(
          `flex text-[#667085] dark:text-darkModeText border border-[#D0D5DD] dark:border-darkModeStroke justify-between gap-3 items-center w-full px-3 py-2 ring-offset-1 ring-offset-transparent rounded-md shadow-sm sm:text-sm cursor-pointer disabled:opacity-30`,
          `${className}`,
        )}
        onClick={handleToggle}
        disabled={disabled}
        type="button"
      >
        <span className="whitespace-nowrap line-clamp-1">
          {value
            ? options.find((item) => item.value === value)?.label
            : placeholder}{" "}
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
          className={`absolute mt-1 w-full min-w-fit max-h-60 overflow-auto text-sm
         bg-white dark:bg-darkModeBg border border-defaultStroke dark:border-darkModeStroke rounded-md shadow-lg z-400 ${
           x > window.innerWidth / 2 ? "right-0" : "left-0"
         }`}
        >
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className={`flex items-center justify-between px-3 whitespace-nowrap gap-4 py-2 cursor-pointer hover:bg-primaryColor/10
              ${value === option.value ? "bg-primaryColor/10" : ""}`}
            >
              {option.label}
              {value === option.value && (
                <span className="mr-2 text-primaryColor ">
                  <CheckIcon size={16} />
                </span>
              )}
            </button>
          ))}
          {!options.length && (
            <p className="px-3 py-2 whitespace-nowrap">No options found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
