"use client";

import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const BotswanaTermsPage = () => {
  return (
    <div>
      <MaxWidthWrapper className="mt-12 lg:mt-40 flex max-w-5xl flex-col gap-1 mb-6">
        <span className="tracking-wide text-xs text-[#607D8E]">LEGAL</span>
        <h1 className="text-[2.5rem] font-black text-[#111111] leading-14">
          Terms &amp; Conditions - CityApp Africa
        </h1>
        <span className="text-[#607D8E]">Last updated: June 2026</span>
      </MaxWidthWrapper>

      {/* Content */}
      <MaxWidthWrapper className="max-w-5xl">
        <div className="pb-16 prose prose-neutral">
          <p className="text-gray-700 leading-relaxed">
            These Terms and Conditions form part of the CityApp Africa Complete
            Legal Pack and govern your access to and use of the App.
          </p>

          {/* Table of Contents */}
          <div className="my-8 p-6 bg-[#F1F7FB66] rounded-xl border border-[#DCEAF3]">
            <h2 className="font-semibold tracking-widest text-[#111111] mb-3 uppercase">
              Table of Contents
            </h2>
            <ol className="list-decimal list-inside space-y-1 text-[#111111] text-sm grid grid-cols-2 gap-1">
              <li>
                <a href="#introduction" className="hover:underline">
                  Introduction
                </a>
              </li>
              <li>
                <a href="#definitions" className="hover:underline">
                  Definitions
                </a>
              </li>
              <li>
                <a href="#eligibility" className="hover:underline">
                  Eligibility
                </a>
              </li>
              <li>
                <a href="#account-registration" className="hover:underline">
                  Account Registration
                </a>
              </li>
              <li>
                <a href="#acceptable-use" className="hover:underline">
                  Acceptable Use Policy
                </a>
              </li>
              <li>
                <a href="#intellectual-property" className="hover:underline">
                  Intellectual Property
                </a>
              </li>
              <li>
                <a href="#third-party" className="hover:underline">
                  Third-Party Listings
                </a>
              </li>
              <li>
                <a href="#service-availability" className="hover:underline">
                  Service Availability
                </a>
              </li>
              <li>
                <a href="#limitation-of-liability" className="hover:underline">
                  Limitation of Liability
                </a>
              </li>
              <li>
                <a href="#termination" className="hover:underline">
                  Termination
                </a>
              </li>
              <li>
                <a href="#governing-law" className="hover:underline">
                  Governing Law
                </a>
              </li>
            </ol>
          </div>

          {/* Section 1 */}
          <section id="introduction" className="mb-10">
            <h2 className="text-2xl font-bold text-[#111111] mb-3">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to CityApp Africa, a digital platform providing city
              information, tourism experiences, local businesses, events,
              accommodations, transportation services, attractions, and
              community engagement tools across Africa.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms and Conditions govern your access to and use of the
              App.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By downloading or using the App you agree to be legally bound by
              these Terms.
            </p>
          </section>

          {/* Section 2 */}
          <section id="definitions" className="mb-10">
            <h2 className="text-2xl font-bold text-[#111111] mb-3">
              2. Definitions
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm text-gray-700">
                <thead className="bg-[#111111] text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-medium">Term</th>
                    <th className="text-left px-4 py-3 font-medium">Meaning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium">App</td>
                    <td className="px-4 py-3">
                      CityApp Africa mobile application
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">User</td>
                    <td className="px-4 py-3">Any person accessing the App</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium">Operator</td>
                    <td className="px-4 py-3">
                      The company that owns or manages CityApp Africa
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Content</td>
                    <td className="px-4 py-3">
                      Information, listings, images, reviews, events,
                      attractions, businesses, and services available on the App
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section id="eligibility" className="mb-10">
            <h2 className="text-2xl font-bold text-[#111111] mb-3">
              3. Eligibility
            </h2>
            <ul className=" space-y-2 text-gray-700">
              <li>Users must be 18 years or older to register an account.</li>
              <li>
                Users under 18 may only use the App with parental or guardian
                supervision.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="account-registration" className="mb-10">
            <h2 className="text-2xl font-bold text-[#111111] mb-3">
              4. Account Registration
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Users may need to create an account to access certain services.
              Users must:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-4">
              <li>Provide accurate information</li>
              <li>Maintain confidentiality of login credentials</li>
              <li>Immediately report unauthorized account use</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The Operator may suspend accounts that violate these Terms.
            </p>
          </section>

          {/* Section 5 */}
          <section id="acceptable-use" className="mb-10">
            <h2 className="text-2xl font-bold text-[#111111] mb-3">
              5. Acceptable Use Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Users shall not:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-4">
              <li>Use the App for illegal activities</li>
              <li>Upload fraudulent or misleading information</li>
              <li>Harass other users</li>
              <li>Post offensive or inappropriate content</li>
              <li>Distribute malware or harmful software</li>
              <li>Attempt unauthorized system access</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Violation may result in termination of access.
            </p>
          </section>

          {/* Section 6 */}
          <section id="intellectual-property" className="mb-10">
            <h2 className="text-2xl font-bold text-[#111111] mb-3">
              6. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              All software, design, branding, logos, trademarks, and content are
              owned by CityApp Africa or its licensors.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Users may not copy, modify, reverse engineer, or reproduce any
              content without written consent.
            </p>
          </section>

          {/* Section 7 */}
          <section id="third-party" className="mb-10">
            <h2 className="text-2xl font-bold text-[#111111] mb-3">
              7. Third-Party Listings
            </h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              The App may display local businesses, tourist attractions,
              restaurants and accommodations, events and activities,
              advertisements, and public services.
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              The Operator does not guarantee accuracy, availability, or quality
              of third-party information.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Users engage with third parties at their own risk.
            </p>
          </section>

          {/* Section 8 */}
          <section id="service-availability" className="mb-10">
            <h2 className="text-2xl font-bold text-[#111111] mb-3">
              8. Service Availability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              The Operator may update the App, modify services, conduct
              maintenance, or restrict services temporarily without prior
              notice.
            </p>
          </section>

          {/* Section 9 */}
          <section id="limitation-of-liability" className="mb-10">
            <h2 className="text-2xl font-bold text-[#111111] mb-3">
              9. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              The App is provided &quot;as available.&quot; The Operator is not
              liable for:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700">
              <li>Data loss</li>
              <li>Service interruption</li>
              <li>Inaccuracies from third-party listings</li>
              <li>Booking or reservation issues with third parties</li>
              <li>Damages arising from reliance on information in the App</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section id="termination" className="mb-10">
            <h2 className="text-2xl font-bold text-[#111111] mb-3">
              10. Termination
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              The Operator may suspend or terminate accounts where users violate
              these Terms, illegal activity occurs, or security risks arise.
            </p>
          </section>

          {/* Section 11 */}
          <section id="governing-law" className="mb-10">
            <h2 className="text-2xl font-bold text-[#111111] mb-3">
              11. Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              These Terms shall be governed by the laws applicable in the
              jurisdiction where CityApp Africa operates or is incorporated.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Any disputes shall be resolved through the competent courts or
              dispute resolution mechanisms of that jurisdiction.
            </p>
          </section>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default BotswanaTermsPage;
