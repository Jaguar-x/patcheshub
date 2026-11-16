import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/sections/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how PatchesHub handles quote requests, contact details, and uploaded artwork.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" intro="This policy describes how PatchesHub handles information you share when you visit the website or request a quote.">
      <section><h2>Information you share</h2><p>A quote request includes your name, email address, and project details such as product options, quantity, dimensions, and instructions. It may also include a phone number and artwork files. Please share only the information and files needed to explain your project.</p></section>
      <section><h2>How we use it</h2><p>We use your information to review your request, contact you about the project, prepare a quote, and coordinate any order you confirm. The contact page’s inquiry preview runs in your browser. The separate quote form sends your request when quote delivery is available.</p></section>
      <section><h2>Service providers</h2><p>When quote delivery is enabled, the website forwards your request and any uploaded artwork to the service used to receive quote submissions. Hosting services may process technical request information to operate and troubleshoot the website.</p></section>
      <section><h2>Retention and requests</h2><p>Retention depends on whether the inquiry is still active, whether it becomes an order, and whether records are needed for business or legal obligations. You can request access to, correction of, or deletion of your information, subject to applicable requirements.</p></section>
      <section><h2>Contact us</h2><p>For a privacy question or request, use the contact details on our <Link href="/contact">Contact page</Link> or reply to an existing PatchesHub quote email.</p></section>
    </LegalPage>
  );
}
