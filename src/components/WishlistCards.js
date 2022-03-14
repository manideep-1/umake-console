import React, {Component} from "react";
import axios from 'axios'
import data from "./data";
import PopUpSize from "./PopUpSize";
import style from "./custom.module.css";
import wishlist from "./custom.module.css";
import Draggable from "react-draggable";
import {Link} from "react-router-dom";
const close_o = {
    position: "absolute",
    fontSize: "30px", 
    right: "2px",
     top: "6px"
  };
  const close_f = {
    position: "absolute",
    fontSize: "30px", 
    right: "2px", 
    top: "6px",
    color: "red"
  };
const close = {
    position: "absolute",
    color: "black",
    top: "0",
    right: "0",
    margin: "5px"
}
const cardImgTop = {
    width: "100%",
    height: "15vw",
    objectFit: "cover"
}
const titleHeight = {
    height: "50px"
}
const widthSet = {
    width: "18rem",
    margin: "30px"
};

const contentSet = {
    position: "absolute",
    left: "50%",
    top: "40%",
    textAlign: "center",
    transform: "translate(-50%, -50%)"
};
const marginSet = {
    margin: "70px"
}
let currentPrice = 0
const OrderDetails = data.OrderDetails;

export class WishlistCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wishlist: 1,
            sizeIndex: null,
            _id: null,
            selectSize:false,
            order_info: this.props.order_info,
            frontString: null,
            backString: null
        };
    }

    componentDidMount = (props) => {
        console.log(this.props)
        this.setState({
            frontString: null,
            backString: null,
            name: this.state.order_info.name,
            discount: this.state.order_info.discount,
            actualPrice: this.state.order_info.actualPrice,
            _id: this.state.order_info._id,
            location:this.state.order_info.location
        })

    }

    calculateCurrentPrice(actualPrice, discount) {
        currentPrice = actualPrice - ((discount / 100) * actualPrice)
        return currentPrice
    }
    removeHandle = removeProductId => {
        console.log(removeProductId)
        this
            .props
            .wishlistLengthHandler()
        let user_id = localStorage.getItem('user_id')
        this.setState({order_info: null})
        const request = {
            removeProductId,
            user_id
        };
        axios
            .post('http://localhost:3001/wishlist', request)
            .then(() => console.log('done'))
            .catch(err => {
                console.log(err);
            })
    }
    moveToCartHandle = (size, moveProductId) => {
        console.log(moveProductId)
        this
            .props
            .wishlistLengthHandler()
        let user_id = localStorage.getItem('user_id')
        const request = {
            size,
            moveProductId,
            user_id
        };
        axios
            .post('http://localhost:3001/wishlist', request)
            .then((response) => {
                console.log(response)
                this.setState({order_info: null})
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const {
            name,
            discount,
            actualPrice,
            _id,
            selectSize
        } = this.state;
        return ( <> {
            this.state.order_info == null
                ? null
                :
                <div id={style.boxx}  className="col-12 col-md-6 col-lg-4 m-lg-3" style={{border:"1px solid #eeeeee"}}>
                <div  className="row " style={{height: "fit-content",display:"inline-block",position:"relative"}}>
                  <a onClick={() => this.removeHandle(_id)}>
                            <span
                                className="fas fa-times "
                                id={style.dustbin}
                                style={{
                                position: "absolute",
                                zIndex: "2",
                                fontSize: "30px",
                                right: "7px",
                                top: "7px"
                            }}></span>
                        </a>           

                {/* {this.state.frontString != null ?

                <img 
                style={{ width: "100%", height: "100%" }}
                src={this.state.frontString}
                />
                :
                <img></img>} */}
                <img 
             style={{ width: "100%", height: "100%" }}
            src={`/${this.state.location}`} />

                </div>
                <div className="row bg-light"  >

                  <div className="col-12 d-flex justify-content-center"> 
               
                  <div className="text-center" style={{ fontSize: "17px", opacity: "0.8", width: "100%", textAlign: "center" }}>{name}</div >
                </div>
                <div className="col-12 d-flex justify-content-center">

                 {discount != null ?
            <div className="p-1" style={{ fontSize: "17px" }}>
              <i class="fas fa-rupee-sign"></i>
              {this.calculateCurrentPrice(parseInt(actualPrice), parseInt(discount))}
              <span>&nbsp;</span><span className="text-secondary" style={{ textDecoration: "line-through", fontSize: "16px" }}>{actualPrice}</span>
            </div> :
            <div className="p-1" style={{ fontSize: "17px" }}>
              <i class="fas fa-rupee-sign"></i>
              {actualPrice}
            </div>}
                
                </div>

                <div className="row pb-1 px-1 ml-1">
                {selectSize==false ? (
                                     <button
                                     
                                     
                                     onClick={()=> this.setState({selectSize:true})}
                                     // onClick={() => this.moveToCartHandle("M", _id)}
                                     className="p-2 btn btn-dark"
                                  
                                     style={{border:"0px",outline:"0px",borderRadius:"0px",
                                     textAlign:"center",width:"140px"}}>
                                     Move to Bag
                                     <span class="fas fa-shopping-cart"></span>
                                 </button>
                                ):
                                (
                                   
                                   <div    >
                                       {/* a */}
                                    <select
                                    className="p-2"
                                      onChange={(e) =>
                                        {
                                       
                                        this.moveToCartHandle(e.target.value, _id)}
                                      }
                                       style={{border:"0px",outline:"0px", background: "rgba(20,20,20)",
                                       textAlign:"center",width:"140px"}}>
                                        <option style={{backgroundColor:"white"}}>Select Size</option>
                                        <option style={{backgroundColor:"white"}}>S</option>
                                        <option style={{backgroundColor:"white"}}>M</option> 
                                         <option style={{backgroundColor:"white"}}>L</option>
                                         <option style={{backgroundColor:"white"}}>XL</option>
                                         <option style={{backgroundColor:"white"}}>XXL</option>

                                      </select> 
                                      </div>
                                      
                                    
                                )
                                }
                <button className="btn px-4 ml-4 btn btn-dark"   onClick={this.goToCustomize}  style={{ borderRadius: "0px",position:"absolute",right:"5px" }}>Edit <span class="fas fa-edit" ></span></button>
                </div>
                </div>
            </div>
        
        } </>

    )
  }
}

export default WishlistCards