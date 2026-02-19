export function scrollToId(id: string) {
  if (typeof window === "undefined") return;

  const el = document.getElementById(id);
  if (!el) return;

  // If Lenis is present it will smooth it; if not, fallback to native smooth
  try {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch {
    el.scrollIntoView();
  }
}
