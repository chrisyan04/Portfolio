import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const mont = Montserrat({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Chris Yan | Dev",
  description: "Learn some more about me! I promise I'm not boring!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#18181b]">
      <body className={mont.className}>{children}</body>
    </html>
  );
}
