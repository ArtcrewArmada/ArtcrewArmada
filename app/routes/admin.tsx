import { Link, useLocation } from "react-router";
import { Badge } from "~/components/ui/badge";

export default function AdminLayout() {
  const adminMenuItems = [
    { label: "Overview", path: "/admin" },
    { label: "Contents", path: "/admin/content" },
    { label: "Collections", path: "/admin/collections" },
    { label: "Products", path: "/admin/products" },
    { label: "Courses", path: "/admin/courses" },
    { label: "Events", path: "/admin/events" },
    { label: "Users & Roles", path: "/admin/users" },
  ];

  const contents = [
    { id: 1, title: "Natural Dye Workshop Story", type: "Journal", status: "Published", lang: "TH / EN" },
    { id: 2, title: "Eco-Luxury Chair Collection", type: "Collection", status: "Draft", lang: "TH / EN / FR" },
  ];

  return (
    <div className="min-h-screen bg-armada-ivory flex">
      {/* 1. Admin Sidebar - Dense Menu */}
      <aside className="w-56 bg-armada-navy text-armada-ivory flex flex-col border-r border-armada-sand/20">
        <div className="p-6 border-b border-armada-ivory/5">
          <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-armada-sand">
            ARMADA Admin
          </span>
        </div>
        <nav className="flex-grow py-4 flex flex-col">
          {adminMenuItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="font-sans text-[9px] font-bold tracking-widest uppercase py-2.5 px-6 text-armada-ivory/60 hover:text-armada-ivory hover:bg-armada-ivory/5 border-l-2 border-transparent transition-calm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* 2. Admin Workspace Content Area */}
      <main className="flex-grow p-8 space-y-10">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <span className="font-sans text-[8px] font-bold tracking-widest uppercase text-armada-navy/40">
              CMS Engine
            </span>
            <h1 className="font-headline text-3xl font-light text-armada-navy">
              Content Management System
            </h1>
          </div>
          
          <button className="bg-armada-sand border border-armada-sand text-armada-navy font-sans text-[9px] font-bold tracking-widest uppercase px-4 py-2 hover:bg-armada-navy hover:border-armada-navy hover:text-armada-ivory transition-calm">
            Create Content
          </button>
        </div>

        {/* Contents lists table - Dense layout style */}
        <div className="bg-white border border-armada-navy/10 overflow-hidden">
          <table className="w-full text-left font-sans text-xs">
            <thead className="bg-armada-navy/5 font-bold uppercase tracking-widest text-[9px] text-armada-navy/60 border-b border-armada-navy/10">
              <tr>
                <th className="p-4">Title</th>
                <th className="p-4">Type</th>
                <th className="p-4">Language</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-armada-navy/5">
              {contents.map((item) => (
                <tr key={item.id} className="hover:bg-armada-ivory/30 transition-calm">
                  <td className="p-4 font-medium text-armada-navy">{item.title}</td>
                  <td className="p-4 text-armada-navy/60 uppercase tracking-wider text-[10px]">{item.type}</td>
                  <td className="p-4 text-armada-navy/60 text-[10px]">{item.lang}</td>
                  <td className="p-4">
                    <Badge variant={item.status === "Published" ? "sage" : "sand"}>
                      {item.status}
                    </Badge>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    <button className="text-armada-sand font-bold text-[10px] tracking-wider uppercase hover:text-armada-navy transition-calm">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
