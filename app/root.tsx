import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "react-router";
import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { getLanguageFromRequest } from "~/locales/helpers";
import "./app.css";

export const meta: MetaFunction = () => {
  return [
    { title: "ARTcrew ARMADA - Creation & Craft House" },
    { name: "description", content: "Values from Craft, Connecting People to Sustainable Innovation." },
  ];
};

export const links = () => [
  { rel: "icon", type: "image/jpeg", href: "/logo-artcrew.jpg" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Thai:wght@300;400;500;600;700;800&family=Noto+Serif+Thai:wght@300;400;500;600;700;800&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
  },
];

export function loader({ request }: LoaderFunctionArgs) {
  const lang = getLanguageFromRequest(request);
  return { lang };
}

export function Layout({ children }: { children: React.ReactNode }) {
  // Safe extraction of loaderData (handles boundary errors gracefully)
  let loaderData;
  try {
    loaderData = useLoaderData() as { lang: string } | undefined;
  } catch {
    loaderData = undefined;
  }
  const lang = loaderData?.lang || "th";

  return (
    <html lang={lang} data-lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="antialiased">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: any) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-8 bg-[#131313] text-[#F5F2EA]">
      <div className="max-w-md text-center space-y-6">
        <h1 className="font-serif-display font-light text-6xl text-[#B08A3E]">{message}</h1>
        <p className="font-sans text-xs uppercase tracking-widest text-[#AFAFA9]">{details}</p>
        {stack && (
          <pre className="p-4 bg-[#F5F2EA]/5 text-[10px] text-left overflow-x-auto border border-[#F5F2EA]/10">
            <code>{stack}</code>
          </pre>
        )}
        <div className="pt-4">
          <a
            href="/"
            className="inline-block border border-[#F5F2EA]/30 px-6 py-2.5 font-sans text-[10px] font-bold tracking-widest uppercase hover:bg-[#B08A3E] hover:text-[#F5F2EA] hover:border-[#B08A3E] transition-calm"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </main>
  );
}
