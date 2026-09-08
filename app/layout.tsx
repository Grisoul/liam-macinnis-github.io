import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Liam MacInnis | Portfolio",
  description: "Portfolio of Liam MacInnis, a software developer and data analytics student.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jost.className}`}>
      <body>{children}</body>
    </html>
  );
}
