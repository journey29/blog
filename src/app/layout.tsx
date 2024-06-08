import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";

import Header from "@/components/main/Header";
import Container from "@/components/main/Container";
import Footer from "@/components/main/Footer";

import { NextAuthProvider } from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "StoryTrail",
  description: "App for a beautiful stories!",
  icons: [{ rel: "icon", url: "/logo.png" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>
          <NextAuthProvider>
            <Header />
            <main className="main">
              <Container>{children}</Container>
            </main>
            <Footer />
          </NextAuthProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
