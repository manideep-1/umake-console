import React from "react";

function FAQ1({ faq, index, toggleFAQ }) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="pointer">
        <p className="faq-question">{faq.question}</p>

        <div className="faq-answer">
          <p>{faq.description}</p>
        </div>

        <div className="faq-answer">
          <p>{faq.a}</p>
        </div>

        <div className="faq-answer">
          <p>{faq.b}</p>
        </div>

        <div className="faq-answer">
          <p> {faq.c}</p>
        </div>

        <div className="faq-answer">
          <p> {faq.d}</p>
        </div>

        <div className="faq-answer">
          <hr style={{ margin: "2px" }} />

          <div className="answer sdf">
            Was this information helpful?
            <span className="dfg">
              <div>
                <a
                 data-toggle="modal" data-target="#popup1"
                  className="qwerty button"
                  style={{ color: "gray" }}
                 
                >
                  Yes
                </a>
                <a
                  className="zxc button"
                  style={{ color: "gray" }}
                 
                >
                  No
                </a>
              </div>
            </span>
          </div>

          <hr style={{ margin: "1px" }} />
        </div>

        <div class="modal" id="popup1" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" >Thanks for your Feedback</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                          
                          
                        </div>
                    </div>
                </div>
      </div>
    </div>
  );
}

export default FAQ1;
