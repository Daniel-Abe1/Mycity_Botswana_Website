import { Metadata } from "next";
import TermsConditionsPage from "./TermsConditionsPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions governing your use of the MyCityApp platform and services.",
};

export default function Page() {
  return <TermsConditionsPage />;
}
