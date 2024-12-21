import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "My Dynamic Blogs",
  description: "A Dynamic blog built with Next.js-15 with Typescript and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-gray-50 text-gray-800`}>

        <Header/>
        <main className="pt-14">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
