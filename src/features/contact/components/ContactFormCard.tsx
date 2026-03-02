"use client";

import { useMemo, useState } from "react";
import { CONTACT } from "../content/contact.content";
import { Reveal, Stagger } from "@/shared/motion/Motion";
import { scaleIn } from "@/shared/motion/variants";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

function FlagIcon() {
  return (
    <span className="ml-2 inline-flex items-center">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="none"
      >
        {/* pole */}
        <path
          d="M5.5 3.5v17"
          stroke="#0B4FD6"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* flag (filled + outlined) */}
        <path
          d="M7.6 5.3c3.1-1.5 5.9-1.5 9 0 2.1 1 3.8 1 5.9 0v10.9c-2.1 1-3.8 1-5.9 0-3.1-1.5-5.9-1.5-9 0V5.3Z"
          fill="#168BFF"
          stroke="#0B4FD6"
          strokeWidth="1"
          strokeLinejoin="round"
        />

        {/* subtle highlight (like the glossy look) */}
        <path
          d="M8.2 6.3c2.8-1.2 5.2-1.1 8 .2 1.7.8 3.1.9 4.7.2v2.2c-1.6.6-3 .5-4.7-.3-2.8-1.3-5.2-1.4-8-.2V6.3Z"
          fill="#FFFFFF"
          opacity="0.14"
        />
      </svg>
    </span>
  );
}

export default function ContactFormCard() {
  const subjects = useMemo(() => CONTACT.form.subjects, []);
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    subject: subjects[0] ?? "General Inquiry",
    message: "",
  });

  const onChange =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((p) => ({ ...p, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent!\n\n${JSON.stringify(form, null, 2)}`);
  };

  return (
    <Reveal variant={scaleIn} className="w-full">
      <form
        onSubmit={onSubmit}
        className={[
          "group relative w-full max-w-140 overflow-hidden rounded-2xl",
          "border border-white/10",
          //  card background like screenshot
          "bg-[#171717]/90",
          "shadow-[0_25px_80px_rgba(0,0,0,0.55)]",
          "backdrop-blur",
          "p-6 md:p-8",
        ].join(" ")}
      >
        {/* soft card gradient + vignette like screenshot */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-b from-white/4 via-transparent to-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_0%_0%,rgba(255,255,255,0.05),transparent_55%)]" />
        </div>

        <Stagger className="relative">
          <Reveal className="text-lg font-display font-extrabold uppercase tracking-tight text-white">
            {CONTACT.form.title}
            <FlagIcon />
          </Reveal>

          <Reveal className="mt-6 grid gap-4">
            {/* First / Last */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                value={form.firstName}
                onChange={onChange("firstName")}
                placeholder={CONTACT.form.placeholders.firstName}
              />
              <Input
                value={form.lastName}
                onChange={onChange("lastName")}
                placeholder={CONTACT.form.placeholders.lastName}
              />
            </div>

            {/* Email */}
            <Input
              value={form.email}
              onChange={onChange("email")}
              placeholder={CONTACT.form.placeholders.email}
              type="email"
            />

            {/* Subject */}
            <div className="relative">
              <Select value={form.subject} onChange={onChange("subject")}>
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </Select>

              {/* chevron */}
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/45">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>

            {/* Message */}
            <Textarea
              value={form.message}
              onChange={onChange("message")}
              placeholder={CONTACT.form.placeholders.message}
            />

            {/* Submit */}
            <button
              type="submit"
              className="mt-2 h-12 w-full rounded-xl bg-sky-800 text-sm font-extrabold text-white shadow-[0_18px_55px_rgba(0,0,0,0.55)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
            >
              {CONTACT.form.button}
            </button>
          </Reveal>
        </Stagger>
      </form>
    </Reveal>
  );
}

function baseField() {
  return [
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3",
    "text-sm text-white outline-none placeholder:text-white/35",
    "transition",
    "focus:border-sky-500/60 focus:ring-2 focus:ring-sky-500/20",
  ].join(" ");
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={baseField()} />;
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={[baseField(), "appearance-none pr-10"].join(" ")}
    >
      {props.children}
    </select>
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} rows={5} className={baseField()} />;
}
