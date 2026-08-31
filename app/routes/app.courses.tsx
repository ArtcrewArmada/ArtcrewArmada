import { useState, useMemo } from "react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

interface Course {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: "Weaving" | "Upcycling" | "Dyeing" | "Clay & Ceramics";
  level: "Beginner" | "Intermediate" | "Advanced";
  instructor: string;
  duration: string;
  lessonsCount: number;
  price: number;
  rating: number;
  progress?: number;
  enrolled: boolean;
}

const INITIAL_COURSES: Course[] = [
  {
    id: 1,
    slug: "loom-weaving-fundamentals",
    title: "Loom Weaving Fundamentals",
    description: "เรียนรู้พื้นฐานการทอผ้าด้วยกี่ทอมือแบบดั้งเดิม ตั้งแต่การเตรียมด้ายเส้นยืน จนถึงการขึ้นลวดลายเบื้องต้น",
    category: "Weaving",
    level: "Beginner",
    instructor: "Artisan Sommai",
    duration: "8 hours",
    lessonsCount: 12,
    price: 2500,
    rating: 4.9,
    progress: 65,
    enrolled: true,
  },
  {
    id: 2,
    slug: "circular-upcycling-design",
    title: "Circular Upcycling Design",
    description: "เปลี่ยนฝาดึงและวัสดุเหลือใช้ให้เป็นงานดีไซน์หรูหรา (Eco-Luxury) ตามแนวคิด Circular Economy",
    category: "Upcycling",
    level: "Intermediate",
    instructor: "Designer Alice",
    duration: "12 hours",
    lessonsCount: 16,
    price: 3200,
    rating: 4.8,
    progress: 20,
    enrolled: true,
  },
  {
    id: 3,
    slug: "advanced-natural-dyeing",
    title: "Advanced Natural Dyeing Techniques",
    description: "เจาะลึกเทคนิคการย้อมสีธรรมชาติจากพืชพรรณท้องถิ่น การสกัดสี และการปรับโทนสีแบบประยุกต์",
    category: "Dyeing",
    level: "Advanced",
    instructor: "Artisan Sommai",
    duration: "15 hours",
    lessonsCount: 20,
    price: 4500,
    rating: 5.0,
    enrolled: false,
  },
  {
    id: 4,
    slug: "primitive-clay-shaping",
    title: "Primitive Clay Vessel Shaping",
    description: "ขึ้นรูปภาชนะดินเผาด้วยมือโดยใช้เทคนิคโบราณ สัมผัสเนื้อดินและการเผาด้วยฟืน",
    category: "Clay & Ceramics",
    level: "Beginner",
    instructor: "Ceramic Artist Kanya",
    duration: "6 hours",
    lessonsCount: 10,
    price: 1800,
    rating: 4.7,
    enrolled: false,
  },
  {
    id: 5,
    slug: "bead-loom-peyote-stitch",
    title: "Bead Loom & Peyote Stitch Art",
    description: "การทอร้อยลูกปัดบนกี่ทอและการเย็บลูกปัดสลับลายเพื่อสร้างเครื่องประดับระดับสูง",
    category: "Weaving",
    level: "Intermediate",
    instructor: "Wipawadee Lopez",
    duration: "10 hours",
    lessonsCount: 14,
    price: 2900,
    rating: 4.9,
    enrolled: false,
  },
];

export default function AppCourses() {
  const [courses, setCourses] = useState<Course[]>(INITIAL_COURSES);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("default");
  
  // Checkout Modal State
  const [checkoutCourse, setCheckoutCourse] = useState<Course | null>(null);
  const [checkoutName, setCheckoutName] = useState("Artisan Member");
  const [checkoutEmail, setCheckoutEmail] = useState("armada.th2025@gmail.com");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isSuccess, setIsSuccess] = useState(false);

  // Resume Modal State
  const [resumingCourse, setResumingCourse] = useState<Course | null>(null);

  // Categories list
  const categories = ["All", "Enrolled", "Weaving", "Upcycling", "Dyeing", "Clay & Ceramics"];

  // Filter & Sort logic
  const filteredCourses = useMemo(() => {
    let result = [...courses];

    // Filter by Category or Enrollment
    if (selectedCategory === "Enrolled") {
      result = result.filter(c => c.enrolled);
    } else if (selectedCategory !== "All") {
      result = result.filter(c => c.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        c => c.title.toLowerCase().includes(q) || 
             c.description.toLowerCase().includes(q) || 
             c.instructor.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [courses, selectedCategory, searchQuery, sortBy]);

  // Handle Enrollment Submit
  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutCourse) return;

    setIsSuccess(true);
    
    // Simulate API Delay
    setTimeout(() => {
      setCourses(prev =>
        prev.map(c =>
          c.id === checkoutCourse.id
            ? { ...c, enrolled: true, progress: 0 }
            : c
        )
      );
      // Close checkout after a delay
      setTimeout(() => {
        setCheckoutCourse(null);
        setIsSuccess(false);
      }, 1500);
    }, 800);
  };

  // Generate a dynamic placeholder thumbnail background based on course category
  const getThumbnailGradient = (category: string) => {
    switch (category) {
      case "Weaving":
        return "bg-gradient-to-tr from-armada-navy/20 to-armada-sand/40";
      case "Upcycling":
        return "bg-gradient-to-tr from-armada-sage/30 to-armada-sand/30";
      case "Dyeing":
        return "bg-gradient-to-tr from-armada-seablue/30 to-armada-navy/20";
      case "Clay & Ceramics":
        return "bg-gradient-to-tr from-armada-terracotta/25 to-armada-sand/35";
      default:
        return "bg-armada-navy/5";
    }
  };

  return (
    <div className="space-y-10 pb-20">
      {/* Header Banner */}
      <div className="space-y-2">
        <span className="font-sans text-[9px] font-bold tracking-[0.4em] uppercase text-armada-sand">
          Academy & Training
        </span>
        <h1 className="font-headline font-light text-4xl text-armada-navy">
          Artisan Courses
        </h1>
        <p className="font-serif text-xs text-armada-navy/60 max-w-2xl">
          พัฒนาทักษะงานฝีมือประณีต ศิลปะพื้นถิ่น และงานออกแบบอัปไซคลิงระดับสูงจากช่างฝีมือและผู้เชี่ยวชาญของเครือข่าย ARMADA
        </p>
      </div>

      {/* Filters & Actions Control Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center border-b border-armada-navy/10 pb-6">
        {/* Category Tab Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 font-sans text-[9px] font-bold tracking-widest uppercase border transition-calm ${
                selectedCategory === cat
                  ? "bg-armada-navy border-armada-navy text-armada-ivory"
                  : "bg-white border-armada-navy/10 text-armada-navy/60 hover:text-armada-navy hover:border-armada-navy/30"
              }`}
            >
              {cat === "All" ? "ทั้งหมด" : cat === "Enrolled" ? "คอร์สของฉัน" : cat}
            </button>
          ))}
        </div>

        {/* Search & Sort Panel */}
        <div className="flex w-full md:w-auto items-center gap-3">
          <input
            type="text"
            placeholder="ค้นหาคอร์สหรือช่างฝีมือ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow md:w-64 bg-white border border-armada-navy/10 px-3 py-1.5 font-sans text-xs focus:outline-none focus:border-armada-sand placeholder:text-armada-navy/30 text-armada-navy"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white border border-armada-navy/10 px-3 py-1.5 font-sans text-xs focus:outline-none focus:border-armada-sand text-armada-navy"
          >
            <option value="default">เรียงลำดับ</option>
            <option value="price-asc">ราคา: ต่ำไปสูง</option>
            <option value="price-desc">ราคา: สูงไปต่ำ</option>
            <option value="rating">คะแนนความนิยม</option>
          </select>
        </div>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-armada-navy/10 flex flex-col justify-between transition-calm hover:-translate-y-1 hover:shadow-md"
            >
              {/* Thumbnail Area with bespoke SVG layout patterns */}
              <div className={`w-full aspect-[16/10] relative flex items-center justify-center overflow-hidden ${getThumbnailGradient(course.category)} border-b border-armada-navy/5`}>
                <span className="absolute font-headline italic text-lg text-armada-navy/20 font-semibold tracking-wide">
                  {course.category} Academy
                </span>
                
                {/* Visual geometric lines representing craftsmanship precision */}
                <svg className="w-full h-full opacity-10 absolute inset-0" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`pattern-${course.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="#1E2A44" />
                      <line x1="0" y1="0" x2="20" y2="20" stroke="#1E2A44" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#pattern-${course.id})`} />
                </svg>

                {/* Level Badge in top left */}
                <div className="absolute top-4 left-4">
                  <Badge variant={course.level === "Advanced" ? "terracotta" : course.level === "Intermediate" ? "sand" : "sage"}>
                    {course.level}
                  </Badge>
                </div>
              </div>

              {/* Course Info */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[9px] font-bold tracking-widest text-armada-sand uppercase">
                    <span>{course.category}</span>
                    <span className="flex items-center gap-1 text-armada-navy/50">
                      ★ <span className="text-armada-navy">{course.rating.toFixed(1)}</span>
                    </span>
                  </div>
                  
                  <h3 className="font-headline text-2xl text-armada-navy leading-tight">
                    {course.title}
                  </h3>
                  
                  <p className="font-serif text-xs text-armada-navy/60 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Course Metadata (Duration & Lessons) */}
                <div className="flex justify-between items-center text-[10px] font-sans text-armada-navy/40 border-t border-b border-armada-navy/5 py-3">
                  <span>DURATION: <strong className="text-armada-navy">{course.duration}</strong></span>
                  <span>LESSONS: <strong className="text-armada-navy">{course.lessonsCount}</strong></span>
                </div>

                {/* Action Row */}
                <div className="pt-2">
                  {course.enrolled ? (
                    <div className="space-y-4">
                      {/* Progress Bar */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] font-sans font-bold">
                          <span className="text-armada-navy/50">ความคืบหน้า</span>
                          <span className="text-armada-navy">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-armada-navy/5 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-armada-sand h-full transition-all duration-500"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                      
                      <Button
                        variant="secondary"
                        size="sm"
                        fullWidth
                        onClick={() => setResumingCourse(course)}
                      >
                        เข้าเรียนต่อ (Resume)
                      </Button>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center gap-4">
                      <div className="flex flex-col">
                        <span className="font-sans text-[8px] text-armada-navy/40 uppercase">Price</span>
                        <span className="font-sans text-sm font-bold text-armada-navy">
                          ฿{course.price.toLocaleString()}
                        </span>
                      </div>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => setCheckoutCourse(course)}
                      >
                        สมัครเรียน
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-armada-navy/20 p-16 text-center space-y-4 bg-white">
          <p className="font-serif text-sm text-armada-navy/60">
            ไม่พบคอร์สเรียนที่ตรงตามเงื่อนไขหรือการค้นหาของคุณ
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
              setSortBy("default");
            }}
          >
            ล้างตัวกรองทั้งหมด
          </Button>
        </div>
      )}

      {/* Checkout / Registration Modal (Simulated Checkout) */}
      {checkoutCourse && (
        <div className="fixed inset-0 bg-armada-navy/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-armada-navy/20 w-full max-w-md p-8 relative space-y-6 animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button
              onClick={() => !isSuccess && setCheckoutCourse(null)}
              className="absolute top-4 right-4 text-armada-navy/40 hover:text-armada-navy"
              disabled={isSuccess}
            >
              ✕
            </button>

            {/* Course Summary */}
            <div className="space-y-2">
              <Badge variant="sand">Checkout Form</Badge>
              <h3 className="font-headline text-2xl text-armada-navy">
                ลงทะเบียนคอร์สเรียน
              </h3>
              <p className="font-serif text-xs text-armada-navy/60">
                กรอกข้อมูลผู้สมัครและชำระค่าธรรมเนียมเพื่อเข้าใช้งานเนื้อหาบทเรียนได้ทันที
              </p>
            </div>

            {/* Course Details Card */}
            <div className="bg-armada-ivory p-4 border border-armada-navy/5 flex justify-between items-center">
              <div>
                <span className="font-sans text-[8px] text-armada-navy/40 uppercase block">Course</span>
                <span className="font-headline text-lg font-light text-armada-navy leading-tight">
                  {checkoutCourse.title}
                </span>
                <span className="font-sans text-[10px] text-armada-sand uppercase block">
                  Instructor: {checkoutCourse.instructor}
                </span>
              </div>
              <div className="text-right">
                <span className="font-sans text-sm font-bold text-armada-navy">
                  ฿{checkoutCourse.price.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Checkout Form */}
            {!isSuccess ? (
              <form onSubmit={handleEnrollSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="font-sans text-[9px] font-bold tracking-wider text-armada-navy/60 uppercase">
                    ชื่อผู้สมัครเรียน
                  </label>
                  <input
                    type="text"
                    required
                    value={checkoutName}
                    onChange={(e) => setCheckoutName(e.target.value)}
                    className="w-full bg-armada-ivory/50 border border-armada-navy/10 px-3 py-2 font-sans text-xs focus:outline-none focus:border-armada-sand text-armada-navy"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-sans text-[9px] font-bold tracking-wider text-armada-navy/60 uppercase">
                    อีเมลเพื่อรับสิทธิ์เข้าเรียน
                  </label>
                  <input
                    type="email"
                    required
                    value={checkoutEmail}
                    onChange={(e) => setCheckoutEmail(e.target.value)}
                    className="w-full bg-armada-ivory/50 border border-armada-navy/10 px-3 py-2 font-sans text-xs focus:outline-none focus:border-armada-sand text-armada-navy"
                  />
                </div>

                {/* Payment Methods */}
                <div className="space-y-2">
                  <span className="font-sans text-[9px] font-bold tracking-wider text-armada-navy/60 uppercase block">
                    วิธีการชำระเงิน
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("card")}
                      className={`p-3 border font-sans text-[9px] font-bold tracking-widest uppercase transition-calm ${
                        paymentMethod === "card"
                          ? "border-armada-sand bg-armada-sand/5 text-armada-navy"
                          : "border-armada-navy/10 text-armada-navy/40 hover:border-armada-navy/30"
                      }`}
                    >
                      Credit Card
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("promptpay")}
                      className={`p-3 border font-sans text-[9px] font-bold tracking-widest uppercase transition-calm ${
                        paymentMethod === "promptpay"
                          ? "border-armada-sand bg-armada-sand/5 text-armada-navy"
                          : "border-armada-navy/10 text-armada-navy/40 hover:border-armada-navy/30"
                      }`}
                    >
                      PromptPay
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex gap-3">
                  <Button
                    type="button"
                    variant="ghost"
                    className="flex-1"
                    onClick={() => setCheckoutCourse(null)}
                  >
                    ยกเลิก
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    className="flex-1"
                  >
                    ยืนยัน & ชำระเงิน
                  </Button>
                </div>
              </form>
            ) : (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                {/* Dynamic animated success indicator */}
                <div className="w-12 h-12 bg-armada-sage/20 rounded-full flex items-center justify-center text-armada-sage text-2xl font-bold animate-bounce">
                  ✓
                </div>
                <h4 className="font-headline text-2xl text-armada-navy">
                  ลงทะเบียนสำเร็จ!
                </h4>
                <p className="font-serif text-xs text-armada-navy/60 max-w-xs">
                  ระบบทำการอนุมัติสิทธิ์เข้าเรียนคอร์สนี้ให้บัญชี {checkoutEmail} ของคุณเรียบร้อยแล้ว
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Lesson Simulation Modal */}
      {resumingCourse && (
        <div className="fixed inset-0 bg-armada-navy/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-armada-navy/20 w-full max-w-xl p-8 relative space-y-6">
            <button
              onClick={() => setResumingCourse(null)}
              className="absolute top-4 right-4 text-armada-navy/40 hover:text-armada-navy"
            >
              ✕
            </button>

            <div className="space-y-1">
              <span className="font-sans text-[8px] font-bold tracking-widest text-armada-sand uppercase block">
                {resumingCourse.category} Academy
              </span>
              <h3 className="font-headline text-2xl text-armada-navy">
                {resumingCourse.title}
              </h3>
              <p className="font-sans text-[10px] text-armada-navy/50 uppercase">
                Instructor: {resumingCourse.instructor} • Progress: {resumingCourse.progress}%
              </p>
            </div>

            {/* Video Player Placeholder */}
            <div className="w-full aspect-video bg-armada-navy flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
              <svg className="w-12 h-12 text-armada-sand mb-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-sans text-[10px] font-bold tracking-widest text-armada-ivory/80 uppercase">
                Video Lesson Player Placeholder
              </span>
              <p className="font-serif text-[10px] text-armada-ivory/50 mt-1 max-w-sm">
                บทเรียนที่กำลังศึกษา: บทที่ 3 — การต่อลวดลายและการปรับทัศนคติชิ้นงานฝีมือ
              </p>
            </div>

            {/* Quick Actions inside player */}
            <div className="flex justify-between items-center pt-2">
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setCourses(prev =>
                      prev.map(c =>
                        c.id === resumingCourse.id
                          ? { ...c, progress: Math.min((c.progress || 0) + 10, 100) }
                          : c
                      )
                    );
                    setResumingCourse(prev => prev ? { ...prev, progress: Math.min((prev.progress || 0) + 10, 100) } : null);
                  }}
                  className="px-3 py-1 bg-armada-navy/5 hover:bg-armada-navy/10 text-armada-navy font-sans text-[9px] font-bold tracking-widest uppercase transition-calm border border-armada-navy/10"
                >
                  ทำเครื่องหมายว่าเรียนแล้ว (+10%)
                </button>
              </div>
              <Button
                variant="navy"
                size="sm"
                onClick={() => setResumingCourse(null)}
              >
                เสร็จสิ้น & ปิด
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
