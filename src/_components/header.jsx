'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navlink from './navlink';
import '@/app/globals.css';
import './styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';

function parsePath(s)
{
    let res = '/packages/' + s.toLowerCase().replaceAll(' ', '-');
    res = res.replace(/[^a-zA-Z0-9/&\-]/g, '');
    return res;
}

export default function Header() {
    const [open, setOpen] = useState(0);
    const [navMenuOpen, setNavMenuOpen] = useState(false);

    const handleClose = () => setOpen(0);
    const handleOpen = (id) => setOpen(id);
    const handleMenu = () => setNavMenuOpen((prev) => !prev);
    

    return (
        <div className="flex items-center h-16 mb-2">
            <div className='flex-auto flex items-center h-14 ml-10 mt-2'>
                <Image 
                src='/images/logo/vans.png' 
                alt='Logo'
                height={100}
                width={100}
                className='h-12 w-auto sm:scale-110 md:scale-150'
                />
            </div>
            <MenuIcon className='md:hidden mr-6 hover:bg-black rounded-sm hover:text-white' onClick={handleMenu}/>
            <div className={`${navMenuOpen ? '' : 'hidden'} md:flex flex-col md:flex-row items-center h-full space-x-2 lg:space-x-6 p-8`}>
                <Navlink href='/' title='Home'/>
                <ul className='list-none flex flex-col md:flex-row space-x-6 text-center'>
                    <li className='relative group cursor-pointer' onMouseEnter={()=>handleOpen(1)} onMouseLeave={handleClose}>
                        <div>
                            <span>Varanasi Tour</span>
                            <KeyboardArrowDownIcon/>   
                        </div>
                        <ul className={`absolute ${open===1 ? 'flex' : 'hidden'}  flex-col w-52 z-50 cursor-pointer list-none text-start text-white bg-periwinkle`}>
                            <Link href={parsePath('Kashi Tour')} onClick={handleClose}><li className='px-2 py-2 hover:bg-black text-sm'>Kashi Tour</li></Link>
                            <Link href={parsePath('Varanasi, Bodhgaya, Rajgir, Nalanda, and Patna')} onClick={handleClose}><li className='px-2 py-2 hover:bg-black text-sm'>Varanasi, Bodhgaya, Rajgir, Nalanda, and Patna</li></Link>
                            <Link href={parsePath('Lucknow, Ayodhya, Prayagraj, Chitrakoot, and Varanasi')} onClick={handleClose}><li className='px-2 py-2 hover:bg-black text-sm'>Lucknow, Ayodhya, Prayagraj, Chitrakoot, and Varanasi</li></Link>
                            <Link href={parsePath('Kashi')} onClick={handleClose}><li className='px-2 py-2 hover:bg-black text-sm'>Kashi</li></Link>
                            <Link href={parsePath('Varanasi Religious Tour Plan')} onClick={handleClose}><li className='px-2 py-2 hover:bg-black text-sm'>Varanasi Religious Tour Plan</li></Link>
                            <Link href={parsePath('Varanasi-Prayagraj-Ayodhya Tour Package')} onClick={handleClose}><li className='px-2 py-2 hover:bg-black text-sm'>Varanasi-Prayagraj-Ayodhya Tour Package</li></Link>
                        </ul>
                    </li>

                    <li className='relative group cursor-pointer' onMouseEnter={()=>handleOpen(2)} onMouseLeave={handleClose}>
                        <div>
                            <span>Domestic Tour</span>
                            <KeyboardArrowDownIcon/>
                        </div>
                        <ul className={`absolute ${open===2 ? 'flex' : 'hidden'} flex-col w-52 z-50 cursor-pointer list-none text-start text-white bg-periwinkle`}>
                            
                        </ul>
                    </li>
                    <li>Nepal Tour<KeyboardArrowDownIcon/></li>
                    <li>Kumbh<KeyboardArrowDownIcon/></li>
                    <li>Pind Daan<KeyboardArrowDownIcon/></li>
                </ul>
                <Navlink href='/contact-us' title='Contact'/>
            </div>
        </div>
    );
}