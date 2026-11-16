import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/sections/legal-page";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Read the PatchesHub terms for quotes, custom artwork, proof approval, and orders.",
};

export default function TermsAndConditions() {
  return (
    <LegalPage title="Terms and Conditions" intro="These terms cover use of the PatchesHub website and requests for custom patches, pins, coins, and keychains.">
      <section><h2>Quotes and order confirmation</h2><p>Submitting a quote request starts an inquiry. Review the written quote for product specifications, quantity, price, payment terms, and delivery estimates. An order begins once PatchesHub and the customer confirm the order details.</p></section>
      <section><h2>Artwork and permissions</h2><p>Only submit artwork, logos, and other materials you own or have permission to use. By submitting artwork, you authorize PatchesHub to use it to evaluate your request, prepare a proof, and produce the order you approve. See our <Link href="/privacy-policy">Privacy Policy</Link> for how we handle uploads.</p></section>
      <section><h2>Proofs and production</h2><p>Before approving your proof, review the wording, dimensions, colors, outline, and attachment. Screen colors and materials can appear different from the finished item. Raise any questions about the proof or production tolerances before approval. Changes after approval may affect price or timing.</p></section>
      <section><h2>Delivery and order issues</h2><p>Confirm the delivery destination and tell us about any deadline before placing your order. Check your written order terms for delivery, cancellation, and return arrangements. If there is an issue with your order, contact us with your order reference, a description of the issue, and photos where helpful.</p><p>Any rights and remedies that apply by law continue to apply.</p></section>
      <section><h2>Questions</h2><p>Visit the <Link href="/contact">Contact page</Link> if you have a question about these terms or need to discuss an order.</p></section>
    </LegalPage>
  );
}
