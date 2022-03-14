import React from "react";
import ColourPicker from "./ColorPicker";
function FilterSingle({ faq, index, toggleFAQ }) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">
        {faq.question === "Colour" ? (
          <ColourPicker></ColourPicker>
        ) : (
          faq.answer.map((k) => {
            return (
              <div>
                <h6 className="itemsindd py-2">{k}</h6>
                <br></br>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default FilterSingle;
