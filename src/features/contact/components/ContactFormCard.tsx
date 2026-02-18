"use client";

import { useMemo, useState } from "react";
import { CONTACT } from "../content/contact.content";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

function FlagIcon() {
  return (
    <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/10 text-[11px]">
      🏳️
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

  const onChange = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only; wire to API later
    alert(`Message sent!\n\n${JSON.stringify(form, null, 2)}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-140 rounded-2xl border border-white/10 bg-black/35 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur md:p-8"
    >
      <div className="text-lg font-display font-extrabold uppercase tracking-tight text-white">
        {CONTACT.form.title}
        <FlagIcon />
      </div>

      <div className="mt-6 grid gap-4">
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
        <Select value={form.subject} onChange={onChange("subject")}>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </Select>

        {/* Message */}
        <Textarea
          value={form.message}
          onChange={onChange("message")}
          placeholder={CONTACT.form.placeholders.message}
        />

        {/* Submit */}
        <button
          type="submit"
          className="mt-2 h-12 w-full rounded-xl bg-sky-500 text-sm font-extrabold text-white shadow-[0_18px_55px_rgba(0,0,0,0.55)] hover:brightness-110"
        >
          {CONTACT.form.button}
        </button>
      </div>
    </form>
  );
}

function baseField() {
  return [
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3",
    "text-sm text-white outline-none placeholder:text-white/35",
    "focus:border-sky-500/60 focus:ring-2 focus:ring-sky-500/20",
  ].join(" ");
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={baseField()} />;
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...props} className={[baseField(), "appearance-none"].join(" ")}>
      {props.children}
    </select>
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} rows={5} className={baseField()} />;
}
