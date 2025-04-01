import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

const oswaldFont = Oswald({
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Evi Van Bockryck | Digital Marketing Freelancer",
  description: "Grow your business with digital marketing powered social media.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={oswaldFont.className}
      >
        {children}
      </body>
    </html>
  );
}
