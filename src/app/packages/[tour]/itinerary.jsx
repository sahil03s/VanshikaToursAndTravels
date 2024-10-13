'use client'

import { useState, useRef } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Itinerary({tour}) {
    // keeps track of list items in itinerary which is/are expanded. Multiple items can be expanded at the same time
    const [active, setActive] = useState([]);
    
    // references body of description for each day of itinerary. It is used here to dynamically calculate the height of div, so that transition from hidden-div to show-div can be implemented smoothly
    const contentRef = useRef([]);

    // when a itinerary item is clicked, toggle it to set ot unset it as active
    const handleActive = (id) => {
        const currElement = contentRef.current[id];
        setActive((prev) => {

            // if previously it was active, remove it from active list
            if(prev.includes(id))
            {
                currElement.style.maxHeight = `0px`;
                return prev.filter((ele) => ele !== id);
            }

            // if previously, it was not active, add it to active list
            else
            {
                currElement.style.maxHeight = `${currElement.scrollHeight}px`;
                return [...prev, id];
            }
        });
    }

    return (
        // outer div container for itinerary section
        <div>
            <h3 className='font-bold text-2xl'>Tour Itinerary</h3>

            {/* inner container containing the unordered list */}
            <div className='mt-4 relative'>
            <ul className='list-none'>

                {/* left dashed border between itinerary items */}
                <div className={`h-full absolute left-4 border-l-2 border-periwinkle border-dashed`}></div>

                {/* itinerary items */}
                {tour.itinerary.map((ele, index) => {
                    return (
                        <li key={index} className='mb-6'>
                            <div>

                            <div className='relative flex items-center bg-custom-grey'>
                            <span className='font-bold text-xs mr-3 border border-periwinkle rounded-full text-white bg-periwinkle py-3 px-1'>{ele.day}</span>

                            <div className='w-full cursor-pointer' onClick={() => handleActive(index)}>
                            <h3 className='inline font-semibold'>{ele.heading}</h3>
                            <ExpandMoreIcon className={`absolute right-2 ${active.includes(index) ? 'expand' : 'shrink'}`}/>
                            </div>
                            </div>

                            <div ref={(curr) => contentRef.current[index] = curr} className={`${active.includes(index) ? 'show-div' : 'hidden-div'}`}>
                            <ul className='list-disc ml-16 mt-3'>

                                {ele.desc.map((desc, idx) => {
                                    return (
                                        <li key={idx}>
                                            <h6 className='inline font-semibold text-sm'>{desc.text} </h6> 
                                            <span className='text-sm'>{desc.description}</span>
                                            {desc.nestedList && 
                                                <ul className='list-circle ml-8'>
                                                    {desc.nestedList.map((nestedItem, nestedIdx) => {
                                                        return (
                                                            <li key={nestedIdx}>
                                                                <h6 className='inline font-semibold text-sm'>{nestedItem.text}</h6>
                                                                <span className='text-sm'>{nestedItem.description}</span>
                                                            </li>
                                                        )
                                                    })}

                                                </ul>
                                            }
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