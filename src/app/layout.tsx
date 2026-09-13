import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Cesya Apridita | Software Engineer & Photographer",
  description: "Junior Full-Stack Developer specializing in Next.js, Golang, Laravel, and modern web technologies. Portfolio showcasing healthcare management systems, data warehouse solutions, and creative photography.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
