import React, {useState} from "react";

function AccountRelatedBody() {
    const [faqs,
        setfaqs] = useState([
        {
            question: "I have forgotten my password",
            description: "To generate a new password, please click the link below",

            open: false
        }, {
            question: "I want to delete my Bewakoof account.",
            description: "Please write to us here, and our customer care executive will help you resolve t" +
                    "his.",

            open: false
        }, {
            question: "I would like to unsubscribe from Bewakoof promotional SMS and emails.",
            description: "We’re sorry to see you go. Please write to us here, and our customer care execut" +
                    "ive will help you resolve this.",

            open: false
        }
    ]);
    const toggleFAQ = (index) => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open;
            } else {
                faq.open = false;
            }

            return faq;
        }));
    };

    return (
        <div className="App">
            <div className="faqs">
                {faqs.map((faq, i) => (<faq faq={faq} index={i} toggleFAQ={toggleFAQ}/>))}
            </div>
        </div>
    );
}

export default AccountRelatedBody;
