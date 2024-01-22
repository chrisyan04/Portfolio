import "./globals.css";
import { Ledger } from "next/font/google";

const ledger = Ledger({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Chris Yan",
  description:
    "An aspiring software machine learning engineer currently studying at the University of Toronto.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${ledger.className} bg-black/90`}>
        {children}
      </body>
    </html>
  );
}
