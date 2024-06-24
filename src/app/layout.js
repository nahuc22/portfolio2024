import { Inter } from "next/font/google";
import "./globals.css";

import Menu from "@/components/menu/Menu";
import About from "@/app/about/page";
import Work from "@/app/work/page";
import Projects from "@/app/projects/page"
import Contact from "@/app/contact/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nahu Castilla :)",
  description: "NextJS + GSAP project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu/>
        <div className="page-container">
        {children}
        <About/>
        <Work/>
        <Projects/>
        <Contact/>
        </div>
        </body>
    </html>
  );
}
