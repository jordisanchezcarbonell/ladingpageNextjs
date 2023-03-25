import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-LGR8ST2Q83`}
      />

      <Script id="Seo" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', "G-LGR8ST2Q83", {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
