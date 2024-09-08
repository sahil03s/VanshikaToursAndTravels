import '@/app/globals.css';
import MailIcon from '@mui/icons-material/Mail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

export default function ContactDetails() {
    return (
        <div className="flex items-center bg-periwinkle text-white h-12 ">
        <div className='flex items-center h-full space-x-4 ml-16'>
            <div className='flex space-x-1'>
                <MailIcon/>
                <p>rudratours@gmail.com</p>
            </div>
            <div className='flex space-x-1'>
                <PhoneAndroidIcon/>
                <p>+91 9625140013</p>
            </div>
        </div>
        </div>
    );
}