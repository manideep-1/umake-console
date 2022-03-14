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

 
class WalletRelatedBody extends Component {
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
        const menu = this.props.walletqueries.map((q)=>{
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

export default WalletRelatedBody;*/

import React, { useState } from "react";
import FAQ3 from "./FAQ3";

function AccountRelatedBody() {
  const [faqs, setfaqs] = useState([
    {
      question: "I am unable to use my promotional coupon/code.",
      description:
        "Since some of our products are already discounted, promotional coupons and codes will not be applicable on already discounted products. You can use them to purchase any non discounted product.",

      open: false,
    },
    {
      question: "I am unable to use my wallet amount.",
      description:
        "Since some of our products are already discounted, loyalty cashback will not be applicable on already discounted products. You can use your wallet balance to purchase any non discounted product. The loyalty cashback amount will auto apply at the checkout page.",

      open: false,
    },
    {
      question: "I have not received my cashback yet.",
      description:
        "Hey, we are in process to bring something more delightful in place of cashbacks which will be applicable on all products. Therefore we have stopped 10% cashback as Chillar coins for sometime.",

      open: false,
    },
    {
      question:
        "Your Chillar Wallet enables you to get a quicker checkout on our site and app. Your Chillar Wallet is made up of Chillar Coins.",
      description:
        "To use your Chillar wallet, please select Pay by Chillar Wallet as the mode of payment at the cart page while placing your Order.",
      a: "The corresponding amount will be deducted from your Wallet balance.",
      b:
        "In case the total amount exceeds Chillar Wallet balance, you can pay the remaining amount using any other payment option.",
      c: "* You cannot use your bewakoof coins on already discounted products.",
      open: false,
    },

    {
      question:
        "My transaction failed but an amount was deducted from my Bewakoof wallet. What do I do?",
      description:
        "If your wallet amount has been deducted the same will be credited back in your Bewakoof wallet within a couple of hours",
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
          <FAQ3 faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default AccountRelatedBody;
