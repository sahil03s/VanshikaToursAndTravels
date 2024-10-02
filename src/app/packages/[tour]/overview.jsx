'use client'

import { useState, useRef } from "react";
import './overview.css';

// This component exports the div containing overview description for tour packages
export default function Overview({tour}) {

    // keeps track of whether div is expanded or collapsed. Initially it is collapsed.
    const [isExpanded, setIsExpanded] = useState(false);
    
    const contentRef = useRef();

    // toggles between expanded and collapsed.
    const toggleReadMore = () => {
        const contentElement = contentRef.current;
        const height = contentElement.scrollHeight;
        setIsExpanded((prev) => {
            if(!prev)
                contentElement.style.maxHeight = `${height}px`;
            else
                contentElement.style.maxHeight = `140px`;
            
            return !prev;
        });
    }


    return (
        // container for Overview
        <div className="mt-4 relative bg-custom-grey pt-1 pl-2 pr-4">

        {/* if expanded, no clamping of text happens, but if in collapsed state, text will be clamped to specified no. of lines */}
        <div ref={contentRef} className={`${isExpanded ? 'expand-overview' : 'collapse-overview'}`}>

            <h4 className='font-bold text-xl mb-2'>Overview</h4>

            {/* Parsing and showing content from tour.overview according to its type ('heading','paragraph', etc) */}
            <div>
                {tour.overview.map((ele, index) => {
                    return (
                        <div key={index}>

                            {/* For heading return content in h2 tag */}
                            {ele.type === 'heading' && <h5 className='font-semibold text-sm mb-2'>{ele.content}</h5>}
                            
                            {/* For paragraph, parse it further to display data in span and set its font weight according to its bold property */}
                            {ele.type === 'paragraph' && <><p className='text-sm'>
                                {ele.content.map((obj, idx) => {
                                    return obj.bold ? <span key={idx} className='font-semibold'>{obj.text}</span> : <span key={idx}> {obj.text} </span>
                                })}
                            </p><br/></>}

                            {/* For unordered list, display the list, making subheading of each list item to be bold, followed by its description */}
                            {ele.type === 'unordered-list' && <ul className='text-sm pl-8 mb-4 list-disc'>
                                {ele.content.map((obj, idx) => {
                                    return <li key={idx}><span className='font-semibold'>{obj.text}</span>{obj.description}</li>
                                })}
                            </ul>}


                        </div>
                    );
                })}
            </div>
        </div>

            {/* Option clicking on which user can toggle between Read More and Read less */}
            <div className={`text-periwinkle hover:text-red cursor-pointer ${isExpanded ? '' : 'mt-4'}`} onClick={toggleReadMore}>{isExpanded ? 'Read Less' : 'Read More'}</div>
        </div>
    );
}