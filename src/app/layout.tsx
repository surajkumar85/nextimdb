import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
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
        <Header />
        {children}
      </body>
    </html>
  );
}
