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
        .then(() => setOriginList((prev) => {
            const list = prev;
            list.sort();
            return list;
        }))
        .catch((err) => console.error("Error fetching Origin List", err));
    }, []);

    // handles change in origin or destination search box
    function handleChange(input, name)
    {
        console.log('Val = ', input);
        console.log('Name  = ', name);
        setInfo({
            ...info, 
            [name] : input
        });
    }

    return (
        <div className='flex items-center bg-lilac px-24 py-4 h-20 mb-8'>
            <SearchBox 
            name='origin' 
            value={info.origin} 
            alternate={info.destination}
            handleChange={handleChange} 
            list={originList}/>

            <SearchBox 
            name='destination' 
            value={info.destination} 
            alternate={info.origin}
            handleChange={handleChange} 
            list={originList}/>

       </div>
    );
}