import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

export default function AppProjects() {
  return (
    <div className="space-y-10 pb-20">
      <div className="space-y-2">
        <span className="font-sans text-[9px] font-bold tracking-[0.4em] uppercase text-armada-sand">
          Co-Creation Space
        </span>
        <h1 className="font-headline font-light text-4xl text-armada-navy">
          Projects & Portfolio
        </h1>
        <p className="font-serif text-xs text-armada-navy/60 max-w-xl">
          จัดการโปรเจกต์งานสร้างสรรค์ร่วม (Co-Creation) และรวบรวมแฟ้มสะสมผลงานหัตถศิลป์ของคุณเพื่อแสดงต่อสาธารณะ
        </p>
      </div>

      <div className="border border-dashed border-armada-navy/20 p-12 bg-white max-w-xl text-center space-y-6">
        <div className="space-y-2">
          <Badge variant="sand">Coming Soon</Badge>
          <h3 className="font-headline text-2xl text-armada-navy font-light">
            ระบบแฟ้มผลงานและการทำงานร่วมกัน
          </h3>
          <p className="font-serif text-xs text-armada-navy/60 leading-relaxed">
            พื้นที่สำหรับสร้าง โปรโมต และร่วมมือในโครงการออกแบบผลิตภัณฑ์ Eco-Luxury และผลิตภัณฑ์อัปไซคลิงจากแนวคิดโมเดลเศรษฐกิจหมุนเวียน
          </p>
        </div>
        
        <Button variant="secondary" size="sm" onClick={() => window.history.back()}>
          ย้อนกลับ
        </Button>
      </div>
    </div>
  );
}
