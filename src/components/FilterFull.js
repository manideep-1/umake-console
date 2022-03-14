import React, { useState } from "react";
import FilterSingle from "./FilterSingle";

function App() {
  const [faqs, setfaqs] = useState([
    {
      question: "Catogory ",
      answer: ["Men", "Women"],
      open: false,
    },
    {
      question: "Sizes",
      answer: ["S", "M", "L", "XL", "2XL", "3XL"],
      open: false,
    },
    {
      question: "Colour",
      answer: "Colours",
      open: false,
    },
    {
      question: "Fit",
      answer: ["Skin", "Loose"],
      open: false,
    },
    {
      question: "Neck",
      answer: ["colored", "color-less"],
      open: false,
    },
    {
      question: "Sort By",
      answer: ["Popular", "Arrival Dates"],
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
    <div className="faqs">
      {faqs.map((faq, i) => (
        <FilterSingle faq={faq} index={i} toggleFAQ={toggleFAQ} />
      ))}
    </div>
  );
}

export default App;
