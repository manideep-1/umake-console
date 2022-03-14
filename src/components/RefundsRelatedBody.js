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


class RefundsRelatedBody extends Component {
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
        const menu = this.props.refqueries.map((q)=>{
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

export default RefundsRelatedBody;*/

import React, { useState } from "react";
import FAQ2 from "./FAQ2";

function RefundsRelatedBody() {
  const [faqs, setfaqs] = useState([
    {
      question: "I wish to exchnage my product",
      description:
        "We do not have an exchange policy. Please place a return request by clicking on the return button available next to the order id number in the My Order section",

      open: false,
    },
    {
      question: "I am unable to see a return button on the My Orders page.",
      description:
        "If your order has just delivered, please allow some time for the tracking to get updated. Once the tracking is updated, the return button will be visible next to the order id number.",
      a:
        "* We accept returns within 15 days of the order. Please ensure while returning the product the packaging is intact the way it was delivered.",
      b: "* We do not accept returns for boxer shorts due to hygiene concerns.",
      open: false,
    },
    {
      question: "Which products are not eligible for return?",
      description:
        "The following list of products are not eligible for returns as per the Returns Policy:",
      a:
        "Boxers, Nightwear Shorts, Premium Mask, Everyday Mask, Surgical Mask, Hand Sanitizer, Personal Protection Kit, Gloves, Thermometer, N 95 Mask, N 90 Mask, Face Shield, Shoe Cover, Notebooks.",

      open: false,
    },
    {
      question: "Can I return my boxer shorts?",
      description:
        "We do not accept returns for boxer shorts due to hygiene concerns.",
      open: false,
    },
    {
      question: "I placed a return request. When will my product be picked up?",
      description:
        "Generally, we take 3-4 working days to pick up your order. Please ensure while returning the product the packaging is intact the way it was delivered.If it has been longer, please reach out to us",
      open: false,
    },
    {
      question: "How do I self-ship my order?",
      description:
        "You can self-ship your product through any courier service, preferably Speed-Post, to the address below.",
      a: "Address for return : 1-4-149,RT Road, Suryapet,PinCode: 508213",
      open: false,
    },
    {
      question: "My product has not yet been picked up.",
      description:
        "Contact our customer service executive directly, and we will resolve this. Well get back to you within 24 hours.",
      a:
        "Please note while returning the product the packaging is intact the way it was delivered.",
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
          <FAQ2 faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default RefundsRelatedBody;
