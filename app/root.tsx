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
  { rel: "icon", type: "image/jpeg", href: "/logo-atelier.jpg" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Montserrat:wght@300;400;500;600;700&family=Noto+Sans+Thai:wght@300;400;500;600;700&family=Noto+Serif+Thai:wght@300;400;500;600&display=swap",
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
    <html lang={lang}>
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
    <main className="min-h-screen flex items-center justify-center p-8 bg-armada-ivory text-armada-navy">
      <div className="max-w-md text-center space-y-6">
        <h1 className="font-headline font-light text-6xl text-armada-sand">{message}</h1>
        <p className="font-sans text-xs uppercase tracking-widest text-armada-navy/60">{details}</p>
        {stack && (
          <pre className="p-4 bg-armada-navy/5 text-[10px] text-left overflow-x-auto border border-armada-navy/10">
            <code>{stack}</code>
          </pre>
        )}
        <div className="pt-4">
          <a
            href="/"
            className="inline-block border border-armada-navy px-6 py-2.5 font-sans text-[10px] font-bold tracking-widest uppercase hover:bg-armada-navy hover:text-armada-ivory transition-calm"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </main>
  );
}
