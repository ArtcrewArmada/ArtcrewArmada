import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

export default function AppMessages() {
  return (
    <div className="space-y-10 pb-20">
      <div className="space-y-2">
        <span className="font-sans text-[9px] font-bold tracking-[0.4em] uppercase text-armada-sand">
          Inbox
        </span>
        <h1 className="font-headline font-light text-4xl text-armada-navy">
          Messages
        </h1>
        <p className="font-serif text-xs text-armada-navy/60 max-w-xl">
          พูดคุย ติดต่อสอบถาม และเจรจางานพัฒนาออกแบบร่วมกับดีไซเนอร์ ช่างฝีมือ หรือติดต่อผู้จัดการแบรนด์ ARMADA
        </p>
      </div>

      <div className="border border-dashed border-armada-navy/20 p-12 bg-white max-w-xl text-center space-y-6">
        <div className="space-y-2">
          <Badge variant="sand">Coming Soon</Badge>
          <h3 className="font-headline text-2xl text-armada-navy font-light">
            กล่องจดหมายและห้องสนทนา
          </h3>
          <p className="font-serif text-xs text-armada-navy/60 leading-relaxed">
            ระบบส่งข้อความสำหรับสมาชิกและพันธมิตร เพื่ออำนวยความสะดวกในการประสานงานระหว่างแบรนด์ ช่างฝีมือในโครงการ และกลุ่มผู้ซื้อโดยตรง
          </p>
        </div>
        
        <Button variant="secondary" size="sm" onClick={() => window.history.back()}>
          ย้อนกลับ
        </Button>
      </div>
    </div>
  );
}
