import Stripe from "stripe"
import { NextResponse } from "next/server"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-04-10",
})

export async function POST() {
  try {

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",

      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],

      success_url: "https://rankpilot-frontend-1.onrender.com/success",
      cancel_url: "https://rankpilot-frontend-1.onrender.com/cancel",
    })

    return NextResponse.json({ url: session.url })

  } catch (error) {
    return NextResponse.json({ error: "Stripe error" }, { status: 500 })
  }
}
