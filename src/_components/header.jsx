'use client'

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navlink from './navlink';
import '@/app/globals.css';
import './header.css';
import './styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function parsePath(s)
{
    let res = '/packages/' + s.toLowerCase().replaceAll(' ', '-');
    res = res.replace(/[^a-zA-Z0-9/&\-]/g, '');
    return res;
}

export default function Header() {

    // Indicates which dropdown is expanded. 0 indicates all are closed initially.
    const [open, setOpen] = useState(0);
    
    // indicates whether screen is large or small. Large screen has width >= 1024.
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    // indicates visibility for navigation menu, works on smaller devices only.
    const [navMenuOpen, setNavMenuOpen] = useState(false);

    // it helps to calculate the height of dropdown to help in transition effect
    const contentRef = useRef([]);

    // refs navigation menu to help detect outsideclick
    const menuRef = useRef();
    

    // it checks whether screensize >= 1024px and sets isLargeScreen accordingly
    const checkScreenSize = () => {

        if(window.innerWidth >= 1024)
            setIsLargeScreen(true);
        else
            setIsLargeScreen(false);
    }


    // when rendered first time, it checks whether screen has width >= 1024px
    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, [])


    // Detect outside click for navigation menu
    useEffect(() => {
        
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target))
                setNavMenuOpen(false);
        }

        if (!isLargeScreen)
            document.addEventListener('mousedown', handleClickOutside);
        else
            document.removeEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);

    }, [isLargeScreen])
   

    // navigation menu opens and closes alternatively
    const handleMenu = () => setNavMenuOpen((prev) => !prev);


    // when any option in dropdown is clicked, close the navigation menu and close the dropdown
    const handleClick = (event) => {
        if(event)
            event.stopPropagation();
        setNavMenuOpen(false);
        handleClose(null);
    }


    // closes the dropdown which is expanded, if any. 
    const handleClose = (event) =>{

        if(event)
            event.stopPropagation();

        const curr = contentRef.current[open];
        if(curr)
            curr.style.height = `0px`;
        setOpen(0);  
    } 


    // opens the dropdown if it is not already open, else closes it
    const handleOpen = (event, id) => {

        if(event)
            event.stopPropagation();

        const currEle = contentRef.current[id];
        const prevEle = contentRef.current[open];

        setOpen((prev) => {
            if(prev === id)
            {
                if(currEle)
                    currEle.style.height = `0px`;
                
                return 0;
            }

            else
            {
                if(currEle)
                    currEle.style.height = `${currEle.scrollHeight}px`;

                if(prevEle)
                    prevEle.style.height = `0px`;

                return id;
            }
        });
    }
    
    console.log(navMenuOpen);

    return (
        <div className="flex items-center h-16 mb-2">

            <div className='flex-auto flex justify-center lg:justify-normal items-center h-14 ml-10 mt-2'>
                <Image 
                src='/images/logo/vans.png' 
                alt='Logo'
                height={100}
                width={100}
                priority={true}
                className='h-12 w-auto sm:scale-110 md:scale-150'
                />
            </div>

                
            <CloseIcon className={`absolute left-4 lg:hidden mr-6 ${navMenuOpen ? 'navicon-visible' : 'navicon-hidden'} `} />
            <MenuIcon className={`absolute left-4 lg:hidden mr-6 ${navMenuOpen ? 'navicon-hidden' : 'navicon-visible'} `} onClick={handleMenu}/>
            

            <div ref={menuRef} className={`${navMenuOpen ? 'max-lg:w-64 menu-appear' : 'menu-disappear'} box-border absolute top-28 left-0 h-fit lg:h-auto  lg:static lg:flex lg:p-8 z-50`}>
                <div className={`flex flex-col lg:flex-row lg:items-center lg:px-4 h-fit max-lg:w-64 bg-lilac lg:bg-white`}>
                    <ul className='list-none flex flex-col lg:items-center lg:flex-row lg:text-center lg:space-x-6'>
                        
                        <li className='max-lg:py-2 max-lg:px-6 max-lg:border-b-2 border-black'>
                            <Navlink href='/' title='Home' handleClick={handleClick}/>
                        </li>

                        <li className='relative group cursor-pointer max-lg:border-b-2 border-black' onMouseEnter={isLargeScreen ? (event)=>handleOpen(event, 1) : null} onMouseLeave={isLargeScreen ? (event)=>handleClose(event) : null} onClick={(event) => handleOpen(event,1)}>
                            
                            <div className='max-lg:pl-8  max-lg:py-2'>
                                <span>Varanasi Tour</span>
                                <KeyboardArrowDownIcon className={`max-lg:absolute max-lg:right-3 ${open===1 ? 'open' : 'close'}`}/>   
                            </div>

                            <div className={`lg:absolute`}>
                               <ul ref={(curr) => contentRef.current[1] = curr} className={`${open===1 ? 'dropdown-appear' : 'dropdown-disappear'}  flex-col w-64 lg:w-52 max-lg:pl-6 z-50 cursor-pointer list-none text-start text-white bg-periwinkle`}>
                                <Link href={parsePath('Kashi Tour')} onClick={(event) => handleClick(event)}><li className='px-2 py-2 hover:bg-black text-sm'>Kashi Tour</li></Link>
                                <Link href={parsePath('Varanasi, Bodhgaya, Rajgir, Nalanda, and Patna')} onClick={(event) => handleClick(event)}><li className='px-2 py-2 hover:bg-black text-sm'>Varanasi, Bodhgaya, Rajgir, Nalanda, and Patna</li></Link>
                                <Link href={parsePath('Lucknow, Ayodhya, Prayagraj, Chitrakoot, and Varanasi')} onClick={(event) => handleClick(event)}><li className='px-2 py-2 hover:bg-black text-sm'>Lucknow, Ayodhya, Prayagraj, Chitrakoot, and Varanasi</li></Link>
                                <Link href={parsePath('Kashi')} onClick={(event) => handleClick(event)}><li className='px-2 py-2 hover:bg-black text-sm'>Kashi</li></Link>
                                <Link href={parsePath('Varanasi Religious Tour Plan')} onClick={(event) => handleClick(event)}><li className='px-2 py-2 hover:bg-black text-sm'>Varanasi Religious Tour Plan</li></Link>
                                <Link href={parsePath('Varanasi-Prayagraj-Ayodhya Tour Package')} onClick={(event) => handleClick(event)}><li className='px-2 py-2 hover:bg-black text-sm'>Varanasi-Prayagraj-Ayodhya Tour Package</li></Link>
                                </ul>
                            </div>

                        </li>

                        <li className='relative group cursor-pointer max-lg:border-b-2 border-black' onMouseEnter={isLargeScreen ? (event)=>handleOpen(event,2) : null} onMouseLeave={isLargeScreen ? (event)=>handleClose(event) : null} onClick={(event) => handleOpen(event,2)}>
                            
                            <div className='max-lg:pl-8 max-lg:py-2'>
                                <span>Domestic Tour</span>
                                <KeyboardArrowDownIcon className={`max-lg:absolute max-lg:right-3 ${open===2 ? 'open' : 'close'}`}/>
                            </div>

                            <div className={`lg:absolute`}>
                               <ul ref={(curr) => contentRef.current[2] = curr} className={`${open===2 ? 'dropdown-appear' : 'dropdown-disappear'}  flex-col w-64 lg:w-52 max-lg:pl-6 z-50 cursor-pointer list-none text-start text-white bg-periwinkle`}>
                                <Link href={parsePath('Kashi Tour')} onClick={(event) => handleClick(event)}><li className='px-2 py-2 hover:bg-black text-sm'>Kashi Tour</li></Link>
                                <Link href={parsePath('Varanasi, Bodhgaya, Rajgir, Nalanda, and Patna')} onClick={(event) => handleClick(event)}><li className='px-2 py-2 hover:bg-black text-sm'>Varanasi, Bodhgaya, Rajgir, Nalanda, and Patna</li></Link>
                                <Link href={parsePath('Lucknow, Ayodhya, Prayagraj, Chitrakoot, and Varanasi')} onClick={(event) => handleClick(event)}><li className='px-2 py-2 hover:bg-black text-sm'>Lucknow, Ayodhya, Prayagraj, Chitrakoot, and Varanasi</li></Link>
                                <Link href={parsePath('Kashi')}><li className='px-2 py-2 hover:bg-black text-sm' onClick={(event) => handleClick(event)}>Kashi</li></Link>
                                <Link href={parsePath('Varanasi Religious Tour Plan')} onClick={(event) => handleClick(event)}><li className='px-2 py-2 hover:bg-black text-sm'>Varanasi Religious Tour Plan</li></Link>
                                <Link href={parsePath('Varanasi-Prayagraj-Ayodhya Tour Package')} onClick={(event) => handleClick(event)}><li className='px-2 py-2 hover:bg-black text-sm'>Varanasi-Prayagraj-Ayodhya Tour Package</li></Link>
                                </ul>
                            </div>

                        </li>

                        <li className='relative group cursor-pointer max-lg:border-b-2 border-black' onMouseEnter={isLargeScreen ? (event)=>handleOpen(event,3) : null} onMouseLeave={isLargeScreen ? (event)=>handleOpen(event, 3) : null} onClick={(event) => handleOpen(event,3)}>
                            
                            <div className='max-lg:pl-8 max-lg:py-2'>
                                <span>Nepal Tour</span>
                                <KeyboardArrowDownIcon className={`max-lg:absolute max-lg:right-3 ${open===3 ? 'open' : 'close'}`}/>
                            </div>

                        </li>

                        <li className='relative group cursor-pointer max-lg:border-b-2 border-black' onMouseEnter={isLargeScreen ? (event)=>handleOpen(event,4) : null} onMouseLeave={isLargeScreen ? (event)=>handleOpen(event, 4) : null} onClick={(event) => handleOpen(event,4)}>
                            
                            <div className='max-lg:pl-8 max-lg:py-2'>
                                <span>Kumbh</span>
                                <KeyboardArrowDownIcon className={`max-lg:absolute max-lg:right-3 ${open===4 ? 'open' : 'close'}`}/>
                            </div>

                        </li>

                        <li className='relative group cursor-pointer max-lg:border-b-2 border-black' onMouseEnter={isLargeScreen ? (event)=>handleOpen(event,5) : null} onMouseLeave={isLargeScreen ? (event)=>handleOpen(event, 5) : null} onClick={(event) => handleOpen(event,5)}>
                            
                            <div className='max-lg:pl-8 max-lg:py-2'>
                                <span>Pind Daan</span>
                                <KeyboardArrowDownIcon className={`max-lg:absolute max-lg:right-3 ${open===5 ? 'open' : 'close'}`}/>
                            </div>
                            
                        </li>

                        <li className='max-lg:py-2 max-lg:px-6 max-lg:border-b-2 border-black'>
                            <Navlink href='/contact-us' title='Contact' handleClick={handleClick}/>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}