import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./components/sidebar/sidebar";
import Navbar from "./components/navbar/navbar";
import { AnimatePresence } from "framer-motion";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hunain's Portfolio",
  description: "Created by Hunain Afzal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AnimatePresence mode="wait" initial={false}>
        <body
          style={{
            height: "100vh",
            background:
              "radial-gradient(circle at -8.9% 51.2%, rgb(255, 124, 0) 0%, rgb(255, 124, 0) 15.9%, rgb(255, 163, 77) 15.9%, rgb(255, 163, 77) 24.4%, rgb(19, 30, 37) 24.5%, rgb(19, 30, 37) 66%)",
          }}
          className={`${geistSans.variable} ${geistMono.variable} antialiased  `}
        >
          <div className="h-screen  md:flex w-full p-3 md:p-8 ">
            <div className="md:w-1/4 w-full   backdrop-blur-md bg-white/5 rounded-xl ">
              <Sidebar />
            </div>
            <div className="md:w-[80%] flex flex-col gap-4 md:px-4">
              <div className="h-[10%]  w-[100%]  backdrop-blur-md bg-white/5 rounded-xl">
                <Navbar />
              </div>
              <div className="children h-[90%] overflow-scroll w-[100%] backdrop-blur-md bg-white/5 rounded-xl">
                {children}
              </div>
            </div>
          </div>
        </body>
      </AnimatePresence>
    </html>
  );
}
