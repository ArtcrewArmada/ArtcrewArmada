import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

export default function AppSettings() {
  return (
    <div className="space-y-10 pb-20">
      <div className="space-y-2">
        <span className="font-sans text-[9px] font-bold tracking-[0.4em] uppercase text-armada-sand">
          Configurations
        </span>
        <h1 className="font-headline font-light text-4xl text-armada-navy">
          Account Settings
        </h1>
        <p className="font-serif text-xs text-armada-navy/60 max-w-xl">
          จัดการข้อมูลส่วนตัว บัญชีผู้ใช้งาน สิทธิ์การเข้าถึง และการแจ้งเตือนต่างๆ ของระบบสมาชิก ARTcrew ARMADA
        </p>
      </div>

      <div className="bg-white border border-armada-navy/10 p-8 max-w-2xl space-y-6">
        <div className="space-y-1">
          <Badge variant="sand">Profile Information</Badge>
          <h3 className="font-headline text-2xl text-armada-navy">ข้อมูลทั่วไป</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <span className="font-sans text-[9px] font-bold text-armada-navy/60 uppercase block">อีเมลบัญชี</span>
            <span className="font-sans text-xs text-armada-navy block bg-armada-ivory/50 border border-armada-navy/10 px-3 py-2">
              armada.th2025@gmail.com
            </span>
          </div>
          <div className="space-y-1">
            <span className="font-sans text-[9px] font-bold text-armada-navy/60 uppercase block">ระดับสมาชิก</span>
            <span className="font-sans text-xs text-armada-navy block bg-armada-ivory/50 border border-armada-navy/10 px-3 py-2">
              Artisan Member (ช่างฝีมือและดีไซเนอร์ร่วม)
            </span>
          </div>
        </div>

        <div className="pt-6 border-t border-armada-navy/5 flex justify-end">
          <Button variant="primary" size="sm" disabled>
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
