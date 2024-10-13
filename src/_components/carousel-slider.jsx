'use client'

import { useState, useEffect, useRef } from "react";
import Card from "./tour-card";
import axios from "axios";

export default function CarouselSlider() {
    const [tour, setTour] = useState([]);
    const [currIndex, setCurrIndex] = useState(4);
    const [isManualScrolling, setIsManualScrolling] = useState(false);
    const sliderRef = useRef(null);
    
    useEffect(() => {
        axios.get('/tours.json')
        .then((res) => res.data)
        .then((data) => {
            const filteredData = Object.values(data).filter(ele => ele.featured.visible === true);
            setTour(() => [...filteredData.slice(-4), ...filteredData ,...filteredData.slice(0,4)]);
        })
        .catch((err) => {
            console.log("Error fetching popular routes", err);
        });
    }, [])

    const scrollNext = () => {
        setCurrIndex((prev) => {
            if(prev === tour.length-4)
                return 4;
            else
                return prev+1;
        })
    };

    useEffect(() => {    
        if(!isManualScrolling)
        {
            const container = sliderRef.current;
            const itemWidth = container.scrollWidth/tour.length;
            container.scrollTo({
                left: itemWidth*currIndex,
                behavior : currIndex !== 4 ? "smooth" : "instant" ,
            });
        }

        const interval = setInterval(() => {
            scrollNext();
        }, currIndex <= tour.length-4 && currIndex >= 4 ? 3000 : 200)

        return () => clearInterval(interval);
        

    }, [tour, currIndex, isManualScrolling, scrollNext]);
    


    const handleTouchStart = () => {
        setIsManualScrolling(true);
    }

    const handleTouchEnd = () => {
        const container = sliderRef.current;
        const itemWidth = container.scrollWidth/tour.length;

                let temp = Math.ceil(container.scrollLeft/itemWidth);
            
        container.scrollTo({
            left: itemWidth*temp,
            behavior : "smooth",
        });

        if(temp < 4)
            temp += tour.length-8;
        else if(temp >= tour.length-4)
            temp -= tour.length-8;
            
        setTimeout(() => {
            container.scrollTo({
                left: itemWidth*temp,
                behavior : "instant",
            });
                
            setIsManualScrolling(false);

        }, 500);
            
        setCurrIndex(temp);            
    }

    return (
        
            <div 
            className={`overflow-hidden slider-container`}
            >
                <div 
                ref={sliderRef} 
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="slider-wrapper pl-4 flex overflow-x-scroll scroll-smooth">


                {tour.map((ele, idx) => {
                    return (
                    <div
                    key={idx}
                    className={`w-1/4 mr-12 sm:mr-1 shrink-0 snap-start`}
                    >
                        <Card
                        content={ele}
                        />
                    </div>
                    )
                })}
                    
                </div>

            </div>

    );
}