import '@/app/globals.css';
import './styles.css';
import Navlink from './navlink';

export default function Header() {
    return (
        <div className="flex items-center h-18">
            <div className='flex-auto flex items-center h-18 ml-10 mt-2'>
                <img 
                src='/images/logo.png' 
                alt='Logo'
                className='h-14 scale-150'
                />
            </div>
            <div className='flex flex-row items-center h-full space-x-2 mr-16 p-8'>
                <Navlink href='/' title='Home'/>
                <Navlink href='/contact-us' title='Contact'/>
            </div>
        </div>
    );
}