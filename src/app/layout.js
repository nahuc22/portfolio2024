import { Inter } from "next/font/google";
import Head from "next/head";
import React from "react";
import "./globals.css";

import Menu from "@/app/pages/menu/Menu";
import About from "@/app/pages/about/page";
import Work from "@/app/pages/work/page";
import Projects from "@/app/pages/projects/page";
import Contact from "@/app/pages/contact/page";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Quantico&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet"/>
      </Head>
      <body className={inter.className}>
        <Menu />
        <div>
          {children}
          <About />
          <Work />
          <Projects />
          <Contact />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;