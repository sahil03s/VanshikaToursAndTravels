import { NextResponse } from "next/server";
import axios from "axios";

export const POST = async (req) => {
    try {
        const details = await req.json();
        const res = await axios.post('https://graph.facebook.com/v20.0/456878240832822/messages', {
            'messaging_product': 'whatsapp',
            'to': '91'+details.phone,
            'type': 'template',
            'template': {"name":"hello_world", "language" : {"code":"en_US"}}
        }, 
        {
            headers : {
                'Authorization' : 'Bearer ' + process.env.access_token,
                'Content-Type' : 'application/json',  
            }
        });
        
        return NextResponse.json({ success:true, data:res.data });
    }
    catch(err) {
        console.error('Error sending message:', err.response?.data || err.message);
        return NextResponse.json(
            { success:false, message:'Error sending message on whatsapp' },
            { status:500 }
        );
    }
}