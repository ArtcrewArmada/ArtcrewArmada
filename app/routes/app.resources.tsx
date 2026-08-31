import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

export default function AppResources() {
  return (
    <div className="space-y-10 pb-20">
      <div className="space-y-2">
        <span className="font-sans text-[9px] font-bold tracking-[0.4em] uppercase text-armada-sand">
          Knowledge Base
        </span>
        <h1 className="font-headline font-light text-4xl text-armada-navy">
          Resources & Guides
        </h1>
        <p className="font-serif text-xs text-armada-navy/60 max-w-xl">
          เข้าถึงแหล่งความรู้ ข้อมูลวัสดุดีไซน์ยั่งยืน เทคนิคการพัฒนาแบรนด์ แฟ้มข้อมูล และเอกสารประกอบการออกแบบหัตถกรรมร่วมสมัย
        </p>
      </div>

      <div className="border border-dashed border-armada-navy/20 p-12 bg-white max-w-xl text-center space-y-6">
        <div className="space-y-2">
          <Badge variant="sand">Coming Soon</Badge>
          <h3 className="font-headline text-2xl text-armada-navy font-light">
            คลังทรัพยากรและความรู้หัตถกรรม
          </h3>
          <p className="font-serif text-xs text-armada-navy/60 leading-relaxed">
            แหล่งรวมเครื่องมือ สื่อการสอน ข้อมูลผู้จัดหาวัตถุดิบทางเลือกเพื่อสิ่งแวดล้อม และมาตรฐานของสถาบันส่งเสริมศิลปหัตถกรรมไทย (SACIT)
          </p>
        </div>
        
        <Button variant="secondary" size="sm" onClick={() => window.history.back()}>
          ย้อนกลับ
        </Button>
      </div>
    </div>
  );
}
