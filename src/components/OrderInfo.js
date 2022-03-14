import React, { Component } from "react";
import style from "./appStyle.module.css";
import axios from 'axios'
import Draggable from "react-draggable";
import styles from "./custom.module.css";
import OrderInfoCard from "./OrderInfoCard";
// import data from './data';

// const addon={
//     fontSize:'30px',
//     display:'block',
//     marginLeft:'auto',
//     marginRight:'auto',
//     width:'39%',
//     float:'right',
// }

//  const OrderDetails=data.OrderDetails;

export default class OrdersBody extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    order:null,
    product:null,
    address:null,
    border: true,    
    }
  }

  componentDidMount=()=>{
    let patharray = window.location.href.split('/')
    let id=patharray[patharray.length-1]
    console.log(id)
    axios.get(`http://localhost:3001/accounts/orders/ordersinfo/${id}`)
    .then(res=>{
       console.log(res.data)
       this.setState({order:res.data})
    })
    .catch(error=>{
        console.log(error)
    })
}

  render() {

    return (
      <div class={`${style.accOptions} "container"`}>
        {this.state.order==null?<p></p>:
        <div class="row">
        <div class="col-md-8">
          <br></br>
          <span style={{color:"grey",fontSize:"14px"}}>ORDER ID: {this.state.order._id}
          &nbsp;</span> 
          <span style={{float:"right",color:"grey",fontSize:"14px"}}>
          Date:{this.state.order.placedDate}
          </span>
          <br></br>
          

        <div className="col-12 bg-white " style={{border:"1px solid #eeeeee"}}> 
        {this.state.order.products.map((order_info,index)=>(
          
     <OrderInfoCard 
    order_info={order_info}
    frontString={order_info.frontString}
    backString={order_info.backString}
      status={this.state.order.status}></OrderInfoCard>
    ))}
          
        
        </div> 
          

          
         
        </div>
        <div class="col-4 my-4">
          <div className="row">
          <div class={`${style.adddetailsorderinfo}`}>
            <div id={style.shippingDetails} className="m-2" >Shipping Details</div>
                <div className="m-2" style={{fontSize:"13px"}}>{this.state.order.address.receiversName} -&nbsp;
                {this.state.order.address.phoneNumber}</div>
            <span class={style.shippingDetailsinfo}>
            {this.state.order.address.address},{this.state.order.address.landMark},{this.state.order.address.locality}, 
            {this.state.order.address.city}, {this.state.order.address.pincode}, {this.state.order.address.state}, {this.state.order.address.country}
            </span>
          </div>
          
          <div className="row ml-4">
          <div className="bg-white col-12 py-2 ml-5 pr-5  mt-5 " style={{border:"1px solid #eeeeee"}}>
            <div class="row my-4">
              <div class="col-12">
                <span class={style.shippingDetails}>Payment summary</span>
                <br></br>
              </div>

              <div class="col-0"></div>
            </div>

            <div class="row">
              <div class="col-9">
                <span class={style.paymentsummaryinfoname}>Cart Total</span>
                <br></br>
              </div>
              <div class="col-3">
                <span class={style.paymentsummaryinfoname}>Rs.349</span>
              </div>
            </div>

            <div class="row">
              <div class="col-9">
                <span class={style.paymentsummaryinfoname}>
                  Shipping Cost
                </span>
                <br></br>
              </div>
              <div class="col-3">
                <span class={style.paymentsummaryinfoname} id={style.free}>
                  FREE
                </span>
              </div>
            </div>

            <div class="row">
              <div class="col-9">
                <span class={style.paymentsummaryinfoname}>COD</span>
                <br></br>
              </div>
              <div class="col-3">
                <span class={style.paymentsummaryinfoname} id={style.free}>
                  FREE
                </span>
              </div>
            </div>

            <div class="row">
              <div class="col-9">
                {" "}
                <span class={style.paymentsummaryinfoname}>Order Total</span>
                <br></br>
              </div>
              <div class="col-3">
                <span class={style.paymentsummaryinfoname}>Rs.349</span>
              </div>
            </div>

            <div class="row">
              <div class="col-9">
                {" "}
                <span class={style.paymentsummaryinfoname}>
                  Paid from Wallet
                </span>
                <br></br>
              </div>
              <div class="col-3">
                <span class={style.paymentsummaryinfoname}>Rs.175</span>
              </div>
            </div>
            <hr></hr>
            <div class="row">
              <div class="col-9">
                {" "}
                <span class={style.amountpaid}>Amount Paid</span>
                <br></br>
              </div>
              <div class="col-3">
                <span class={style.amountpaid}>Rs.174</span>
              </div>
            </div>

            <div class="row"></div>
          </div>
          </div>
        
          </div>
        </div>
      </div>}
        
        
        <div class="row">
          <div class="col-md-8">
            <div class={style.helpmarginset}>
              <div
                class={`bg-white ${style.addbordertoorder} `}
              >
                <br></br>
                <span class={`${style.helporder}`} >
                  Need Help With Your Order&nbsp;
                </span>
                <br></br>
                <div class={style.helporder}>
                  <button class="btn btn-dark"style={{borderRadius:"0px"}}>
                    
                    VISIT HELP AND SUPPORT
                  </button>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    );

        }
      }