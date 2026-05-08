import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ladi Agbenu Stephen | Global Health Executive & Leadership Advisor",
  description:
    "Official website of Ladi Agbenu Stephen — Global Health Executive, International Development Leader, Speaker, and Strategic Operations Specialist focused on leadership, health systems strengthening, and human-centered impact across Africa.",
  keywords: [
    "Global Health Executive",
    "International Development Leader",
    "Supply Chain Leadership",
    "Healthcare Systems Leadership",
    "Women in Leadership",
    "Global Health Speaker",
    "Leadership Development Speaker",
    "Strategic Operations Advisor",
    "Human-Centered Leadership",
  ],
  openGraph: {
    title: "Ladi Agbenu Stephen | Global Health Executive & Leadership Advisor",
    description:
      "Global Health Executive, International Development Leader, Speaker, and Strategic Operations Specialist.",
    type: "website",
    locale: "en_US",
    siteName: "Ladi Agbenu Stephen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ladi Agbenu Stephen | Global Health Executive & Leadership Advisor",
    description:
      "Global Health Executive, International Development Leader, Speaker, and Strategic Operations Specialist.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${libreBaskerville.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
