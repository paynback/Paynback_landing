import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "../components/layout/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "payNback — India's first in-store shopping reward app",
  description: "payNback connects users with nearby merchants offering exclusive discounts, cashback and rewards.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} antialiased`}
    >
      <body className='flex min-h-screen flex-col'>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
