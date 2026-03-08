import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { CONTACT } from "../content/contact.content";
import ContactFormCard from "../components/ContactFormCard";
import { Reveal, Stagger } from "@/shared/motion/Motion";
import { scaleIn } from "@/shared/motion/variants";
import { SECTION_HEADING_CLASS, SECTION_SUBHEADING_CLASS } from "@/lib/sectionTypography";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      {/* background glows like your pages */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-45 -top-40 h-155 w-155 rounded-full bg-purple-600/25 blur-[150px]" />
        <div className="absolute -right-60 top-10 h-155 w-155 rounded-full bg-indigo-600/18 blur-[160px]" />
        <div className="absolute left-1/2 -bottom-90 h-190 w-190 -translate-x-1/2 rounded-full bg-sky-500/10 blur-[170px]" />
      </div>

      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <Stagger className="pt-2">
            {/* heading like screenshot */}
            <Reveal
              as="h1"
              className={`whitespace-pre-line !leading-[1.08] ${SECTION_HEADING_CLASS}`}
            >
              {CONTACT.left.title}
            </Reveal>

            {/*  subheading like screenshot */}
            <Reveal
              as="p"
              className={`mt-3 max-w-155 whitespace-pre-line text-[15px]! sm:text-[16px]! md:text-[18px]! ${SECTION_SUBHEADING_CLASS}`}
            >
              {CONTACT.left.subtitle}
            </Reveal>

            <Reveal className="mt-6">
              <Button
                href={CONTACT.left.cta.href}
                variant="primary"
                 className="h-12 rounded-full bg-linear-to-r from-pink-800 to-blue-700 px-7 text-sm font-extrabold text-white shadow-[0_18px_55px_rgba(0,0,0,0.55)] hover:brightness-110"
                  >
                {CONTACT.left.cta.label}
              </Button>
            </Reveal>
          </Stagger>

          {/* Right */}
          <Reveal className="lg:justify-self-end" variant={scaleIn}>
            <ContactFormCard />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
