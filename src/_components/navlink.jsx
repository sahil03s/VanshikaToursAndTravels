'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './styles.css';

export default function Navlink({href, title, handleClick}) {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link href={href} className={`p-2 ${isActive ? 'active-tab' : ''}`} onClick={(event) => handleClick(event, 1)}>
            {title}
        </Link>
    );
}