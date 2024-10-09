'use client'

import { useState, useEffect } from "react";
import Card from "./tour-card";
import axios from "axios";

export default function CarouselSlider() {
    const [currIndex, setCurrIndex] = useState(4);
    const [tour, setTour] = useState([]);
    const [isTransitioning, setIsTransitioning] = useState(true);

    
    useEffect(() => {
        axios.get('/tours.json')
        .then((res) => res.data)
        .then((data) => {
            const filteredData = Object.values(data).filter(ele => ele.featured === true);
            setTour(() => [...filteredData.slice(-4), ...filteredData ,...filteredData.slice(0,4)]);
        })
        .catch((err) => {
            console.log("Error fetching popular routes", err);
        });
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, isTransitioning ? 3000 : 50);

        return () => clearInterval(interval);
    }, [currIndex, tour]);


    const nextSlide = () => {
        setCurrIndex((prev) => {
            if(prev === tour.length-4)
            {
                setIsTransitioning(false);
                return 4;
            }
            else if(prev === 0)
                return tour.length-8;
            else
            {
                if(!isTransitioning)
                    setIsTransitioning(true);
                return (prev+1)%(tour.length ? tour.length : 1)
            }
        });
    }


    return (
        <div className='flex flex-col'>

            <div className='flex overflow-hidden pl-4'>

                {tour.map((ele, idx) => {
                    return (
                    <div
                    key={idx}
                    className={`pr-24 ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''} `}
                    style={{ transform:`translateX(-${currIndex*100}%)` }}
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