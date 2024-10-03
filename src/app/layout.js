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

const jsonLdData ={
  "@context": "http://schema.org",
  "@type": "TravelAgency",
  "name": "Vanshika Tour & Travels",
  "image": "https://vanshika-tours-and-travels.vercel.app/_next/image?url=%2Fimages%2Flogo%2Fvans.png&w=256&q=75",
  "telephone": "+91 9794604278",
  "email": "vanshika.travelinfo@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "S-26/42 K.C. Plot No-67 Ashok Puram Colony, Meerapur Basahi,",
    "addressLocality": "Cantt, Varanasi",
    "addressRegion": "Uttar Pradesh",
    "addressCountry": "IN",
    "postalCode": "221002"
  },
  "url": "https://vanshika-tours-and-travels.vercel.app/",
  "@id": "https://vanshika-tours-and-travels.vercel.app/#organization"  // Optional: Unique identifier for the business
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }} />
      </head>
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
