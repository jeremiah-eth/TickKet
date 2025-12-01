import { ConnectButton } from "@/components/ConnectButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-black to-pink-900 pt-16">
        <main className="flex flex-col items-center gap-8 px-8 text-center">
          <h1 className="text-6xl font-bold tracking-tight text-white font-heading">
            TickKet
          </h1>
          <p className="max-w-2xl text-xl text-gray-300">
            Decentralized Event Ticketing Platform powered by Reown
          </p>
          <p className="max-w-md text-gray-400">
            Create events, mint NFT tickets, and trade them on a secure marketplace.
          </p>
          <div className="flex gap-4">
            <Link href="/events">
              <Button variant="glass">Browse Events</Button>
            </Link>
            <Link href="/create-event">
              <Button>Create Event</Button>
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
