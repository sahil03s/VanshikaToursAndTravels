import Link from "next/link";
import './animations.css';

export default function ThankYou() {
    return (
        <div className='mt-8 mb-8'>
            <div className="flex flex-col items-center">

            {/* Thank you text sliding from left to right */}
            <div className="bg-red-400">
                <h1 className="font-bold text-4xl mb-4 typed-text w-fit bg-red-400">Thank You for connecting with us.</h1>
            </div>

            {/* Further details informing user that he/she will be contacted. This too slides from left to right */}
            <div className='flex flex-col items-center'>
                <p className='text-sm mb-2 typed-text2'>One of our executives will get in touch with you.</p>
                <p className='text-sm mb-8 typed-text2'>In the meanwhile, you can call us at +91 9794604278</p>
            </div>

            {/* Button to redirect to home page */}
            <div className='mb-8 bg-periwinkle text-white p-4 rounded-full'>
                <Link href='/'>Go To Home</Link>
            </div>
            </div>
        </div>
    );
}