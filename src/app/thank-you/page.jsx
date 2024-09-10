import Link from "next/link";
import '@/app/animations.css';

export default function ThankYou() {
    return (
        <div className='mt-8 mb-8'>
            <div className="flex flex-col items-center">
            <div className="bg-red-400">
                <h1 className="font-bold text-4xl mb-4 typed-text w-fit bg-red-400">Thank You for connecting with us.</h1>
            </div>
            <div>
                <p className='text-sm mb-2 typed-text2'>One of our executives will get in touch with you.</p>
                <p className='text-sm mb-8 typed-text2'>In the meanwhile, you can call us at +91 9151705010</p>
            </div>
            <div className='mb-8 bg-periwinkle text-white p-4 rounded-full'>
                <Link href='/'>Go To Home</Link>
            </div>
            </div>
        </div>
    );
}