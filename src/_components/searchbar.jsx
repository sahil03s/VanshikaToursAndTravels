'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import SearchBox from "./searchbox";
import './styles.css';

export default function SearchBar() {
    const [info, setInfo] = useState({origin:'', destination:''});  // tracks value of origin and destination
    const [originList, setOriginList] = useState([]);   // it stores possible origins

    // fetch available origin names from origin.json file in public folder 
    useEffect(() => {
        axios.get('/origin.json')
        .then((res) => setOriginList(res.data))
        .catch((err) => console.error("Error fetching Origin List", err));
    }, []);

    // handles change in origin or destination search box
    function handleChange(event)
    {
        if(event.target.tagName === 'LI')
        {
            setInfo({
                ...info, 
                [event.target.dataset.name] : event.target.dataset.value
            });
        }
        else if(event.target.tagName === 'INPUT')
        {
            setInfo({
                ...info, 
                [event.target.name] : event.target.value
            });
        }
    }

    return (
        <div className='flex items-center bg-lilac px-24 py-4 h-20 mb-8'>
            <SearchBox 
            name='origin' 
            value={info.origin} 
            handleChange={handleChange} 
            list={originList}/>

            <SearchBox 
            name='destination' 
            value={info.destination} 
            handleChange={handleChange} 
            list={originList}/>

       </div>
    );
}