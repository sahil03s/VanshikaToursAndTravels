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
  title: "Vanshika Tour and Travels | Best Tour and Travels | Varanasi",
  description: "Explore India's spiritual heart Varanasi and beyond with Vanshika Tour and Travels. We offer customized tour packages and services to all famous religious and historical sites in Varanasi, as well as top destinations like Nalanda, Lumbini, Gaya, Delhi, and more. Rent vehicles for your convenience and experience the best of India with our reliable travel services.",
};

const jsonLdData ={
  "@context": "http://schema.org",
  "@type": "TravelAgency",
  "name": "Vanshika Tour and Travels",
  "image": "https://www.vanshikatour.in/_next/image?url=%2Fimages%2Flogo%2Fheader-logo.png&w=256&q=75",
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
  "url": "https://www.vanshikatour.in/",
  "@id": "https://www.vanshikatour.in/#organization"  // Optional: Unique identifier for the business
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo/favicon.svg"/>
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
