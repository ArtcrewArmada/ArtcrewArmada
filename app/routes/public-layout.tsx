import { useEffect } from "react";
import { Outlet, useParams, redirect } from "react-router";
import { Header } from "~/components/layout/header";
import { Footer } from "~/components/layout/footer";
import { isSupportedLanguage, defaultLanguage } from "~/locales/dictionary";

export function loader({ params }: { params: { lang?: string } }) {
  if (params.lang && !isSupportedLanguage(params.lang)) {
    return redirect(`/${defaultLanguage}`);
  }
  return null;
}

export default function PublicLayout() {
  const params = useParams();
  const currentLang = params.lang && isSupportedLanguage(params.lang) ? params.lang : defaultLanguage;

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = currentLang;
      document.documentElement.setAttribute("data-lang", currentLang);
    }
  }, [currentLang]);

  return (
    <div
      data-lang={currentLang}
      className="min-h-screen flex flex-col bg-[#131313] text-[#F5F2EA] selection:bg-[#B08A3E]/30 selection:text-[#F5F2EA]"
    >
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
