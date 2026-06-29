import { Metadata } from "next";
import BotswanaTermsPage from "./BotswanaTermsPage";

export const metadata: Metadata = {
  title: "Terms & Conditions (CityApp Africa)",
  description:
    "Terms and Conditions governing your access to and use of the CityApp Africa.",
};

export default function Page() {
  return <BotswanaTermsPage />;
}
