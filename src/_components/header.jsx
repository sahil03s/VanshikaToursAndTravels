import '@/app/globals.css';
import './styles.css';
import Navlink from './navlink';

export default function Header() {
    return (
        <div className="flex items-center h-16">
            <div className='flex-auto ml-4'>
                <h1 className='font-extrabold text-2xl'>Vanshika Travels</h1>
            </div>
            <div className='flex flex-row items-center h-full space-x-2 mr-16 p-8'>
                <Navlink href='/' title='Home'/>
                <Navlink href='/bookings' title='Manage Bookings'/>
                <Navlink href='/packages' title='Packages'/>
                <Navlink href='/gallery' title='Gallery'/>
                <Navlink href='/contact' title='Contact'/>
                <Navlink href='/about' title='About Us'/>
            </div>
        </div>
    );
}