import Stripe from "stripe"
import { NextResponse } from "next/server"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!,{
apiVersion:"2024-06-20"
})

export async function POST(){

const session = await stripe.checkout.sessions.create({

payment_method_types:["card"],

mode:"subscription",

line_items:[
{
price:"price_rankpilot_pro",
quantity:1
}
],

success_url:"https://rankpilot-frontend.onrender.com/dashboard",
cancel_url:"https://rankpilot-frontend.onrender.com/pricing"

})

return NextResponse.json({url:session.url})

}
