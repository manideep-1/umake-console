import React, {Component} from 'react'
import data from "./data";
import {Link} from "react-router-dom";
import axios from 'axios'
import Draggable from "react-draggable";
import style from "./custom.module.css";


const labelspan = {
    fontSize: "15px",
    fontFamily: "Poppins",
    fontWeight: "500",
    position: "absolute",
    left: "50%",
    bottom: "70%",
    transform: "translate(-50%, 80%)"
}

const widthSet = {
    maxWidth: "540px"
};
const removeSet = {
    position: "absolute",
    left: "5.75%",
    bottom: "5%"
};
const cardImgTop = {
    minHeight: "200px",
    height: "100%",
    width: "12vw",
    objectFit: "cover"
}
const titleHeight = {
    height: "50px"
}
const moveToWishlistSet = {
    position: "absolute",
    right: "5.75%",
    bottom: "5%",
    backgroundColor: "rgba(20,20,20)",
    color: "white"
};
const marginSpan = {
    marginBottom: "50px"
};
const OrderDetails = data.OrderDetails;
let currentPrice = 0
export class CardInCart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            order_info: null,
            border: true,
            size:null,
            quantity:0,
            frontString:null,
            backString:null,
            location:null
        }
    }

    componentDidMount = () => {
        this.setState({order_info: this.props.order_info,
            size:this.props.order_info.size,
            quantity:this.props.order_info.quantity,
            // frontString:this.props.order_info.frontString,
            // backString:this.props.order_info.backString,
            location:this.props.order_info.location
          
        },()=>this.state.order_info)

    }

    setSelectedSize = (size, productId) => {
        const request = {
            size,
            productId
        };
        axios
            .post('http://localhost:3001/cart', request)
            .then((res) => {
                var order_info_new = this.state.order_info
                order_info_new.size = size
                this.setState({order_info: order_info_new})
                console.log('done')
            })
            .catch(err => {
                console.log(err);
            })
    }

    setSelectedQty = (qty, productId) => {
        const request = {
            qty,
            productId
        };
        axios
            .post('http://localhost:3001/cart', request)
            .then((res) => {
                var order_info_new = this.state.order_info
                order_info_new.quantity = qty
                this.setState({order_info: order_info_new})
                console.log('donee')
            })  
            .catch(err => {
                console.log(err);
            })
    }
    removeHandle = removeProductId => {
        this
            .props
            .cartLengthHandler()
        let user_id = localStorage.getItem('user_id')
        const request = {
            removeProductId,
            user_id
        };
        console.log("before post")
        this.setState({order_info: null})
        axios
            .post('http://localhost:3001/cart', request)
            .then((res) => {
                console.log(res)
                this.setState({order_info: null})
            })
            .catch(err => {
                console.log(err);
            })
    }

    moveToWishlistHandle = moveProductId => {
        this
            .props
            .cartLengthHandler()
        let user_id = localStorage.getItem('user_id')
        this.setState({order_info: null})
        const request = {
            moveProductId,
            user_id
        };
        axios
            .post('http://localhost:3001/cart', request)
            .then((res) => {
                console.log(res)
                this.setState({order_info: null})
            })
            .catch(err => {
                console.log(err);
            })
    }

    calculateCurrentPrice(actualPrice, discount) {
        currentPrice = actualPrice - ((discount / 100) * actualPrice)
        return currentPrice
    }

    render() {
       const border = this.state.border
        let order_info = this.state.order_info;
        return (
            <div>
                {order_info == null
                    ? <p></p>
                    : <div className="col-12 col-lg-6 border border-secondary rounded">
                        <div
                            className="row"
                            style={{
                            cursor: "default"
                        }}>

                            <div
                                id={style.cartbox}
                                className={`${style.nopadding}`} 

                                style={{height: "fit-content",position:"relative"}}>
                                
                                  {/* {this.state.frontString != null ?

                                    <img 
                                    style={{ width: "100%", height: "auto" }}
                                    src={this.state.border?this.state.frontString:this.state.backString}/>
                                    :
                                    <img></img>} */}
                                    <img 
                                    style={{ width: "100%", height: "100%" }}
                                    src={`/${this.state.order_info.location}`} />
                                {border == false
                                    ? <img
                                            onClick={() => this.setState({border: true})}
                                            id={style.arrow}
                                            alt=""
                                            src={require("./left-arrow.png")}
                                            style={{
                                            position: "absolute",
                                            zIndex: "2",
                                            opacity: "0.6",
                                            left: "0%",
                                            bottom: "45%",
                                            transform: "scaleY(1.5)"
                                        }}/>
                                    : <img
                                        onClick={() => this.setState({border: false})}
                                        id={style.arrow}
                                        alt=""
                                        src={require("./right-arrow.png")}
                                        style={{
                                        position: "absolute",
                                        zIndex: "2",
                                        opacity: "0.6",
                                        right: "0%",
                                        bottom: "45%",
                                        transform: "scaleY(1.5)"
                                    }}/>
}

                                {border
                                    ? <span
                                            className="far fa-circle"
                                            style={{
                                            position: "absolute",
                                            zIndex: "2",
                                            bottom: "3%",
                                            left: "49%",
                                            fontSize: "9px"
                                        }}></span>
                                    : <span
                                        className="fas fa-circle"
                                        style={{
                                        position: "absolute",
                                        zIndex: "2",
                                        bottom: "3%",
                                        left: "49%",
                                        fontSize: "9px"
                                    }}></span>}
                                {border
                                    ? <span
                                            className="fas fa-circle"
                                            style={{
                                            position: "absolute",
                                            zIndex: "2",
                                            bottom: "3%",
                                            left: "45%",
                                            fontSize: "9px"
                                        }}></span>
                                    : <span
                                        className="far fa-circle"
                                        style={{
                                        position: "absolute",
                                        zIndex: "2",
                                        bottom: "3%",
                                        left: "45%",
                                        fontSize: "9px"
                                    }}></span>}

                      
                            </div>
                            
                            
                            <div className="col-12 my-3">
                                <span
                                    style={{
                                    fontSize: "20px"
                                }}>
                                    {order_info.name}</span>

                                {order_info.discount != null
                                    ? (
                                        <div className="mt-2">
                                            <span
                                                style={{
                                                fontSize: "18px"
                                            }}
                                                className="fas fa-rupee-sign py-2 mb-0"></span>
                                            <span id={style.fontStyle}>{this.calculateCurrentPrice(parseInt(order_info.actualPrice), parseInt(order_info.discount))}</span>
                                            <span>&nbsp;&nbsp;</span>
                                            <span
                                                className="text-secondary"
                                                style={{
                                                textDecoration: "line-through",
                                                fontSize: "19px"
                                            }}>{order_info.actualPrice}</span>
                                        </div>
                                    )
                                    : (
                                        <div>
                                            <span
                                                style={{
                                                fontSize: "18px"
                                            }}
                                                className="fas fa-rupee-sign py-2 mb-1"></span>
                                            <span id={style.fontStyle}>{order_info.actualPrice}</span>
                                        </div>
                                    )
}

                                <br></br>
                                
                                <a
                                   
                                    onClick={() => this.setSelectedSize(this.state.size, order_info.productId)}
                                    id={style.size_btn}
                                    className="py-1 px-1 text-center
          "
                                    style={{
                                    fontSize: "13px",
                                    borderRadius: "3px",
                                    cursor: "pointer"
                                }}>
                                    <span>Size:
                                      <select
                                      className=""
                                      onChange={(e) =>
                                        this.setState({
                                          size: e.target.value,
                                        })
                                      }
                                       style={{border:"0px",outline:"0px",textAlign:"center"}}>
                                           {/* <option>{this.state.size}</option> */}
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                        <option>XXL</option>
                                      </select> 
                                    </span>
                                    {/* <span className="fas fa-chevron-down"></span> */}
                                </a>
                                <a
                                    
                                    // onClick={() => this.setSelectedQty(this.state.quantity, order_info.productId)}
                                    // id={style.size_btn}
                                    className="py-1 px-1 ml-5"
                                    style={{
                                    // fontSize: "13px",
                                    color: "black",
                                    // borderRadius: "3px",
                                    cursor: "pointer",
                                    
                                }}>
                                    <span  >Qty: </span>
                                     <span  style={{fontSize:"11px",border:"2px solid rgba(41,43,44,0.4)"}}
                                     
                                            onClick={(e) =>
                                              {
                                      this.state.quantity>=1 ?(
                                        this.setState({
                                          quantity: this.state.quantity-1,
                                        },()=>{
                                            this.setSelectedQty(this.state.quantity, order_info.productId)
                                          })

                                      ):this.setState({
                                        quantity:this.state.quantity
                                      },()=>{
                                        this.setSelectedQty(this.state.quantity, order_info.productId)
                                      })
                                     
                                      
                                    }
                                    }
                                      className="fas fa-minus p-1"></span>



                                     <span style={{fontSize:"10px",border:"2px solid rgba(41,43,44,0.4)" ,borderWidth:"2px 0px"}}
                                     className=" p-1"
                                      > {this.state.quantity} </span>


                                     <span  style={{fontSize:"11px",border:"2px solid rgba(41,43,44,0.4)"}}
                                     onClick={(e) =>
                                      {
                                      this.setState({
                                        quantity: this.state.quantity+1,
                                      },()=>{
                                        this.setSelectedQty(this.state.quantity, order_info.productId)
                                      })
                                     
                                    }
                                    }
                                      className="fas fa-plus p-1"></span>
                                    
                                </a>
                                <div
                                    className="mt-3"
                                    >
                                <button
                                    onClick={() => this.removeHandle(order_info.productId)}
                                    className="btn btn-outline-danger mr-1 mt-1"
                                    style={{
                                    borderRadius: "0px"
                                    }}
                                >Remove&nbsp;&nbsp;
                                    <span className="fas fa-trash-alt"></span>
                                </button>
                                <button
                                    onClick={() => this.moveToWishlistHandle(order_info.productId)}
                                    className="btn btn-dark mt-1"
                
                                    style={{
                                    borderRadius: "0px"
                                }}>Move to Wishlist
                                    <span>&nbsp;</span>
                                    <span className="far fa-heart"></span>
                                </button>
                                </div>
                            </div>

                        </div>
                    </div>
}

            </div>
        )
    }
}

export default CardInCart
