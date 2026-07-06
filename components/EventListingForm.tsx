"use client";

import React, { useState, useRef, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { uploadFileToPresignedUrl } from "@/lib/uploadFile";
import { useGooglePlaces } from "@/lib/hooks/useGooglePlaces";
import FormTextInput from "@/components/ui/forms/FormTextInput";
import FormTextArea from "@/components/ui/forms/FormTextArea";
import FormDropdown from "@/components/ui/forms/FormDropdown";
import { toast } from "sonner";
import { Upload, X, Loader2 } from "lucide-react";
import Image from "next/image";

const eventCategories = [
  { label: "Concert", value: "concert" },
  { label: "Networking", value: "networking" },
  { label: "Party", value: "party" },
  { label: "Art & Culture", value: "art-culture" },
  { label: "Festival", value: "festival" },
  { label: "Sports", value: "sports" },
  { label: "Conference", value: "conference" },
  { label: "Workshop", value: "workshop" },
  { label: "Food & Drink", value: "food-drink" },
  { label: "Comedy", value: "comedy" },
  { label: "Other", value: "other" },
];

const ticketTypes = [
  { label: "Free Event", value: "free" },
  { label: "Paid Event", value: "paid" },
];

const ALLOWED_IMAGE_TYPES = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

const eventListingSchema = z.object({
  eventName: z.string().min(1, "Event name is required"),
  eventCategory: z.string().min(1, "Event category is required"),
  eventDate: z.string().min(1, "Event start date is required").refine(
    (val) => new Date(val) >= new Date(new Date().toDateString()),
    "Event start date cannot be in the past"
  ),
  eventTime: z.string().min(1, "Event start time is required"),
  endDate: z.string().min(1, "Event end date is required"),
  endTime: z.string().min(1, "Event end time is required"),
  venueName: z.string().min(1, "Venue name is required"),
  location: z.string().min(1, "Location is required"),
  cityState: z.string().min(1, "City/State is required"),
  description: z.string().min(1, "Description is required"),
  organizerName: z.string().min(1, "Organizer name is required"),
  contactPerson: z.string().min(1, "Contact person is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  emailAddress: z.email("Invalid email address"),
  ticketType: z.string().min(1, "Ticket type is required"),
  confirmation: z.literal(true, {
    error: "You must confirm the information is accurate",
  }),
}).refine(
  (data) => {
    if (data.eventDate && data.endDate && data.eventTime && data.endTime) {
      const start = new Date(`${data.eventDate}T${data.eventTime}`);
      const end = new Date(`${data.endDate}T${data.endTime}`);
      return end > start;
    }
    return true;
  },
  {
    message: "End date/time must be after start date/time",
    path: ["endDate"],
  }
);

type EventListingFormData = z.infer<typeof eventListingSchema>;

const EventListingForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [flyerFiles, setFlyerFiles] = useState<File[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [parkingFiles, setParkingFiles] = useState<File[]>([]);
  const [fashionFiles, setFashionFiles] = useState<File[]>([]);
  const [locationInput, setLocationInput] = useState("");
  const [showPredictions, setShowPredictions] = useState(false);

  const flyerInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const parkingInputRef = useRef<HTMLInputElement>(null);
  const fashionInputRef = useRef<HTMLInputElement>(null);
  const predictionsRef = useRef<HTMLDivElement>(null);

  const { predictions, isLoading: isLoadingPlaces } = useGooglePlaces(locationInput);

  const methods = useForm<EventListingFormData>({
    resolver: zodResolver(eventListingSchema),
    defaultValues: {
      eventName: "",
      eventCategory: "",
      eventDate: "",
      eventTime: "",
      endDate: "",
      endTime: "",
      venueName: "",
      location: "",
      cityState: "",
      description: "",
      organizerName: "",
      contactPerson: "",
      phoneNumber: "",
      emailAddress: "",
      ticketType: "",
      confirmation: undefined,
    },
  });

  const { handleSubmit, watch, setValue, formState: { errors } } = methods;

  const ticketTypeValue = watch("ticketType");
  const eventCategoryValue = watch("eventCategory");

  // Close predictions on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (predictionsRef.current && !predictionsRef.current.contains(e.target as Node)) {
        setShowPredictions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFlyerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      if (!ALLOWED_IMAGE_TYPES.includes(files[0].type)) {
        toast.error("Only PNG, JPEG, and WebP images are allowed");
        e.target.value = "";
        return;
      }
      setFlyerFiles([files[0]]);
    }
    e.target.value = "";
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const valid = Array.from(files).filter((f) => {
        if (!ALLOWED_IMAGE_TYPES.includes(f.type)) {
          toast.error(`${f.name} is not a supported image format`);
          return false;
        }
        return true;
      });
      setImageFiles((prev) => [...prev, ...valid]);
    }
    e.target.value = "";
  };

  const handleParkingUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const valid = Array.from(files).filter((f) => {
        if (!ALLOWED_IMAGE_TYPES.includes(f.type)) {
          toast.error(`${f.name} is not a supported image format`);
          return false;
        }
        return true;
      });
      setParkingFiles((prev) => [...prev, ...valid]);
    }
    e.target.value = "";
  };

  const handleFashionUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const valid = Array.from(files).filter((f) => {
        if (!ALLOWED_IMAGE_TYPES.includes(f.type)) {
          toast.error(`${f.name} is not a supported image format`);
          return false;
        }
        return true;
      });
      setFashionFiles((prev) => [...prev, ...valid]);
    }
    e.target.value = "";
  };

  const removeFlyerFile = (index: number) => {
    setFlyerFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const removeImageFile = (index: number) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const removeParkingFile = (index: number) => {
    setParkingFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const removeFashionFile = (index: number) => {
    setFashionFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleLocationSelect = (description: string) => {
    setLocationInput(description);
    setValue("location", description, { shouldValidate: true });
    setShowPredictions(false);
  };

  const onSubmit = async (data: EventListingFormData) => {
    if (flyerFiles.length === 0) {
      toast.error("Please upload event flyer");
      return;
    }
    if (imageFiles.length === 0) {
      toast.error("Please upload at least one event image");
      return;
    }

    setIsSubmitting(true);

    try {
      // Upload flyers
      const flyerUrls = await Promise.all(
        flyerFiles.map((file) =>
          uploadFileToPresignedUrl({
            file,
            category: "events",
            categoryId: "event-submissions",
          })
        )
      );

      // Upload images
      const imageUrls = await Promise.all(
        imageFiles.map((file) =>
          uploadFileToPresignedUrl({
            file,
            category: "events",
            categoryId: "event-submissions",
          })
        )
      );

      // Upload parking advisory images
      const parkingUrls = await Promise.all(
        parkingFiles.map((file) =>
          uploadFileToPresignedUrl({
            file,
            category: "events",
            categoryId: "event-submissions",
          })
        )
      );

      // Upload fashion advisory images
      const fashionUrls = await Promise.all(
        fashionFiles.map((file) =>
          uploadFileToPresignedUrl({
            file,
            category: "events",
            categoryId: "event-submissions",
          })
        )
      );

      // Save to Firestore
      await addDoc(collection(db, "event-submissions"), {
        eventName: data.eventName,
        eventCategory: data.eventCategory,
        eventDate: data.eventDate,
        eventTime: data.eventTime,
        endDate: data.endDate,
        endTime: data.endTime,
        venueName: data.venueName,
        location: data.location,
        cityState: data.cityState,
        description: data.description,
        organizerName: data.organizerName,
        contactPerson: data.contactPerson,
        phoneNumber: data.phoneNumber,
        emailAddress: data.emailAddress,
        ticketType: data.ticketType,
        flyerUrls,
        imageUrls,
        parkingAdvisoryUrls: parkingUrls,
        fashionAdvisoryUrls: fashionUrls,
        createdAt: serverTimestamp(),
      });

      toast.success("Event submitted successfully!");
      methods.reset();
      setFlyerFiles([]);
      setImageFiles([]);
      setParkingFiles([]);
      setFashionFiles([]);
      setLocationInput("");
      onSuccess?.();
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to submit event. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-6 pt-10 pb-24 md:px-10 md:pb-10">
      <div className="text-center mb-10">
        <span className="p-1 px-3 bg-[#D6E9F5] rounded-xl text-xs font-medium text-[#005A8D] inline-block mb-5">
          EMBER TO REMEMBER 2026
        </span>
        <h2 className="text-3xl font-bold text-[#005A8D] inter mb-5">
          Event Listing Form
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-sm">
          Want your event featured on MyCityApp Africa and included in the Ember to Remember campaign?
          Complete the form below.
        </p>
      </div>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Event Details */}
          <section className="space-y-5">
            <h3 className="text-xl font-semibold text-[#005A8D] inter border-b border-[#DCEAF3] pb-2">
              Event Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-6">
              <FormTextInput
                name="eventName"
                label="Event Name"
                placeholder="Enter event name"
                requiredIndicator
              />

              <FormDropdown
                name="eventCategory"
                label="Event Category"
                options={eventCategories}
                value={eventCategoryValue}
                placeholder="Select category"
                requiredIndicator
              />

              <FormTextInput
                name="eventDate"
                label="Event Start Date"
                type="date"
                placeholder="Select start date"
                requiredIndicator
              />

              <FormTextInput
                name="eventTime"
                label="Event Start Time"
                type="time"
                placeholder="Select start time"
                requiredIndicator
              />

              <FormTextInput
                name="endDate"
                label="Event End Date"
                type="date"
                placeholder="Select end date"
                requiredIndicator
              />

              <FormTextInput
                name="endTime"
                label="Event End Time"
                type="time"
                placeholder="Select end time"
                requiredIndicator
              />

              <FormTextInput
                name="venueName"
                label="Venue Name"
                placeholder="Enter venue name"
                requiredIndicator
              />

              <FormTextInput
                name="cityState"
                label="City/District"
                placeholder="e.g Ikoyi, Gaborone"
                requiredIndicator
              />
            </div>

            {/* Location with Google Places Autocomplete */}
              <div className="relative" ref={predictionsRef}>
                <label className="block text-sm font-medium mb-1">
                  Location <span className="text-primaryColor">*</span>
                </label>
                <div
                  className={`relative flex items-center border h-[2.8rem] rounded-md shadow-sm sm:text-sm w-full ring-offset-1 ring-offset-transparent ${
                    errors.location
                      ? "border-red-500"
                      : "border-[#CCCFCE] focus-within:ring-2 focus:border-none ring-primaryColor"
                  }`}
                >
                  <input
                    type="text"
                    value={locationInput}
                    onChange={(e) => {
                      setLocationInput(e.target.value);
                      setValue("location", e.target.value);
                      setShowPredictions(true);
                    }}
                    onFocus={() => setShowPredictions(true)}
                    placeholder="Search location"
                    className="w-full h-full px-3 outline-none overflow-hidden rounded-md bg-white text-sm placeholder:text-[#667085]"
                  />
                  {isLoadingPlaces && (
                    <span className="pr-3">
                      <Loader2 size={16} className="animate-spin text-gray-400" />
                    </span>
                  )}
                </div>
                {errors.location && (
                  <p className="mt-1 text-xs font-semibold text-red-500">
                    {errors.location.message}
                  </p>
                )}

                {showPredictions && locationInput.trim() && !isLoadingPlaces && predictions.length === 0 && (
                  <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg p-3">
                    <p className="text-sm text-gray-500 text-center">No results found</p>
                  </div>
                )}

                {showPredictions && predictions.length > 0 && (
                  <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-48 overflow-y-auto">
                    {predictions.map((prediction) => (
                      <button
                        key={prediction.place_id}
                        type="button"
                        onClick={() => handleLocationSelect(prediction.description)}
                        className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                      >
                        {prediction.description}
                      </button>
                    ))}
                  </div>
                )}
              </div>
          </section>

          {/* About the Event */}
          <section className="space-y-4 mt-10">
            <h3 className="text-xl font-semibold text-[#005A8D] inter border-b border-[#DCEAF3] pb-2">
              About the Event
            </h3>
            <FormTextArea
              name="description"
              label="Brief Description"
              placeholder="What should people know about your event?"
              requiredIndicator
              rows={6}
            />
          </section>

          {/* Organizer Information */}
          <section className="space-y-4 mt-10">
            <h3 className="text-xl font-semibold text-[#005A8D] inter border-b border-[#DCEAF3] pb-2">
              Organizer Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-6">
              <FormTextInput
                name="organizerName"
                label="Organizer/Company Name"
                placeholder="Enter organizer name"
                requiredIndicator
              />
              <FormTextInput
                name="contactPerson"
                label="Contact Person"
                placeholder="Enter contact person name"
                requiredIndicator
              />
              <FormTextInput
                name="phoneNumber"
                label="Phone Number"
                placeholder="Enter phone number"
                type="tel"
                requiredIndicator
              />
              <FormTextInput
                name="emailAddress"
                label="Email Address"
                placeholder="Enter email address"
                type="email"
                requiredIndicator
              />
            </div>
          </section>

          {/* Ticket Information */}
          <section className="space-y-4 mt-10">
            <h3 className="text-xl font-semibold text-[#005A8D] inter border-b border-[#DCEAF3] pb-2">
              Ticket Information
            </h3>
            <FormDropdown
              name="ticketType"
              label="Ticket Type"
              options={ticketTypes}
              value={ticketTypeValue}
              placeholder="Select ticket type"
              requiredIndicator
            />
          </section>

          {/* Promotional Materials */}
          <section className="space-y-4 mt-10">
            <h3 className="text-xl font-semibold text-[#005A8D] inter border-b border-[#DCEAF3] pb-2">
              Promotional Materials
            </h3>

            {/* Event Flyer Upload - 3:4 aspect ratio */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Event Flyer <span className="text-primaryColor">*</span>
                <span className="text-xs text-gray-400 ml-1">(3:4 ratio)</span>
              </label>
              <div
                onClick={() => flyerInputRef.current?.click()}
                className="border-2 border-dashed border-[#CCCFCE] rounded-lg p-6 text-center cursor-pointer hover:border-[#005A8D] transition-colors"
              >
                <Upload size={24} className="mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Click to upload event flyer</p>
                <p className="text-xs text-gray-400 mt-1">PNG, JPEG, WebP up to 10MB</p>
              </div>
              <input
                ref={flyerInputRef}
                type="file"
                accept="image/png,image/jpeg,image/jpg,image/webp"
                onChange={handleFlyerUpload}
                className="hidden"
              />
              {flyerFiles.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-3">
                  {flyerFiles.map((file, idx) => (
                    <div key={idx} className="relative group">
                      {file.type.startsWith("image/") ? (
                        <div className="w-[60px] aspect-[3/4] relative rounded-lg border overflow-hidden">
                          <Image
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-[60px] aspect-[3/4] rounded-lg border flex items-center justify-center bg-gray-50">
                          <p className="text-[10px] text-gray-500 text-center px-1 truncate">
                            {file.name}
                          </p>
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={() => removeFlyerFile(idx)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 md:opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Event Images Upload - 9:10 aspect ratio */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Event Images <span className="text-primaryColor">*</span>
                <span className="text-xs text-gray-400 ml-1">(9:10 ratio)</span>
              </label>
              <div
                onClick={() => imageInputRef.current?.click()}
                className="border-2 border-dashed border-[#CCCFCE] rounded-lg p-6 text-center cursor-pointer hover:border-[#005A8D] transition-colors"
              >
                <Upload size={24} className="mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Click to upload event images</p>
                <p className="text-xs text-gray-400 mt-1">PNG, JPEG, WebP up to 10MB</p>
              </div>
              <input
                ref={imageInputRef}
                type="file"
                accept="image/png,image/jpeg,image/jpg,image/webp"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
              {imageFiles.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-3">
                  {imageFiles.map((file, idx) => (
                    <div key={idx} className="relative group">
                      <div className="w-[63px] aspect-[9/10] relative rounded-lg border overflow-hidden">
                        <Image
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => removeImageFile(idx)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 md:opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Event Parking Advisory Upload - 9:10 aspect ratio */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Parking Advisory
                <span className="text-xs text-gray-400 ml-1">(9:10 ratio, optional)</span>
              </label>
              <div
                onClick={() => parkingInputRef.current?.click()}
                className="border-2 border-dashed border-[#CCCFCE] rounded-lg p-6 text-center cursor-pointer hover:border-[#005A8D] transition-colors"
              >
                <Upload size={24} className="mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Click to upload parking advisory images</p>
                <p className="text-xs text-gray-400 mt-1">PNG, JPEG, WebP up to 10MB</p>
              </div>
              <input
                ref={parkingInputRef}
                type="file"
                accept="image/png,image/jpeg,image/jpg,image/webp"
                multiple
                onChange={handleParkingUpload}
                className="hidden"
              />
              {parkingFiles.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-3">
                  {parkingFiles.map((file, idx) => (
                    <div key={idx} className="relative group">
                      <div className="w-[63px] aspect-[9/10] relative rounded-lg border overflow-hidden">
                        <Image
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => removeParkingFile(idx)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 md:opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Fashion Advisory Upload - 9:10 aspect ratio */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Fashion Advisory
                <span className="text-xs text-gray-400 ml-1">(9:10 ratio, optional)</span>
              </label>
              <div
                onClick={() => fashionInputRef.current?.click()}
                className="border-2 border-dashed border-[#CCCFCE] rounded-lg p-6 text-center cursor-pointer hover:border-[#005A8D] transition-colors"
              >
                <Upload size={24} className="mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Click to upload fashion advisory images</p>
                <p className="text-xs text-gray-400 mt-1">PNG, JPEG, WebP up to 10MB</p>
              </div>
              <input
                ref={fashionInputRef}
                type="file"
                accept="image/png,image/jpeg,image/jpg,image/webp"
                multiple
                onChange={handleFashionUpload}
                className="hidden"
              />
              {fashionFiles.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-3">
                  {fashionFiles.map((file, idx) => (
                    <div key={idx} className="relative group">
                      <div className="w-[63px] aspect-[9/10] relative rounded-lg border overflow-hidden">
                        <Image
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFashionFile(idx)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 md:opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Confirmation */}
          <section className="space-y-4">
            <div className="flex items-start gap-3 mt-10">
              <input
                type="checkbox"
                id="confirmation"
                {...methods.register("confirmation")}
                className="mt-1 h-4 w-4 rounded border-gray-300 accent-[#005A8D] cursor-pointer"
              />
              <label htmlFor="confirmation" className="text-sm text-gray-700 cursor-pointer">
                I confirm that the information provided is accurate and I authorize MyCityApp Africa
                Botswana to promote this event as part of the Ember to Remember campaign.
              </label>
            </div>
            {errors.confirmation && (
              <p className="text-xs font-semibold text-red-500">
                {errors.confirmation.message}
              </p>
            )}
          </section>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#005A8D] text-white font-semibold py-3.5 rounded-full hover:bg-[#003F63] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-10"
          >
            {isSubmitting && <Loader2 size={18} className="animate-spin" />}
            {isSubmitting ? "Submitting..." : "Submit Event"}
          </button>

          <p className="text-center text-sm text-gray-500">
            Submit your event and let Botswana discover it.
          </p>
        </form>
      </FormProvider>
    </div>
  );
};

export default EventListingForm;
