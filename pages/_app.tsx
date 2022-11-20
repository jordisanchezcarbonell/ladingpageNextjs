import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
