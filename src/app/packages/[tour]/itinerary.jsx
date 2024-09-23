'use client'

import { useState, useRef } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Itinerary({tour}) {
    const [active, setActive] = useState([]);
    
    // references body of description for each day of itinerary. It is used here to dynamically calculate the height of div, so that transition from hidden-div to show-div can be implemented smoothly
    const contentRef = useRef([]);

    const handleActive = (id) => {
        const currElement = contentRef.current[id];
        setActive((prev) => {
            if(prev.includes(id))
            {
                currElement.style.maxHeight = `0px`;
                return prev.filter((ele) => ele !== id);
            }
            else
            {
                currElement.style.maxHeight = `${currElement.scrollHeight}px`;
                return [...prev, id];
            }
        });
    }

    return (
        <div>
            <h2 className='font-bold text-2xl'>Tour Itinerary</h2>

            <div className='mt-4'>
            <ul className='list-none'>

                {tour.itinerary.map((ele, index) => {
                    return (
                        <li key={index} className='mb-4'>
                            <div>

                            <div className='relative flex items-center bg-custom-grey'>
                            <span className='font-bold text-xs mr-3 border border-periwinkle rounded-full text-white bg-periwinkle py-3 px-1'>{ele.day}</span>

                            <div className='w-full' onClick={() => handleActive(index)}>
                            <h3 className='inline font-semibold'>{ele.heading}</h3>
                            <ExpandMoreIcon className={`absolute right-2 ${active.includes(index) ? 'open' : 'close'}`}/>
                            </div>
                            </div>

                            <div ref={(curr) => contentRef.current[index] =curr} className={`${active.includes(index) ? 'show-div' : 'hidden-div'}`}>
                            <ul className='list-disc ml-16 mt-3'>

                                {ele.desc.map((desc, idx) => {
                                    return (
                                        <li key={idx}>
                                            <h5 className='inline font-semibold text-sm'>{desc.text} </h5> 
                                            <span className='text-sm'>{desc.description}</span>
                                        </li>
                                    );
                                })}

                            </ul>
                            </div>

                            </div>
                        </li>
                    );
                })}

            </ul>
            </div>
        </div>
    );
}