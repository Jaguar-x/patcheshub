"use client";

import { patchTypes } from "@/content/patch-types";
import { useState, type FormEvent } from "react";
import { ArrowIcon, CheckIcon } from "@/components/ui/icons";

type ContactFormProps = { initialProduct?: string };

export function ContactForm({ initialProduct = "" }: ContactFormProps) {
  const [review, setReview] = useState<{ name: string; product: string } | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    setReview({ name: String(data.get("name")).trim(), product: String(data.get("product")) });
  }

  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-heading"><span className="eyebrow">A few details to get us started</span><span>* Required</span></div>
    <div className="form-grid">
      <div className="form-field"><label htmlFor="name">Your name <span>*</span></label><input id="name" name="name" autoComplete="name" placeholder="First and last name" required maxLength={100} pattern=".*\S.*" /></div>
      <div className="form-field"><label htmlFor="email">Email address <span>*</span></label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required maxLength={254} /></div>
      <div className="form-field"><label htmlFor="company">Company or organization <span className="optional">Optional</span></label><input id="company" name="company" autoComplete="organization" placeholder="Your brand, team, or organization" maxLength={150} /></div>
      <div className="form-field">
        <label htmlFor="product">What are you thinking? <span>*</span></label>
        <select id="product" name="product" defaultValue={initialProduct} required>
          <option value="" disabled>Choose a product</option>
          <option value="patches">Custom patches</option>
          {patchTypes.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
          <option value="pins">Custom pins</option>
          <option value="coins">Custom coins</option>
          <option value="keychains">Custom keychains</option>
          <option value="multiple">A mix of products</option>
          <option value="unsure">Help me choose</option>
        </select>
      </div>
      <div className="form-field form-full"><label htmlFor="message">Tell us about your idea <span>*</span></label><textarea id="message" name="message" rows={5} placeholder="A little about your design, quantity, size, or deadline. It’s okay if you’re still figuring things out." required minLength={10} maxLength={5000} /><span className="field-hint">No finished artwork needed. A few words is a great start.</span></div>
    </div>
    <div className="form-bottom"><p><CheckIcon /> No minimum order quantity.<br /><span>No pressure to have it all figured out.</span></p><button type="submit" className="button button-red">Preview my inquiry <ArrowIcon /></button></div>
    <p className="form-preview-note" id="form-preview-note">Form preview only. Sending is not enabled, and your details will not be submitted or stored.</p>
    {review && <div className="form-review" role="status" aria-live="polite"><strong>Looking good, {review.name}.</strong><p>Your {review.product === "unsure" ? "project" : review.product === "multiple" ? "product collection" : patchTypes.find(({ id }) => id === review.product)?.name ?? review.product} inquiry is ready to send once messaging is available. Nothing has been sent or saved.</p><button type="button" className="text-link" onClick={() => { setReview(null); document.getElementById("name")?.focus(); }}>Keep editing <ArrowIcon /></button></div>}
  </form>;
}
