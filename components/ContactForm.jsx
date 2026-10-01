"use client";

import { useState } from "react";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "b8b5ef3a-21fe-40c4-9149-0b63e908dc06";

export default function ContactForm({ compact = false }) {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function submitForm(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setBusy(true);
    setStatus("");
    const data = new FormData(form);
    data.append("access_key", accessKey);
    data.append("subject", "New enquiry - Brand Banao Digital");
    data.append("from_name", "Brand Banao Digital website");
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data, headers: { Accept: "application/json" } });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || "Submission failed");
      form.reset();
      setStatus("Thanks for reaching out. Your message has been sent.");
    } catch {
      setStatus("We could not send your message right now. Please try again or contact us on WhatsApp.");
    } finally { setBusy(false); }
  }

  return <form className={`contact-form ${compact ? "contact-form-compact" : ""}`} onSubmit={submitForm}>
    <label>Name <span aria-hidden="true">*</span><input name="name" autoComplete="name" required minLength={3} maxLength={20} pattern=".{3,20}" title="Enter 3 to 20 characters." placeholder="Your name" /></label>
    <div className="phone-fields">
      <label>Country code <span aria-hidden="true">*</span><select name="country_code" defaultValue="+91" required aria-label="Country code"><option value="+91">India (+91)</option><option value="+1">United States (+1)</option><option value="+44">United Kingdom (+44)</option><option value="+971">UAE (+971)</option><option value="+61">Australia (+61)</option></select></label>
      <label>Phone number <span aria-hidden="true">*</span><input name="phone" type="tel" inputMode="numeric" autoComplete="tel-national" required minLength={10} maxLength={10} pattern="[0-9]{10}" title="Enter a 10-digit phone number." placeholder="10-digit number" /></label>
    </div>
    <label>Message <span aria-hidden="true">*</span><textarea name="message" required minLength={5} maxLength={500} rows={compact ? 3 : 5} placeholder="Tell us what you are looking to build" /></label>
    <button className="button button-primary" type="submit" disabled={busy}>{busy ? "Sending…" : "Send message"} <span aria-hidden="true">→</span></button>
    <p className="form-status" aria-live="polite" role="status">{status}</p>
  </form>;
}
