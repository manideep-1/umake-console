
import React, { Component } from 'react'
import style from "./custom.module.css";
import {Link} from 'react-router-dom'
import data from './data';
import axios from 'axios'
import Draggable from "react-draggable";
import OrderCards from './OrderCards';

const OrderDetails=data.Orders;

 export default class OrdersBody extends Component {
    constructor(props) {
                super(props)
            
                this.state = {
                    orders:null,
                    frontString:null,
                    backString:null
                    
                }
            }
            componentDidMount=()=>{
                let user_id = localStorage.getItem('user_id')
                axios.post('http://localhost:3001/accounts/orders',{user_id})
                .then(res=>{
                    console.log(res.data)
                   this.setState({
                       orders:res.data,
                   },()=>{console.log(this.state.orders)})
                })
                .catch(error=>{
                    console.log(error)
                })
            }
    
     
    
        render() {
         
         return (
            <div class= {`${style.accOptions} "container`}>
                {this.state.orders == null?<p>Empty</p>:
                <div class="row ">    
                {this.state.orders.map((order_total,index)=> (<div class="col-12 ">
                <OrderCards order_total={order_total} products={order_total.products}></OrderCards>
            </div>)

                 ) }
                
                </div>}
               
            </div>
          
         )
     }
    }

