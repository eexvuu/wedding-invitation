import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins, Parisienne } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-parisienne",
});

export const metadata: Metadata = {
  title: "Undangan Untuk Anda",
  description: "Silahkan dibuka undangan tersebut, terimakasih",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={` ${poppins.variable} ${inter.variable} ${parisienne.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
