import type { Metadata } from "next";
import { Crimson_Text, Inter } from "next/font/google";
import "./globals.css";

const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bill Gill | Psychological Thriller Author",
  description:
    "Bill Gill writes stories that expose the shadows beneath ordinary lives. Author of Terrence and other gripping psychological thrillers that explore the dark side of human nature.",
  keywords: ["psychological thriller", "crime fiction", "serial killer", "mystery", "suspense", "Bill Gill", "Terrence"],
  authors: [{ name: "Bill Gill" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${crimsonText.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
