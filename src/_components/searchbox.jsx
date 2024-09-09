//Origin and Destination Boxes in SearchBar is implemented using searchBox.
'use client'

import { useState, useRef, useEffect } from 'react';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles.css';
import '@/app/globals.css';

export default function SearchBox({ name, value, handleChange, list }) {
    //indicates whether drop down is to be expanded or collapsed
    const [expand, setExpand] = useState(false); 

    // refs to input text so that it could be focussed
    const inputRef = useRef(null);  

    // refs to outermost div to detect outside click and collapse the drop down
    const containerRef = useRef(null); 

    //detects any outside click so that drop down could be collapsed
    useEffect(() => {
        //detect any outside click (also ensure that expand-icons are not clicked), setExpand to false.
        const collapse = (event) =>{

            // if expand icons are not target and container does not contain the target, set expand to false
            if(!event.target.closest('.expand-icon') && containerRef.current && !containerRef.current.contains(event.target))
                setExpand(false);
        } 
        
        // Add event listener for clicks outside the div
        document.addEventListener('click', collapse);

        // Cleanup the event listener when component unmounts
        return () => {
            document.removeEventListener('click', collapse);
        };

    }, []);

    // it detects and handles inside click on div
    const handleInputFocus = (event) => {

        //stop the event from further propagation as it must be handled only once
        event.stopPropagation();

        //if expand-icons are clicked, just toggle expand state
        if(event.target.closest('.expand-icon'))
        {
            setExpand((prev) =>!prev );
            if(inputRef.current)
                inputRef.current.focus();
        }

        //if an option from drop-down is selected, close the drop down and fill the input with its value
        else if(event.target.closest('.selection-list'))
        {
            setExpand(false);
            handleChange(event);
        }

        // for any other place inside div, just set expand state to be true and focus on input
        else{
            setExpand(true);
            inputRef.current.focus();
        }
    }

    return (
        <div ref={containerRef} className='search-icon relative bg-white h-2/3 cursor-pointer'>
            <div 
            className='flex items-center basis-1/5 relative h-full'
            onClick={handleInputFocus}
            >

                <FmdGoodIcon className="ml-2 mr-3 cursor-pointer"/>
                <div className='basis-2/3'>
                    <input type='text'
                    ref={inputRef} 
                    value={value}
                    name={name}
                    className='w-full outline-none cursor-pointer focus:cursor-auto'
                    onChange={handleChange}       
                    placeholder={value ? value : name[0].toUpperCase() + name.substr(1)}    // capitalise placeholder
                    autoComplete='off'
                    ></input>                                     
                </div>

                { expand 
                    ?  <ExpandLessIcon 
                        className='expand-icon absolute right-2 cursor-pointer'
                        id={1}
                        onClick={handleInputFocus}
                        />
                    :   <ExpandMoreIcon
                        className='expand-icon absolute right-2 cursor-pointer'
                        name='expand'
                        onClick={handleInputFocus}
                        />
                }

                {expand &&
                 
                 <div className='absolute top-12 left-4 w-5/6 bg-white rounded-md'>
                    <ul className='list-none mt-2'>
                        {list.filter((val) => val.search(value)!=-1)
                        .map((val, index) => (
                            <li 
                            key={index} 
                            id={index}
                            data-name={name}
                            data-value={val} 
                            className={`mb-1 pl-2 ${value && index===0 ? 'bg-lilac' : ''} hover:bg-lilac selection-list`}
                            onClick={handleInputFocus}
                            >
                            {val}
                            </li>
                        ))}
                    </ul>
                 </div>
                 
                 } 

            </div>
        </div>
    );
}