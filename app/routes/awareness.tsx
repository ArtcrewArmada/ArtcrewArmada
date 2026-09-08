import { useParams } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { PageHero } from "~/components/ui/page-hero";

const R2_BASE = "https://pub-fbe4c0b88b1c4967a575e56eb5f39ecf.r2.dev";

export default function AwarenessCenter() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);
  const s = (t.home as any).sections?.awareness || {};

  const MISSION_PARAGRAPHS = [
    "Artcrew Armada เป็นธุรกิจหัตถกรรมฐานรากที่มุ่งสร้างคุณค่าจากงานฝีมือ การใช้ทรัพยากรอย่างรู้คุณค่า และการพัฒนาชุมชนอย่างยั่งยืน เราเชื่อมโยงงานหัตถกรรมเข้ากับการสร้างความตระหนักด้านสิ่งแวดล้อม การสร้างอาชีพ และการถ่ายทอดองค์ความรู้สู่ชุมชน",
    "ในอนาคต ข้าพเจ้ามุ่งพัฒนา Craft & Art Awareness Center ให้เป็นพื้นที่แห่งการเรียนรู้และการสร้างสรรค์สำหรับทุกคน",
    "ข้าพเจ้าเชื่อว่า คุณค่าที่แท้จริงของงานหัตถกรรมไม่ได้อยู่เพียงการสร้างชิ้นงาน แต่คือการทำให้ผู้คนได้กลับมารู้สึกตัว ตระหนักรู้ และค้นพบคุณค่าภายในตนเอง"
  ];

  const ICONS = [
    { id: "learn", label: "LEARN", th: "องค์ความรู้", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { id: "create", label: "CREATE", th: "สร้างสรรค์", icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" },
    { id: "connect", label: "CONNECT", th: "เชื่อมโยงผู้คน", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
    { id: "share", label: "SHARE", th: "แบ่งปันคุณค่า", icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" },
    { id: "sustain", label: "SUSTAIN", th: "เพื่ออนาคตที่ยั่งยืน", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
  ];

  return (
    <div className="pb-24">
      {/* Page Header */}
      <PageHero
        badge="AWARENESS CENTER"
        title="Craft & Art Awareness Center"
        desc="พื้นที่แห่งการเรียนรู้และการสร้างสรรค์สำหรับทุกคน"
      />

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        {/* Mission Section */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="font-serif-display text-5xl md:text-6xl text-[#F5F2EA]">Mission</h2>
          <div className="space-y-6">
            {MISSION_PARAGRAPHS.map((text, idx) => (
              <p key={idx} className="font-sans text-sm md:text-base text-[#F5F2EA]/80 leading-relaxed text-justify md:text-center indent-8 md:indent-0">
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Full Image Section with Quote */}
        <div className="relative border border-[#F5F2EA]/10 overflow-hidden group">
          <div className="aspect-[16/9] md:aspect-[21/9] w-full bg-[#131313]">
            <img 
              src={`${R2_BASE}/craft-awareness-center.jpg`} 
              alt="Craft & Art Awareness Center" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/80 via-transparent to-[#111111]/80"></div>

          <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="space-y-2 max-w-sm hidden md:block">
                <span className="font-sans text-[9px] font-bold tracking-widest uppercase text-[#B08A3E]">
                  ARTCREW ARMADA CREATION & CRAFT HOUSE
                </span>
                <p className="font-sans text-xs text-[#F5F2EA]/60 uppercase tracking-widest">
                  Creating with Meaning,<br/>Crafting a Better Future.
                </p>
              </div>
              <div className="max-w-md text-right ml-auto">
                <p className="font-serif-display text-lg md:text-2xl text-[#F5F2EA] leading-relaxed italic">
                  “ คุณค่าที่แท้จริงของงานหัตถกรรม ไม่ได้อยู่เพียงการสร้างชิ้นงาน แต่คือการทำให้ผู้คนได้กลับมารู้สึกตัว ตระหนักรู้ และค้นพบคุณค่าภายในตนเอง ”
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
               <div className="space-y-4">
                 <h3 className="font-serif-display text-3xl md:text-5xl text-[#F5F2EA] leading-tight">
                   Craft & Art<br />Awareness Center
                 </h3>
                 <p className="font-sans text-sm text-[#F5F2EA]/80">
                   พื้นที่แห่งการเรียนรู้และการสร้างสรรค์สำหรับทุกคน
                 </p>
               </div>
               
               <div className="text-right space-y-2 border-r-2 border-[#B08A3E] pr-4">
                 <p className="font-serif-display text-xl text-[#F5F2EA]">From Material to Meaning.</p>
                 <div className="flex flex-col text-[9px] font-bold text-[#AFAFA9] tracking-widest uppercase gap-1">
                   <span>Craft</span>
                   <span>People</span>
                   <span>Community</span>
                   <span>Sustainability</span>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Icons Row */}
        <div className="border-t border-b border-[#F5F2EA]/10 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {ICONS.map((icon) => (
              <div key={icon.id} className="flex flex-col items-center justify-center space-y-4 group cursor-default">
                <div className="w-12 h-12 rounded-full border border-[#F5F2EA]/20 flex items-center justify-center text-[#B08A3E] group-hover:border-[#B08A3E] group-hover:bg-[#B08A3E]/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon.icon} />
                  </svg>
                </div>
                <div className="text-center space-y-1">
                  <p className="font-sans text-[10px] font-bold tracking-widest text-[#F5F2EA] uppercase">
                    {icon.label}
                  </p>
                  <p className="font-sans text-[10px] text-[#AFAFA9]">
                    {icon.th}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Impact Section */}
        <div className="border-t border-[#F5F2EA]/10 py-20 space-y-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-[#B08A3E] uppercase">
              Skill Sharing • Livelihood Creation • Sustainable Community Development
            </span>
            <h2 className="font-serif-display text-5xl md:text-6xl text-[#F5F2EA]">Community Impact</h2>
            <div className="space-y-4">
              <h3 className="font-sans text-xl text-[#F5F2EA] font-bold">ถ่ายทอดองค์ความรู้ด้านงานหัตถกรรมสู่ชุมชน</h3>
              <p className="font-sans text-sm md:text-base text-[#F5F2EA]/80 leading-relaxed text-justify md:text-center indent-8 md:indent-0">
                การทำงานด้านงานหัตถกรรมของ Artcrew Armada และ Armada มุ่งเน้นการถ่ายทอดองค์ความรู้และทักษะด้านงานหัตถกรรมสู่ชุมชน ผ่านการจัดกิจกรรมฝึกอบรมและเวิร์กชอปในหลายพื้นที่ มุ่งเน้นให้ผู้เรียนสามารถลงมือปฏิบัติได้จริง เพื่อพัฒนาทักษะและต่อยอดเป็นรายได้อย่างยั่งยืน ให้แก่กลุ่มชุมชน กลุ่มสตรีแม่บ้าน เยาวชน และผู้สนใจงานหัตถกรรม
              </p>
            </div>
          </div>

          {/* Learning & Activity Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "LEARNING1.jpg", "LEARNING2.jpg", "LEARNING3.jpg",
              "LEARNING4.jpg", "LEARNING5.png", "LEARNING6.png",
              "LEARNING7.png", "LEARNING8.png", "LEARNING9.png"
            ].map((img, idx) => (
              <div key={idx} className="aspect-square overflow-hidden bg-[#131313] border border-[#F5F2EA]/5 group">
                <img 
                  src={`${R2_BASE}/Learning %26 Activity/${img}`} 
                  alt={`Learning Activity ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call To Action */}
        <div className="bg-[#1A1A1A] border border-[#B08A3E]/20 text-[#F5F2EA] p-12 text-center space-y-6">
          <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-[#B08A3E]">
            Join The Movement
          </span>
          <h3 className="font-serif-display text-2xl lg:text-3xl text-[#F5F2EA] max-w-xl mx-auto leading-relaxed">
            มาร่วมเป็นส่วนหนึ่งกับเราในการสร้างสรรค์และสืบสานคุณค่างานฝีมือดั้งเดิม
          </h3>
          <a href={`/${lang}/contact`} className="inline-block border border-[#B08A3E] px-8 py-3 font-sans text-xs font-bold tracking-widest uppercase text-[#B08A3E] hover:bg-[#B08A3E] hover:text-[#111111] transition-colors mt-4">
            ติดต่อเข้าร่วมเครือข่ายความร่วมมือ
          </a>
        </div>

      </div>
    </div>
  );
}
