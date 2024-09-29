import React, { useState } from "react";
import { PaySync } from "paysync";



const Test: React.FC = () => {
  const [amount, setAmount] = useState<number | "">("");
  const [paymentProvider, setPaymentProvider] = useState<string>("Stripe");
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentProvider === "Stripe") {
      const stripe = new PaySync.Stripe(
        "sk_test_51PaUaI2MF7toLiOy7fEqmDVyn5gQGLw74VjM4JVYYLhHliC3URzxU7wDDpNaNvb2FyXQYuykqRIwcqi0udTjs0iP00Dg7iC10i"
      );

      const checkoutDetails : any = {
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Test Product",
              },
              unit_amount: amount,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/fail",
      };
      try {
        const url = await stripe.getCheckoutUrl(checkoutDetails);
        // console.log("Generated URL:", url);
        window.location.href = url;
      } catch (error : any) {
        console.error("Error generating URL:", error.message);
      }
    }
    if(paymentProvider === "Paypal"){
      const paypalOptions = {
        clientId: 'Aa4YmFBwkSDkZlzLw4OAf5XR6TfsimSJh_lEQlywcIMHRuPqPn0_1vS-NEjHeAf2PxuIfXMqhPT9HPdP',   
        clientSecret: 'EJFyBM1dStTOIilXEhAzTW6asO320zY224L4j0FAyliEw1UKt0GVHr4V3NcgtfwCu21NfNUJ-qMVvL_F',   
        sandbox: true,                       
      };
      const paypal = new PaySync.Paypal(paypalOptions);

      const paypalPayload : any = {
        intent: 'CAPTURE',   
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',  // Currency code
              value: '100.00',        // Payment amount
            },
            description: 'Your product description',  // Optional: Description of what is being purchased
          },
        ],
        application_context: {
          brand_name: 'Your Brand Name',                
          landing_page: 'BILLING',                     // Optional: 'LOGIN' or 'BILLING'
          user_action: 'PAY_NOW',                      // Optional: What action button PayPal will show
          return_url: 'http://localhost:5173/success', // Where PayPal redirects after a successful payment
          cancel_url: 'http://localhost:5173/cancel',  // Where PayPal redirects after a canceled payment
        },
      };
  
      const approvalUrl = await paypal.getCheckoutUrl(paypalPayload);

      window.location.href = approvalUrl;
    }
    if(paymentProvider === "Razorpay"){
      const razorpayInstance = new PaySync.Razorpay();


  razorpayInstance.initialize({
  apiKey: "rzp_test_WykQstMmEnKNPW",
  secretKey: "ufHGoboK7tBZazjurX5yKWos"
  });

 
  try {

    const response = await razorpayInstance.charge(1000, 'INR', {
      name: 'Customer Name',
      email: 'customer@example.com',
    });
    console.log('Razorpay charge response:', response);
  } catch (error) {
    //@ts-ignore
    console.error('Razorpay error:', error.message);
  }
 

    }
  };

  return (
    <div className="test-page bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen text-white">
      <header className="hero-section py-16 text-center">
        <div className="content max-w-3xl mx-auto">
          <h1 className="title text-5xl font-bold mb-6">Test PaySync</h1>
          <p className="subtitle text-lg mb-8">
            Select your preferred payment gateway and enter an amount to test
            the PaySync integration.
          </p>
        </div>
      </header>

      <section className="payment-section py-16 bg-gray-100 text-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Payment Form
        </h2>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="amount"
                className="block text-lg font-medium mb-2"
              >
                Amount (USD)
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) =>{
                  setAmount(e.target.value ? parseFloat(e.target.value) : "")
                }
                  
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="Enter amount"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="provider"
                className="block text-lg font-medium mb-2"
              >
                Select Payment Provider
              </label>
              <select
                id="provider"
                value={paymentProvider}
                onChange={(e) => setPaymentProvider(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="Stripe">Stripe</option>
               
                <option value="Paypal">Paypal</option>
                <option value="Razorpay">Razorpay</option>
              </select>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-600 transition duration-300"
              >
                Pay {amount ? `$${amount}` : ""}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Test;
