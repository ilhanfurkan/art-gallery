import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Little Gallery — A Private Digital Exhibition",
  description:
    "A personal digital salon curated by Furkan İlhan, where timeless masterpieces are given room to be felt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="32x32" />
        <link rel="icon" href="/logo.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
