import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='p-[1%]'>
        <Header />
        {children}
      </body>
    </html>
  );
}
