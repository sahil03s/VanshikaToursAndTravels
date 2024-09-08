import '@/app/globals.css';
import './styles.css';
import MailIcon from '@mui/icons-material/Mail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
    return (
        <footer className='bg-periwinkle text-white h-fit pt-8 pb-4'>
        <div className='grid mx-8'>
            {/* Contact Section */}
            <div>
                <h1 className='font-medium mb-4 relative underline-half'>CONTACT</h1>
                <div className='flex flex-col'>
                    <div className='flex mb-1'>
                        <LocationOnIcon/>
                        <div className='ml-4'>
                            <div className='text-lg font-semibold'>Rudra Tours & Travels</div>
                            <div className='text-base'>Varanasi - 221001</div>
                        </div>
                    </div>

                    <div className='flex mb-1'>
                        <PhoneAndroidIcon/>
                        <div className='ml-4 text-base'> 9625140013 </div>
                    </div>

                    <div className='flex'>
                        <MailIcon/>
                        <div className='ml-4 text-base'> rudratours@gmail.com </div>
                    </div>
                        
                </div>
            </div>
        </div>  

            <div className='border-t mt-8 mb-4 mx-10'></div>

            {/* Footer Bottom */}
            <div>
                <h1 className='text-center text-sm'>&copy;2024 | Rudra Tours & Travels</h1>
            </div>
        </footer>
        
    );
}