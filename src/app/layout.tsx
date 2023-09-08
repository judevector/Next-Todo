import "./globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TaskBuddy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-3xl mx-auto p-4">
          <Navbar />
          <div className=" mt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
