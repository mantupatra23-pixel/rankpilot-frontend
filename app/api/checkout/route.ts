import Stripe from "stripe"
import { NextResponse } from "next/server"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16"
})

export async function POST() {

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "subscription",

    line_items: [
      {
        price: "price_rankpilot_pro",
        quantity: 1
      }
    ],

    success_url: "https://rankpilot-frontend.onrender.com/dashboard",
    cancel_url: "https://rankpilot-frontend.onrender.com/dashboard"
  })

  return NextResponse.json({ url: session.url })

}
