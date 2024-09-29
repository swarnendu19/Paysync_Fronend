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
      console.log("Paypal")
    }
    if(paymentProvider === "Razorpay"){
      console.log("Razorpay")
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
                <option value="Razorpay">Razorpay</option>
                <option value="Paypal">Paypal</option>
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
