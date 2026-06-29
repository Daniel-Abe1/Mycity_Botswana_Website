"use client";

import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const TermsConditionsPage = () => {
  return (
    <div>
      <MaxWidthWrapper className="lg:mt-40 max-w-5xl mt-12 flex flex-col gap-1 mb-6">
        <span className="tracking-wide text-xs text-[#57756A]">LEGAL</span>
        <h1 className="text-[2.5rem] font-black text-[#103729] leading-14">
          Terms &amp; Conditions
        </h1>
        <span className="text-[#57756A]">Last updated: April 2026</span>
      </MaxWidthWrapper>

      {/* Content */}
      <MaxWidthWrapper className="max-w-5xl">
        <div className="pb-16 prose prose-neutral">
          <p className="text-gray-700 leading-relaxed">
            This page contains the terms and conditions of service governing
            your use of the MyCityApp Limited&apos;s (&quot;MyCityApp&quot;,
            &quot;we&quot; or &quot;our&quot;) Application (the &quot;App&quot;
            or &quot;Platform&quot;). Please carefully review these terms and
            conditions before using the MyCityApp service.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            MyCityApp offers a dynamic platform designed to enhance urban living
            in Lagos, offering mapping, GPS navigation, and user-generated
            reviews and recommendations for hotels, restaurants, attractions,
            and experiences curated by a vibrant community of users.
            Additionally, MyCityApp enables seamless transactions for
            governmental payments, including fines, tolls, and levies.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            By clicking a registration or new account submission button, or by
            otherwise using MyCityApp&apos;s websites, the Platform, networks,
            mobile applications, or other services provided by MyCityApp
            (collectively, the &quot;Services&quot;), you agree to be bound by
            the following platform use agreement as updated from time to time.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            We may revise these Terms from time to time and the most current
            version will be posted on our website. By continuing to use the
            Service after revisions become effective, you agree to be bound by
            the revised Terms.
          </p>

          {/* Table of Contents */}
          <div className="my-8 p-6 bg-[#F3F7F566] rounded-xl border border-[#E2E9E7]">
            <h2 className="font-semibold tracking-widest text-[#103729] mb-3 uppercase">
              Table of Contents
            </h2>
            <ol className="list-decimal list-inside space-y-1 text-[#103729] text-sm grid grid-cols-2 gap-1">
              <li>
                <a href="#registration" className="hover:underline">
                  Registration
                </a>
              </li>
              <li>
                <a href="#use-of-application" className="hover:underline">
                  Use of the application
                </a>
              </li>
              <li>
                <a href="#third-party" className="hover:underline">
                  Third party linked services
                </a>
              </li>
              <li>
                <a href="#intellectual-property" className="hover:underline">
                  Intellectual property
                </a>
              </li>
              <li>
                <a href="#indemnification" className="hover:underline">
                  Indemnification
                </a>
              </li>
              <li>
                <a href="#no-warranties" className="hover:underline">
                  No warranties by MyCityApp
                </a>
              </li>
              <li>
                <a href="#limitation-of-liability" className="hover:underline">
                  Limitation of liability
                </a>
              </li>
              <li>
                <a href="#feedback" className="hover:underline">
                  Feedback
                </a>
              </li>
              <li>
                <a href="#privacy-policy" className="hover:underline">
                  Privacy policy and other guidelines
                </a>
              </li>
              <li>
                <a href="#miscellaneous" className="hover:underline">
                  Miscellaneous
                </a>
              </li>
              <li>
                <a href="#communications" className="hover:underline">
                  Communications
                </a>
              </li>
              <li>
                <a href="#governing-law" className="hover:underline">
                  Governing law
                </a>
              </li>
              <li>
                <a href="#notices" className="hover:underline">
                  Notices
                </a>
              </li>
              <li>
                <a href="#termination" className="hover:underline">
                  Termination and amendments
                </a>
              </li>
            </ol>
          </div>

          {/* Section 1 */}
          <section id="registration" className="mb-10">
            <h2 className="text-2xl font-bold text-[#103729] mb-3">
              1. Registration
            </h2>
            <p className="text-gray-700 leading-relaxed">
              As a condition of your use of the Services, you will be required
              to register and create an account. You must complete the
              registration process by providing MyCityApp with current,
              accurate, and complete information as may be required in the
              registration form. Such information may include certain personal
              information, such as your name and email address, all of which
              will be subject to our Privacy Policy. You agree to promptly
              update the information provided during registration as may be
              necessary to keep it current and accurate. You also agree to
              protect your passwords and take full responsibility for your own,
              and third-party, use of your accounts. You agree that you are 18
              years of age or older.
            </p>
          </section>

          {/* Section 2 */}
          <section id="use-of-application" className="mb-10">
            <h2 className="text-2xl font-bold text-[#103729] mb-3">
              2. Use of the Application
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold">2.1</span> By agreeing to these
              Terms, you represent and warrant that: (a) you are at least 18
              years of age; (b) you have not previously been suspended or
              removed from the Services; and (c) your registration and use of
              the Services is in compliance with all applicable laws and
              regulations.
            </p>

            <p className="text-gray-700 leading-relaxed mb-3">
              <span className="font-semibold">2.2</span> You agree that the
              information you provide is accurate and that you will keep it
              accurate and up to date at all times. You may also be required to
              provide passwords and acknowledge that:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-4">
              <li>
                You are solely responsible for maintaining the confidentiality
                of your account.
              </li>
              <li>
                You are solely responsible for all actions taken via your
                account.
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold">2.3</span> You agree to exercise
              caution and adhere to all applicable traffic laws and regulations
              when using the App&apos;s navigation features. MyCityApp is not
              liable for any accidents, injuries, or damages resulting from your
              misuse. You agree not to interact with the App while operating a
              vehicle unless using hands-free functionality.
            </p>

            <p className="text-gray-700 leading-relaxed mb-3">
              <span className="font-semibold">2.4</span> By using the Platform
              or App, you agree not to:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-4">
              <li>
                Reproduce, modify, distribute, display, decompile, disassemble,
                or reverse engineer any portion of the Platform or App, except
                as explicitly permitted under these Terms;
              </li>
              <li>
                Remove or modify any copyright or other intellectual property
                notices that appear on the Platform or App;
              </li>
              <li>
                Use the Platform or App in any way that is unlawful, or harms
                MyCityApp, its service providers, suppliers, or any other user;
              </li>
              <li>
                Distribute or post spam, chain letters, pyramid schemes, or
                similar communications;
              </li>
              <li>
                Impersonate another person or misrepresent your affiliation with
                another person or entity;
              </li>
              <li>
                Upload invalid data, viruses, worms, or other software agents;
              </li>
              <li>
                Interfere with, or compromise, the system integrity or security
                of the Platform or App;
              </li>
              <li>
                Conduct automated queries (scraping, spiders, robots, crawlers,
                captcha bypassing);
              </li>
              <li>Use any of MyCityApp&apos;s trademarks without approval;</li>
              <li>
                Access or use any of the Platform or App to develop competitive
                products or services; or
              </li>
              <li>
                Attempt to, or permit or encourage any third party to, do any of
                the above.
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold">2.5</span> If you violate any of
              the rules contained herein, MyCityApp may immediately suspend,
              revoke, or restrict your account (and any related accounts).
              MyCityApp shall notify you of the suspension and revocation within
              twenty-four (24) hours of action taken.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">2.6</span> You shall be solely
              responsible for indemnifying, defending, and holding harmless
              MyCityApp for any claims or liability arising from any
              misrepresentations uploaded or posted by you on your account.{" "}
              <span className="uppercase">
                MyCityApp hereby disclaims all warranties, whether express or
                implied, including the implied warranties or conditions of
                merchantability and fitness for a particular purpose.
              </span>
            </p>
          </section>

          {/* Section 3 */}
          <section id="third-party" className="mb-10">
            <h2 className="text-2xl font-bold text-[#103729] mb-3">
              3. Third Party Linked Services
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold">3.1</span> The Platform or App
              includes links to third-party products, services, and websites, as
              well as materials provided by third parties (each, a
              &quot;Third-Party Provider&quot;) which are not under
              MyCityApp&apos;s control.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold">3.2</span> Third-Party Providers
              are solely responsible for their services. You are responsible for
              your dealings or business conducted with any Third-Party Provider
              arising in connection with the Platform or App. Your use of
              third-party sites, services, or products may be subject to
              associated third-party terms of use and privacy policies.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold">3.3</span> By using a tool
              provided by a Third-Party Provider, you agree that MyCityApp may
              transfer information to the applicable third parties as may be
              necessary to enable you to use the tool.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold">3.4</span> We require all third
              parties to respect the security of your personal data and to treat
              it in accordance with applicable laws.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">3.5</span> MyCityApp is not
              responsible for any damages or costs arising out of or connected
              with your dealings with these Third-Party Providers.
            </p>
          </section>

          {/* Section 4 */}
          <section id="intellectual-property" className="mb-10">
            <h2 className="text-2xl font-bold text-[#103729] mb-3">
              4. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed">
              All intellectual property rights in the Platform or App and all
              content provided through the Services (including text, graphics,
              logos, icons, images, audio, video, and software) are owned by or
              licensed to MyCityApp and are protected by applicable intellectual
              property laws. Except as expressly permitted in these Terms, you
              may not use, reproduce, or distribute any such content without
              MyCityApp&apos;s prior written consent.
            </p>
          </section>

          {/* Section 5 */}
          <section id="indemnification" className="mb-10">
            <h2 className="text-2xl font-bold text-[#103729] mb-3">
              5. Indemnification
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              <span className="font-semibold">5.1</span> You agree to indemnify,
              defend, and hold harmless MyCityApp from any and all claims and
              demands made by any third party due to or arising out of:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700">
              <li>Your breach of these Terms;</li>
              <li>
                Your access to or misuse of the Platform or App being in
                violation of any law or the rights of a third party;
              </li>
              <li>
                Any unrelated dispute or issue between you and any third party.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="no-warranties" className="mb-10">
            <h2 className="text-2xl font-bold text-[#103729] mb-3">
              6. No Warranties by MyCityApp
            </h2>

            <p className="text-gray-700 leading-relaxed mb-3">
              <span className="font-semibold">6.1</span> MyCityApp provides the
              Platform and App on an &quot;as is&quot; and &quot;as
              available&quot; basis and disclaims, to the maximum extent
              permitted by law, all warranties and conditions, whether express
              or implied, including:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-4">
              <li>
                warranties or conditions of fitness for a particular purpose,
                workmanlike effort, and accuracy;
              </li>
              <li>
                warranties or conditions arising through the course of dealing
                or usage of trade; and
              </li>
              <li>
                warranties or conditions of uninterrupted or error-free access
                or use of the Platform or App.
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold">6.2</span> No advice or
              information, whether oral or written, obtained by you through the
              Platform or App will create any warranty regarding any
              MyCityApp-affiliated entity or the Platform or App that is not
              expressly stated in these Terms.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">6.3</span> MyCityApp will not be
              liable for any delay or failure to perform its obligations under
              these Terms to the extent that the delay or failure is caused by
              events outside its reasonable control.
            </p>
          </section>

          {/* Section 7 */}
          <section id="limitation-of-liability" className="mb-10">
            <h2 className="text-2xl font-bold text-[#103729] mb-3">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">7.1</span> In no event will
              MyCityApp or any of its affiliates be liable for any indirect,
              consequential, special, incidental, or punitive damages (including
              damages for loss of profits, goodwill, or any other intangible
              loss) arising out of, based on, or resulting from these Terms or
              your use or access, or inability to use or access, the Platform or
              App or any materials on the Platform, whether based on (a) breach
              of contract, (b) breach of warranty, (c) negligence, or (d) any
              other cause of action, even if MyCityApp has been advised of the
              possibility of such damages.
            </p>
          </section>

          {/* Section 8 */}
          <section id="feedback" className="mb-10">
            <h2 className="text-2xl font-bold text-[#103729] mb-3">
              8. Feedback
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You may choose to submit comments, ideas or feedback about the
              Services. By submitting any feedback, you agree that we are free
              to use such feedback at our discretion and without additional
              compensation to you, and to disclose such feedback to third
              parties on a non-confidential basis or otherwise.
            </p>
          </section>

          {/* Section 9 */}
          <section id="privacy-policy" className="mb-10">
            <h2 className="text-2xl font-bold text-[#103729] mb-3">
              9. Privacy Policy and Other Guidelines
            </h2>

            <h3 className="font-semibold text-[#103729] mb-2 text-lg">
              A. Privacy Policy
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              MyCityApp will collect, use, store, and disclose personal
              information in accordance with its{" "}
              <a
                href="/privacy-policy"
                className="text-[#103729] underline font-medium"
              >
                Privacy Policy
              </a>
              , which is incorporated into, and made a part of, these Terms.
            </p>

            <h3 className="font-semibold text-[#103729] mb-2 text-lg">
              B. Other Guidelines
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your use of the Platform or App is subject to all additional
              guidelines, rules, and agreements applicable to the Platform or
              App or certain features that MyCityApp may post on, or link to,
              from the Platform or App.
            </p>

            <h3 className="font-semibold text-[#103729] mb-2 text-lg">
              C. Data Protection
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              MyCityApp processes personal data in accordance with the Nigeria
              Data Protection Act (NDPA) and other applicable data protection
              laws.
            </p>

            <h3 className="font-semibold text-[#103729] mb-2 text-lg">
              D. Data Processing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              MyCityApp acknowledges that in providing the Services to you, you
              and MyCityApp may be privy to the Personal Data of Data Subjects
              as defined under the NDPA. MyCityApp undertakes that it will
              process the Personal Data based only on documented instructions
              from the Data Subjects and in accordance with its contractual
              agreement with such Data Subjects.
            </p>
            <p className="text-gray-700 leading-relaxed">
              It is mutually agreed that the Personal Data of Data Subjects may
              be collected, stored, and processed for the purposes of using the
              Services, provided such collection/storage/processing shall be
              carried out in accordance with the NDPA.
            </p>
          </section>

          {/* Section 10 */}
          <section id="miscellaneous" className="mb-10">
            <h2 className="text-2xl font-bold text-[#103729] mb-3">
              10. Miscellaneous
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold">10.3</span> The section titles in
              these Terms are solely used for the convenience of the parties and
              have no legal or contractual significance.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold">10.4</span> MyCityApp may assign
              its rights and responsibilities under these Terms, in whole or in
              part, at any time upon giving general prior notice.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">10.5</span> MyCityApp&apos;s
              failure to act with respect to a breach by you or other Users does
              not waive MyCityApp&apos;s right to act with respect to subsequent
              or similar breaches.
            </p>
          </section>

          {/* Section 11 */}
          <section id="communications" className="mb-10">
            <h2 className="text-2xl font-bold text-[#103729] mb-3">
              11. Communications
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold">11.1</span> By using the Platform
              or App, you consent to receive certain electronic communications
              from MyCityApp as further described in the Privacy Policy. You
              agree that any notices, agreements, disclosures, or other
              communications that MyCityApp sends to you electronically will
              satisfy any legal communication requirements, including that those
              communications be in writing.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">11.2</span> Communication by you
              to MyCityApp shall be in writing, and shall be delivered
              personally, via email, or sent by courier.
            </p>
          </section>

          {/* Section 12 */}
          <section id="governing-law" className="mb-10">
            <h2 className="text-2xl font-bold text-[#103729] mb-3">
              12. Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">12.3</span> Where a dispute is not
              resolved amicably, it shall be referred to arbitration by a single
              arbitrator appointed by a consensus of the parties, or failing
              such consensus within fourteen (14) days of request, by the
              Chairman for the time being of the Chartered Institute of
              Arbitration (UK) Nigeria branch. The arbitral proceedings shall be
              conducted in Lagos and in accordance with the Arbitration and
              Mediation Act 2023. The decision of the Arbitrator and award
              granted shall be final.
            </p>
          </section>

          {/* Section 13 */}
          <section id="notices" className="mb-10">
            <h2 className="text-2xl font-bold text-[#103729] mb-3">
              13. Notices
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Notices to MyCityApp shall be sent to{" "}
              <a
                href="mailto:admin@mycityapp.io"
                className="text-[#103729] underline font-medium"
              >
                admin@mycityapp.io
              </a>
              . Notices to you may be delivered via email to the address
              associated with your account or by posting in the App.
            </p>
          </section>

          {/* Section 14 */}
          <section id="termination" className="mb-10">
            <h2 className="text-2xl font-bold text-[#103729] mb-3">
              14. Termination and Amendments to the Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              MyCityApp may terminate, suspend, or modify your access to the
              Services at any time, with or without notice, for any reason. We
              may also amend these Terms from time to time; the most current
              version will be posted on our website, and your continued use of
              the Services constitutes acceptance of the amended Terms.
            </p>
          </section>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default TermsConditionsPage;
