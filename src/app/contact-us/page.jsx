'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
    const router = useRouter();
    const initialValue = {fname:'', lname:'', phone:'', mail:'', date:'', duration:'', passengers:'', comment:''};
    const pattern = {
        fname: /^[A-Za-z]+[ ]*[A-Za-z]*$/,
        lname: /^[A-Za-z]*[ ]*[A-Za-z]*$/,
        phone: /^[0-0]{0,1}[1-9]{1,1}[0-9]{9,9}$/
    };
    const [details, setDetails] = useState(initialValue);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const formValidation = (obj) => {
        const errors = {};
        if(!obj.fname)
            errors.fname = 'This is required';
        else if(!pattern.fname.test(obj.fname))
            errors.fname = 'Invalid input! Name must contain only alphabets and spaces';
        
        if(!pattern.lname.test(obj.lname))
            errors.lname = 'Invalid input! Last Name must contain only alphabets and spaces';

        if(!obj.phone)
            errors.phone = 'This is required';
        else if(!pattern.phone.test(obj.phone))
            errors.phone = 'Please Enter a valid phone number';
            
        setFormErrors(errors);
        return errors;
    }

    const handleForm = async (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        const err = formValidation(details);
        if(Object.keys(err).length === 0)
        {
            await fetch('/api/sendWhatsapp', {
                method: 'POST',
            });
            router.push('/thank-you');
        }
    }

    const handleChange = (event) =>{
        const updated = { ...details, [event.target.name] : event.target.value};
        
        if(isSubmitted)
            formValidation(updated);

        setDetails(updated); 
    } 

    const checkBorderColor = (name) => {
        return isSubmitted && Object.keys(formErrors).includes(name)  ? 'border-red' : 'border-black';
    }

    const checkLabelColor = (name) => {
        return isSubmitted && Object.keys(formErrors).includes(name)  ? 'text-red' : 'text-black';
    }

    return (
        <div className='container flex items-center justify-center w-full h-fit py-16'>
            <div className=' h-fit bg-white py-4 px-8'>
                <h1 className='w-fit font-bold text-3xl mb-4'>Enquire This Trip</h1>
                <span>Amazing Kashi Tour </span><span className='text-xs text-red-400 ml-2'>2N/3D</span>
                <div className='mt-4 w-11/12'>
                    <form onSubmit={handleForm}>
                    <div className="flex flex-col w-auto">
                        <div className="flex flex-col lg:flex-row mb-1">
                            <div className='relative h-12 my-2 mr-32'>
                            <span 
                            className={`absolute -top-2 left-3 z-50 text-xs bg-white px-0.5 ${checkLabelColor('fname')}`}>
                            First Name*
                            </span>
                            <input type="text" name='fname' value={details.fname} autoComplete="off"
                                className={`h-full p-3 outline-none border rounded ${checkBorderColor('fname')}`}
                                onChange={handleChange}
                            />
                            </div>
                            <div className='flex relative h-12 my-2'>
                            <span className={`absolute -top-2 left-3 z-50 text-xs bg-white px-0.5 ${checkLabelColor('lname')}`}>Last Name</span>
                            <input type="text" name='lname' value={details.lname} autoComplete="off"
                                className={`h-full p-3 outline-none border rounded ${checkBorderColor('lname')}`}
                                onChange={handleChange}
                            />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row mb-1">
                            <div className='relative h-12 my-2 mr-32'>
                            <span className={`absolute -top-2 left-3 z-50 text-xs bg-white px-0.5 ${checkLabelColor('phone')}`}>Phone Number*</span>
                            <input type="tel" name='phone' value={details.phone} autoComplete="off"
                                className={`h-full p-3 outline-none border rounded ${checkBorderColor('phone')}`}
                                onChange={handleChange}
                            />
                            </div>
                            <div className='relative h-12 my-2 mr-32'>
                            <span className={`absolute -top-2 left-3 z-50 text-xs bg-white px-0.5 ${checkLabelColor('mail')}`}>Email</span>
                            <input type="text" name='mail' value={details.mail} autoComplete="off"
                                className={`h-full p-3 outline-none border rounded ${checkBorderColor('mail')}`}
                                onChange={handleChange}
                            />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row mb-1">
                            <div className='relative h-12 my-2 mr-32'>
                            <span className={`absolute -top-2 left-3 z-50 text-xs bg-white px-0.5 ${checkLabelColor('date')}`}>When do you want to travel?</span>
                            <input type="text" name='date' value={details.date} autoComplete="off"
                                className={`h-full p-3 outline-none border rounded ${checkBorderColor('date')}`}
                                onChange={handleChange}
                            />
                            </div>
                            <div className='relative h-12 my-2 mr-32'>
                            <span className={`absolute -top-2 left-3 z-50 text-xs bg-white px-0.5 ${checkLabelColor('passengers')}`}>No. of Passengers</span>
                            <input type="text" name='passengers' value={details.passengers} autoComplete="off"
                                className={`h-full p-3 outline-none border rounded ${checkBorderColor('passengers')}`}
                                onChange={handleChange}
                            />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row mb-1">
                            <div className='relative h-12 my-2 mr-32'>
                            <span className={`absolute -top-2 left-3 z-50 text-xs bg-white px-0.5 ${checkLabelColor('duration')}`}>Duration of Stay (in days)</span>
                            <input type="text" name='duration' value={details.duration} autoComplete="off"
                                className={`h-full p-3 outline-none border rounded ${checkBorderColor('duration')}`}
                                onChange={handleChange}
                            />
                            </div>
                            <div className='relative h-12 my-2 mr-32'>
                            <span className={`absolute -top-2 left-3 z-50 text-xs bg-white px-0.5 ${checkLabelColor('comment')}`}>Comments</span>
                            <input type="text" name='comment' value={details.comment} autoComplete="off"
                                className={`h-full p-3 outline-none border rounded ${checkBorderColor('comment')}`}
                                onChange={handleChange}
                            />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className='bg-periwinkle text-white my-4 px-6 py-2 rounded-full'>Get in Touch</button>
                        </div>
                    </div>
                    </form>

                </div>
            </div>
        </div>
    );
}