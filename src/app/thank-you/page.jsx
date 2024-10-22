import Link from "next/link";
import './animations.css';

export const metadata = {
    title: "Thank You | Vanshika Tour and Travels – Your Travel Plans are in Safe Hands",
    description: "Thank you for choosing Vanshika Tour and Travels. We have received your inquiry and will be in touch soon. Whether you're planning to explore Varanasi’s sacred sites or embarking on a tour to cities like Nalanda, Lumbini, Gaya, or beyond, we are committed to delivering exceptional travel experiences. Stay tuned for more details and let us help make your trip memorable.",
};

export default function ThankYou() {
    return (
        <div className='mt-8 mb-8'>
            <div className="flex flex-col items-center">

            {/* Thank you text sliding from left to right */}
            <div className="bg-red-400">
                <h6 className="text-periwinkle font-bold text-xl tablet:text-2xl sm:text-3xl md:text-4xl mb-4 w-fit bg-red-400">Thank You for connecting with us.</h6>
            </div>

            {/* Further details informing user that he/she will be contacted. This too slides from left to right */}
            <div className='flex flex-col items-center'>
                <p className='text-sm mb-2'>One of our executives will get in touch with you.</p>
                <p className='text-sm mb-8'>In the meanwhile, you can call us at <Link href={`tel:+91 9794604278`} target='_blank'><span>+91 9794604278</span></Link></p>
            </div>

            {/* Button to redirect to home page */}
            <div className='mb-8 bg-periwinkle text-white p-4 rounded-full'>
                <Link href='/'>Go To Home</Link>
            </div>
            </div>
        </div>
    );
}