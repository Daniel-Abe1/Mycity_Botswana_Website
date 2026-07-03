"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import z from "zod";
import { toast } from "sonner";
import FormTextInput from "./ui/forms/FormTextInput";
import { Button } from "./ui/button";
import Image from "next/image";
import FormTextArea from "./ui/forms/FormTextArea";
import MaxWidthWrapper from "./MaxWidthWrapper";

const schema = z.object({
  email: z.email("Enter valid email address"),
  lastName: z.string().min(3, "Enter last name"),
  firstName: z.string().min(3, "Enter first name"),
  message: z.string().min(3, "Message must be at least 3 characters long"),
  privacy_policy: z.boolean(),
});

type ContactFormType = z.infer<typeof schema>;

const ContactUsForm = ({imageUrl}:{
  imageUrl?: string
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm<ContactFormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      privacy_policy: false,
    },
  });

  const onSubmit = async (values: ContactFormType) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append("access_key", process.env.NEXT_PUBLIC_FORMLY_ACCESS_KEY || "");
      formData.append("name", `${values.firstName} ${values.lastName}`);
      formData.append("email", values.email);
      formData.append("message", values.message);
      formData.append("subject", 'MyCity Website Submission - Contact Us');

      const response = await fetch("https://formly.email/submit", {
        method: "POST",
        body: formData,
      });

      if (response.status === 200 || response.ok) {
        toast.success("Message sent successfully!");
        methods.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MaxWidthWrapper className="max-w-[1500px] px-5 md:pl-5 xl:pl-16 flex flex-col-reverse md:grid md:grid-cols-[45%_1fr] gap-5 mb-4 md:mb-18">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 max-w-[550px] pt-10 pb-20"
        >
          <header className="flex flex-col gap-3 mb-5">
            <p className="font-semibold text-[#005A8D]">Contact us</p>
            <h4 className="text-4xl font-semibold mb-2">Still have questions?</h4>
            <p>
              We hoped the FAQs would help. Since they didn&apos;t, please fill
              this short form and we&apos;d give you special attention as
              quickly as possible.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-4 mb-3">
            <FormTextInput
              name="firstName"
              label="First Name"
              placeholder="First name"
            />
            <FormTextInput
              name="lastName"
              label="Last Name"
              placeholder="Last name"
            />
          </div>

          <div className="mb-3">
          <FormTextInput
            name="email"
            label="Email address"
            placeholder="yourname@mail.com"
          />
          </div>

          <div className="mb-1">
          <FormTextArea
            name="message"
            label="Message"
          />
          </div>

          {/* Privacy policy checkbox */}
          <label className="flex items-start gap-3 text-sm text-[#344054] mt-2">
            <input
              type="checkbox"
              {...methods.register("privacy_policy")}
              className="mt-1 w-4 h-4 accent-[#005A8D] cursor-pointer"
            />
            <span>
              You agree to our friendly{" "}
              <a href="/privacy-policy" className="text-[#005A8D] underline">
                privacy policy
              </a>
              .
            </span>
          </label>

          <Button
            type="submit"
            className="mt-4 w-full font-medium h-12 p-3 bg-[#005A8D] hover:bg-[#005A8D] text-white disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!methods.watch("privacy_policy") || isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </Button>
        </form>
      </FormProvider>

      <article className="w-full h-[400px] md:h-full relative">
        <Image
          src={imageUrl || "/img/contact.jpg"}
          fill
          className={`object-cover ${imageUrl ? '' : 'scale-x-[-1]'}`}
          alt=""
        />
      </article>
      </MaxWidthWrapper>
  );
};

export default ContactUsForm;
