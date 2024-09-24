import dynamic from 'next/dynamic'
 
const ContactWithNoSSR = dynamic(
  () => import('@/_components/contact-form'),
  { ssr: false }
)

export default function Page() {
    return (
        <ContactWithNoSSR/>
    );
}