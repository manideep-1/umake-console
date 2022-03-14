/*import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Card,UncontrolledCollapse,  Button, CardBody, Media } from 'reactstrap';
import style from './appStyle.module.css'
import { DISHES } from './queries';

import { Link } from 'react-router-dom'
import { Arrow } from 'react-popper';
const arrow={
    fontSize:'20px',
    opacity:'0.9',
    position:'relative',
    top:'35px'
    
}


class OrdersrelatedBody extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedDish: null,
           
        }
        


            
    }

   

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }
    
    


    renderDish(dish) {
        if (dish != null)
            return(
              <div className="container">
                  <div style={arrow}>
          <p>{dish.description}</p>
          <br/>
          <p>{dish.des1}</p>
          <br/>
        <p> {dish.des2}</p>
          <br/>
          <p>{dish.des3}</p>
          <br/>
          <p>{dish.des4}</p>
          <br/>
          <p>{dish.des5}</p>
          <br/>
          <p>{dish.des6}</p>
          </div>
          </div> 
                
            );
        else
            return(
                <div></div>
            );
    }
    render() {
        const menu = this.props.dishes.map((q)=>{
            return(
               
                <div className="col-12 mt-5">
                      <Media  style={arrow} key={q.id} onClick={()=>this.onDishSelect(q)}>
                      <div class={style.addbordertocards}> <a class={style.font_set}>
                <span class={style.accdetails}>{q.name} </span>
                <i class='fa fa-angle-right' style={arrow} ></i><br></br>
                
                </a></div>
                      </Media>
                      <br/><br/>
                </div>
                   
            );
        });
        return(
            <div className="ass">
            <div className="container">
                   <div className="box">
                       <div className="box-row">
                           <div className="col-sm-4" >
                               <Media list>
                              {menu}
                              </Media>
                          </div>
                          <br/>
                          <div  className="col-sm-4">
                            {this.renderDish(this.state.selectedDish)}
                        </div>
                         
                      </div>
                  </div>
              </div>
              </div>
        
        );
    }

}

export default OrdersrelatedBody;*/

import React, { useState } from "react";
import FAQ6 from "./FAQ6";

function PaymentRelatedBody() {
  const [faqs, setfaqs] = useState([
    {
      question: "I tried to make a transaction, but it failed. What do I do?",
      description:
        "If the amount has been deducted from your bank or card, don't worry; it will be refunded to the same account within 7-10 business days.",
      a:
        "Meanwhile, please wait a while and try again, preferably using a different payment method.",
      b: "These are the payment methods we accept:",
      c: "• Debit Card",
      d: "• Credit Card ",
      e: "• Net banking",
      f: "• Leading e-wallets",
      open: false,
    },
    {
      question:
        "My transaction failed but an amount was deducted from my Chillar wallet. What do I do?",
      description:
        "If your wallet amount has been deducted the same will be credited back in your Bewakoof wallet within a couple of hours",
      open: false,
    },
    {
      question:
        "I have Loyalty money in my Chillar Wallet. Can I transfer it to my bank account?",
      description:
        "No. The Loyalty Money is associated with your Bewakoof account only, and cannot be en-cashed or transferred to other accounts.",
      open: false,
    },
    {
      question: "Can I pay using an international card?",
      description:
        "We currently do not accept payment via international cards.",
      open: false,
    },
    {
      question: "I have self-shipped. How do I get the refund?",
      description:
        "If you have self-shipped the product already, please email us the screenshot of the courier receipt along with the order id number. ",
      a:
        "Our customer care executive will work on your query. We will get back to you in the next 24 hours.",
      open: false,
    },
    {
      question:
        "Will Chillar.com Employee ask for my Confidential Information?",
      description:
        "Chillar.com employees will never ask for your credentials like Bewakoof password, OTP, Credit/Debit card expiry and CVV or any other confidential information except for your name, address, e-mail id and mobile number.",
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
          <FAQ6 faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default PaymentRelatedBody;
