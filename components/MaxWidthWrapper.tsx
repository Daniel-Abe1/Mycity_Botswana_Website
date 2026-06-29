import { cn } from "@/lib/utils";
import React from "react";

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function MaxWidthWrapper({
  children,
  className = "",
  id,
}: MaxWidthWrapperProps) {
  const classNameMerge = cn("mx-auto max-w-[1325px]  px-3", className);
  return (
    <div id={id} className={classNameMerge}>
      {children}
    </div>
  );
}
