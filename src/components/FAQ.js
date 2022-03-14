import React from "react";

function FAQ({faq, index, toggleFAQ}) {
    return (
        <div
            className={"faq " + (faq.open
            ? "open"
            : "")}
            key={index}
            onClick={() => toggleFAQ(index)}>
            <div className="pointer">
                <div className="faq-question">
                    <p>
                        {faq.question}</p>
                </div>

                <div className="faq-answer">
                    <p>{faq.description}</p>
                </div>
                <div className="faq-answer">
                    <p>{faq.a}</p>
                </div>
                <div className="faq-answer">
                    <p>
                        {faq.b}</p>
                </div>
                <div className="faq-answer">
                    <p>
                        {faq.c}</p>
                </div>
                <div className="faq-answer">
                    <hr style={{
                        margin: "2px"
                    }}/>

                    <div className="answer" className="sdf">
                        Was this information helpful?
                        <span className="dfg">
                            <div>
                                <button
                                    data-toggle="modal" data-target="#popup2"
                                    className="qwerty"
                                    style={{
                                    color: "green"
                                }}
                                    
                                   >
                                    Yes
                                </button>
                                <a
                                    className="zxc"
                                    style={{
                                    color: "gray"
                                }}
                                    className="button"
                                    >
                                    No
                                </a>
                            </div>
                        </span>
                    </div>

                    <hr style={{
                        margin: "1px"
                    }}/>
                </div>

                <div class="modal fade" id="popup2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Thanks for your Feedback</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    );
}

export default FAQ;
