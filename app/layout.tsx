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
      <body
        className={`${ledger.className} relative bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#d9acae] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#b06364]"></div>
        <div className="bg-[#bbb5e8] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#474277]"></div>
        {children}
      </body>
    </html>
  );
}
