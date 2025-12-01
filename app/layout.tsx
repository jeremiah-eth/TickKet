import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { cookies } from "next/headers";
import Web3ModalProvider from "@/context/Web3Modal";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TickKet | Web3 Event Ticketing Platform",
    template: "%s | TickKet"
  },
  description: "Decentralized event ticketing platform powered by blockchain technology. Create, buy, and sell event tickets as NFTs with complete transparency and security.",
  keywords: ["web3", "blockchain", "NFT tickets", "event ticketing", "decentralized", "crypto events"],
  authors: [{ name: "TickKet Team" }],
  creator: "TickKet",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tickket.vercel.app",
    title: "TickKet | Web3 Event Ticketing Platform",
    description: "Decentralized event ticketing platform powered by blockchain technology.",
    siteName: "TickKet",
  },
  twitter: {
    card: "summary_large_image",
    title: "TickKet | Web3 Event Ticketing Platform",
    description: "Decentralized event ticketing platform powered by blockchain technology.",
    creator: "@tickket",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieString = cookieStore.toString();

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <Web3ModalProvider cookies={cookieString}>
          {children}
          <Toaster position="top-right" richColors />
        </Web3ModalProvider>
      </body>
    </html>
  );
}
