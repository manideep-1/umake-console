import React from "react";

function FAQ3({ faq, index, toggleFAQ }) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="pointer">
        <div className="faq-question">
          <p>{faq.question}</p>
        </div>

        <div className="faq-answer">
          <p> {faq.description}</p>
        </div>
        <div className="faq-answer">
          <p>{faq.a}</p>
        </div>
        <div className="faq-answer">
          <p> {faq.b}</p>
        </div>
        <div className="faq-answer">
          <p> {faq.c}</p>
        </div>
        <div className="faq-answer">
          <hr style={{ margin: "2px" }} />

          <div className="answer sdf">
            Was this information helpful?
            <span className="dfg">
              <div>
                <a
                  className="qwerty button"
                  style={{ color: "gray" }}
                   data-toggle="modal" data-target="#popup1"
                >
                  Yes
                </a>
                <a
                  className="zxc button"
                  style={{ color: "gray" }}
                   data-toggle="modal" data-target="#popup1"
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
                                <h5 class="modal-title">Thanks for your Feedback</h5>
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

export default FAQ3;
