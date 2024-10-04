import dynamic from 'next/dynamic';
import Head from 'next/head';
 
const ContactWithNoSSR = dynamic(
  () => import('@/_components/contact-form'),
  { ssr: false }
)

export const metadata = {
  title: "Enquire Now | Vanshika Tour and Travels | Plan Your Varanasi & India Tours",
  description: "Reach out to Vanshika Tour and Travels for expert travel services across India, with a special focus on Varanasi's religious and historical tours. Whether you're planning a trip to cities like Nalanda, Lumbini, Gaya, or Delhi, or need vehicle rentals, we are here to assist you. Contact us today to make enquiries about tour packages or customize your perfect travel experience.",
};

export default function Page() {
    const canonicalUrl = "https://www.vanshikatour.in/enquire-now";

    return (
      <div>
            {/* Head component for SEO, including canonical tag */}
            <Head>
                <link rel="canonical" href={canonicalUrl} />
            </Head>

            {/* Render the contact form dynamically without SSR */}
            <ContactWithNoSSR />
        </div>
    )
}