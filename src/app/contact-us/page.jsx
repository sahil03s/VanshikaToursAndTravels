import dynamic from 'next/dynamic';
import Head from 'next/head';
 
const ContactWithNoSSR = dynamic(
  () => import('@/_components/contact-form'),
  { ssr: false }
)

export const metadata = {
  title: "Contact Us | Vanshika Tour & Travels",
  description: "Get in touch with Vanshika Tour & Travels for the best tour packages and travel inquiries in India, specially Varanasi.",
};

export default function Page() {
    const canonicalUrl = "https://vanshika-tours-and-travels.vercel.app/contact-us";

    return (
      <div>
            {/* Head component for SEO, including canonical tag */}
            <Head>
                <link rel="canonical" href={canonicalUrl} />
                <meta name="description" content={metadata.description} />
                <title>{metadata.title}</title>
            </Head>

            {/* Render the contact form dynamically without SSR */}
            <ContactWithNoSSR />
        </div>
    )
}