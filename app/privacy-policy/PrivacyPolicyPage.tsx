"use client";

import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <MaxWidthWrapper className="lg:mt-40 max-w-5xl mt-12 flex flex-col gap-1 mb-6">
        <span className="tracking-wide text-xs text-[#57756A]">LEGAL</span>
        <h1 className="text-[2.5rem] font-black text-[#103729] leading-14">
          Privacy Policy
        </h1>
        <span className="text-[#57756A]">Last updated: April 2026</span>
      </MaxWidthWrapper>

      {/* Content */}
      <MaxWidthWrapper className="max-w-5xl">
        <div className="pb-16 prose prose-neutral">
          <p className="text-gray-700 leading-relaxed">
            MyCityApp respects your privacy and is committed to protecting your
            personal data. This privacy policy will inform you of how we look
            after your personal data when you use our mobile application
            (regardless of where you are located) and tell you about your
            privacy rights and how the law protects you.
          </p>

          {/* Table of Contents */}
          <div className="my-8 p-6 bg-[#F3F7F566] rounded-xl border border-[#E2E9E7]">
            <h2 className="font-semibold tracking-widest text-[#103729] mb-3 uppercase">
              Table of Contents
            </h2>
            <ol className="list-decimal list-inside space-y-1 text-[#103729] text-sm grid grid-cols-2 gap-1">
              <li>
                <a href="#important-information" className="hover:underline">
                  Important information and who we are
                </a>
              </li>
              <li>
                <a href="#data-we-collect" className="hover:underline">
                  The data we collect about you
                </a>
              </li>
              <li>
                <a href="#how-we-use-data" className="hover:underline">
                  How we use your personal data
                </a>
              </li>
              <li>
                <a href="#how-data-is-collected" className="hover:underline">
                  How is your personal data collected
                </a>
              </li>
              <li>
                <a href="#data-security" className="hover:underline">
                  Data security
                </a>
              </li>
              <li>
                <a href="#data-retention" className="hover:underline">
                  Data retention
                </a>
              </li>
              <li>
                <a href="#your-legal-rights" className="hover:underline">
                  Your legal rights
                </a>
              </li>
              <li>
                <a href="#changes-to-policy" className="hover:underline">
                  Changes to privacy policy
                </a>
              </li>
              <li>
                <a href="#glossary" className="hover:underline">
                  Glossary
                </a>
              </li>
            </ol>
          </div>

          {/* Section 1 */}
          <section id="important-information" className="mb-10">
            <h2 className="text-2xl font-bold text-[#103729] mb-3">
              1. Important Information and Who We Are
            </h2>
            <h3 className="font-semibold text-[#103729] mb-2 text-lg">
              Purpose of this Policy
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              This privacy policy aims to give you information on how MyCityApp
              collects and processes your personal data through your use of our
              App, including any data you may provide through our App when you
              use any of our services, and the steps you can take to protect
              your privacy. Our App is not intended for children, and we do not
              knowingly collect data relating to children.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              It is important that you read this privacy policy together with
              any other privacy policy or fair processing policy we may provide
              on specific occasions when we are collecting or processing
              personal data about you so that you are fully aware of how and why
              we are using your data. This privacy policy supplements other
              notices and privacy policies and is not intended to override them.
            </p>
            <h3 className="font-semibold text-[#103729] mb-2 text-lg">
              Third-party links
            </h3>
            <p className="text-gray-700 leading-relaxed">
              This App may include links to third-party websites, plug-ins, and
              applications. Clicking on those links or enabling those
              connections may allow third parties to collect or share data about
              you. We do not control these third-party websites and are not
              responsible for their privacy practices and procedures. When you
              leave our App, we encourage you to read the privacy policy of
              every website you visit through our App.
            </p>
          </section>

          {/* Section 2 */}
          <section id="data-we-collect" className="mb-10">
            <h2 className="text-2xl font-bold text-[#103729] mb-3">
              2. The Data We Collect About You
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Personal data means any information relating to any identified or
              identifiable natural person. It does not include data where the
              identity has been removed (anonymous data). We may collect, use,
              store and transfer different kinds of personal data about you
              which we have grouped together as follows:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700">
              <li>
                <span className="font-medium">Identity Data</span> includes
                name, username or similar identifier, title, date of birth,
                photograph/photo ID, gender.
              </li>
              <li>
                <span className="font-medium">Contact Data</span> includes
                residential/contact address, email address and telephone
                numbers.
              </li>
              <li>
                <span className="font-medium">Financial Data</span> includes
                bank account details.
              </li>
              <li>
                <span className="font-medium">Transaction Data</span> includes
                details about payments to and from you.
              </li>
              <li>
                <span className="font-medium">Technical Data</span> includes
                internet protocol (IP) address, your login data, browser type
                and version, time zone setting and location, browser plug-in
                types and versions, operating system and platform, and other
                technology on the devices you use to access this App.
              </li>
              <li>
                <span className="font-medium">Profile Data</span> includes your
                username and password, preferences, feedback, and survey
                responses.
              </li>
              <li>
                <span className="font-medium">Usage Data</span> includes
                information about how you use our App, products, and services.
              </li>
              <li>
                <span className="font-medium">
                  Marketing and Communications Data
                </span>{" "}
                includes your preferences in receiving marketing from us and our
                third parties and your communication preferences.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We do not collect any Sensitive Personal Data about you (this
              includes details about your race or ethnicity, religious or
              philosophical beliefs, sex life, sexual orientation, political
              opinions, trade union membership, information about your health,
              and genetic and biometric data). Neither do we collect any
              information about criminal convictions and offences.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Where we are required to collect personal data, or need it to
              provide our services to you, and you fail to provide that data
              when requested, we may be unable to provide the service to you.
            </p>
          </section>

          {/* Section 3 */}
          <section id="how-data-is-collected" className="mb-10">
            <h2 className="text-2xl font-bold text-[#103729] mb-3">
              3. How Is Your Personal Data Collected?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use different methods to collect data from and about you
              including through:
            </p>
            <p className="text-gray-700 font-medium mb-2">
              Direct interactions:
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              You may give us your data by filling out forms or by corresponding
              with us by phone, email, or other available means. This includes
              personal data you provide when you:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-4">
              <li>Apply for our products or services</li>
              <li>Create an account on our App</li>
              <li>Subscribe to our newsletters</li>
              <li>
                Request marketing materials or communication to be sent to you
              </li>
              <li>Make payments using our App</li>
              <li>Enter a competition, promotion, or survey</li>
              <li>Give us feedback or contact us</li>
            </ul>
            <p className="text-gray-700 font-medium mb-2">
              Automated technologies or interactions:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              As you interact with our App, we will automatically collect
              Technical Data about your equipment, browsing actions and
              patterns. We collect this personal data by using cookies and other
              similar technologies.
            </p>
            <p className="text-gray-700 font-medium mb-2">
              Third parties or publicly available sources:
            </p>
            <p className="text-gray-700 leading-relaxed">
              We may also receive and use personal data about you from various
              third parties (e.g., analytics providers such as Google) and
              public sources.
            </p>
          </section>

          {/* Section 4 */}
          <section id="how-we-use-data" className="mb-10">
            <h2 className="text-2xl font-bold text-[#103729] mb-3">
              4. How We Use Your Personal Data
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We will only use your personal data when the law allows us to. We
              will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-4">
              <li>To provide our products and services to you.</li>
              <li>
                Where it is necessary for our legitimate interests (or those of
                a third party) and your interests and fundamental rights do not
                override those interests.
              </li>
              <li>Where we need to comply with a legal obligation.</li>
              <li>When you give us consent.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              We will get your consent before sending third party direct
              marketing communications to you. You have the right to withdraw
              consent to receive marketing materials at any time by contacting
              us.
            </p>

            <h3 className="font-semibold text-gray-800 mb-3">
              Purposes for which we will use your personal data
            </h3>
            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
              <table className="w-full text-sm text-gray-700">
                <thead className="bg-[#103729] text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-medium">
                      Purpose / Activity
                    </th>
                    <th className="text-left px-4 py-3 font-medium">
                      Lawful Basis
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3">
                      To provide products and services which you have requested,
                      and to conduct business with you (e.g., register you as a
                      new customer, manage your account, process and respond to
                      enquiries, complaints and issues).
                    </td>
                    <td className="px-4 py-3">
                      Performance of a contract with you.
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3">
                      For security, credit, administration, and legal purposes.
                    </td>
                    <td className="px-4 py-3">
                      Comply with a legal obligation (e.g., Anti-Money
                      Laundering and Know Your Customer obligations).
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3">
                      To detect, investigate, prevent and prosecute criminal
                      activity and to meet our regulatory, legal and compliance
                      obligations (including performing regulatory and
                      prudential compliance checks on an ongoing basis, account
                      and transaction monitoring, checks for sanctions and
                      politically exposed persons, and transaction and tax
                      reporting. Also making disclosures to, co-operating with,
                      and complying with requests from: public authorities,
                      regulators, courts of law, tax authorities, governmental
                      bodies or law enforcement agencies, and investigating and
                      preventing fraud, terrorism and other crimes).
                    </td>
                    <td className="px-4 py-3">
                      (a) Comply with a legal obligation
                      <p>
                        (b) Legitimate interests (ensuring effective compliance
                        in all relevant jurisdictions, protecting our customers,
                        maintaining a good relationship with law enforcement,
                        regulators and other relevant authorities. Also, we have
                        a legitimate interest in protecting our legal rights)
                      </p>
                      .
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3">
                      To improve customer service, and to decide if a product or
                      service is suitable for your needs.
                    </td>
                    <td className="px-4 py-3">
                      Legitimate interests (we have a legitimate interest in
                      providing quality customer service, as this allows us to
                      maintain good client relationships and to deal with
                      queries and complaints effectively. Also, we have a
                      legitimate interest in ensuring that we provide our
                      customers with appropriate products and services, to
                      ensure both appropriate risk management and good client
                      relationship management).
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3">
                      To provide you with the appropriate level of service, to
                      accommodate your specific individual needs and treat you
                      fairly based on any vulnerability you may have, whether
                      you have told us, or we believe it necessary to record, to
                      improve customer service and ensure equality of treatment,
                      protect vulnerable customers, or safeguard your economic
                      wellbeing.
                    </td>
                    <td className="px-4 py-3">
                      (a) Consent
                      <p>(b) Public Interest</p>
                      <p>(c) Vital Interest</p>
                      <p>
                        (d) Legitimate interests (we have a legitimate interest
                        in providing quality customer service, as this allows us
                        to maintain good client relationships and to deal with
                        queries and complaints effectively).
                      </p>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3">
                      To carry out operational and administrative functions
                      (e.g. to maintain our own accounts and records, to operate
                      information technology systems, to carry out
                      billing-related and payments administration, to maintain
                      stocks and shares registers).
                    </td>
                    <td className="px-4 py-3">
                      (a) Comply with a legal obligation (to maintain certain
                      statutory records)
                      <p>
                        (b) Legitimate interests (we have a legitimate interest
                        in running our business efficiently).
                      </p>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3">
                      To manage, support and provide training to our staff.
                    </td>
                    <td className="px-4 py-3">
                      Legitimate interests in managing, supporting and training
                      our staff.
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3">
                      Marketing: To tell you about other companies’ products,
                      services and facilities that may interest you (by email,
                      phone or text, in accordance with your preferences).
                    </td>
                    <td className="px-4 py-3">
                      (a) Consent
                      <p>
                        (b) Legitimate interests (we have a legitimate interest
                        in making our customers aware of our other services and
                        offerings).
                      </p>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3">
                      To help us to improve our products, services and
                      operations, including market research, analysis of
                      customer preferences, transactions and market trends,
                      evaluating proposed products, testing new systems and
                      upgrading existing systems.
                    </td>
                    <td className="px-4 py-3">
                      Legitimate interests (we consider that we have a
                      legitimate interest in improving our products, services
                      and operations).
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3">
                      To share relevant information in respect of a prospective
                      sale of MyCityApp, or any of its subsidiaries, or any part
                      of its or their business.
                    </td>
                    <td className="px-4 py-3">
                      (a) Comply with a legal obligation
                      <p>
                        (b) Legitimate interests (we have a legitimate interest
                        in complying with due diligence requirements and being
                        efficient in how we run the business).
                      </p>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3">
                      We may share some personal data (for example, your email
                      address), in a secure format, with our advertising
                      partners and social media companies, so that they can
                      display the most relevant messages to you and others about
                      our products and services. This includes instructing these
                      companies not to show adverts to our existing customers.
                      If you do not want us to share your personal data with our
                      advertising partners or social media companies for this
                      purpose, you can tell us not to.
                    </td>
                    <td className="px-4 py-3">
                      Legitimate interests in informing you about out products
                      and services that you or others may be interested in.
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3">
                      To evaluate the effectiveness of marketing and for
                      research, training and statistical analysis to improve
                      services.
                    </td>
                    <td className="px-4 py-3">
                      Legitimate interests in improving our products, services
                      and operations.
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3">
                      To protect our and your other customers, and all systems
                      and process; for audit, testing etc. To prevent fraud and
                      keep safe data safe, as required by law.
                    </td>
                    <td className="px-4 py-3">
                      Legitimate Interest has been legitimately balanced
                      providing with an easy opt-out and alternative; in
                      accordance with e-Privacy regulations.
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3">
                      To manage our business and to protect and enforce our
                      rights (including assessing, monitoring and managing
                      financial, reputational and other risk, conducting audits,
                      liaising with regulators and law enforcement, and to
                      establish, enforce and defend against legal claims).
                    </td>
                    <td className="px-4 py-3">
                      (a) Comply with a legal obligation
                      <p>
                        (b) Legitimate interests (we consider that we have a
                        legitimate interest in prudently managing our business
                        and in protecting and enforcing our rights).
                      </p>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3">
                      To work with other companies that provide services to us
                      and our customers.
                    </td>
                    <td className="px-4 py-3">
                      Performance of a contract with you.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-semibold text-[#103729] mb-2 text-lg">
              Marketing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We strive to provide you with choices regarding certain personal
              data uses, particularly around marketing and advertising. You have
              the right to revoke your consent to such uses at any time by
              contacting us or adjusting your preferences through our
              communication channels.
            </p>

            <h3 className="font-semibold text-[#103729] mb-2 text-lg">
              Promotional offers from us
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may use your Identity, Contact, Technical, Usage and Profile
              Data to form a view on what we think you may want or need, or what
              may be of interest to you. This is how we decide which products,
              services and offers may be relevant for you.
            </p>

            <h3 className="font-semibold text-[#103729] mb-2 text-lg">
              Third-party marketing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We will get your express opt-in consent before we share your
              personal data with any third party for marketing purposes.
            </p>

            <h3 className="font-semibold text-[#103729] mb-2 text-lg">
              Opting out
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can ask us or third parties to stop sending you marketing
              messages at any time by adjusting your marketing preferences in
              the App, by following opt-out links on any marketing message sent
              to you, or by contacting us.
            </p>

            <h3 className="font-semibold text-[#103729] mb-2 text-lg">
              Cookies
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The App may use cookies to enhance user experience, analyze app
              performance and provide tailored features. You can manage or
              disable this tracking technology through your device settings or
              within the app settings. Note that disabling these features may
              impact your ability to access certain functionalities of the App.
            </p>

            <h3 className="font-semibold text-[#103729] mb-2 text-lg">
              Third-Party Processing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              We may share your personal data with the parties set out below for
              the purposes set out above.
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700">
              <li>
                Service providers acting as processors based in Nigeria who
                provide various services on the App.
              </li>
              <li>
                Regulators and other authorities based in Nigeria who require
                reporting of processing activities in certain circumstances.
              </li>
              <li>
                Third parties to whom we may choose to sell, transfer or merge
                parts of our business or our assets.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We require all third parties to respect the security of your
              personal data and to treat it in accordance with the law.
            </p>
          </section>

          {/* Section 5 */}
          <section id="data-security" className="mb-10">
            <h2 className="text-2xl font-bold text-[#103729] mb-3">
              5. Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We have put in place appropriate security measures to prevent your
              personal data from being accidentally lost, used or accessed in an
              unauthorized way, altered or disclosed. We have put in place
              procedures to deal with any suspected personal data breach and
              will notify you and any applicable regulator of a breach where we
              are legally required to do so.
            </p>
          </section>

          {/* Section 6 */}
          <section id="data-retention" className="mb-10">
            <h2 className="text-2xl font-bold text-[#103729] mb-3">
              6. Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We will only retain your personal data for as long as reasonably
              necessary to fulfil the purposes for which we collected it,
              including for the purpose of satisfying any legal, regulatory,
              tax, accounting or reporting requirements.
            </p>
            <p className="text-gray-700 leading-relaxed">
              To determine the appropriate retention period for personal data,
              we consider the amount, nature and sensitivity of the personal
              data, the potential risk of harm from unauthorized use or
              disclosure, the purposes for which we process your personal data
              and whether we can achieve those purposes through other means, and
              the applicable legal and regulatory requirements.
            </p>
          </section>

          {/* Section 7 */}
          <section id="your-legal-rights" className="mb-10">
            <h2 className="text-2xl font-bold text-[#103729] mb-3">
              7. Your Legal Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under certain circumstances, you have rights under data protection
              laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-4">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Withdraw consent.</li>
              <li>Lodge a complaint with the relevant authority.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              If you wish to exercise any of the rights set out above, except
              the right to lodge a complaint with the relevant authority, please
              contact our Data Protection Officer at{" "}
              <a
                href="mailto:admin@mycityapp.io"
                className="text-[#103729] underline font-medium"
              >
                admin@mycityapp.io
              </a>
              .
            </p>
          </section>

          {/* Section 8 */}
          <section id="changes-to-policy" className="mb-10">
            <h2 className="text-2xl font-bold text-[#103729] mb-3">
              8. Changes to the Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our Privacy Policy may be updated from time to time. We will post
              any privacy policy changes on this page and, if the changes are
              significant, we will provide a more prominent notice. We will also
              keep prior versions of this Privacy Policy in an archive for your
              review.
            </p>
          </section>

          {/* Section 9 */}
          <section id="glossary" className="mb-10">
            <h2 className="text-2xl font-bold text-[#103729] mb-3">
              9. Glossary
            </h2>
            <h3 className="font-semibold text-[#103729] mb-2 text-lg">
              Lawful processing
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We rely on the following lawful bases to process your personal
              data:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mt-2">
              <li>Performance of a contract</li>
              <li>Compliance with a legal obligation</li>
              <li>Legitimate interests</li>
              <li>Consent</li>
            </ul>
          </section>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default PrivacyPolicyPage;
