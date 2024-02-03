import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Auth from "./auth/page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Hotel Hub",
  description: "Hotel management website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="font-normal">
          <Header />
          {children}
          <Auth />
          <Footer />
        </main>
      </body>
    </html>
  );
}
