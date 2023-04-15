import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from 'next/script'
import { Analytics } from "@vercel/analytics/react";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Provider as RWBProvider } from "react-wrap-balancer";
import cx from "classnames";
import localFont from "@next/font/local";
import { Inter } from "@next/font/google";
import { Paytone_One } from "@next/font/google";

const sfPro = localFont({
  src: "../styles/SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const paytone = Paytone_One({
  variable: "--font-paytone",
  subsets: ["latin"],
  weight: "400"
});

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <RWBProvider>
        <div className={cx(sfPro.variable, paytone.variable)}>
          <Component {...pageProps} />
        </div>
      </RWBProvider>
      <Analytics />
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-LBCSGGT96B"/>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LBCSGGT96B', {
              page_path: window.location.pathname,
            });
          `,
          }}
      />
    </SessionProvider>
  );
}
