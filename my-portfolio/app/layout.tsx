import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noura Zekry",
  description: "Noura Zekry's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}