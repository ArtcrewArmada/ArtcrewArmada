import { useParams } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { PageHero } from "~/components/ui/page-hero";

export default function Contact() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);
  const s = (t.home as any).sections?.contact || {};

  return (
    <div className="pb-24">
      {/* Page Header */}
      <PageHero
        badge="CONTACT"
        title={s.title || "Let’s Create & Connect"}
        desc={s.desc || "พูดคุยกับเราเกี่ยวกับงานสร้างสรรค์ ผลิตภัณฑ์ ความร่วมมือ หรือกิจกรรม"}
      />

      <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Info card */}
        <div className="md:col-span-5 bg-[#1A1A1A] border border-[#F5F2EA]/10 p-8 space-y-6">
          <h3 className="font-serif-display text-2xl text-[#F5F2EA]">ARTcrew ARMADA Office</h3>
          <div className="space-y-4 font-sans text-xs text-[#AFAFA9] leading-relaxed">
            <p>
              <strong>Address:</strong><br />
              ARTcrew ARMADA Creative House,<br />
              Bangkok, Thailand
            </p>
            <p>
              <strong>Email:</strong><br />
              info@artcrewarmada.com
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="md:col-span-7 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input label="Name" placeholder="Your Name" required />
            <Input label="Email" type="email" placeholder="Your Email" required />
          </div>
          <Input label="Subject" placeholder="Inquiry Subject" required />
          <div className="flex flex-col space-y-1.5 w-full">
            <label className="font-sans text-[10px] font-bold tracking-widest uppercase text-[#AFAFA9]">
              Message
            </label>
            <textarea
              rows={4}
              className="bg-transparent border-b border-[#F5F2EA]/20 py-2 px-1 text-sm text-[#F5F2EA] placeholder-armada-navy/40 focus:outline-none focus:border-[#B08A3E] transition-calm resize-none"
              placeholder="How can we cooperate?"
              required
            />
          </div>
          <Button variant="navy" className="w-full">
            Send Inquiry
          </Button>
        </form>
      </div>
    </div>
    </div>
  );
}
