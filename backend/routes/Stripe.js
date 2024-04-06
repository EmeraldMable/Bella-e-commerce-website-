import express from 'express'
import dotenv from 'dotenv'
import Stripe from 'stripe'

dotenv.config()
const stripe = Stripe(process.env.Stripe_key)
const StripeRouter = express.Router()


StripeRouter.post('/create-checkout-session', async (req, res) => {
  const line_items = req.body.items.map((item) => {
    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.productName,
          images:[item.img],
          metadata:{
            id:item.id
          },
        },
        unit_amount:(item.price / 4000) * 1000,
      },
      quantity: item.qty,
    }
  })
  
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: `${process.env.Client_URL}/orderconfirm`,
      cancel_url: `${process.env.Client_URL}/cart`
    });
  
    res.send({url: session.url});
  });
  export {StripeRouter}