import '@/app/globals.css';
import './styles.css';
import MailIcon from '@mui/icons-material/Mail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    return (
        <footer className='bg-periwinkle text-white h-fit pt-3 pb-1'>
            <div className='float-whatsapp-icon fixed right-5 sm:right-6 bottom-4 md:bottom-12 flex justify-center border-box p-2 scale-125 md:scale-150 rounded-full cursor-pointer z-1000'>
            <Link href={`https://wa.me/9794604278?text=I'm%20interested%20to%20book%20cab`} target='_blank'><WhatsAppIcon/></Link>
            </div>

            <div className='float-calling-icon fixed right-20 sm:right-24 bottom-4 md:bottom-12 flex justify-center p-2 scale-125 md:scale-150 rounded-full cursor-pointer z-1000'>
            <Link href={`tel:+91 9794604278`} target='_blank'><CallIcon fontSize='medium'/></Link>
            </div>

            <div className='grid grid-cols-1 tablet:grid-cols-3 sm:grid-cols-10 md:grid-cols-5 mx-8 lg:mx-12'>

                {/* Contact Section */}
                <div className='mb-6 tablet:mb-4 sm:mb-0 tablet:col-span-2 sm:col-span-5 md:col-span-2'>
                    <h2 className='font-medium mb-4 relative underline-half'>CONTACT</h2>
                    <div className='flex flex-col'>
                        <div className='flex mb-1'>
                            <LocationOnIcon/>
                            <div className='ml-4'>
                                <div className='text-sm font-semibold'>Vanshika Tour & Travels</div>
                                <div className='text-xs'>S-26/42 K.C. Plot No-67 <br/> Ashok Puram Colony, <br/> Meerapur Basahi,<br/> Cantt, Varanasi<br/> Uttar Pradesh - 221002</div>
                            </div>
                        </div>

                        <div className='flex mb-1'>
                            <PhoneAndroidIcon/>
                            <Link href={`tel:+91 9794604278`} target='_blank'>
                                <span className='ml-4 text-sm'>+91 9794604278</span>
                            </Link>
                        </div>

                        <div className='flex'>
                            <MailIcon/>
                            <Link href='mailto:vanshika.travelinfo@gmail.com' target='_blank'>
                                <div className='ml-4 text-sm'> vanshika.travelinfo@gmail.com </div>
                            </Link>
                        </div>
                            
                    </div>
                </div>


                {/* Quick Links Section */}
                <div className='mb-6 tablet:mb-4 sm:mb-0 sm:col-span-3 md:col-span-2'>
                    <h2 className='font-medium mb-4 relative underline-half'>QUICK LINKS</h2>
                    <div className='flex flex-col'>
                        <div><Link className='hover:text-yellow-gold' href='/about'>About</Link></div>
                        <div><Link className='hover:text-yellow-gold' href='/contact-us'>Get in Touch</Link></div>
                    </div>
                </div>


                {/* Follow Us Section */}
                <div className='mb-4 sm:mb-0 sm:col-span-2 md:col-span-1'>
                    <h2 className='font-medium mb-4 relative underline-half'>FOLLOW US:</h2>
                    <div className='flex flex-row items-center'>
                        <Link className='mr-1' href='https://www.facebook.com/profile.php?id=61566433152535' target='_blank'><FacebookIcon/></Link>
                        <InstagramIcon className='mr-1'/>
                        <YouTubeIcon className=''/>
                    </div>
                </div>

            </div>  

            <div className='border-t mt-2 mx-5 tablet:mx-10'></div>

            {/* Footer Bottom */}
            <div>
                <h3 className='text-center text-xs sm:text-sm'>&copy;  2016-{ new Date().getFullYear()} All rights reserved | Vanshika Tour & Travels</h3>
            </div>

        </footer>
        
    );
}