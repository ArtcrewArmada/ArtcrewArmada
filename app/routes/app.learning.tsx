import { Link } from "react-router";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

export default function AppLearning() {
  const activeLearning = [
    { id: 1, title: "Loom Weaving Fundamentals", progress: 65, instructor: "Artisan Sommai", lastAccessed: "2 hours ago" },
    { id: 2, title: "Circular Upcycling Design", progress: 20, instructor: "Designer Alice", lastAccessed: "1 day ago" },
  ];

  return (
    <div className="space-y-10 pb-20">
      <div className="space-y-2">
        <span className="font-sans text-[9px] font-bold tracking-[0.4em] uppercase text-armada-sand">
          Personal Workspace
        </span>
        <h1 className="font-headline font-light text-4xl text-armada-navy">
          My Learning
        </h1>
        <p className="font-serif text-xs text-armada-navy/60 max-w-xl">
          ติดตามความก้าวหน้า เข้าเรียนหลักสูตรที่คุณสมัครไว้ และทบทวนบทเรียนของคุณทั้งหมดได้จากหน้านี้
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 max-w-4xl">
        {activeLearning.map((item) => (
          <div key={item.id} className="bg-white border border-armada-navy/10 p-6 flex flex-col md:flex-row justify-between md:items-center gap-6">
            <div className="space-y-2 flex-grow">
              <div className="flex items-center gap-3">
                <Badge variant="sage">In Progress</Badge>
                <span className="font-sans text-[9px] text-armada-navy/40 uppercase">Accessed {item.lastAccessed}</span>
              </div>
              <h3 className="font-headline text-2xl text-armada-navy">{item.title}</h3>
              <p className="font-sans text-[10px] text-armada-navy/50 uppercase">By {item.instructor}</p>
            </div>

            <div className="flex items-center gap-6 min-w-[200px]">
              <div className="flex-grow space-y-1">
                <div className="flex justify-between text-[10px] font-sans font-bold">
                  <span className="text-armada-navy/50">Progress</span>
                  <span className="text-armada-navy">{item.progress}%</span>
                </div>
                <div className="w-full bg-armada-navy/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-armada-sand h-full" style={{ width: `${item.progress}%` }} />
                </div>
              </div>
              <Link to="/app/courses">
                <Button variant="secondary" size="sm">Resume</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
