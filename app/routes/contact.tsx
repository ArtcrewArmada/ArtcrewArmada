import { useParams } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

export default function Contact() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
      <div className="space-y-4 text-center">
        <span className="font-sans text-[10px] font-bold tracking-[0.45em] uppercase text-armada-sand">
          Connect & Partner
        </span>
        <h1 className="font-headline font-light text-5xl text-armada-navy">
          {t.nav.contact}
        </h1>
        <p className="font-serif text-sm text-armada-navy/60 max-w-xl mx-auto">
          ร่วมพูดคุย แลกเปลี่ยนไอเดีย ปรึกษาเรื่องความร่วมมือ หรือสมัครเข้าร่วมคอมมูนิตี้ของเรา
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Info card */}
        <div className="md:col-span-5 bg-white border border-armada-navy/10 p-8 space-y-6">
          <h3 className="font-headline text-2xl text-armada-navy">ARTcrew ARMADA Office</h3>
          <div className="space-y-4 font-sans text-xs text-armada-navy/70 leading-relaxed">
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
            <label className="font-sans text-[10px] font-bold tracking-widest uppercase text-armada-navy/60">
              Message
            </label>
            <textarea
              rows={4}
              className="bg-transparent border-b border-armada-navy/20 py-2 px-1 text-sm text-armada-navy placeholder-armada-navy/40 focus:outline-none focus:border-armada-sand transition-calm resize-none"
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
  );
}
