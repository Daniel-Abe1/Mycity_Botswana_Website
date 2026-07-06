"use client";

import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const BotswanaPrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,#F7FAFC_0%,#FAFCFD_16rem,#FDFEFE_30rem,#FFFFFF_46rem)]">
      <MaxWidthWrapper className="pt-12 lg:pt-40 flex max-w-5xl flex-col gap-1 mb-6">
        <span className="tracking-wide text-xs text-[#607D8E]">LEGAL</span>
        <h1 className="text-[2.5rem] font-black text-[#111111] leading-14">
          Privacy Policy - CityApp Africa
        </h1>
        <span className="text-[#607D8E]">Last updated: June 2026</span>
      </MaxWidthWrapper>

      {/* Content */}
      <MaxWidthWrapper className="max-w-5xl">
        <div className="pb-16 prose prose-neutral">
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy forms part of the CityApp Africa Complete Legal Pack
            and explains how personal data is collected, used and protected for users
            of the App.
          </p>

          {/* Table of Contents */}
          <div className="my-8 p-6 bg-[#F1F7FB66] rounded-xl border border-[#DCEAF3]">
            <h2 className="font-semibold tracking-widest text-[#111111] mb-3 uppercase">
              Table of Contents
            </h2>
            <ol className="list-decimal list-inside space-y-1 text-[#111111] text-sm grid grid-cols-2 gap-1">
              <li><a href="#introduction" className="hover:underline">Introduction</a></li>
              <li><a href="#information-collected" className="hover:underline">Information Collected</a></li>
              <li><a href="#purpose-of-processing" className="hover:underline">Purpose of Data Processing</a></li>
              <li><a href="#lawful-basis" className="hover:underline">Lawful Basis for Processing</a></li>
              <li><a href="#data-sharing" className="hover:underline">Data Sharing</a></li>
              <li><a href="#data-security" className="hover:underline">Data Security</a></li>
              <li><a href="#user-rights" className="hover:underline">User Rights</a></li>
              <li><a href="#data-retention" className="hover:underline">Data Retention</a></li>
              <li><a href="#contact" className="hover:underline">Contact for Privacy Requests</a></li>
              <li><a href="#data-protection-notice" className="hover:underline">Data Protection Notice</a></li>
              <li><a href="#community-guidelines" className="hover:underline">Community Guidelines</a></li>
              <li><a href="#cookie-policy" className="hover:underline">Cookie &amp; Analytics Policy</a></li>
            </ol>
          </div>

          {/* Section 1 */}
          <section id="introduction" className="mb-10">
            <h2 className="text-2xl font-bold text-[#111111] mb-3">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              CityApp Africa respects user privacy and processes personal data in accordance with applicable
              data protection laws in the jurisdictions where it operates.
            </p>
          </section>

          {/* Section 2 */}
          <section id="information-collected" className="mb-10">
            <h2 className="text-2xl font-bold text-[#111111] mb-3">2. Information Collected</h2>

            <h3 className="font-semibold text-[#111111] mb-2 text-lg">Personal Information</h3>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>User account credentials</li>
            </ul>

            <h3 className="font-semibold text-[#111111] mb-2 text-lg">Device Information</h3>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-6">
              <li>Device type</li>
              <li>IP address</li>
              <li>Operating system</li>
              <li>App usage data</li>
            </ul>

            <h3 className="font-semibold text-[#111111] mb-2 text-lg">Location Data</h3>
            <p className="text-gray-700 leading-relaxed">
              If enabled, the App may collect location data to show nearby businesses, attractions, events and services.
            </p>
          </section>

          {/* Section 3 */}
          <section id="purpose-of-processing" className="mb-10">
            <h2 className="text-2xl font-bold text-[#111111] mb-3">3. Purpose of Data Processing</h2>
            <p className="text-gray-700 leading-relaxed mb-3">Personal data is used to:</p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700">
              <li>Provide app services</li>
              <li>Improve functionality</li>
              <li>Enable local recommendations</li>
              <li>Communicate updates</li>
              <li>Process bookings and reservations where applicable</li>
              <li>Prevent fraud and abuse</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="lawful-basis" className="mb-10">
            <h2 className="text-2xl font-bold text-[#111111] mb-3">4. Lawful Basis for Processing</h2>
            <p className="text-gray-700 leading-relaxed mb-3">Personal data is processed on the basis of:</p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700">
              <li>User consent</li>
              <li>Contractual necessity</li>
              <li>Legitimate business interest</li>
              <li>Compliance with legal obligations</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="data-sharing" className="mb-10">
            <h2 className="text-2xl font-bold text-[#111111] mb-3">5. Data Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-3">User information may be shared with:</p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700">
              <li>Technology providers</li>
              <li>Payment processors</li>
              <li>Analytics providers</li>
              <li>Business partners where necessary to deliver requested services</li>
              <li>Legal authorities where required by law</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="data-security" className="mb-10">
            <h2 className="text-2xl font-bold text-[#111111] mb-3">6. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-3">The App uses:</p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700">
              <li>Encryption</li>
              <li>Secure servers</li>
              <li>Access controls</li>
              <li>System monitoring</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">to protect user information.</p>
          </section>

          {/* Section 7 */}
          <section id="user-rights" className="mb-10">
            <h2 className="text-2xl font-bold text-[#111111] mb-3">7. User Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-3">Users have the right to:</p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700">
              <li>Access their data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion</li>
              <li>Withdraw consent</li>
              <li>Request information about how their data is processed</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section id="data-retention" className="mb-10">
            <h2 className="text-2xl font-bold text-[#111111] mb-3">8. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              Personal data is retained only as long as necessary for operational, contractual,
              regulatory or legal purposes.
            </p>
          </section>

          {/* Section 9 */}
          <section id="contact" className="mb-10">
            <h2 className="text-2xl font-bold text-[#111111] mb-3">9. Contact for Privacy Requests</h2>
            <p className="text-gray-700 leading-relaxed">
              E-mail:{" "}
              <a href="mailto:admin@mycityapp.io" className="text-[#111111] underline">
                privacy@cityapp.africa
              </a>
            </p>
          </section>

          {/* Section 10 */}
          <section id="data-protection-notice" className="mb-10">
            <h2 className="text-2xl font-bold text-[#111111] mb-3">10. Data Protection Notice</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This notice informs users how their personal data is handled. The App acts as a Data
              Controller where applicable under relevant data protection laws.
            </p>

            <h3 className="font-semibold text-[#111111] mb-2 text-lg">Data Collected</h3>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-6">
              <li>Identification information</li>
              <li>Device data</li>
              <li>Usage analytics</li>
              <li>Location data (where enabled)</li>
            </ul>

            <h3 className="font-semibold text-[#111111] mb-2 text-lg">Protection Measures</h3>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-6">
              <li>Encryption</li>
              <li>Limited internal access</li>
              <li>Security monitoring</li>
            </ul>

            <h3 className="font-semibold text-[#111111] mb-2 text-lg">Breach Notification</h3>
            <p className="text-gray-700 leading-relaxed">
              In the event of a data breach, affected users and regulators will be notified as
              required by applicable law.
            </p>
          </section>

          {/* Section 11 */}
          <section id="community-guidelines" className="mb-10">
            <h2 className="text-2xl font-bold text-[#111111] mb-3">11. Community Guidelines</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To ensure a respectful environment, users must follow these guidelines.
            </p>

            <h3 className="font-semibold text-[#111111] mb-2 text-lg">Users Must Not</h3>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-6">
              <li>Post offensive or discriminatory content</li>
              <li>Spread misinformation</li>
              <li>Promote illegal services</li>
              <li>Harass other users</li>
            </ul>

            <h3 className="font-semibold text-[#111111] mb-2 text-lg">Listings and Reviews</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Users must ensure reviews and listings are:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-6">
              <li>Truthful</li>
              <li>Respectful</li>
              <li>Non-defamatory</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-2">Violations may lead to:</p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700">
              <li>Content removal</li>
              <li>Account suspension</li>
              <li>Permanent ban</li>
            </ul>
          </section>

          {/* Section 12 */}
          <section id="cookie-policy" className="mb-10">
            <h2 className="text-2xl font-bold text-[#111111] mb-3">12. Cookie &amp; Analytics Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The App may use cookies and analytics technologies.
            </p>

            <h3 className="font-semibold text-[#111111] mb-2 text-lg">Purpose</h3>
            <p className="text-gray-700 leading-relaxed mb-3">Cookies help to:</p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-6">
              <li>Analyze app performance</li>
              <li>Remember user preferences</li>
              <li>Improve services</li>
            </ul>

            <h3 className="font-semibold text-[#111111] mb-2 text-lg">Types Used</h3>
            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
              <table className="w-full text-sm text-gray-700">
                <thead className="bg-[#111111] text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-medium">Type</th>
                    <th className="text-left px-4 py-3 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium">Essential cookies</td>
                    <td className="px-4 py-3">Necessary for operation</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Analytics cookies</td>
                    <td className="px-4 py-3">Usage statistics</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium">Preference cookies</td>
                    <td className="px-4 py-3">Remembering settings</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Users may disable cookies through device settings where applicable.
            </p>
          </section>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default BotswanaPrivacyPolicyPage;
