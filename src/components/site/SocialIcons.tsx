import React from "react";

export function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        fill="#FF0000"
        d="M23.5 6.3a3 3 0 0 0-2.1-2.1C19.5 3.7 12 3.7 12 3.7s-7.5 0-9.4.5A3 3 0 0 0 .5 6.3 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.7 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.7Z"
      />
      <path fill="#fff" d="M9.7 15.5V8.5L16 12l-6.3 3.5Z" />
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        fill="#1877F2"
        d="M24 12.1C24 5.5 18.6 0 12 0S0 5.5 0 12.1C0 18 4.4 22.9 10.1 24v-8.4H7.1v-3.5h3V9.5c0-3 1.8-4.7 4.6-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.2h3.4l-.6 3.5h-2.8V24C19.6 22.9 24 18 24 12.1Z"
      />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <defs>
        <linearGradient id="ig" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0" stopColor="#F58529" />
          <stop offset="0.5" stopColor="#DD2A7B" />
          <stop offset="1" stopColor="#515BD4" />
        </linearGradient>
      </defs>
      <path
        fill="url(#ig)"
        d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6A5.2 5.2 0 0 1 16.8 22H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm9.6 2H7.2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4Z"
      />
      <path
        fill="#fff"
        d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 2A2.8 2.8 0 1 1 12 14.8 2.8 2.8 0 0 1 12 9.2Zm5.1-2.2a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z"
      />
    </svg>
  );
}

export function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        fill="#25F4EE"
        d="M13.9 3v10.3a3.5 3.5 0 1 1-3-3.4V6.6a7 7 0 1 0 7 7V8.3A6 6 0 0 1 13.9 3Z"
        opacity="0.85"
      />
      <path
        fill="#FE2C55"
        d="M14.9 3v3.2a6 6 0 0 0 3.5 1.1V4.1A6 6 0 0 1 14.9 3Z"
      />
      <path
        fill="#fff"
        d="M13.9 3v10.3a3.5 3.5 0 1 1-3-3.4V7.8a5.6 5.6 0 1 0 6 5.5V8.9A7 7 0 0 1 13.9 3Z"
        opacity="0.25"
      />
    </svg>
  );
}
