import { Metadata } from "next";
import PrivacyPolicyPage from "./PrivacyPolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how MyCityApp Africa collects, uses, and protects your personal data.",
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
