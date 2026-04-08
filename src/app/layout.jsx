import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "../components/layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "payNback — India's first in-store shopping reward app",
  description: "payNback connects users with nearby merchants offering exclusive discounts, cashback and rewards.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}
