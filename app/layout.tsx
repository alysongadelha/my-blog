import { Header } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Aldrich, Montserrat, Orbitron, Rajdhani } from "next/font/google";

const montSerrat = Montserrat({ subsets: ["latin"] });

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-rajdhani",
});
const aldrich = Aldrich({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-aldrich",
});

export const metadata: Metadata = {
  title: "Alyson Blog",
  description: "A place to storage my memories and data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montSerrat.className} ${orbitron.variable} ${rajdhani.variable} ${aldrich.variable} bg-gray-900 bg-siteStar bg-repeat text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
