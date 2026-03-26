
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { SITE } from "@/config/site";
import { FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon } from "../../../components/site/SocialIcons";
import { SECTION_HEADING_FONT_CLASS } from "@/lib/sectionTypography";

export default function Footer() {
  return (
    <footer className="mt-16">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            {/* <h2
              className={`${SECTION_HEADING_FONT_CLASS} text-[48px] font-normal uppercase leading-[1] tracking-[0] text-white`}
            >
              READY TO BEGIN YOUR JOURNEY?
            </h2>
            <p className="mt-3 text-[19px] font-medium leading-[1.2] text-white/90">
              Starting your journey on SMWAL is simple and intentional.
            </p> */}

            {/* <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/join" variant="primary">
                Join Now
              </Button>
              <Button href="/donate" variant="secondary">
                Support the Mission
              </Button>
            </div> */}

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/65">
              {SITE.footerLinks.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:justify-self-end">
            <p className="text-sm text-white/65">
              Subscribe to stay tuned for new web design <br />
              and latest updates. Let’s do it!
            </p>

            <div className="mt-3 flex w-full max-w-md items-center gap-2">
              <Input placeholder="Enter your email Address" type="email " />
              <button className="h-10 rounded-xl bg-blue-500 px-5 text-sm font-semibold text-white hover:brightness-110">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-white/60 text-[17px]">© 2021 All Rights Reserved</div>

            <div className="flex items-center gap-4">
              <a href="#" aria-label="YouTube" className="opacity-95 hover:opacity-100">
                <YouTubeIcon />
              </a>
              <a href="#" aria-label="Facebook" className="opacity-95 hover:opacity-100">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Instagram" className="opacity-95 hover:opacity-100">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="TikTok" className="opacity-95 hover:opacity-100">
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
