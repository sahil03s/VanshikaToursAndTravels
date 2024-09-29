import '@/app/globals.css';
import MailIcon from '@mui/icons-material/Mail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

export default function ContactDetails() {
    return (
        <div className="flex items-center bg-periwinkle text-white w-full h-12 text-xs tablet:text-sm lg:text-base">
        <div className='flex items-center w-full h-full space-x-2 sm:space-x-4 ml-2 sm:ml-8 md:ml-16'>
            <div className='flex items-center space-x-1'>
                <MailIcon/>
                <p>vanshika.travelinfo@gmail.com</p>
            </div>
            <div className='flex items-center space-x-1'>
                <PhoneAndroidIcon/>
                <p>+91 9794604278</p>
            </div>
        </div>
        </div>
    );
}