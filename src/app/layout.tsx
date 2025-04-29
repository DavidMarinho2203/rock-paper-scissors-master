import type { Metadata } from "next";
import "./globals.css";

const barlowSemiCondensed = "font-barlowSemi";

export const metadata: Metadata = {
  title: "Rock, Paper, Scissors game",
  description: "Rock, Paper, Scissors game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowSemiCondensed} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
