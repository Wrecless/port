import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const title = "Bruno Mata — CS Educator & Full-Stack Developer";
const description =
  "Full-stack developer and qualified Computing educator. Explore Python Quest, classroom games, business websites, and local-AI prototypes.";

export const metadata: Metadata = {
  metadataBase: new URL('https://brunomata.vercel.app'),
  alternates: { canonical: '/' },
  title,
  description,
  openGraph: {
    url: 'https://brunomata.vercel.app',
    locale: 'en_GB',
    title,
    description,
    type: "website",
    siteName: "Bruno Mata",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistMono.variable} ${dmSans.variable} ${dmSerif.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
