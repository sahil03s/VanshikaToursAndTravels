import dbConnect from "@/lib/mongoose";
import Contact from "@/models/Contact";

export async function POST(req) {
    try {
        await dbConnect();
        const body = await req.json();
        const {fname, lname, phone, email, traveldate, duration, passengers, comment} = body;

        const newContact = new Contact({    
            fname,
            lname: lname || '',
            phone,
            email: email || '',
            traveldate : traveldate || null,
            duration : duration || null,
            passengers : passengers || null,
            comment : comment || '',
        });
        
        await newContact.save();

        return new Response(JSON.stringify({ success: true, message: 'Contact saved successfully!' }), {
            status: 201,
        });
        
    } catch(error) {
        console.log('Error saving contaact : ', error);
        return new Response(JSON.stringify({ success: false, message: 'Error saving contact' }), {
            status: 500,
        });
    }
}