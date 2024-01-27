import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./(auth)/(header)/page";
import Footer from "./(auth)/(footer)/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:{
    default: " Home - Codebyfaizan",
    template:" %s | Codebyfaizan"

  },
  description: "This is a little test website for my nextjs learning practice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 min-h-dvh flex flex-col	 ${inter.className}`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
