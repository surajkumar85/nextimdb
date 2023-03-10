import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Providers from "@/provider/Providers";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next IMDB App",
  description: "Expolore your fav movies and find more about them.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>
          <Header />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
