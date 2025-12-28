import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CartProvider from "@/context/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const poppins = Poppins({
  weight: ['400', '500', '600' ],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Khaijan main layour",
    template: "%s | Yantun khanjan"
  },
  description: "Best FastFood in Noakali",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${geistMono.variable} antialiased`}
      >

      <header className="px-5 py-2 flex items-center justify-between gap-5 bg-stone-800">
        <span className="text-orange-600 font-bold"> ABC </span>
       <div className="space-x-5">
        <Link prefetch={false} href="/foods" className="btn"> Foods </Link>
        <Link href="/reviews" className="btn"> reviews </Link>
        <Link href="/feedback" className="btn"> feedback </Link>
       </div>
      </header>

      <main>
        <CartProvider>{children} </CartProvider>
      </main>
      </body>
    </html>
  );
}
