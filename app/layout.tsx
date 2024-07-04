import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | HairByAnna",
    default: "HairByAnna",
  },
  description: "HairByAnna, your favorite hairdresser",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen p-8 bg-slate-200 app-container">
          <Header />
          <main className="relative z-10 neumorphism-flat bg-slate-200 rounded-lg my-8 mx-auto w-full md:w-3/4 lg:w-1/2 p-4">
            <hr className="sm:w-48 w-32 h-1 mx-auto bg-pink-500/50 border-0 rounded mt-2 mb-4" />
            {children}
            <hr className="sm:w-48 w-32 h-1 mx-auto bg-pink-500/50 border-0 rounded mt-2 mb-4" />
          </main>
        </div>
      </body>
    </html>
  );
}
