'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import SearchBox from "./searchbox";
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

    return (
        <div className='flex items-center bg-lilac h-16 mx-8 px-4 mb-8'>
            <SearchBox name='origin' value={info.origin} handleChange={handleChange}/>
            <SearchBox name='destination' value={info.destination} handleChange={handleChange}/>

       </div>
    );
}