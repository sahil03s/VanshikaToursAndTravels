import localFont from "next/font/local";
import "./globals.css";
import Header from "@/_components/header";
import ContactDetails from "@/_components/contact-details";
import Footer from '@/_components/footer';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Vanshika Tour & Travels | Varanasi",
  description: "Best tour and travels agency in Varanasi for exploring different cities of India by using different tour packages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContactDetails/>   
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
