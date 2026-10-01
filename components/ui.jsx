import ContactForm from "./ContactForm";

export function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return <div className={`section-heading section-heading-${align}`}>
    <span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description ? <p>{description}</p> : null}
  </div>;
}

export function PlaceholderImage({ label, src }) {
  return <div className="placeholder-frame" role="img" aria-label={label}>
    {src && <img className="placeholder-image" src={src} alt={label} />}
    <div className="placeholder-grid" aria-hidden="true"><span className="grid-line grid-line-horizontal" /><span className="grid-line grid-line-vertical" /><span className="focus-ring" /></div>
  </div>;
}

export function ContactPanel({ compact = false }) {
  return <div className={`form-card ${compact ? "form-card-compact" : ""}`}>
    <h3>{compact ? "Send us a message" : "Tell us about your project"}</h3>
    {!compact && <p className="form-intro">Share a few details and our team will get back to you about the next steps.</p>}
    <ContactForm compact={compact} />
  </div>;
}
