import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neon Garage Detailer",
  description:
    "Anime-inspired illustration of a young rider detailing his shining Honda 350cc in a neon-lit garage."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
