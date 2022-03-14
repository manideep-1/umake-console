import React, { Component } from 'react'
import style from "./custom.module.css";
import {Link} from 'react-router-dom'
import data from './data';
import axios from 'axios'
import Draggable from "react-draggable";
import OrdersCardsEach from './OrdersCardsEach';

export class OrderCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            order_total:[],
            products:[]

        }
    }
    componentDidMount=()=>{
        console.log(this.props)
    this.setState({
        order_total:this.props.order_total,
        products:this.props.products
    })
    }




   
    render() {
        const {
            order_total,
            products
          } = this.state;
         
        return (
            <div>
                <br></br>
                <span class={style.orderId}>Order ID:&nbsp;</span>
                <span class={style.orderIdval}>{order_total["_id"]}</span>
                <br></br>
                <div className="col-9 bg-white">
                {products.map((order_info,index)=>(
                      <OrdersCardsEach order_info={order_info} order_total={order_total}
                      frontString={order_info.frontString}
                      backString={order_info.backString}
                      ></OrdersCardsEach>

                ))}
                <div class="row">
                <div class="col-9"></div>
                <div class="col-3">
                 <Link  class="" to={{pathname:`/accounts/orders/ordersinfo/${order_total._id}`,
                  }} style={{textDecoration:'none',color:'inherit'}}>
                             <button class="btn m-3 px-3 ml-3 py-2 btn-dark" style={{borderRadius:"0px"}}  >ORDER INFO</button>
                         </Link>
                </div>
                </div>
                </div>  
               
            </div>
        )
    }
}

export default OrderCards
