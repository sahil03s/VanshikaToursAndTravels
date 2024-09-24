import '@/app/globals.css';
import './styles.css';
import Link from 'next/link';
import Navlink from './navlink';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image from 'next/image';

function parsePath(s)
{
    let res = '/packages/' + s.toLowerCase().replaceAll(' ', '-');
    res = res.replace(/[^a-zA-Z0-9/&\-]/g, '');
    return res;
}

export default function Header() {
    return (
        <div className="flex items-center h-18">
            <div className='flex-auto flex items-center h-18 ml-10 mt-2'>
                <Image 
                src='/images/logo.png' 
                alt='Logo'
                height={100}
                width={100}
                className='h-14 scale-150'
                />
            </div>
            <div className='flex flex-row items-center h-full space-x-6 mr-16 p-8'>
                <Navlink href='/' title='Home'/>
                <ul className='list-none flex space-x-6 text-center'>
                    <li className='relative group cursor-pointer'>
                        <div>
                            <span>Varanasi Tour</span>
                            <KeyboardArrowDownIcon/>   
                        </div>
                        <ul className='absolute hidden group-hover:flex flex-col w-52 z-50 cursor-pointer list-none text-start text-white bg-periwinkle'>
                            <Link href={parsePath('Kashi Tour')}><li className='px-2 py-2 hover:bg-black text-sm'>Kashi Tour</li></Link>
                            <Link href={parsePath('Varanasi, Bodhgaya, Rajgir, Nalanda, and Patna')}><li className='px-2 py-2 hover:bg-black text-sm'>Varanasi, Bodhgaya, Rajgir, Nalanda, and Patna</li></Link>
                        </ul>
                    </li>
                    <li className='group cursor-pointer'>Domestic Tour<KeyboardArrowDownIcon/></li>
                    <li>Nepal Tour<KeyboardArrowDownIcon/></li>
                    <li>Kumbh<KeyboardArrowDownIcon/></li>
                    <li>Pind Daan<KeyboardArrowDownIcon/></li>
                </ul>
                <Navlink href='/contact-us' title='Contact'/>
            </div>
        </div>
    );
}