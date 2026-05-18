'use client';
import { useState, useRef } from "react";

const ACCENT = "#0A2540";
const ACCENT_LIGHT = "#1a3a5c";
const GOLD = "#C9A84C";
const BG = "#FAFAF8";
const CARD_BG = "#FFFFFF";
const BORDER = "#E2E2DE";
const TEXT = "#1a1a1a";
const TEXT_MUTED = "#6B7280";
const ERROR = "#DC2626";
const SUCCESS = "#059669";

const sectionStyle = {
  marginBottom: 32,
  padding: "28px 32px",
  background: CARD_BG,
  borderRadius: 12,
  border: `1px solid ${BORDER}`,
  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
};

const labelStyle = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  color: TEXT,
  marginBottom: 6,
  letterSpacing: "0.02em",
  fontFamily: "'DM Sans', sans-serif",
};

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  fontSize: 15,
  border: `1.5px solid ${BORDER}`,
  borderRadius: 8,
  background: "#FAFAF8",
  color: TEXT,
  fontFamily: "'DM Sans', sans-serif",
  transition: "border-color 0.2s, box-shadow 0.2s",
  outline: "none",
  boxSizing: "border-box",
};

const inputFocusStyle = {
  borderColor: GOLD,
  boxShadow: `0 0 0 3px ${GOLD}22`,
};

const inputErrorStyle = {
  borderColor: ERROR,
  boxShadow: `0 0 0 3px ${ERROR}15`,
};

const checkboxWrapStyle = {
  display: "flex",
  gap: 12,
  alignItems: "flex-start",
  marginBottom: 16,
  padding: "14px 16px",
  borderRadius: 8,
  background: "#FAFAF8",
  border: `1px solid ${BORDER}`,
  cursor: "pointer",
  transition: "background 0.2s, border-color 0.2s",
};

const checkboxWrapCheckedStyle = {
  background: `${GOLD}08`,
  borderColor: `${GOLD}44`,
};

function Input({ label, error, required, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: 18 }}>
      <label style={labelStyle}>
        {label} {required && <span style={{ color: GOLD }}>*</span>}
      </label>
      <input
        {...props}
        style={{
          ...inputStyle,
          ...(focused ? inputFocusStyle : {}),
          ...(error ? inputErrorStyle : {}),
        }}
        onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
      />
      {error && (
        <span style={{ fontSize: 12, color: ERROR, marginTop: 4, display: "block", fontFamily: "'DM Sans', sans-serif" }}>
          {error}
        </span>
      )}
    </div>
  );
}

function Checkbox({ label, checked, onChange, error, longText }) {
  return (
    <div
      style={{
        ...checkboxWrapStyle,
        ...(checked ? checkboxWrapCheckedStyle : {}),
        ...(error ? { borderColor: ERROR } : {}),
      }}
      onClick={() => onChange(!checked)}
    >
      <div
        style={{
          minWidth: 22,
          height: 22,
          borderRadius: 5,
          border: `2px solid ${checked ? GOLD : "#C4C4C0"}`,
          background: checked ? GOLD : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s",
          marginTop: 1,
          flexShrink: 0,
        }}
      >
        {checked && (
          <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
            <path d="M1.5 5L5 8.5L11.5 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      <span
        style={{
          fontSize: longText ? 13 : 14,
          color: TEXT,
          lineHeight: 1.5,
          fontFamily: "'DM Sans', sans-serif",
          userSelect: "none",
        }}
      >
        {label}
      </span>
    </div>
  );
}

const initialForm = {
  vorname: "",
  nachname: "",
  strasse: "",
  plz: "",
  ort: "",
  email: "",
  telefon: "",
  geburtsdatum: "",
  kontoinhaber: "",
  iban: "",
  kondition: "studierend",
  immatrikuliert: false,
  ausbildung: false,
  satzung: false,
  datenschutz: false,
  sepa: false,
  whatsapp: true,
};

export default function BFCMitgliedsantrag() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const formRef = useRef(null);

  const set = (key) => (valOrEvent) => {
    const val = typeof valOrEvent === "boolean" ? valOrEvent : valOrEvent?.target?.value ?? valOrEvent;
    setForm((f) => ({ ...f, [key]: val }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.vorname.trim()) e.vorname = "Bitte Vornamen angeben";
    if (!form.nachname.trim()) e.nachname = "Bitte Nachnamen angeben";
    if (!form.strasse.trim()) e.strasse = "Bitte Straße und Hausnummer angeben";
    if (!form.plz.trim() || !/^\d{5}$/.test(form.plz.trim())) e.plz = "Bitte gültige PLZ angeben";
    if (!form.ort.trim()) e.ort = "Bitte Ort angeben";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Bitte gültige E-Mail angeben";
    if (!form.telefon.trim()) e.telefon = "Bitte Telefonnummer angeben";
    if (!form.geburtsdatum) e.geburtsdatum = "Bitte Geburtsdatum angeben";
    if (!form.kontoinhaber.trim()) e.kontoinhaber = "Bitte Kontoinhaber angeben";
    if (!form.iban.trim() || form.iban.replace(/\s/g, "").length < 15) e.iban = "Bitte gültige IBAN angeben";
    if (!form.satzung) e.satzung = "Pflichtfeld";
    if (!form.datenschutz) e.datenschutz = "Pflichtfeld";
    if (!form.sepa) e.sepa = "Pflichtfeld";
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      const firstError = formRef.current?.querySelector('[data-error="true"]');
      firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSubmitting(true);
    setSubmitError(false);

    // Formspree or custom endpoint — replace YOUR_FORM_ID
    try {
      const res = await fetch("https://formspree.io/f/xykvgred", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Vorname: form.vorname,
          Nachname: form.nachname,
          Strasse: form.strasse,
          PLZ: form.plz,
          Ort: form.ort,
          Email: form.email,
          Telefon: form.telefon,
          Geburtsdatum: form.geburtsdatum,
          Kontoinhaber: form.kontoinhaber,
          IBAN: form.iban,
          Kondition: form.kondition === "studierend" ? "Studierende/Auszubildende (12€/Halbjahr)" : "Sonstige (22€/Halbjahr)",
          Immatrikuliert: form.immatrikuliert ? "Ja" : "Nein",
          In_Ausbildung: form.ausbildung ? "Ja" : "Nein",
          Satzung_akzeptiert: "Ja",
          Datenschutz_akzeptiert: "Ja",
          SEPA_Mandat_erteilt: "Ja",
          WhatsApp_Gruppe: form.whatsapp ? "Ja" : "Nein",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    }
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div style={{ minHeight: "100vh", background: BG, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', sans-serif", padding: 24 }}>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />
        <div style={{ textAlign: "center", maxWidth: 520, background: CARD_BG, padding: "48px 40px", borderRadius: 16, border: `1px solid ${BORDER}`, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: `${SUCCESS}15`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={SUCCESS} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: ACCENT, marginBottom: 12 }}>Antrag eingegangen!</h2>
          <p style={{ fontSize: 15, color: TEXT_MUTED, lineHeight: 1.6, marginBottom: 0 }}>
            Vielen Dank für dein Interesse am Business and Finance Club Flensburg. Wir prüfen deinen Antrag und melden uns zeitnah mit einer Bestätigung und den nächsten Schritten.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: BG, fontFamily: "'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{
        background: ACCENT,
        padding: "48px 24px 56px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: `radial-gradient(ellipse at 30% 0%, ${ACCENT_LIGHT} 0%, transparent 60%), radial-gradient(ellipse at 80% 100%, ${GOLD}15 0%, transparent 50%)`,
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: `${GOLD}20`,
            padding: "6px 16px",
            borderRadius: 20,
            marginBottom: 16,
          }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: GOLD, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              BFC Flensburg e.V.
            </span>
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 5vw, 40px)",
            color: "white",
            fontWeight: 700,
            margin: "0 0 12px",
            lineHeight: 1.2,
          }}>
            Mitgliedschaft beantragen
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", maxWidth: 480, margin: "0 auto", lineHeight: 1.5 }}>
            Werde Teil des nördlichsten Börsenvereins Deutschlands.
          </p>
        </div>
      </div>

      {/* Form */}
      <div ref={formRef} style={{ maxWidth: 640, margin: "-24px auto 0", padding: "0 20px 60px", position: "relative", zIndex: 2 }}>

        {/* Konditionen */}
        <div style={{ ...sectionStyle, background: `${GOLD}08`, borderColor: `${GOLD}30` }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: ACCENT, marginBottom: 12, letterSpacing: "0.02em", textTransform: "uppercase" }}>Konditionen</div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              { key: "studierend", label: "Studierende / Auszubildende", price: "12,00 €" },
              { key: "sonstige", label: "Sonstige", price: "22,00 €" },
            ].map((k) => (
              <div
                key={k.key}
                onClick={() => set("kondition")(k.key)}
                style={{
                  flex: "1 1 200px",
                  padding: "16px 20px",
                  borderRadius: 10,
                  border: `2px solid ${form.kondition === k.key ? GOLD : BORDER}`,
                  background: form.kondition === k.key ? `${GOLD}12` : CARD_BG,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <div style={{ fontSize: 15, fontWeight: 600, color: TEXT, marginBottom: 4 }}>{k.label}</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: GOLD, fontFamily: "'Playfair Display', serif" }}>{k.price}</div>
                <div style={{ fontSize: 12, color: TEXT_MUTED }}>pro Halbjahr</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 12, marginBottom: 0, lineHeight: 1.5 }}>
            Die Beträge werden jeweils zum 01.04. und zum 01.10. fällig. Kündigung ist bis zum Zahlungsziel ohne Einhaltung einer Frist möglich.
          </p>
        </div>

        {/* Persönliche Daten */}
        <div style={sectionStyle}>
          <div style={{ fontSize: 13, fontWeight: 600, color: ACCENT, marginBottom: 20, letterSpacing: "0.02em", textTransform: "uppercase" }}>Persönliche Daten</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
            <div data-error={!!errors.vorname || undefined}>
              <Input label="Vorname" required value={form.vorname} onChange={set("vorname")} error={errors.vorname} />
            </div>
            <div data-error={!!errors.nachname || undefined}>
              <Input label="Nachname" required value={form.nachname} onChange={set("nachname")} error={errors.nachname} />
            </div>
          </div>
          <div data-error={!!errors.strasse || undefined}>
            <Input label="Straße und Hausnummer" required value={form.strasse} onChange={set("strasse")} error={errors.strasse} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: "0 16px" }}>
            <div data-error={!!errors.plz || undefined}>
              <Input label="PLZ" required value={form.plz} onChange={set("plz")} error={errors.plz} maxLength={5} />
            </div>
            <div data-error={!!errors.ort || undefined}>
              <Input label="Ort" required value={form.ort} onChange={set("ort")} error={errors.ort} />
            </div>
          </div>
          <div data-error={!!errors.email || undefined}>
            <Input label="E-Mail" required type="email" value={form.email} onChange={set("email")} error={errors.email} />
          </div>
          <div data-error={!!errors.telefon || undefined}>
            <Input label="Telefon / Handynummer" required type="tel" value={form.telefon} onChange={set("telefon")} error={errors.telefon} />
          </div>
          <div data-error={!!errors.geburtsdatum || undefined}>
            <Input label="Geburtsdatum" required type="date" value={form.geburtsdatum} onChange={set("geburtsdatum")} error={errors.geburtsdatum} />
          </div>
        </div>

        {/* Bankverbindung */}
        <div style={sectionStyle}>
          <div style={{ fontSize: 13, fontWeight: 600, color: ACCENT, marginBottom: 20, letterSpacing: "0.02em", textTransform: "uppercase" }}>Bankverbindung</div>
          <div data-error={!!errors.kontoinhaber || undefined}>
            <Input label="Kontoinhaber" required value={form.kontoinhaber} onChange={set("kontoinhaber")} error={errors.kontoinhaber} />
          </div>
          <div data-error={!!errors.iban || undefined}>
            <Input label="IBAN" required value={form.iban} onChange={set("iban")} error={errors.iban} placeholder="DE00 0000 0000 0000 0000 00" />
          </div>
        </div>

        {/* Status */}
        <div style={sectionStyle}>
          <div style={{ fontSize: 13, fontWeight: 600, color: ACCENT, marginBottom: 20, letterSpacing: "0.02em", textTransform: "uppercase" }}>Status</div>
          <Checkbox
            label="Ich bin zur Zeit an einer Hochschule oder Universität immatrikuliert und werde im Fall einer Änderung meiner Anschrift oder meines Studentenstatus den Verein in Kenntnis setzen."
            checked={form.immatrikuliert}
            onChange={set("immatrikuliert")}
            longText
          />
          <Checkbox
            label="Ich bin aktuell in einer Ausbildung."
            checked={form.ausbildung}
            onChange={set("ausbildung")}
          />
        </div>

        {/* Rechtliches */}
        <div style={sectionStyle}>
          <div style={{ fontSize: 13, fontWeight: 600, color: ACCENT, marginBottom: 20, letterSpacing: "0.02em", textTransform: "uppercase" }}>Zustimmungen</div>

          <Checkbox
            label="Ich habe die aktuelle Satzung gelesen und akzeptiert. Des Weiteren akzeptiere ich die dort enthaltenen Beiträge."
            checked={form.satzung}
            onChange={set("satzung")}
            error={errors.satzung}
            longText
          />

          <Checkbox
            label="Ich habe die Datenschutzerklärung des Vereins gelesen und akzeptiere diese. Ich bin damit einverstanden, dass für den Zeitschriftenversand notwendige Daten an den BVH weitergeleitet werden."
            checked={form.datenschutz}
            onChange={set("datenschutz")}
            error={errors.datenschutz}
            longText
          />

          <Checkbox
            label={`Hiermit ermächtige ich den Business and Finance Club Flensburg e.V., Kanzleistr. 91–93, 24943 Flensburg, fällige Mitgliedsbeiträge als wiederkehrende Zahlung von meinem Konto mittels Lastschrift jeweils zum 01.04. und 01.10. eines Jahres einzuziehen. Zugleich weise ich mein Kreditinstitut an, die vom Zahlungsempfänger gezogene Lastschriften einzulösen. Ich verpflichte mich, entstehende Kosten einer Rückbuchung der Lastschrift zu tragen. Die Einzugsermächtigung ist bis zu einem Widerruf gültig. Ich bestätige zu wissen, dass ich, beginnend mit dem Belastungsdatum, innerhalb von acht Wochen die Erstattung des belasteten Betrages verlangen kann.`}
            checked={form.sepa}
            onChange={set("sepa")}
            error={errors.sepa}
            longText
          />

          <Checkbox
            label="Ich bin damit einverstanden, dass ich über meine Handynummer eine Einladung zur WhatsApp-Gruppe des Business and Finance Club Flensburg e.V. erhalte."
            checked={form.whatsapp}
            onChange={set("whatsapp")}
            longText
          />
        </div>

        {/* Submit */}
        {submitError && (
          <div style={{
            padding: "14px 20px",
            background: `${ERROR}10`,
            border: `1px solid ${ERROR}30`,
            borderRadius: 10,
            marginBottom: 16,
            fontSize: 14,
            color: ERROR,
          }}>
            Es ist ein Fehler aufgetreten. Bitte versuche es erneut oder kontaktiere uns unter info@bfc-flensburg.de.
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={submitting}
          style={{
            width: "100%",
            padding: "16px 32px",
            fontSize: 16,
            fontWeight: 600,
            color: "white",
            background: submitting ? TEXT_MUTED : ACCENT,
            border: "none",
            borderRadius: 10,
            cursor: submitting ? "not-allowed" : "pointer",
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: "0.02em",
            transition: "all 0.2s",
            boxShadow: `0 2px 8px ${ACCENT}30`,
            position: "relative",
            overflow: "hidden",
          }}
          onMouseEnter={(e) => { if (!submitting) e.target.style.background = ACCENT_LIGHT; }}
          onMouseLeave={(e) => { if (!submitting) e.target.style.background = ACCENT; }}
        >
          {submitting ? "Wird gesendet..." : "Mitgliedschaft beantragen"}
        </button>

        <p style={{ textAlign: "center", fontSize: 13, color: TEXT_MUTED, marginTop: 16, lineHeight: 1.5 }}>
          Du erhältst, nachdem wir deinen Antrag geprüft haben, eine Bestätigungsmail mit weiteren Schritten.
        </p>

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: 40, paddingTop: 24, borderTop: `1px solid ${BORDER}` }}>
          <div style={{ fontSize: 12, color: TEXT_MUTED, lineHeight: 1.6 }}>
            Business and Finance Club Flensburg e.V. · Kanzleistr. 91–93 · 24943 Flensburg
            <br />
            <a href="mailto:info@bfc-flensburg.de" style={{ color: GOLD, textDecoration: "none" }}>info@bfc-flensburg.de</a>
          </div>
        </div>
      </div>
    </div>
  );
}
