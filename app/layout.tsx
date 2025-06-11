import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import { Alfa_Slab_One, Lato } from "next/font/google";
import "./globals.css";

const oswaldFont = Oswald({
  subsets: ["latin"],
});

const alfaSlabOneFont = Alfa_Slab_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alfa-slab-one",
});

const latoFont = Lato({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lato",
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
