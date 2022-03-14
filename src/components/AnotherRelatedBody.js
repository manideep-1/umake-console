import React, { useState } from "react";
import FAQ4 from "./FAQ4";

function AccountRelatedBody() {
  const [faqs, setfaqs] = useState([
    {
      question:
        "I liked a product, but can't find it now. When will it be back?",
      description:
        "Unfortunately, the product you’re looking for is likely out of stock. However, you can keep checking if it comes back in stock (some designs do come back occasionally).",

      open: false,
    },
    {
      question: "Can I customize a product?",
      description: "Yes, You can customise a product. ",

      open: false,
    },
    {
      question: "I want to collaborate with Bewakoof.",
      description: "Reach us",
      a:
        "To reach our customer service executive, write in to us to the following mail here We'll get back to you within 24 hours:",

      open: false,
    },
    {
      question: "I want to work with Bewakoof.",
      description: "Send your update resume on",
      a: "gopivoruganti0@gmail.com",
      open: false,
    },
    {
      question: "I would like to report a bug.",
      description:
        "Please reach out to us  with details about the bug to the following mail, We will get back to you after going through the information.",
      a: "gopivoruganti0@gmail.com",
      open: false,
    },
    {
      question: "I found a duplicate Bewakoof product in the market.",
      description:
        "Chillar.com merchandise is available exclusively on our website www.chillar.com, the Chillar.com app, and a select few official 3rd party vendors. Any product available in the open market is a fake and a copyright violation of our brand, Bewakoof Brands Pvt Ltd.",
      open: false,
    },
    {
      question:
        "How do I find out about new offers and schemes on Chillar.com?",
      description:
        "We will periodically send you emails and SMSs on your registered email ID and phone number.",
      open: false,
    },
    {
      question:
        "Will Bewakoof.com Employee ask for my Confidential Information? ",
      description:
        "Chillar.com employees will never ask for your credentials like Bewakoof password, OTP, Credit/Debit card expiry and CVV or any other confidential information except for your name, address, e-mail id and mobile number.",
      open: false,
    },
    {
      question: "I don't see my query above",
      description: "Reach us",
      a:
        "To reach our customer service executive, write in to our following mail here We'll get back to you within 24 hours:",
      c: "gopivoruganti0@gmail.com",
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
          <FAQ4 faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default AccountRelatedBody;
