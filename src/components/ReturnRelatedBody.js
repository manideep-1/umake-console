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
import FAQ7 from "./FAQ7";

function ReturnRelatedBody() {
  const [faqs, setfaqs] = useState([
    {
      question:
        "My product has been picked up, but I have not been refunded yet.",
      description:
        "Once the order has been picked up, the refund will be processed to your selected mode within 12-15 working days from the date your order is picked, subject to your returns passing the quality check.",
      a: "Refund will reflect as per below-mentioned timelines:",
      b: "1. Wallet refund will get credited within few minutes.",
      c: "2. NEFT refund process will take 5 to 7 working days.",
      d:
        "3. Payment Gateway refund process takes 5 to 7 working days excluding Saturdays/Sundays and Bank Holidays.",
      e:
        "If it has been longer, please reach out to us below, and we will investigate.",
      open: false,
    },
    {
      question:
        "I self-shipped my order. How do I get the refund for my courier charge?",
      description:
        "If you have self-shipped the product already please email us the screenshot of the courier receipt along with the order id number. Our customer care executive will work on your query",
      a: "We will get back to you in the next 24 hours.",
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
          <FAQ7 faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default ReturnRelatedBody;
