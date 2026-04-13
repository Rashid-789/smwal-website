"use client";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  MdMail,
  MdLock,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";

// export const metadata: Metadata = {
//   title: "Login | SMWAL",
//   description: "Sign in to continue your guided journey.",
// };
const COLORS = {
  onyx: "#0B0B0F",
  bg: "#12131A",
  card: "#161821",
  text: "#E6E8F0",
  text2: "#A3A7B7",
  ring: "rgba(110,86,207,0.25)",
  gold: "#D4AF37",
  purple: "#6E56CF",
};

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 text-white/55"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m5.5 8 6.5 5 6.5-5" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 text-white/45"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3l18 18" />
      <path d="M10.6 10.7a3 3 0 0 0 4 4" />
      <path d="M9.4 5.6A10.9 10.9 0 0 1 12 5.3c5.2 0 9.4 4.7 10 6.7-.2.8-1 2-2.2 3.3" />
      <path d="M6.2 6.2C4 7.7 2.5 9.9 2 12c.9 2.8 5.1 6.7 10 6.7 1.5 0 2.9-.3 4.2-.8" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="#EA4335"
        d="M12.25 10.2v3.9h5.52c-.24 1.26-.96 2.33-2.04 3.06l3.3 2.56c1.92-1.77 3.02-4.38 3.02-7.5 0-.72-.06-1.4-.18-2.06z"
      />
      <path
        fill="#4285F4"
        d="M12.25 22c2.73 0 5.03-.9 6.7-2.43l-3.3-2.56c-.9.61-2.04.98-3.4.98-2.62 0-4.84-1.77-5.64-4.15H3.2v2.64A10.12 10.12 0 0 0 12.25 22"
      />
      <path
        fill="#FBBC05"
        d="M6.6 13.84a6.08 6.08 0 0 1 0-3.68V7.52H3.2a10.12 10.12 0 0 0 0 8.96z"
      />
      <path
        fill="#34A853"
        d="M12.25 6.02c1.48 0 2.8.5 3.84 1.48l2.88-2.88C17.27 3 14.98 2 12.25 2A10.12 10.12 0 0 0 3.2 7.52l3.4 2.64c.8-2.38 3.02-4.14 5.64-4.14"
      />
    </svg>
  );
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(122,56,255,0.22),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(0,163,255,0.18),_transparent_28%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-6 py-10 sm:px-8 lg:px-10">
        <div className="grid w-full max-w-5xl items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative mx-auto hidden h-[660px] w-full max-w-[500px] overflow-hidden rounded-[10px] bg-white/6 shadow-[0_20px_70px_rgba(0,0,0,0.42)] lg:block">
            <Image
              src="/images/login.svg"
              alt="A smiling couple standing together outdoors"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-white/8" />
          </div>

          <div className="mx-auto w-full max-w-[500px] rounded-[24px] border border-white/10 bg-[#151515]/92 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur xl:p-8">
            <div className="space-y-1">
              <h1 className="text-[28px] font-semibold tracking-[-0.03em] text-white">
                Login to Continue
              </h1>
              <p className="text-sm text-[##D9D9D9]">
                Sign in to continue your guided journey.
              </p>
            </div>

            <form className="mt-8 space-y-5">
              <label className="block space-y-4">
                <span className="block text-sm font-semibold text-[##E5E5E5]">Email</span>
                <span className="flex h-13 items-center gap-3 rounded-full border border-white/8 bg-white/[0.06] px-4 text-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                  <MdMail
                    // className="absolute left-3 top-1/2 -translate-y-1/2"
                    size={18}
                    style={{ color: COLORS.text2 }}
                  />
                  <input
                    type="email"
                    placeholder="you@gmail.com"
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-[##E5E5E5]/45" // placeholder:tracking-[0.35em] placeholder:text-white/45"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </span>
              </label>

              <label className="block space-y-4">
                <span className="block text-sm font-semibold text-[##E5E5E5]">Password</span>
                <span className="flex h-13 items-center gap-3 rounded-full border border-white/8 bg-white/[0.06] px-4 text-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                  <MdLock
                    // className="absolute left-3 top-1/2 -translate-y-1/2"
                    size={18}
                    style={{ color: COLORS.text2 }}
                  />
                  <input
                     type={showPwd ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full bg-transparent text-sm  text-white outline-none" // placeholder:tracking-[0.35em] placeholder:text-white/45"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                  />
                  <button
                    onClick={() => setShowPwd((s) => !s)}
                    type="button"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/45 transition hover:bg-white/5 hover:text-white/70"
                    aria-label={showPwd ? "Hide password" : "Show password"}
                  >
                    {showPwd ? <MdVisibilityOff size={18} /> : <MdVisibility size={18} />}
                  </button>
                </span>
              </label>

              <div className="flex justify-end">
                <Link
                  href="#"
                  className="text-sm font-semibold text-[#7b53ff] transition hover:text-[#9b7dff]"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="flex h-13 w-full items-center justify-center rounded-full bg-linear-to-r from-[#8A35FF] via-[#545CFF] to-[#0D8BFF] text-sm font-semibold text-white shadow-[0_12px_30px_rgba(54,94,255,0.28)] transition hover:brightness-110"
              >
                Login
              </button>

              <div className="flex items-center gap-4 pt-1">
                <span className="h-px flex-1 bg-white/12" />
                <span className="text-xs font-semibold tracking-[0.24em] text-white/42">
                  OR
                </span>
                <span className="h-px flex-1 bg-white/12" />
              </div>

              <button
                type="button"
                className="flex h-13 w-full items-center justify-center gap-3 rounded-full border border-white/8 bg-white/[0.04] text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition hover:bg-white/[0.07]"
              >
                <GoogleIcon />
                <span>Google</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
