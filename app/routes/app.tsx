import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { Logo } from "~/components/branding/logo";

export default function AppLayout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile drawer when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const menuItems = [
    { to: "/app/dashboard", label: "Dashboard", icon: "dashboard" },
    { to: "/app/courses", label: "Courses", icon: "courses" },
    { to: "/app/learning", label: "My Learning", icon: "learning" },
    { to: "/app/events", label: "Events", icon: "events" },
    { to: "/app/community", label: "Community", icon: "community" },
    { to: "/app/projects", label: "Projects", icon: "projects" },
    { to: "/app/messages", label: "Messages", icon: "messages" },
    { to: "/app/resources", label: "Resources", icon: "resources" },
    { to: "/app/settings", label: "Settings", icon: "settings" },
  ];

  // Mobile Bottom Nav Main Items
  const primaryMobileItems = [
    { to: "/app/dashboard", label: "Dashboard", icon: "dashboard" },
    { to: "/app/courses", label: "Courses", icon: "courses" },
    { to: "/app/learning", label: "Learning", icon: "learning" },
    { to: "/app/settings", label: "Settings", icon: "settings" },
  ];

  // Mobile More Items (shown inside slide-up drawer)
  const secondaryMobileItems = [
    { to: "/app/events", label: "Events", desc: "ตารางกิจกรรมศิลปะ", icon: "events" },
    { to: "/app/community", label: "Community", desc: "ชุมชนช่างฝีมือ", icon: "community" },
    { to: "/app/projects", label: "Projects", desc: "โครงงานอัปไซคลิง", icon: "projects" },
    { to: "/app/messages", label: "Messages", desc: "กล่องข้อความ", icon: "messages" },
    { to: "/app/resources", label: "Resources", desc: "คลังข้อมูลวิชาการ", icon: "resources" },
  ];

  // Render SVG Icon helpers
  const renderIcon = (name: string, className = "w-5 h-5") => {
    switch (name) {
      case "dashboard":
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      case "courses":
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case "learning":
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-6-3h12" />
          </svg>
        );
      case "events":
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case "community":
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case "projects":
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        );
      case "messages":
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        );
      case "resources":
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
          </svg>
        );
      case "settings":
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-armada-ivory text-armada-navy">
      
      {/* 1. Mobile Header (Fixed Top) */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-armada-navy text-armada-ivory flex items-center justify-between px-4 border-b border-armada-sand/10 z-40">
        <Link to="/" className="inline-block transform scale-90 origin-left">
          <Logo variant="full" theme="light" />
        </Link>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-armada-sand/20 border border-armada-sand flex items-center justify-center font-bold text-xs text-armada-sand">
            U
          </div>
        </div>
      </header>

      {/* 2. Desktop Sidebar (Hidden on Mobile) */}
      <aside className="hidden md:flex w-64 bg-armada-navy text-armada-ivory flex-col justify-between border-r border-armada-sand/10 flex-shrink-0">
        <div className="p-6 space-y-8">
          {/* Logo Area */}
          <Link to="/" className="inline-block">
            <Logo variant="full" theme="light" />
          </Link>

          {/* Navigation Menu */}
          <nav className="space-y-1.5 flex flex-col">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`font-sans text-[10px] font-bold tracking-widest uppercase py-3 px-4 transition-calm border-l-2 flex items-center space-x-3 ${
                    isActive
                      ? "border-armada-sand bg-armada-ivory/5 text-armada-sand"
                      : "border-transparent text-armada-ivory/60 hover:text-armada-ivory hover:bg-armada-ivory/5"
                  }`}
                >
                  {renderIcon(item.icon, "w-4 h-4")}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Info / Logout area */}
        <div className="p-6 border-t border-armada-ivory/5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-armada-sand/20 border border-armada-sand flex items-center justify-center font-bold text-xs text-armada-sand">
              U
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-[10px] font-bold tracking-wider uppercase text-armada-ivory">
                Artisan Member
              </span>
              <span className="font-sans text-[8px] text-armada-ivory/40 uppercase">
                armada.th2025@gmail.com
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* 3. Main Content Canvas */}
      <main className="flex-grow p-4 sm:p-6 md:p-10 pt-20 md:pt-10 pb-24 md:pb-10 overflow-y-auto w-full">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>

      {/* 4. Mobile Bottom Tab Bar (Fixed Bottom) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-armada-navy border-t border-armada-sand/10 flex items-center justify-around z-40 px-2 pb-safe shadow-[0_-4px_24px_rgba(0,0,0,0.15)]">
        {primaryMobileItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center justify-center py-2 flex-grow transition-calm ${
                isActive ? "text-armada-sand" : "text-armada-ivory/50"
              }`}
            >
              {renderIcon(item.icon, "w-5 h-5 mb-1")}
              <span className="font-sans text-[8px] font-bold uppercase tracking-wider">{item.label}</span>
            </Link>
          );
        })}
        {/* Mobile "More" Tab */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className={`flex flex-col items-center justify-center py-2 flex-grow transition-calm ${
            isMobileMenuOpen ? "text-armada-sand" : "text-armada-ivory/50"
          }`}
        >
          <svg className="w-5 h-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="font-sans text-[8px] font-bold uppercase tracking-wider">More</span>
        </button>
      </nav>

      {/* 5. Mobile Drawer / Sheet (Slide-Up Menu) */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col justify-end">
          {/* Backdrop Overlay */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative bg-armada-navy border-t border-armada-sand/20 rounded-t-2xl p-6 z-10 shadow-2xl max-h-[70vh] overflow-y-auto">
            {/* Grabber Handle */}
            <div className="w-12 h-1 bg-armada-ivory/20 rounded-full mx-auto mb-6" />

            <div className="flex justify-between items-center mb-6">
              <h3 className="font-sans text-[11px] font-bold tracking-widest text-armada-sand uppercase">
                เมนูเพิ่มเติม
              </h3>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-armada-ivory/60 hover:text-armada-ivory text-xs uppercase font-sans font-bold tracking-wider"
              >
                ปิด
              </button>
            </div>

            {/* Sub-menu options */}
            <div className="space-y-3">
              {secondaryMobileItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`flex items-center space-x-4 p-3 rounded-lg transition-calm ${
                      isActive 
                        ? "bg-armada-ivory/10 text-armada-sand border border-armada-sand/20" 
                        : "bg-armada-ivory/5 text-armada-ivory hover:bg-armada-ivory/10"
                    }`}
                  >
                    <div className="p-2 rounded-md bg-armada-navy border border-armada-sand/10 text-armada-sand">
                      {renderIcon(item.icon, "w-5 h-5")}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans text-xs font-bold uppercase tracking-wider">{item.label}</span>
                      <span className="font-sans text-[9px] text-armada-ivory/40">{item.desc}</span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Logout/User panel in Drawer */}
            <div className="mt-8 pt-6 border-t border-armada-ivory/5 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-armada-sand/20 border border-armada-sand flex items-center justify-center font-bold text-xs text-armada-sand">
                  U
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] font-bold tracking-wider text-armada-ivory uppercase">
                    Artisan Member
                  </span>
                  <span className="font-sans text-[8px] text-armada-ivory/40">
                    armada.th2025@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
