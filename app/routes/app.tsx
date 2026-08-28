import { Outlet, Link, useLocation } from "react-router";
import { Logo } from "~/components/branding/logo";

export default function AppLayout() {
  const location = useLocation();

  const menuItems = [
    { to: "/app/dashboard", label: "Dashboard" },
    { to: "/app/courses", label: "Courses" },
    { to: "/app/learning", label: "My Learning" },
    { to: "/app/events", label: "Events" },
    { to: "/app/community", label: "Community" },
    { to: "/app/projects", label: "Projects" },
    { to: "/app/messages", label: "Messages" },
    { to: "/app/resources", label: "Resources" },
    { to: "/app/settings", label: "Settings" },
  ];

  return (
    <div className="min-h-screen flex bg-armada-ivory text-armada-navy">
      {/* 1. Sidebar - Dark Navy Style */}
      <aside className="w-64 bg-armada-navy text-armada-ivory flex flex-col justify-between border-r border-armada-sand/10">
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
                  className={`font-sans text-[10px] font-bold tracking-widest uppercase py-3 px-4 transition-calm border-l-2 ${
                    isActive
                      ? "border-armada-sand bg-armada-ivory/5 text-armada-sand"
                      : "border-transparent text-armada-ivory/60 hover:text-armada-ivory hover:bg-armada-ivory/5"
                  }`}
                >
                  {item.label}
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
                member@gmail.com
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* 2. Main Content Canvas */}
      <main className="flex-grow p-10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
