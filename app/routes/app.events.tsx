import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

export default function AppEvents() {
  const events = [
    { id: 1, title: "Natural Dye & Weaving", type: "Workshop", date: "12 Sep 2026", time: "10:00 AM", status: "Going" },
  ];

  return (
    <div className="space-y-10 pb-20">
      <div className="space-y-2">
        <span className="font-sans text-[9px] font-bold tracking-[0.4em] uppercase text-armada-sand">
          Community Calendar
        </span>
        <h1 className="font-headline font-light text-4xl text-armada-navy">
          Events & Workshops
        </h1>
        <p className="font-serif text-xs text-armada-navy/60 max-w-xl">
          จัดระเบียบตารางกิจกรรม การเวิร์กชอป และการเสวนากับช่างฝีมือชั้นครูที่จะจัดขึ้นเร็วๆ นี้
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {events.map((event) => (
          <div key={event.id} className="bg-white border border-armada-navy/10 p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Badge variant="terracotta">{event.type}</Badge>
                <Badge variant="sage">{event.status}</Badge>
              </div>
              <h3 className="font-headline text-2xl text-armada-navy">{event.title}</h3>
              <p className="font-sans text-[10px] text-armada-navy/50 uppercase">
                {event.date} • {event.time}
              </p>
            </div>
            <p className="font-serif text-xs text-armada-navy/60 leading-relaxed">
              กรุณาเตรียมสมุดบันทึกและเศษผ้าฝ้ายดิบเพื่อเข้าร่วมการทดลองย้อมสีธรรมชาติ
            </p>
            <div className="pt-2 border-t border-armada-navy/5">
              <Button variant="secondary" size="sm" className="w-full" disabled>
                Registered
              </Button>
            </div>
          </div>
        ))}

        <div className="border border-dashed border-armada-navy/20 p-6 flex flex-col items-center justify-center text-center space-y-2 bg-white/50">
          <p className="font-serif text-xs text-armada-navy/40">ไม่มีกิจกรรมอื่นๆ ที่จองไว้</p>
          <span className="font-sans text-[9px] font-bold tracking-wider text-armada-sand uppercase">
            ค้นหาเวิร์กชอปใหม่ๆ ได้ในหน้าสารบัญหลัก
          </span>
        </div>
      </div>
    </div>
  );
}
