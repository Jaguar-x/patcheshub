"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { quoteChoices, quoteUnits, quoteFileAccept, quoteFileError } from "@/content/quote";
import { productCategories } from "@/content/products";
import { QuoteIcon } from "@/components/ui/quote-icon";
import { ArrowIcon, CheckIcon } from "@/components/ui/icons";

const promotional = productCategories.filter(({ slug }) => slug !== "patches");
const emptyQuote: Record<string, string> = {
  category: "", product: "", material: "", quantity: "", width: "", height: "", unit: "in",
  backing: "", name: "", email: "", instructions: "", phone: "",
};

export function QuoteForm({ initialProduct, initialMaterial }: { initialProduct?: string; initialMaterial?: string } = {}) {
  const [step, setStep] = useState(initialProduct === "patches" ? 1 : initialProduct ? 2 : 0);
  const [quote, setQuote] = useState(initialProduct ? { ...emptyQuote, category: initialProduct === "patches" ? "patches" : "promotional", product: initialProduct, material: initialMaterial ?? "" } : emptyQuote);
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  const focusOnChange = useRef(false);
  const product = productCategories.find(({ slug }) => slug === quote.product);

  const choices = quoteChoices(quote.product, quote.material);
  const screens = [
    { key: "category", title: "What are you looking for?", icon: "", options: ["patches", "promotional"] },
    ...(quote.category === "promotional" ? [{ key: "product", title: "Choose a promotional product", icon: "", options: promotional.map(({ slug }) => slug) }] : []),
    ...choices,
    { key: "order", title: "Tell us about your order" },
    { key: "contact", title: "Where should we send your quote?" },
    { key: "review", title: "Review your quote request" },
  ];
  const screen = screens[step];
  const complete = step === screens.length;
  const orderStep = screens.findIndex(({ key }) => key === "order");
  const progress = step < orderStep ? 0 : step - orderStep + 1;
  const reviewLabels: Record<string, string> = { material: "Style", backing: "Backing", shape: "Shape", twill: "Twill color", border: "Border", design: "Design area", attachment: "Attachment", plating: "Plating", edge: "Edge" };
  const groups = ["Product options", "Order details", "Contact", "Review"];

  useEffect(() => {
    if (focusOnChange.current) heading.current?.focus();
  }, [step]);

  function goTo(next: number) {
    focusOnChange.current = true;
    setError("");
    setStep(next);
  }

  function update(field: string, value: string) {
    setQuote((current) => ({ ...current, [field]: value }));
  }

  function addFiles(incoming: FileList) {
    const next = [...files, ...Array.from(incoming)];
    const message = quoteFileError(next);
    setFileError(message);
    if (!message) setFiles(next);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    if (screen.key !== "review") {
      goTo(step + 1);
      return;
    }

    setPending(true);
    setError("");
    try {
      const body = new FormData();
      body.set("quote", JSON.stringify(quote));
      files.forEach((file) => body.append("artwork", file));
      const response = await fetch("/api/quote", {
        method: "POST",
        body,
      });
      const result = await response.json();
      if (response.ok && result.received) goTo(screens.length);
      else setError(result.error ?? "We couldn't confirm delivery. Please try again.");
    } catch {
      setError("We couldn't confirm delivery. Please try again.");
    } finally {
      setPending(false);
    }
  }

  if (complete) {
    return <div className="quote-panel quote-success">
      <span className="quote-confirmation-icon"><CheckIcon /></span>
      <h2 ref={heading} tabIndex={-1}>Quote request received</h2>
      <p>Thanks, {quote.name.trim()}. We’ll follow up about your custom {product?.name.toLowerCase()} at <strong>{quote.email}</strong>.</p>
      <button className="button button-red" type="button" onClick={() => { setQuote(emptyQuote); setFiles([]); setFileError(""); goTo(0); }}>Start another quote <ArrowIcon /></button>
    </div>;
  }

  return <div className="quote-panel">
    <ol className="quote-progress" aria-label="Quote progress">
      {groups.map((label, index) => <li key={label} aria-current={index === progress ? "step" : undefined} data-complete={index < progress}>
        <span aria-hidden="true">{index < progress ? <CheckIcon /> : index + 1}</span>{label}
      </li>)}
    </ol>
    <form onSubmit={submit} aria-labelledby="quote-step-heading">
      <h2 id="quote-step-heading" ref={heading} tabIndex={-1}>{screen.title}</h2>
      {"options" in screen && screen.options && <fieldset key={screen.key} className="quote-products" data-choice-count={screen.options.length} aria-labelledby="quote-step-heading">
        {screen.options.map((option) => {
          const label = screen.key === "category"
            ? (option === "patches" ? "Custom patches" : "Promotional products")
            : productCategories.find(({ slug }) => slug === option)?.name ?? option;
          return <label className="quote-product" key={option}>
            <input name={screen.key} type="radio" required checked={quote[screen.key] === option} onChange={() => {
              if (screen.key === "category") {
                setQuote((current) => ({ ...emptyQuote, name: current.name, email: current.email, instructions: current.instructions, phone: current.phone, category: option, product: option === "patches" ? "patches" : "" }));
              } else if (screen.key === "product" || screen.key === "material") {
                setQuote((current) => {
                  const next = { ...current, [screen.key]: option };
                  for (const { key } of choices) {
                    if (key !== screen.key) delete next[key];
                  }
                  return next;
                });
              } else update(screen.key, option);
            }} />
            <QuoteIcon kind={screen.icon || (option === "patches" ? "badge" : option)} option={option} />
            <strong>{label}</strong>
          </label>;
        })}
      </fieldset>}
      {screen.key === "order" && <div className="form-grid">
        <datalist id="quote-quantities">
          {(product?.slug === "coins" ? [25, 50, 100, 200, 300, 500, 5000] : [10, 25, 50, 100, 200, 300, 500, 1000]).map((value) => <option key={value} value={value} />)}
        </datalist>
        {quote.unit === "in" && <datalist id="quote-sizes">
          {(product?.slug === "pins" ? [.5, .75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3] : [1.5, 1.75, 2, 2.25, 2.5, 2.75, 3]).map((value) => <option key={value} value={value} />)}
        </datalist>}
        <div className="form-field form-full"><label htmlFor="quote-quantity">Quantity <span>*</span></label>
          <input id="quote-quantity" list="quote-quantities" required inputMode="numeric" pattern="[1-9][0-9]*" maxLength={12} placeholder="e.g. 100" value={quote.quantity} onChange={(event) => update("quantity", event.target.value)} />
        </div>
        <div className="quote-dimensions form-full">
          <div className="form-field"><label htmlFor="quote-width">Width</label>
            <input id="quote-width" list={product?.slug === "pins" || product?.slug === "coins" ? "quote-sizes" : undefined} type="number" min="0" step="any" value={quote.width} onChange={(event) => update("width", event.target.value)} />
          </div>
          <div className="form-field"><label htmlFor="quote-height">Height</label>
            <input id="quote-height" type="number" min="0" step="any" value={quote.height} onChange={(event) => update("height", event.target.value)} />
          </div>
          <div className="form-field"><label htmlFor="quote-unit">Unit</label>
            <select id="quote-unit" value={quote.unit} onChange={(event) => update("unit", event.target.value)}>
              {quoteUnits.map((unit) => <option key={unit}>{unit}</option>)}
            </select>
          </div>
        </div>
        <div className="form-field form-full">
          <label htmlFor="quote-artwork">Artwork <span className="optional">Optional</span></label>
          <div className="quote-dropzone" onDragOver={(event) => event.preventDefault()} onDrop={(event) => {
            event.preventDefault();
            addFiles(event.dataTransfer.files);
          }}>
            <span>Drop artwork here or choose files</span>
            <input id="quote-artwork" type="file" accept={quoteFileAccept} multiple aria-describedby="quote-artwork-hint"
              onChange={(event) => {
                if (event.currentTarget.files?.length) addFiles(event.currentTarget.files);
                event.currentTarget.value = "";
              }} />
            <small id="quote-artwork-hint">Up to 5 files, 3 MB total</small>
          </div>
          {fileError && <p className="quote-error" role="alert">{fileError}</p>}
          {files.length > 0 && <ul className="quote-files">
            {files.map((file, index) => <li key={index}>
              <span>{file.name}</span>
              <button type="button" className="text-link" aria-label={`Remove ${file.name}`} onClick={() => {
                setFiles((current) => current.filter((_, fileIndex) => fileIndex !== index));
                setFileError("");
              }}>Remove</button>
            </li>)}
          </ul>}
        </div>
      </div>}
      {screen.key === "contact" && <>
        <p className="quote-summary">Custom {product?.name.toLowerCase()} · {quote.quantity} requested{quote.material && ` · ${quote.material}`}</p>
        <div className="form-grid">
          <div className="form-field"><label htmlFor="quote-name">Full name <span>*</span></label>
            <input id="quote-name" required autoComplete="name" maxLength={100} pattern={".*\\S.*"} value={quote.name} onChange={(event) => update("name", event.target.value)} />
          </div>
          <div className="form-field"><label htmlFor="quote-email">Email address <span>*</span></label>
            <input id="quote-email" required type="email" autoComplete="email" maxLength={254} value={quote.email} onChange={(event) => update("email", event.target.value)} />
          </div>
          <div className="form-field"><label htmlFor="quote-phone">Phone <span className="optional">Optional</span></label>
            <input id="quote-phone" type="tel" autoComplete="tel" maxLength={40} value={quote.phone} onChange={(event) => update("phone", event.target.value)} />
          </div>
          <div className="form-field form-full"><label htmlFor="quote-instructions">Instructions <span className="optional">Optional</span></label>
            <textarea id="quote-instructions" rows={4} maxLength={5000} placeholder="Tell us about your design, deadline, or special requirements." value={quote.instructions} onChange={(event) => update("instructions", event.target.value)} />
          </div>
        </div>
      </>}
      {screen.key === "review" && <dl className="quote-review">
        {[
          ["Product", product?.name],
          ...choices.map(({ key }) => [reviewLabels[key], quote[key]]),
          ["Quantity", quote.quantity],
          ["Width", quote.width && `${quote.width} ${quote.unit}`],
          ["Height", quote.height && `${quote.height} ${quote.unit}`],
          ["Artwork", files.map(({ name }) => name).join("\n")],
          ["Name", quote.name],
          ["Email", quote.email],
          ["Phone", quote.phone],
          ["Instructions", quote.instructions],
        ].filter(([, value]) => value).map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
      </dl>}
      {error && <p className="quote-error" role="alert">{error}</p>}
      <div className="quote-actions">
        {step > 0 && <button type="button" className="text-link" disabled={pending} onClick={() => goTo(step - 1)}>Back</button>}
        <button className="button button-red" type="submit" disabled={pending}>
          {pending ? "Sending request…" : screen.key === "review" ? "Request my quote" : screen.key === "contact" ? "Proceed to review" : "Continue"} <ArrowIcon />
        </button>
      </div>
    </form>
  </div>;
}

