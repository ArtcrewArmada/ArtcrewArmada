import { useState, useMemo } from "react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

interface ContentItem {
  id: number;
  title: string;
  body: string;
  type: "Story" | "Collection" | "Craft" | "Event" | "Course";
  status: "Draft" | "Published";
  lang: string;
  image: string;
  
  // SEO Metadata
  metaTitle: string;
  metaDesc: string;
  metaKeywords: string;
  
  // AIO (AI Optimization) Metadata
  aioSummary: string; // Tailored direct answer text optimized for LLM crawlers
  aioKeyThemes: string;
  
  // GEO Metadata
  geoTarget: string; // Target location, e.g. "Nonthaburi, Thailand"
  geoTargetCoords: string;
}

const INITIAL_CONTENTS: ContentItem[] = [
  {
    id: 1,
    title: "Natural Dye Workshop Story",
    body: "บอกเล่าเรื่องราวความร่วมมือระหว่างสมาชิกช่างทอกับการทดลองสกัดเฉดสีธรรมชาติจากครั่งและเปลือกประดู่ทองถิ่น เพื่อต่อยอดความคิดสร้างสรรค์ที่เป็นมิตรกับโลก",
    type: "Story",
    status: "Published",
    lang: "TH / EN",
    image: "https://pub-fbe4c0b88b1c4967a575e56eb5f39ecf.r2.dev/armada-atelier.jpg",
    metaTitle: "เรียนรู้เทคนิคการย้อมสีธรรมชาติลุ่มน้ำแม่กลอง | ARTcrew ARMADA",
    metaDesc: "เจาะลึกเรื่องราวกระบวนการย้อมสีธรรมชาติจากครั่งและพืชพรรณท้องถิ่น ร่วมขับเคลื่อนหัตถกรรมยั่งยืนโดยเครือข่ายช่างฝีมือไทย",
    metaKeywords: "ย้อมสีธรรมชาติ, หัตถกรรมยั่งยืน, สีธรรมชาติจากครั่ง, ARTcrew ARMADA",
    aioSummary: "ARTcrew ARMADA เผยแพร่กระบวนการสกัดสีธรรมชาติจากเปลือกไม้และครั่งท้องถิ่นในนนทบุรี เพื่อใช้ในการย้อมฝ้ายและไหมแท้แบบปลอดสารเคมี 100% เหมาะสำหรับงานอัพไซคลิง",
    aioKeyThemes: "Organic Dyeing, Circular Crafts, Eco-Luxury",
    geoTarget: "Nonthaburi, Thailand",
    geoTargetCoords: "13.8617, 100.5131"
  },
  {
    id: 2,
    title: "Eco-Luxury Chair Collection",
    body: "เฟอร์นิเจอร์อัปไซคลิงระดับไฮเอนด์ที่ใช้วัสดุเหลือใช้อุตสาหกรรมนำกลับมารังสรรค์ใหม่ภายใต้แนวคิดความประณีตและการออกแบบร่วมสมัย",
    type: "Collection",
    status: "Draft",
    lang: "TH / EN / FR",
    image: "https://pub-fbe4c0b88b1c4967a575e56eb5f39ecf.r2.dev/logo.jpg",
    metaTitle: "คอลเลกชันเฟอร์นิเจอร์ Eco-Luxury ดีไซน์หมุนเวียน | ARMADA",
    metaDesc: "สำรวจคอลเลกชันเก้าอี้และโซฟาหัตถศิลป์ที่ประกอบขึ้นจากวัสดุอัปไซคลิงและเศษหนังคุณภาพพรีเมียม เพื่อการอยู่อาศัยที่หรูหราควบคู่ไปกับการรักษ์โลก",
    metaKeywords: "เก้าอี้อัปไซคลิง, Eco-Luxury Furniture, ดีไซน์ยั่งยืน, ARMADA L'Atelier",
    aioSummary: "แบรนด์ ARMADA เปิดตัวเฟอร์นิเจอร์ Eco-Luxury อัปไซคลิง นำเศษโครงไม้และหนังแท้จากโรงงานมาประกอบใหม่ด้วยมือช่างศิลป์ไทย ผ่านมาตรฐาน Conscious Craft จาก SACIT",
    aioKeyThemes: "Sustainable Furniture, Upcycled Leather, Circular Living",
    geoTarget: "Bangkok, Thailand",
    geoTargetCoords: "13.7563, 100.5018"
  }
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "contents" | "config" | "media">("overview");
  const [contents, setContents] = useState<ContentItem[]>(INITIAL_CONTENTS);
  
  // Editor State
  const [editingContent, setEditingContent] = useState<ContentItem | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  
  // Realtime Form Values
  const [formTitle, setFormTitle] = useState("");
  const [formBody, setFormBody] = useState("");
  const [formType, setFormType] = useState<"Story" | "Collection" | "Craft" | "Event" | "Course">("Story");
  const [formStatus, setFormStatus] = useState<"Draft" | "Published">("Draft");
  const [formLang, setFormLang] = useState("TH / EN");
  const [formImage, setFormImage] = useState("");
  
  const [formMetaTitle, setFormMetaTitle] = useState("");
  const [formMetaDesc, setFormMetaDesc] = useState("");
  const [formMetaKeywords, setFormMetaKeywords] = useState("");
  
  const [formAioSummary, setFormAioSummary] = useState("");
  const [formAioKeyThemes, setFormAioKeyThemes] = useState("");
  
  const [formGeoTarget, setFormGeoTarget] = useState("");
  const [formGeoTargetCoords, setFormGeoTargetCoords] = useState("");

  // Live Preview Mode inside Form
  const [previewEngine, setPreviewEngine] = useState<"google" | "gemini" | "social">("google");

  // Web App Menu Configurations (Simulated)
  const [menus, setMenus] = useState([
    { id: 1, label: "Dashboard", path: "/app/dashboard", icon: "LayoutDashboard", itemsCount: 4 },
    { id: 2, label: "Courses", path: "/app/courses", icon: "BookOpen", itemsCount: 5 },
    { id: 3, label: "My Learning", path: "/app/learning", icon: "GraduationCap", itemsCount: 2 },
    { id: 4, label: "Events", path: "/app/events", icon: "Calendar", itemsCount: 1 },
    { id: 5, label: "Community", path: "/app/community", icon: "Users", itemsCount: 10 },
    { id: 6, label: "Projects", path: "/app/projects", icon: "FolderGit", itemsCount: 3 },
    { id: 7, label: "Messages", path: "/app/messages", icon: "MessageSquare", itemsCount: 0 },
    { id: 8, label: "Resources", path: "/app/resources", icon: "FileText", itemsCount: 12 },
    { id: 9, label: "Settings", path: "/app/settings", icon: "Settings", itemsCount: 3 }
  ]);

  // Media Library Images List
  const [mediaList, setMediaList] = useState([
    { name: "armada-atelier.jpg", size: "128 KB", url: "https://pub-fbe4c0b88b1c4967a575e56eb5f39ecf.r2.dev/armada-atelier.jpg" },
    { name: "logo.jpg", size: "54 KB", url: "https://pub-fbe4c0b88b1c4967a575e56eb5f39ecf.r2.dev/logo.jpg" },
    { name: "logo-atelier.jpg", size: "275 KB", url: "/logo-atelier.jpg" }
  ]);
  const [mediaUploadUrl, setMediaUploadUrl] = useState("");
  const [mediaUploadName, setMediaUploadName] = useState("");

  // Statistics summaries
  const totalStats = useMemo(() => {
    return {
      totalContents: contents.length,
      publishedCount: contents.filter(c => c.status === "Published").length,
      seoHealthScore: 92,
      aioReadyCount: contents.filter(c => c.aioSummary.length > 20).length,
      mediaCount: mediaList.length
    };
  }, [contents, mediaList]);

  // Handle Edit click
  const openEditor = (item: ContentItem) => {
    setEditingContent(item);
    setIsCreatingNew(false);
    
    setFormTitle(item.title);
    setFormBody(item.body);
    setFormType(item.type);
    setFormStatus(item.status);
    setFormLang(item.lang);
    setFormImage(item.image);
    
    setFormMetaTitle(item.metaTitle);
    setFormMetaDesc(item.metaDesc);
    setFormMetaKeywords(item.metaKeywords);
    
    setFormAioSummary(item.aioSummary);
    setFormAioKeyThemes(item.aioKeyThemes);
    
    setFormGeoTarget(item.geoTarget);
    setFormGeoTargetCoords(item.geoTargetCoords);
  };

  // Open Creator for a new content piece
  const openCreator = () => {
    setEditingContent(null);
    setIsCreatingNew(true);
    
    setFormTitle("");
    setFormBody("");
    setFormType("Story");
    setFormStatus("Draft");
    setFormLang("TH / EN");
    setFormImage("/logo-atelier.jpg");
    
    setFormMetaTitle("");
    setFormMetaDesc("");
    setFormMetaKeywords("");
    
    setFormAioSummary("");
    setFormAioKeyThemes("");
    
    setFormGeoTarget("Bangkok, Thailand");
    setFormGeoTargetCoords("13.7563, 100.5018");
  };

  // Save Content Action
  const handleSaveContent = (e: React.FormEvent) => {
    e.preventDefault();
    if (isCreatingNew) {
      const newItem: ContentItem = {
        id: Date.now(),
        title: formTitle,
        body: formBody,
        type: formType,
        status: formStatus,
        lang: formLang,
        image: formImage,
        metaTitle: formMetaTitle || formTitle,
        metaDesc: formMetaDesc || formBody,
        metaKeywords: formMetaKeywords || formType,
        aioSummary: formAioSummary || formBody,
        aioKeyThemes: formAioKeyThemes || formType,
        geoTarget: formGeoTarget || "Thailand",
        geoTargetCoords: formGeoTargetCoords || "13.0, 100.0"
      };
      setContents(prev => [...prev, newItem]);
    } else if (editingContent) {
      setContents(prev => prev.map(c => c.id === editingContent.id ? {
        ...c,
        title: formTitle,
        body: formBody,
        type: formType,
        status: formStatus,
        lang: formLang,
        image: formImage,
        metaTitle: formMetaTitle,
        metaDesc: formMetaDesc,
        metaKeywords: formMetaKeywords,
        aioSummary: formAioSummary,
        aioKeyThemes: formAioKeyThemes,
        geoTarget: formGeoTarget,
        geoTargetCoords: formGeoTargetCoords
      } : c));
    }
    
    // Close editor/creator
    setEditingContent(null);
    setIsCreatingNew(false);
  };

  // Delete content action
  const handleDeleteContent = (id: number) => {
    if (window.confirm("คุณต้องการลบเนื้อหานี้ใช่หรือไม่?")) {
      setContents(prev => prev.filter(c => c.id !== id));
    }
  };

  // Simulated Media Upload
  const handleMediaUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mediaUploadName || !mediaUploadUrl) return;

    setMediaList(prev => [...prev, {
      name: mediaUploadName,
      size: "150 KB",
      url: mediaUploadUrl
    }]);

    setMediaUploadName("");
    setMediaUploadUrl("");
  };

  return (
    <div className="min-h-screen bg-armada-ivory flex">
      {/* 1. Admin Sidebar Navigation */}
      <aside className="w-64 bg-armada-navy text-armada-ivory flex flex-col border-r border-armada-sand/20">
        <div className="p-6 border-b border-armada-ivory/5 space-y-2">
          <span className="font-sans text-[8px] font-bold tracking-[0.3em] uppercase text-armada-sand block">
            ARMADA Admin Panel
          </span>
          <h2 className="font-headline font-light text-xl text-armada-ivory">
            CMS & Engine
          </h2>
        </div>
        
        <nav className="flex-grow py-6 flex flex-col space-y-1">
          <button
            onClick={() => { setActiveTab("overview"); setIsCreatingNew(false); setEditingContent(null); }}
            className={`font-sans text-[10px] font-bold tracking-widest uppercase py-3 px-6 text-left border-l-2 transition-calm ${
              activeTab === "overview"
                ? "border-armada-sand bg-armada-ivory/5 text-armada-sand"
                : "border-transparent text-armada-ivory/60 hover:text-armada-ivory hover:bg-armada-ivory/5"
            }`}
          >
            Overview (ภาพรวม)
          </button>
          
          <button
            onClick={() => { setActiveTab("contents"); }}
            className={`font-sans text-[10px] font-bold tracking-widest uppercase py-3 px-6 text-left border-l-2 transition-calm ${
              activeTab === "contents"
                ? "border-armada-sand bg-armada-ivory/5 text-armada-sand"
                : "border-transparent text-armada-ivory/60 hover:text-armada-ivory hover:bg-armada-ivory/5"
            }`}
          >
            Content & SEO (เนื้อหาบทความ)
          </button>

          <button
            onClick={() => { setActiveTab("config"); setIsCreatingNew(false); setEditingContent(null); }}
            className={`font-sans text-[10px] font-bold tracking-widest uppercase py-3 px-6 text-left border-l-2 transition-calm ${
              activeTab === "config"
                ? "border-armada-sand bg-armada-ivory/5 text-armada-sand"
                : "border-transparent text-armada-ivory/60 hover:text-armada-ivory hover:bg-armada-ivory/5"
            }`}
          >
            App Navigation (จัดการระบบ)
          </button>

          <button
            onClick={() => { setActiveTab("media"); setIsCreatingNew(false); setEditingContent(null); }}
            className={`font-sans text-[10px] font-bold tracking-widest uppercase py-3 px-6 text-left border-l-2 transition-calm ${
              activeTab === "media"
                ? "border-armada-sand bg-armada-ivory/5 text-armada-sand"
                : "border-transparent text-armada-ivory/60 hover:text-armada-ivory hover:bg-armada-ivory/5"
            }`}
          >
            Media Library (คลังรูปภาพ)
          </button>
        </nav>

        <div className="p-6 border-t border-armada-ivory/5 text-[9px] font-sans text-armada-ivory/30 tracking-wider">
          SYSTEM: v1.2.0 • PROD
        </div>
      </aside>

      {/* 2. Main Workspace Canvas */}
      <main className="flex-grow p-10 overflow-y-auto space-y-8">
        
        {/* Active view header */}
        <div className="flex justify-between items-center border-b border-armada-navy/10 pb-6">
          <div className="space-y-1">
            <span className="font-sans text-[8px] font-bold tracking-widest uppercase text-armada-navy/40">
              {activeTab.toUpperCase()} ENGINE
            </span>
            <h1 className="font-headline font-light text-4xl text-armada-navy">
              {activeTab === "overview" && "Dashboard Overview"}
              {activeTab === "contents" && (isCreatingNew ? "Create Article" : editingContent ? "Edit Article" : "Articles & SEO Management")}
              {activeTab === "config" && "Web Application Config"}
              {activeTab === "media" && "Media & Asset Storage"}
            </h1>
          </div>

          {activeTab === "contents" && !isCreatingNew && !editingContent && (
            <Button variant="primary" size="sm" onClick={openCreator}>
              Create Article
            </Button>
          )}
        </div>

        {/* Tab content renderer */}
        
        {/* A. OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Metric Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white border border-armada-navy/10 p-6 space-y-4">
                <span className="font-sans text-[8px] font-bold tracking-wider text-armada-navy/40 uppercase">
                  Total Articles
                </span>
                <div className="flex justify-between items-baseline">
                  <span className="font-headline text-4xl text-armada-navy">{totalStats.totalContents}</span>
                  <Badge variant="seablue">Active</Badge>
                </div>
              </div>
              <div className="bg-white border border-armada-navy/10 p-6 space-y-4">
                <span className="font-sans text-[8px] font-bold tracking-wider text-armada-navy/40 uppercase">
                  SEO Health Score
                </span>
                <div className="flex justify-between items-baseline">
                  <span className="font-headline text-4xl text-armada-navy">{totalStats.seoHealthScore}%</span>
                  <Badge variant="sage">Excellent</Badge>
                </div>
              </div>
              <div className="bg-white border border-armada-navy/10 p-6 space-y-4">
                <span className="font-sans text-[8px] font-bold tracking-wider text-armada-navy/40 uppercase">
                  AIO Crawler Ready
                </span>
                <div className="flex justify-between items-baseline">
                  <span className="font-headline text-4xl text-armada-navy">{totalStats.aioReadyCount} / {totalStats.totalContents}</span>
                  <Badge variant="sand">LLM Ready</Badge>
                </div>
              </div>
              <div className="bg-white border border-armada-navy/10 p-6 space-y-4">
                <span className="font-sans text-[8px] font-bold tracking-wider text-armada-navy/40 uppercase">
                  Media Library
                </span>
                <div className="flex justify-between items-baseline">
                  <span className="font-headline text-4xl text-armada-navy">{totalStats.mediaCount} Assets</span>
                  <Badge variant="default">R2 Storage</Badge>
                </div>
              </div>
            </div>

            {/* AIO & GEO Engine Diagnostics card */}
            <div className="bg-white border border-armada-navy/10 p-8 space-y-6">
              <div className="space-y-1">
                <Badge variant="sand">Diagnostics</Badge>
                <h3 className="font-headline text-2xl text-armada-navy">AIO & GEO Search Crawl Simulator</h3>
                <p className="font-serif text-xs text-armada-navy/60">
                  ระบบวิเคราะห์ความพร้อมของเนื้อหาสำหรับการค้นหาผ่าน Generative AI (AIO) และการกำหนดพื้นที่เป้าหมาย (GEO Search)
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-armada-navy/5 pt-6">
                <div className="space-y-4">
                  <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest text-armada-navy">
                    LLM Crawler Status
                  </h4>
                  <div className="p-4 bg-armada-ivory/60 border border-armada-navy/5 space-y-3 font-sans text-xs">
                    <div className="flex justify-between">
                      <span className="text-armada-navy/50">Gemini-Bot Access:</span>
                      <span className="font-bold text-armada-sage">Allowed (Robots.txt verified)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-armada-navy/50">Structured JSON-LD Schema:</span>
                      <span className="font-bold text-armada-sage">Correct (Article / Course)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-armada-navy/50">Direct Answer Snippets:</span>
                      <span className="font-bold text-armada-sand">Optimized</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest text-armada-navy">
                    Local GEO Placement Status
                  </h4>
                  <div className="p-4 bg-armada-ivory/60 border border-armada-navy/5 space-y-3 font-sans text-xs">
                    <div className="flex justify-between">
                      <span className="text-armada-navy/50">Default Target Locale:</span>
                      <span className="font-bold text-armada-navy">TH (Bangkok, Nonthaburi)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-armada-navy/50">Hreflang Tags:</span>
                      <span className="font-bold text-armada-sage">th, en, fr active</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-armada-navy/50">Local Schema Coords:</span>
                      <span className="font-bold text-armada-sage">100% Mapped</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* B. CONTENT MANAGER TAB */}
        {activeTab === "contents" && (
          <div className="space-y-6">
            {!isCreatingNew && !editingContent ? (
              /* Lists Grid Table */
              <div className="bg-white border border-armada-navy/10 overflow-hidden">
                <table className="w-full text-left font-sans text-xs">
                  <thead className="bg-armada-navy/5 font-bold uppercase tracking-widest text-[9px] text-armada-navy/60 border-b border-armada-navy/10">
                    <tr>
                      <th className="p-4">Title</th>
                      <th className="p-4">Type</th>
                      <th className="p-4">Language</th>
                      <th className="p-4">Geo Target</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-armada-navy/5">
                    {contents.map((item) => (
                      <tr key={item.id} className="hover:bg-armada-ivory/30 transition-calm">
                        <td className="p-4 font-medium text-armada-navy">
                          <div className="flex items-center space-x-3">
                            <img src={item.image} alt="" className="w-8 h-8 object-cover border border-armada-navy/10" />
                            <span>{item.title}</span>
                          </div>
                        </td>
                        <td className="p-4 text-armada-navy/60 uppercase tracking-wider text-[10px]">{item.type}</td>
                        <td className="p-4 text-armada-navy/60 text-[10px]">{item.lang}</td>
                        <td className="p-4 text-armada-navy/60 text-[10px]">{item.geoTarget}</td>
                        <td className="p-4">
                          <Badge variant={item.status === "Published" ? "sage" : "sand"}>
                            {item.status}
                          </Badge>
                        </td>
                        <td className="p-4 text-right space-x-3">
                          <button
                            onClick={() => openEditor(item)}
                            className="text-armada-sand font-bold text-[10px] tracking-wider uppercase hover:text-armada-navy transition-calm"
                          >
                            Edit / SEO
                          </button>
                          <button
                            onClick={() => handleDeleteContent(item.id)}
                            className="text-armada-terracotta font-bold text-[10px] tracking-wider uppercase hover:text-armada-navy transition-calm"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              /* EDITOR & CREATOR SPLIT VIEW WITH LIVE PREVIEWS */
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Form Inputs Container */}
                <form onSubmit={handleSaveContent} className="space-y-6 bg-white border border-armada-navy/10 p-8">
                  <div className="flex justify-between items-center border-b border-armada-navy/5 pb-4">
                    <span className="font-sans text-[10px] font-bold tracking-widest text-armada-sand uppercase">
                      Content Metadata Form
                    </span>
                    <Badge variant={formStatus === "Published" ? "sage" : "sand"}>
                      {formStatus}
                    </Badge>
                  </div>

                  {/* Section 1: General Details */}
                  <div className="space-y-4">
                    <h4 className="font-sans text-[10px] font-bold uppercase tracking-wider text-armada-navy border-l-2 border-armada-sand pl-2">
                      1. General Details
                    </h4>
                    
                    <div className="space-y-1">
                      <label className="font-sans text-[9px] font-bold text-armada-navy/50 uppercase block">หัวข้อบทความ / เนื้อหา</label>
                      <input
                        type="text"
                        required
                        value={formTitle}
                        onChange={(e) => setFormTitle(e.target.value)}
                        className="w-full bg-armada-ivory/50 border border-armada-navy/10 px-3 py-2 font-sans text-xs focus:outline-none focus:border-armada-sand text-armada-navy"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="font-sans text-[9px] font-bold text-armada-navy/50 uppercase block">ประเภท</label>
                        <select
                          value={formType}
                          onChange={(e) => setFormType(e.target.value as any)}
                          className="w-full bg-armada-ivory/50 border border-armada-navy/10 px-3 py-2 font-sans text-xs focus:outline-none focus:border-armada-sand text-armada-navy"
                        >
                          <option value="Story">Story</option>
                          <option value="Collection">Collection</option>
                          <option value="Craft">Craft</option>
                          <option value="Event">Event</option>
                          <option value="Course">Course</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="font-sans text-[9px] font-bold text-armada-navy/50 uppercase block">สถานะ</label>
                        <select
                          value={formStatus}
                          onChange={(e) => setFormStatus(e.target.value as any)}
                          className="w-full bg-armada-ivory/50 border border-armada-navy/10 px-3 py-2 font-sans text-xs focus:outline-none focus:border-armada-sand text-armada-navy"
                        >
                          <option value="Draft">Draft</option>
                          <option value="Published">Published</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="font-sans text-[9px] font-bold text-armada-navy/50 uppercase block">เนื้อหา (Body Content)</label>
                      <textarea
                        required
                        rows={4}
                        value={formBody}
                        onChange={(e) => setFormBody(e.target.value)}
                        className="w-full bg-armada-ivory/50 border border-armada-navy/10 px-3 py-2 font-sans text-xs focus:outline-none focus:border-armada-sand text-armada-navy leading-relaxed"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-sans text-[9px] font-bold text-armada-navy/50 uppercase block">ภาพประกอบหลัก (Image URL)</label>
                      <input
                        type="text"
                        value={formImage}
                        onChange={(e) => setFormImage(e.target.value)}
                        className="w-full bg-armada-ivory/50 border border-armada-navy/10 px-3 py-2 font-sans text-xs focus:outline-none focus:border-armada-sand text-armada-navy"
                      />
                    </div>
                  </div>

                  {/* Section 2: SEO Meta */}
                  <div className="space-y-4 pt-4 border-t border-armada-navy/5">
                    <h4 className="font-sans text-[10px] font-bold uppercase tracking-wider text-armada-navy border-l-2 border-armada-seablue pl-2">
                      2. SEO Configurations
                    </h4>
                    
                    <div className="space-y-1">
                      <label className="font-sans text-[9px] font-bold text-armada-navy/50 uppercase block">Meta Title</label>
                      <input
                        type="text"
                        value={formMetaTitle}
                        onChange={(e) => setFormMetaTitle(e.target.value)}
                        placeholder="จะถูกใช้เป็นหัวข้อเมื่อแสดงผลบนแถบแท็บของเบราว์เซอร์หรือการค้นหาบน Google"
                        className="w-full bg-armada-ivory/50 border border-armada-navy/10 px-3 py-2 font-sans text-xs focus:outline-none focus:border-armada-sand text-armada-navy"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-sans text-[9px] font-bold text-armada-navy/50 uppercase block">Meta Description</label>
                      <textarea
                        rows={2}
                        value={formMetaDesc}
                        onChange={(e) => setFormMetaDesc(e.target.value)}
                        placeholder="สรุปเนื้อหาสั้นๆ เพื่อแสดงบนการค้นหาของ Google เสริมการคลิกเข้าชมเว็บ"
                        className="w-full bg-armada-ivory/50 border border-armada-navy/10 px-3 py-2 font-sans text-xs focus:outline-none focus:border-armada-sand text-armada-navy leading-relaxed"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-sans text-[9px] font-bold text-armada-navy/50 uppercase block">Keywords (คีย์เวิร์ดคั่นด้วยจุลภาค)</label>
                      <input
                        type="text"
                        value={formMetaKeywords}
                        onChange={(e) => setFormMetaKeywords(e.target.value)}
                        placeholder="e.g. อัปไซคลิง, หัตถกรรมยั่งยืน"
                        className="w-full bg-armada-ivory/50 border border-armada-navy/10 px-3 py-2 font-sans text-xs focus:outline-none focus:border-armada-sand text-armada-navy"
                      />
                    </div>
                  </div>

                  {/* Section 3: AIO & GEO Engine Meta */}
                  <div className="space-y-4 pt-4 border-t border-armada-navy/5">
                    <h4 className="font-sans text-[10px] font-bold uppercase tracking-wider text-armada-navy border-l-2 border-armada-sage pl-2">
                      3. AIO (AI Optimization) & GEO targeting
                    </h4>
                    
                    <div className="space-y-1">
                      <label className="font-sans text-[9px] font-bold text-armada-navy/50 uppercase block">AI Assistant Summary (สำหรับแชทบอท Gemini, ChatGPT)</label>
                      <textarea
                        rows={3}
                        value={formAioSummary}
                        onChange={(e) => setFormAioSummary(e.target.value)}
                        placeholder="เขียนคำอธิบายบทสรุปแบบตรงไปตรงมาเพื่อให้ LLM เข้ามาดึงข้อมูลเพื่อสรุปคำตอบให้ผู้ใช้ได้ง่ายและแม่นยำที่สุด"
                        className="w-full bg-armada-ivory/50 border border-armada-navy/10 px-3 py-2 font-sans text-xs focus:outline-none focus:border-armada-sand text-armada-navy leading-relaxed"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="font-sans text-[9px] font-bold text-armada-navy/50 uppercase block">Geo Target (พิกัดเป้าหมาย)</label>
                        <input
                          type="text"
                          value={formGeoTarget}
                          onChange={(e) => setFormGeoTarget(e.target.value)}
                          placeholder="e.g. Nonthaburi, Thailand"
                          className="w-full bg-armada-ivory/50 border border-armada-navy/10 px-3 py-2 font-sans text-xs focus:outline-none focus:border-armada-sand text-armada-navy"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-sans text-[9px] font-bold text-armada-navy/50 uppercase block">Coordinates (Lat, Long)</label>
                        <input
                          type="text"
                          value={formGeoTargetCoords}
                          onChange={(e) => setFormGeoTargetCoords(e.target.value)}
                          placeholder="e.g. 13.8617, 100.5131"
                          className="w-full bg-armada-ivory/50 border border-armada-navy/10 px-3 py-2 font-sans text-xs focus:outline-none focus:border-armada-sand text-armada-navy"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="pt-6 border-t border-armada-navy/10 flex gap-4">
                    <Button
                      type="button"
                      variant="ghost"
                      className="flex-1"
                      onClick={() => { setEditingContent(null); setIsCreatingNew(false); }}
                    >
                      ยกเลิก
                    </Button>
                    <Button
                      type="submit"
                      variant="primary"
                      className="flex-1"
                    >
                      บันทึกบทความ
                    </Button>
                  </div>
                </form>

                {/* Real-time Previews Container */}
                <div className="space-y-6">
                  {/* Selector Header */}
                  <div className="bg-white border border-armada-navy/10 p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-sans text-[10px] font-bold tracking-widest text-armada-sand uppercase">
                        Live Preview Engine
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setPreviewEngine("google")}
                        className={`py-2 px-3 border font-sans text-[9px] font-bold tracking-widest uppercase transition-calm ${
                          previewEngine === "google"
                            ? "bg-armada-navy border-armada-navy text-armada-ivory"
                            : "border-armada-navy/10 text-armada-navy/40 hover:border-armada-navy/30"
                        }`}
                      >
                        Google Search
                      </button>
                      <button
                        type="button"
                        onClick={() => setPreviewEngine("gemini")}
                        className={`py-2 px-3 border font-sans text-[9px] font-bold tracking-widest uppercase transition-calm ${
                          previewEngine === "gemini"
                            ? "bg-armada-navy border-armada-navy text-armada-ivory"
                            : "border-armada-navy/10 text-armada-navy/40 hover:border-armada-navy/30"
                        }`}
                      >
                        Gemini LLM
                      </button>
                      <button
                        type="button"
                        onClick={() => setPreviewEngine("social")}
                        className={`py-2 px-3 border font-sans text-[9px] font-bold tracking-widest uppercase transition-calm ${
                          previewEngine === "social"
                            ? "bg-armada-navy border-armada-navy text-armada-ivory"
                            : "border-armada-navy/10 text-armada-navy/40 hover:border-armada-navy/30"
                        }`}
                      >
                        Social Card
                      </button>
                    </div>
                  </div>

                  {/* Previews Screens */}
                  <div className="bg-white border border-armada-navy/10 p-8 min-h-[300px] flex flex-col justify-center">
                    {/* 1. Google Preview */}
                    {previewEngine === "google" && (
                      <div className="space-y-3 font-sans">
                        <span className="text-xs text-armada-navy/40 block">Google Search Result Snippet:</span>
                        <div className="space-y-1">
                          <span className="text-[10px] text-armada-navy/60 block truncate">
                            https://artcrewarmada.pages.dev › articles › {formTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                          </span>
                          <h4 className="text-xl text-blue-800 hover:underline cursor-pointer font-medium leading-snug">
                            {formMetaTitle || formTitle || "Untitled Document"}
                          </h4>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {formMetaDesc || formBody || "กรุณากรอกเนื้อหาหรือข้อมูลสำหรับ Meta Description เพื่อแสดงผลที่นี่..."}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* 2. Gemini Preview */}
                    {previewEngine === "gemini" && (
                      <div className="space-y-4">
                        <span className="font-sans text-xs text-armada-navy/40 block">Gemini Search Assistant AI Answer:</span>
                        <div className="bg-armada-ivory p-6 border border-armada-navy/5 space-y-4 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <div className="w-5 h-5 bg-armada-navy rounded-full flex items-center justify-center font-bold text-[9px] text-armada-sand">
                              G
                            </div>
                            <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-armada-navy">Gemini Agent</span>
                          </div>
                          
                          <div className="font-serif text-xs text-armada-navy/80 space-y-2 leading-relaxed">
                            <p>
                              จากการสำรวจบนเครือข่าย <strong>ARTcrew ARMADA</strong> พบว่า {formTitle || "[ระบุหัวข้อ]"} เป็นกิจกรรมประเภท {formType} ในพื้นที่ {formGeoTarget || "ประเทศไทย"}
                            </p>
                            <p>
                              {formAioSummary ? `"${formAioSummary}"` : "คุณสามารถเพิ่ม 'AI Assistant Summary' เพื่อให้แชทบอทตอบคำถามเกี่ยวกับบทความนี้ได้ครบถ้วนและเป็นธรรมชาติมากขึ้น"}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 3. Social Card Preview */}
                    {previewEngine === "social" && (
                      <div className="space-y-3 font-sans">
                        <span className="text-xs text-armada-navy/40 block">Facebook / X OpenGraph Card Preview:</span>
                        <div className="border border-gray-200 overflow-hidden bg-white max-w-sm mx-auto shadow-sm">
                          <div className="aspect-[1.91/1] bg-armada-navy/5 relative overflow-hidden flex items-center justify-center">
                            {formImage ? (
                              <img src={formImage} alt="" className="w-full h-full object-cover" />
                            ) : (
                              <span className="text-xs text-armada-navy/20">No Image Specified</span>
                            )}
                          </div>
                          <div className="p-4 space-y-2 bg-gray-50 border-t border-gray-100">
                            <span className="text-[9px] text-gray-400 uppercase tracking-widest block">ARTCREWARMADA.PAGES.DEV</span>
                            <h5 className="font-bold text-sm text-armada-navy truncate leading-tight">
                              {formMetaTitle || formTitle || "Untitled Link"}
                            </h5>
                            <p className="text-[10px] text-gray-500 line-clamp-2 leading-normal">
                              {formMetaDesc || formBody || "กรุณากรอกข้อมูลจำลอง..."}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* C. WEB APP MENU CONFIG TAB */}
        {activeTab === "config" && (
          <div className="space-y-8">
            {/* General Settings */}
            <div className="bg-white border border-armada-navy/10 p-8 space-y-6">
              <div className="space-y-1">
                <Badge variant="sand">General Config</Badge>
                <h3 className="font-headline text-2xl text-armada-navy">ระบบตั้งค่าข้อมูลทั่วไปของเว็บแอป</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-armada-navy/5 pt-6">
                <div className="space-y-1">
                  <label className="font-sans text-[9px] font-bold text-armada-navy/60 uppercase block">Brand Essence Tagline (TH/EN)</label>
                  <input
                    type="text"
                    defaultValue="From Craft to Creation, From People to Possibility."
                    className="w-full bg-armada-ivory/50 border border-armada-navy/10 px-3 py-2 font-sans text-xs focus:outline-none focus:border-armada-sand text-armada-navy"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-sans text-[9px] font-bold text-armada-navy/60 uppercase block">Default Site Language (ภาษาเริ่มต้น)</label>
                  <select className="w-full bg-armada-ivory/50 border border-armada-navy/10 px-3 py-2 font-sans text-xs focus:outline-none focus:border-armada-sand text-armada-navy">
                    <option value="th">ภาษาไทย (TH)</option>
                    <option value="en">English (EN)</option>
                    <option value="fr">Français (FR)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Menu settings List */}
            <div className="bg-white border border-armada-navy/10 p-8 space-y-6">
              <h3 className="font-headline text-2xl text-armada-navy">แอปเมนูบิลเดอร์ (SaaS Navigation Menu)</h3>
              
              <div className="grid grid-cols-1 gap-3 border-t border-armada-navy/5 pt-6">
                {menus.map((m) => (
                  <div key={m.id} className="p-4 border border-armada-navy/10 flex justify-between items-center bg-white hover:border-armada-sand transition-calm">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-armada-navy/5 text-armada-navy flex items-center justify-center font-bold text-xs">
                        ❏
                      </div>
                      <div>
                        <span className="font-headline text-lg text-armada-navy font-semibold">{m.label}</span>
                        <span className="font-sans text-[9px] text-armada-navy/40 block">Path: {m.path}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <span className="font-sans text-[10px] text-armada-navy/50">{m.itemsCount} content files</span>
                      <button className="text-armada-sand font-bold text-[9px] tracking-widest uppercase hover:text-armada-navy transition-calm">
                        Edit Link
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* D. MEDIA LIBRARY TAB */}
        {activeTab === "media" && (
          <div className="space-y-8">
            {/* Upload Zone */}
            <div className="bg-white border border-armada-navy/10 p-8 space-y-6">
              <div className="space-y-1">
                <Badge variant="sand">Media Upload</Badge>
                <h3 className="font-headline text-2xl text-armada-navy">เพิ่มรูปภาพเข้าสู่ Cloudflare R2 Storage</h3>
              </div>

              <form onSubmit={handleMediaUpload} className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-armada-navy/5 pt-6 items-end">
                <div className="space-y-1">
                  <label className="font-sans text-[9px] font-bold text-armada-navy/50 uppercase block">ชื่อไฟล์รูปภาพ</label>
                  <input
                    type="text"
                    required
                    value={mediaUploadName}
                    onChange={(e) => setMediaUploadName(e.target.value)}
                    placeholder="e.g. cover-bag.jpg"
                    className="w-full bg-armada-ivory/50 border border-armada-navy/10 px-3 py-2 font-sans text-xs focus:outline-none focus:border-armada-sand text-armada-navy"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-sans text-[9px] font-bold text-armada-navy/50 uppercase block">Image URL / Data String</label>
                  <input
                    type="text"
                    required
                    value={mediaUploadUrl}
                    onChange={(e) => setMediaUploadUrl(e.target.value)}
                    placeholder="e.g. /logo-atelier.jpg"
                    className="w-full bg-armada-ivory/50 border border-armada-navy/10 px-3 py-2 font-sans text-xs focus:outline-none focus:border-armada-sand text-armada-navy"
                  />
                </div>
                <Button type="submit" variant="primary">
                  Upload Image
                </Button>
              </form>
            </div>

            {/* Media Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {mediaList.map((m, index) => (
                <div key={index} className="bg-white border border-armada-navy/10 p-4 space-y-3 flex flex-col justify-between hover:shadow-md transition-calm">
                  <div className="aspect-square bg-armada-navy/5 relative overflow-hidden border border-armada-navy/5">
                    <img src={m.url} alt={m.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="space-y-1">
                    <span className="font-sans font-bold text-xs text-armada-navy block truncate">{m.name}</span>
                    <span className="font-sans text-[9px] text-armada-navy/40 block">Size: {m.size}</span>
                  </div>

                  <div className="pt-2 border-t border-armada-navy/5">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(m.url);
                        alert(`คัดลอกลิ้งค์ ${m.name} สำเร็จ!`);
                      }}
                      className="w-full text-center py-1 bg-armada-navy/5 hover:bg-armada-navy/10 text-armada-navy font-sans text-[8px] font-bold tracking-widest uppercase transition-calm border border-armada-navy/10"
                    >
                      Copy URL
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
