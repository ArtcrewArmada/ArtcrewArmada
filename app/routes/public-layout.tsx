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
  return (
    <div className="min-h-screen flex flex-col bg-armada-ivory">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
