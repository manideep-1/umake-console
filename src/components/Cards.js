import React, { Component } from "react";
import axios from 'axios'
import data from "./data";
import PopUpSize from "./PopUpSize";
import style from "./custom.module.css";
import wishlist from "./custom.module.css";
import WishlistCards from "./WishlistCards";
import Draggable from "react-draggable";
import { Link } from "react-router-dom";

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
  objectFit: "cover",
}
const titleHeight = {
  height: "50px"
}
const widthSet = {
  width: "18rem",
  margin: "30px",
};

const contentSet = {
  position: "absolute",
  left: "50%",
  top: "40%",
  textAlign: "center",
  transform: "translate(-50%, -50%)",
};
const marginSet = {
  margin: "70px"
}
let currentPrice = 0
const OrderDetails = data.OrderDetails;

class Cards extends Component {

  constructor() {
    super()
    this.state = {
      wishlist: 1,
      sizeIndex: null,
      arrayF:[],
      arrayB:[],
      fontName: "Montserrat",
      color: "black",
      alignment: "left",
      bold: false,
      underline: false,
      italic: false,
      word: "",
      fontSize: 20,
      border: true,
      option: 0,
      background: "#ffffff",
      tshirtFront: "white_mockup.png",
      tshirtBack: "tshirtback4.png",
      selected: "",
      deltaPosition: { x: 0, y: 0 },
      acceptedFiles: [],
      arrayFimg: [],
      arrayBimg: [],
      wishlistLength:null,
    };
  }
  arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };
  componentDidMount = () => {
    let user_id = localStorage.getItem('user_id')
    axios.post("/wishlist", { user_id, mount: true }).then(response => {
      console.log(response.data)
      this.setState({
        wishlist: response.data,
        wishlistLength: response.data.length
      })
    })
  }
  calculateCurrentPrice(actualPrice, discount) {
    currentPrice = actualPrice - ((discount / 100) * actualPrice)
    return currentPrice
  }
  setWishlistLength = () => {
    this.setState({ wishlistLength: this.state.wishlistLength - 1 })
  }

  render() {

    return (
      <>
        {this.state.wishlist == 1 ? <p></p> :
          this.state.wishlistLength == 0 ?
          <div className="row">
          <div class="col-3"></div>
          <div className="text-center border border-secondary rounded col-5 p-3 mx-5 mb-5" style={{backgroundColor:"white"}}>
          <img src="/wishlist.png" className="" style={{width:"190px",display:"block",margin:"auto"}}></img>
          <h4 className="m-3"> Your Wishlist is Empty !</h4>
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
              <div class="col-12">
                <div className="row d-flex justify-content-center">
                  {this.state.wishlist.map((order_info, index) => (

                   
                    <WishlistCards  order_info={order_info}
                    wishlistLengthHandler={this.setWishlistLength}
                    ></WishlistCards>
                    
                
                  ))}
                </div>
              </div>
            </div>}
      </>
    );
  }
}

export default Cards;
