import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

export default function AppDashboard() {
  const learningInProgress = [
    { id: 1, title: "Loom Weaving Fundamentals", progress: 65, instructor: "Artisan Sommai" },
    { id: 2, title: "Circular Upcycling Design", progress: 20, instructor: "Designer Alice" },
  ];

  return (
    <div className="space-y-10">
      {/* Welcome banner */}
      <div className="space-y-2">
        <span className="font-sans text-[9px] font-bold tracking-[0.4em] uppercase text-armada-sand">
          Personal Workspace
        </span>
        <h1 className="font-headline font-light text-4xl text-armada-navy">
          Welcome back, Artisan
        </h1>
        <p className="font-serif text-xs text-armada-navy/60">
          นี่คือพื้นที่จัดการและพัฒนาฝีมือ การเรียนรู้ และการทำกิจกรรมร่วมกับกลุ่มผู้ใช้ ARTcrew ARMADA
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-armada-navy/10 p-6 space-y-4">
          <span className="font-sans text-[8px] font-bold tracking-wider text-armada-navy/40 uppercase">
            Courses in Progress
          </span>
          <div className="flex justify-between items-baseline">
            <span className="font-headline text-4xl text-armada-navy">02</span>
            <Badge variant="sand">Active</Badge>
          </div>
        </div>
        <div className="bg-white border border-armada-navy/10 p-6 space-y-4">
          <span className="font-sans text-[8px] font-bold tracking-wider text-armada-navy/40 uppercase">
            Upcoming Events
          </span>
          <div className="flex justify-between items-baseline">
            <span className="font-headline text-4xl text-armada-navy">01</span>
            <Badge variant="sage">Going</Badge>
          </div>
        </div>
        <div className="bg-white border border-armada-navy/10 p-6 space-y-4">
          <span className="font-sans text-[8px] font-bold tracking-wider text-armada-navy/40 uppercase">
            Points Earned
          </span>
          <div className="flex justify-between items-baseline">
            <span className="font-headline text-4xl text-armada-navy">450</span>
            <span className="font-sans text-[9px] font-bold uppercase text-armada-sand">XP</span>
          </div>
        </div>
      </div>

      {/* Main Section layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Continue Learning */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="font-headline text-2xl text-armada-navy">
            Continue Learning
          </h2>
          <div className="space-y-4">
            {learningInProgress.map((course) => (
              <div key={course.id} className="bg-white border border-armada-navy/10 p-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div className="space-y-2">
                  <h3 className="font-headline text-xl text-armada-navy">{course.title}</h3>
                  <p className="font-sans text-[10px] text-armada-navy/50 uppercase">
                    By {course.instructor}
                  </p>
                </div>
                <div className="flex items-center space-x-6">
                  {/* Progress bar container */}
                  <div className="flex flex-col items-end space-y-1">
                    <span className="font-sans text-[10px] font-bold text-armada-navy">{course.progress}%</span>
                    <div className="w-32 bg-armada-navy/5 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-armada-sand h-full" style={{ width: `${course.progress}%` }} />
                    </div>
                  </div>
                  <Button variant="secondary" size="sm">Resume</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar activity list */}
        <div className="space-y-6">
          <h2 className="font-headline text-2xl text-armada-navy">
            Upcoming Activity
          </h2>
          <div className="bg-white border border-armada-navy/10 p-6 space-y-4">
            <div className="space-y-1">
              <Badge variant="terracotta">Workshop</Badge>
              <h3 className="font-headline text-lg text-armada-navy">Natural Dye & Weaving</h3>
              <p className="font-sans text-[10px] text-armada-navy/50 uppercase">
                12 Sep 2026, 10:00 AM
              </p>
            </div>
            <p className="font-sans text-xs text-armada-navy/60 leading-relaxed">
              กรุณาเตรียมสมุดบันทึกและเศษผ้าฝ้ายดิบ (หากมี) เพื่อเข้าร่วมการย้อมสีธรรมชาติ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
