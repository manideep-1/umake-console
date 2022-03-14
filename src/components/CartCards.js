import React, { Component } from "react";
import PopUpSize from "./PopUpSize";
import PopUpQty from "./PopUpQty";
import axios from 'axios'
import PriceDetails from "./PriceDetails";
import style from './appStyles.module.css';
import CardInCart from "./CardInCart";
import { Redirect } from 'react-router';
import wishlist from "./custom.module.css";


const contentSet = {
  position: 'absolute', left: '50%', top: '40%',
  transform: 'translate(-50%, -50%)',
  textAlign: "center",
}


let totalPrice = 0;
let currentPrice = 0
class CartCards extends Component {

  constructor() {
    super()
    this.state = {
      cart: 1,
      sizeId: null,
      qtyId: null,
      size: null,
      qty: null,
      cartLength: null,
      redirect:false
      
    }
  }

  componentWillMount = () => {
    let user_id = localStorage.getItem('user_id')
    axios.post("/cart", { user_id, mount: true }).then(response => {
      console.log(response.data)
      this.setState({
        cart: response.data,
        cartLength: response.data.length
      })

    })
  }

  calculateTotalPrice() {
    totalPrice = 0
    if (this.state.cart != 1) {
      this.state.cart.map((order_info, index) => (// change

        order_info.discount != null ?
          totalPrice = totalPrice + (this.calculateCurrentPrice(parseInt(order_info.actualPrice)
            , parseInt(order_info.discount)) * parseInt(order_info.quantity)) :
          totalPrice = totalPrice + parseInt(order_info.actualPrice) * parseInt(order_info.quantity)
      ))
    }
  }
  calculateCurrentPrice(actualPrice, discount) {
    currentPrice = actualPrice - ((discount / 100) * actualPrice)
    return currentPrice
  }

  setCartLength = () => {
    this.setState({ cartLength: this.state.cartLength - 1 })
  }
  selectAddress=()=>{
    this.setState({redirect:true})
  }

  render() {
    this.calculateTotalPrice();
    return (<>

      {this.state.cart == 1 ?
        <p></p> :
        this.state.cartLength == 0 ?
        <div className="row">
        <div class="col-3"></div>
        <div className="text-center border border-secondary rounded col-5 p-3 mx-5 mb-5" style={{backgroundColor:"white"}}>
        <img src="/cart.png" className="" style={{width:"190px",display:"block",margin:"auto"}}></img>
        <h4 className="m-3"> Your Cart is Empty !</h4>
        <button className="btn" id={wishlist.edit_saved} style={{borderRadius:"0px"}}>GO TO HOME PAGE</button>
        <div className="mt-3 text-secondary" style={{textDecoration:"underline"}}>Look out available Designs:</div>
       
        <table className="mx-auto text-secondary">
            <tr>
                <td className="px-5 py-1 pt-2" style={{textDecoration:"underline"}} >Men</td>
                <td className="px-5 py-1 pt-2" style={{textDecoration:"underline"}}>Women</td>
            </tr>
            <tr>
                <td className="text-center py-1" style={{fontSize:"13px"}}>Half Sleeves</td>
                <td className="text-center py-1" style={{fontSize:"13px"}}>Half Sleeves</td>
            </tr>
            <tr>
                <td className="text-center py-1 " style={{fontSize:"13px"}}>Full Sleeves</td>
                <td className="text-center py-1" style={{fontSize:"13px"}}>Full Sleeves</td>
            </tr>
            <tr>
                <td className="text-center py-1" style={{fontSize:"13px"}}>Hoodies</td>
                <td className="text-center py-1" style={{fontSize:"13px"}}>Hoodies</td>
            </tr>
        </table>
        <div>OR</div>
        <div className="mt-1 text-secondary" style={{textDecoration:"underline"}}>Customize Yourself</div>
        </div>
        
     </div>
  :
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 col-lg-8">
                {this.state.cart.map((order_info, index) => (
                  <CardInCart order_info={order_info} index={index}
                    cartLengthHandler={this.setCartLength}></CardInCart>
                ))}
              </div>
              
              <div className="col-12 col-lg-4 mb-5">

                <div className="border border-secondary p-2">
                  <div>
                    <div className="row">
                      <div className="col-7">
                      <h5 class="card-title">Payment summary</h5>
                        <br></br>
                      </div>

                      <div className="col-5"></div>
                    </div>

                    <div className="row">
                      <div className="col-8">
                      <h6 className="card-text">Cart Total</h6> 
                        <br></br>
                      </div>
                      <div className="col-4">
                      <h6 className="card-text"><span style={{ fontSize: "14px" }} className="fas fa-rupee-sign py-2 mb-0"></span>{totalPrice.toFixed(2)}</h6>
                                      </div>
                    </div>

                    <div className="row">
                      <div className="col-8">
                      <h6 className="card-text ">Coupon Discount</h6>
                        <br></br>
                      </div>
                      <div className="col-4">
                      <h6 className="card-text .text-primary"><a href="/">Apply Coupon</a></h6>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-8">
                      <h6 className="card-text ">Order Total</h6>
                      </div>
                      <div className="col-4">
                      <h6 className="card-text" ><span style={{ fontSize: "14px" }} className="fas fa-rupee-sign py-2 mb-0"></span>{totalPrice.toFixed(2)}</h6>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-8">
                  
                        <h6 className="card-text">Delivery charges</h6>
                        <br></br>
                      </div>
                      <div className="col-4">
                      <h6 className="text-muted card-text"><del><span style={{ fontSize: "14px" }} className="fas fa-rupee-sign py-2 mb-0"></span>99</del></h6>
                      <h6 className="card-text text-success">FREE</h6>
                      </div>
                    </div>

                    <hr></hr>
                    <div className="row">
                      <div className="col-8">
                      <h5 className="card-text">Total</h5>
                        <br></br>
                      </div>
                      <div className="col-4">
                      <h5 className="card-text"><span style={{ fontSize: "18px" }} className="fas fa-rupee-sign py-2 mb-0"></span>{totalPrice.toFixed(2)}</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="col"
                        style={{ textAlign: "center", marginTop: "20px" }}
                      >
                        <button type="button" className="btn btn-dark" onClick={this.selectAddress}  style={{borderRadius:"0px"}}>
                          SELECT DELIVERY ADDRESS
                        </button>
                      </div>
                    </div>

                    <div className="row"></div>
                  </div>
                </div>
                {this.state.redirect==true?
                <Redirect
                to={{
                pathname: "/cart/selectAddress",
                state: { totalPrice: totalPrice.toFixed(2)}
              }}
            />:null}


              </div>
            
            </div>
          </div>}
    </>
    );
  }
}
export default CartCards;