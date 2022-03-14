import React, { Component } from "react";
import data from "./data";
import style from "./custom.module.css";
import axios from 'axios';
import Draggable from "react-draggable";
import { Link } from "react-router-dom";
import DesignCards from "./DesignCards";


const close_o = {
  position: "absolute",
  margin: "5px",
  zIndex:"2",
  fontSize:"30px",right:"10px",top:"6px"
};
const close_f = {
  position: "absolute",
  color: "red",
  margin: "5px",
  fontSize:"30px",right:"10px",top:"6px"
};
const cardImgTop = {
  width: "100%",
  height: "15vw",
  objectFit: "cover",
};
const titleHeight = {
  height: "50px",
};

const widthSet = {
  width: "18rem",

};
// const marginSet = {
//   margin: "70px",
// };
const rectangleSet = {
  position: "absolute",
  display: "inline-block",
  top: "5px",
  left: "0px",
};
const triangleSet = {
  position: "absolute",
  display: "inline-block",
  top: "5px",
  left: "80px",
};

var currentPrice=0;
const OrderDetails = data.OrderDetails;
var productType = null;
class ViewCard extends Component {
  constructor() {
    super()
    this.state = {
      product:[],
      arrayF: null,
      arrayB: null, 
      // fontName: "Montserrat",
      color: "black",
      // alignment: "left",
      // bold: false,
      // underline: false,
      // italic: false,
      // word: "",
      // fontSize: 20,
      border: true,
      // option: 0,
      // background: "#ffffff",
      // tshirtFront: "/white_mockup.png",
      // tshirtBack: "/red_mockup.png",
      // selected: "",
      // deltaPosition: { x: 0, y: 0 },
      // acceptedFiles: [],
      arrayFimg: [],
      arrayBimg: [],
  };
}
calculateCurrentPrice(actualPrice,discount)
{
  currentPrice = actualPrice-((discount/100)*actualPrice)
  return currentPrice
}
  componentDidMount = () => {
    var pathArray = window.location.pathname.split('/');
    productType = pathArray[pathArray.length-1]
    axios.get(`/design/${productType}`).then(response =>{
        console.log(response.data)
        this.setState({
            product:response.data,
            productType:productType
        },()=>console.log(this.state.product))
    })
}
// arrayBufferToBase64(buffer) {
//   var binary = '';
//   var bytes = [].slice.call(new Uint8Array(buffer));
//   bytes.forEach((b) => binary += String.fromCharCode(b));
//   return window.btoa(binary);
// };

moveToWishlistHandle= (index,id) =>
{
  console.log(this.state.product[index].inWishlist)
  this.setState(({product}) => ({
    product: [
        ...product.slice(0,index),
        {
            ...product[index],
            inWishlist: !this.state.product[index].inWishlist,
        },
        ...product.slice(index+1)
    ]
  }),()=>
  {
    console.log(this.state.product[index].inWishlist)
    axios.post(`http://localhost:3001/design/${productType}/${id}`,{inWishlist:this.state.product[index].inWishlist})
    .then(response=>console.log(response.data))
    .catch(err => {
      console.log(err)
    })
  });
}

  render() {
    const {
      // arrayF,
      // arrayB,
      // border,
      // tshirtFront,
      // tshirtBack,
      // arrayFimg,
      // arrayBimg,
      productType
    } = this.state;
    return (
          <div class="row d-flex justify-content-center" >
            {this.state.product==null?<p></p>:
            this.state.product.map((order_info, index) => (
              
              <DesignCards arrayF={order_info.customized_object.arrayF}
                 arrayB={order_info.customized_object.arrayB}
                 arrayFimg = {order_info.customized_object.arrayFImg}
                 arrayBimg = {order_info.customized_object.arrayBImg}
                 actualPrice={order_info.actualPrice}
                 name={order_info.name}
                 discount={order_info.discount}
                 imageColor={order_info.customized_object.imageColor}
                 frontString={order_info.customized_object.frontString}
                 backString={order_info.customized_object.backString}
                 inWishlist={order_info.inWishlist}
                 productType={productType}
                 location={order_info.location}
                 index={index}
                 _id={order_info._id}>

              </DesignCards>
           ))}
          </div>
    );
  }
}

export default ViewCard;
