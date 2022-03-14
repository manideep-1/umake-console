import React, { useState } from "react";
import FAQ1 from "./FAQ1";

function OrdersRelatedBody() {
  const [faqs, setfaqs] = useState([
    {
      question: "How do I place an order?",
      description: "To place an order, please follow these steps:",
      b:
        "1. Select the product you'd like to buy and 'Check Availability at' your preferred pincode",
      c: "2. Add products to your cart or just hit 'Buy Now'",
      d:
        "3. Choose or 'Add delivery address'. Use a preferred payment mode and confirm the order",
      open: false,
    },
    {
      question: "My Order is not yet packed/shipped",
      description:
        "We usually ship orders 3-4 business days before the delivery date so that they reach you on time. In case your order hasn't been shipped within this time please contact our Customer Support so that we can look into it.",
      open: false,
    },
    {
      question: "What are the charges that will apply on my order?",
      description:
        "1. We levy no shipping charges on your order. Except for certain Categories/Products such as Kawach Masks and Surgical Mask where Rs. 50 is applied as shipping charges due to operational reasons.",
      a:
        "2. COD charges of Rs. 25 per product if you choose cash-on-delivery as your mode of payment. ",
      b: "3. The price of the products you see are inclusive of taxes.",
      open: false,
    },
    {
      question: "Why can't I see the COD option?",
      description:
        "In a few pincodes, we are unable to provide the cash-on-delivery payment option currently.",
      a:
        "You may however, opt for any other mode of payment such as Debit Card, Credit Card, or using an Online Wallet.",
      open: false,
    },
  ]);
  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="App">
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ1 faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default OrdersRelatedBody;
