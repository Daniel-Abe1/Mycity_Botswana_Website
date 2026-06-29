"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import EventListingForm from "./EventListingForm";

interface EventListingFormModalProps {
  onClose: () => void;
}

const EventListingFormModal = ({ onClose }: EventListingFormModalProps) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[999] flex items-start justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-3xl max-h-[100dvh] overflow-y-auto bg-white rounded-2xl shadow-2xl md:max-h-[90dvh] md:mt-[5dvh] md:mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 mt-4 z-20 bg-white border border-gray-200 rounded-full p-2 hover:bg-gray-100 transition-colors cursor-pointer shadow-sm"
          aria-label="Close form"
        >
          <X size={20} />
        </button>

        <EventListingForm onSuccess={onClose} />
      </div>
    </div>
  );
};

export default EventListingFormModal;
