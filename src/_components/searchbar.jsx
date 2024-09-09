'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import SearchBox from "./searchbox";
import './styles.css';
import '@/app/globals.css';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from "@mui/material";


export default function SearchBar() {
    const [info, setInfo] = useState({origin:'', destination:''});  // tracks value of origin and destination
    const [originList, setOriginList] = useState([]);   // it stores possible origins
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

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
        setInfo({
            ...info, 
            [name] : input
        });
    }

    console.log(startDate);
    console.log(endDate);

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

            <div className='flex basis-1/5 items-center mr-8 h-2/3'>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='de'>
                <DemoContainer components={['DatePicker']}>
                <DatePicker
                className='bg-white'
                label="Select Start Date"
                value={startDate}
                onChange={(newValue) => setStartDate(newValue)}
                format='DD-MM-YYYY'
                disablePast
                showDaysOutsideCurrentMonth
                disableHighlightToday
                />
                </DemoContainer>
            </LocalizationProvider>
            </div>

            <div className='basis-1/5'>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='de'>
                <DemoContainer components={['DatePicker']}>
                <DatePicker
                label="Select End Date"
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
                className='bg-white'
                format='DD-MM-YYYY'
                disablePast
                showDaysOutsideCurrentMonth
                disableHighlightToday
                minDate={startDate}
                />
                </DemoContainer>
            </LocalizationProvider>
            </div>

            <div className='flex-auto flex items-center basis-1/12 bg-white ml-8 h-14 cursor-pointer'>
            <div className='flex-auto text-center'>
                Submit
            </div>
            </div>

       </div>
    );
}