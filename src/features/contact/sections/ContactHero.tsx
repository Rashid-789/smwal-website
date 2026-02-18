import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { CONTACT } from "../content/contact.content";
import ContactFormCard from "../components/ContactFormCard";

export default function ContactHero() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left content */}
          <div className="pt-2">
            <h1 className="whitespace-pre-line text-3xl font-display font-extrabold uppercase tracking-tight text-white md:text-5xl">
              {CONTACT.left.title}
            </h1>

            <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-white/70 md:text-base">
              {CONTACT.left.subtitle}
            </p>

            <div className="mt-6">
              <Button href={CONTACT.left.cta.href} variant="primary" className="h-11 px-6">
                {CONTACT.left.cta.label}
              </Button>
            </div>
          </div>

          {/* Right form card */}
          <div className="lg:justify-self-end">
            <ContactFormCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
