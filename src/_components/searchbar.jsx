'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles.css';

export default function SearchBar() {
    const [info, setInfo] = useState({origin:'', destination:''});
    const [originList, setOriginList] = useState([]);

    useEffect(() => {
        axios.get('/origin.json')
        .then((res) => setOriginList(res.data))
        .catch((err) => console.error("Error fetching Origin List", err));
    }, []);

    function handleChange(event)
    {
        setInfo({
            ...info, 
            [event.target.name] : event.target.value
        });
    }

    function toggleArrow() {
        console.log('Arrow');
    }

    return (
        <div className='flex items-center bg-lilac h-16 mx-8 px-4 mb-8'>
            <div className='search-icon relative basis-1/5 flex items-center bg-white h-2/3'>
                <FmdGoodIcon className=" ml-2 mr-3"/>
                <div className='basis-2/3'>
                    <input type='text' 
                    value={info.origin}
                    name='origin'
                    className='w-full outline-none'
                    onChange={handleChange}
                    placeholder='Origin'
                    autoComplete='off'></input>
                </div>
                <ExpandMoreIcon 
                className=' absolute right-2'
                onClick={toggleArrow}
                />
            </div>

            <div className='search-icon relative basis-1/5 flex items-center bg-white h-2/3'>
                <FmdGoodIcon className=" ml-2 mr-3"/>
                <div className='basis-2/3'>
                    <input type='text'
                    value={info.destination}
                    name='destination'
                    className='w-full outline-none'
                    onChange={handleChange}
                    placeholder='Destination'
                    autoComplete='off'></input>
                </div>
                <ExpandMoreIcon 
                className=' absolute right-2'
                onClick={toggleArrow}
                />
            </div>
       </div>
    );
}