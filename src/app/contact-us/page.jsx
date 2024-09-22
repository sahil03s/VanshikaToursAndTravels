'use client'

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Contact() {

    // useSearchParams hook lets us read the current URL's query string
    const searchParams = useSearchParams();


    // parses the URL's query parameters and store it in tour object
    const tour = {
        heading:searchParams.get('package'),
        duration:searchParams.get('duration')
    };


    // useRouter hook helps to redirect to thank-you page after form is submitted successfully
    const router = useRouter();

    const initialValue = {fname:'', lname:'', phone:'', mail:'', date:'', duration:'', passengers:'', comment:''};

    
    //regular expressions to check the validity of first name, last name and phone no.
    const pattern = {
        fname: /^[A-Za-z]+[ ]*[A-Za-z]*$/,
        lname: /^[A-Za-z]*[ ]*[A-Za-z]*$/,
        phone: /^[0-0]{0,1}[1-9]{1,1}[0-9]{9,9}$/
    };

    
    // details helps to track the data filled in form, initially it is empty
    const [details, setDetails] = useState(initialValue);


    // isSubmitted indicates whether submit button has been clicked at least once or not
    const [isSubmitted, setIsSubmitted] = useState(false);


    // formErrors keeps track of errors in input of form data, for example, putting characters in number field, formErrors.phone will contain detail of this error
    const [formErrors, setFormErrors] = useState({});


    // formValidation validates the necessary fields to be valid using regular expressions in pattern object declared above and setFormErrors accordingly, if any.
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

    // on submitting a form, this function validates the user's input, if no errors are there, api call is made to notify the user on whatsapp with brochure and then user is redirected to thank-you page
    const handleForm = async (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        const err = formValidation(details);
        if(Object.keys(err).length === 0)
        {
            await fetch('/api/sendWhatsapp', {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json',
                },
                body : JSON.stringify(details)
            });
            router.push('/thank-you');
        }
    }

    // handles any change in user's input in form
    const handleChange = (event) =>{
        const updated = { ...details, [event.target.name] : event.target.value};
        
        if(isSubmitted)
            formValidation(updated);

        setDetails(updated); 
    } 


    // this function marks the border as red for those input fields which have errors on form submission
    const checkBorderColor = (name) => {
        return isSubmitted && Object.keys(formErrors).includes(name)  ? 'border-red' : 'border-black';
    }
    

    // this function marks the label color as red for those input fields which have errors on form submission
    const checkLabelColor = (name) => {
        return isSubmitted && Object.keys(formErrors).includes(name)  ? 'text-red' : 'text-black';
    }


    return (
        <div className='container flex items-center justify-center w-full h-fit py-16'>

            {/* Heading of contact section, based on whether user is redirected from contact link or enquire now link */}
            <div className=' h-fit bg-white py-4 px-8'>
                <h1 className='w-fit font-bold text-3xl mb-1'>{tour.heading ? 'Enquire This Trip' : 'Leave us your info'}</h1>
                {tour.heading
                ? <div><span className='text-lg'>{tour.heading} </span><span className='text-xs text-red ml-1'>{tour.duration}</span></div>
                : <div><span>We will get back to you.</span></div>
                }
                
                {/* form section */}
                <div className='mt-6 w-11/12'>
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