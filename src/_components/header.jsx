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
    let res = '/packages/' + s.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-');
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

    return (
        <div className="flex items-center h-16 mb-2">

            <div className='flex-auto flex justify-normal items-center h-14 ml-2 tablet:ml-3 sm:ml-4 lg:ml-8'>
                <Image 
                src='/images/logo/header-logo.png' 
                alt='Vanshika Tour and Travels logo, representing a travel agency with a modern design, symbolizing adventure and exploration.'
                height={1000}
                width={1000}
                priority={true}
                className='h-auto w-32'
                />
            </div>

                
            <CloseIcon fontSize='large' className={`absolute right-4 mr-6 ${navMenuOpen ? 'navicon-visible' : 'navicon-hidden'} lg:hidden`}/>
            <MenuIcon fontSize='large' className={`absolute right-4 mr-6   ${navMenuOpen ? 'navicon-hidden' : 'navicon-visible'} lg:hidden`} onClick={handleMenu} />
            

            <div ref={menuRef} className={`${navMenuOpen ? 'max-sm:w-full max-lg:w-64 menu-appear' : 'menu-disappear'} box-border absolute top-16 sm:top-28 right-0 h-fit lg:h-auto  lg:static lg:flex lg:p-8 z-50`}>
                <div className={`flex flex-col lg:flex-row lg:items-center lg:px-4 h-fit max-sm:w-full max-lg:w-64 max-lg:text-white bg-periwinkle lg:bg-white`}>
                    <ul className='list-none flex flex-col lg:items-center lg:flex-row lg:text-center lg:space-x-6'>
                        
                        <li className='max-lg:py-2 max-lg:px-6 max-lg:border-b border-gray-400'>
                            <Navlink href='/' title='Home' handleClick={handleClick}/>
                        </li>

                        <li className='relative group cursor-pointer max-lg:border-b border-gray-400' onMouseEnter={isLargeScreen ? (event)=>handleOpen(event, 1) : null} onMouseLeave={isLargeScreen ? (event)=>handleClose(event) : null} onClick={(event) => handleOpen(event,1)}>
                            
                            <div className='max-lg:pl-8  max-lg:py-2'>
                                <h2 className='inline-block'>Varanasi Tour</h2>
                                <KeyboardArrowDownIcon className={`max-lg:absolute max-lg:right-3 ${open===1 ? 'open' : 'close'}`}/>   
                            </div>

                            <div className={`lg:absolute`}>
                               <ul ref={(curr) => contentRef.current[1] = curr} className={`${open===1 ? 'dropdown-appear' : 'dropdown-disappear'}  flex-col w-full sm:w-64 lg:w-52 max-lg:pl-10 z-50 cursor-pointer list-none text-start text-white bg-periwinkle`}>
                                <Link href={parsePath('Kashi/Varanasi Tour')} onClick={(event) => handleClick(event)}><li className='px-2 py-2 hover:bg-black text-sm max-lg:border-b border-gray-400'>Kashi Tour</li></Link>
                                <Link href={parsePath('Varanasi, Bodhgaya, Rajgir and Nalanda')} onClick={(event) => handleClick(event)}><li className='px-2 py-2 hover:bg-black text-sm max-lg:border-b border-gray-400'>Varanasi, Bodhgaya, Rajgir and Nalanda</li></Link>
                                <Link href={parsePath('Lucknow, Ayodhya, Prayagraj, Chitrakoot, and Varanasi')} onClick={(event) => handleClick(event)}><li className='px-2 py-2 hover:bg-black text-sm max-lg:border-b border-gray-400'>Lucknow, Ayodhya, Prayagraj, Chitrakoot, and Varanasi</li></Link>
                                <Link href={parsePath('Kashi/Varanasi')} onClick={(event) => handleClick(event)}><li className='px-2 py-2 hover:bg-black text-sm max-lg:border-b border-gray-400'>Kashi</li></Link>
                                <Link href={parsePath('Varanasi Religious Tour Plan')} onClick={(event) => handleClick(event)}><li className='px-2 py-2 hover:bg-black text-sm max-lg:border-b border-gray-400'>Varanasi Religious Tour Plan</li></Link>
                                <Link href={parsePath('Varanasi, Prayagraj, Ayodhya Tour')} onClick={(event) => handleClick(event)}><li className='px-2 py-2 hover:bg-black text-sm max-lg:border-b border-gray-400'>Varanasi, Prayagraj, Ayodhya Tour</li></Link>
                                <Link href={parsePath('Varanasi, Prayagraj, Chitrakoot, and Ayodhya Tour Package')} onClick={(event) => handleClick(event)}><li className='px-2 py-2 hover:bg-black text-sm max-lg:border-b border-gray-400'>Varanasi, Prayagraj, Chitrakoot, and Ayodhya Tour Package</li></Link>
                                </ul>
                            </div>

                        </li>

                        <li className='relative group cursor-pointer max-lg:border-b border-gray-400' onMouseEnter={isLargeScreen ? (event)=>handleOpen(event,2) : null} onMouseLeave={isLargeScreen ? (event)=>handleClose(event) : null} onClick={(event) => handleOpen(event,2)}>
                            
                            <div className='max-lg:pl-8 max-lg:py-2'>
                            <h2 className='inline-block'>Domestic Tour</h2>
                                <KeyboardArrowDownIcon className={`max-lg:absolute max-lg:right-3 ${open===2 ? 'open' : 'close'}`}/>
                            </div>

                        </li>

                        <li className='relative group cursor-pointer max-lg:border-b border-gray-400' onMouseEnter={isLargeScreen ? (event)=>handleOpen(event,3) : null} onMouseLeave={isLargeScreen ? (event)=>handleClose(event) : null} onClick={(event) => handleOpen(event,3)}>
                            
                            <div className='max-lg:pl-8 max-lg:py-2'>
                                <h2 className='inline-block'>Nepal Tour</h2>
                                <KeyboardArrowDownIcon className={`max-lg:absolute max-lg:right-3 ${open===3 ? 'open' : 'close'}`}/>
                            </div>

                        </li>

                        <li className='relative group cursor-pointer max-lg:border-b border-gray-400' onMouseEnter={isLargeScreen ? (event)=>handleOpen(event,4) : null} onMouseLeave={isLargeScreen ? (event)=>handleClose(event) : null} onClick={(event) => handleOpen(event,4)}>
                            
                            <div className='max-lg:pl-8 max-lg:py-2'>
                                <h2 className='inline-block'>Kumbh</h2>
                                <KeyboardArrowDownIcon className={`max-lg:absolute max-lg:right-3 ${open===4 ? 'open' : 'close'}`}/>
                            </div>

                            <div className={`lg:absolute`}>
                               <ul ref={(curr) => contentRef.current[4] = curr} className={`${open===4 ? 'dropdown-appear' : 'dropdown-disappear'}  flex-col w-64 lg:w-52 max-lg:pl-6 z-50 cursor-pointer list-none text-start text-white bg-periwinkle`}>
                                <Link href={parsePath('Prayagraj Kumbh Mela')} onClick={(event) => handleClick(event)}><li className='px-2 py-2 hover:bg-black text-sm'>Prayagraj Kumbh Mela</li></Link>
                                </ul>
                            </div>

                        </li>

                        <li className='relative group cursor-pointer max-lg:border-b border-gray-400' onMouseEnter={isLargeScreen ? (event)=>handleOpen(event,5) : null} onMouseLeave={isLargeScreen ? (event)=>handleClose(event) : null} onClick={(event) => handleOpen(event,5)}>
                            
                            <div className='max-lg:pl-8 max-lg:py-2'>
                                <h2 className='inline-block'>Pind Daan</h2>
                                <KeyboardArrowDownIcon className={`max-lg:absolute max-lg:right-3 ${open===5 ? 'open' : 'close'}`}/>
                            </div>

                            <div className={`lg:absolute`}>
                               <ul ref={(curr) => contentRef.current[5] = curr} className={`${open===5 ? 'dropdown-appear' : 'dropdown-disappear'}  flex-col w-full sm:w-64 lg:w-52 max-lg:pl-10 z-50 cursor-pointer list-none text-start text-white bg-periwinkle`}>
                                <Link href={parsePath('Kashi Pind Daan')} onClick={(event) => handleClick(event)}><li className='px-2 py-2 hover:bg-black text-sm max-lg:border-b border-gray-400'>Kashi Pind Daan</li></Link>
                                <Link href={parsePath('Prayagraj Pind Daan')} onClick={(event) => handleClick(event)}><li className='px-2 py-2 hover:bg-black text-sm max-lg:border-b border-gray-400'>Prayagraj Pind Daan</li></Link>
                                <Link href={parsePath('Pind Daan at Varanasi and Prayagraj')} onClick={(event) => handleClick(event)}><li className='px-2 py-2 hover:bg-black text-sm max-lg:border-b border-gray-400'>Pind Daan at Varanasi and Prayagraj</li></Link>
                                </ul>
                            </div>
                            
                        </li>

                        <li className='max-lg:py-2 max-lg:px-6'>
                            <Navlink href='/contact-us' title='Contact' handleClick={handleClick}/>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}