import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "人生の相談窓口｜もう、一人で悩まない",
  description:
    "恋愛・仕事・お金・人間関係など、誰に相談すればいいか分からない時の最初の相談先。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
