import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ButtonAppBar from "./appBar";
import LogInLogOuButtons from "./loginLogoutButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Testing AuthKit Next.js",
  description: "Created to test out auth kit in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <ButtonAppBar >
          <LogInLogOuButtons />
        </ButtonAppBar>
        {children}
      </body>
    </html>
  );
}
