import React, { useState } from "react";
import data from "./data";
import Draggable from "react-draggable";
import Dropzone from "react-dropzone";
import axios from 'axios';
import { Link } from "react-router-dom";
import style from "./custom.module.css";

import { Component } from 'react'
const close_o = {
  position: "absolute",
  margin: "5px",
  zIndex: "2",
  fontSize: "30px", right: "10px", top: "6px"
};
const close_f = {
  position: "absolute",
  color: "red",
  margin: "5px",
  fontSize: "30px", right: "10px", top: "6px"
};
var img1 = "./hoodie.jpg";
var img2 = "./tshirt.jpg";
var img3 = "./shirt.jpg";
var img4 = "./hoodiee.jpg";
const OrderDetails = data.OrderDetails;
var currentPrice = 0;
var id=null;
var productType = null;
export class Product extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      arrayF: [],
      arrayB: [],
      actualPrice: 0,
      discount: 0,
      image: null,
      name: "",
      border: true,
      tshirtFront: "white_mockup.png",
      tshirtBack: "red_mockup.png",
      arrayFimg: [],
      arrayBimg: [],
      inWishlist: false,
      img:img1,
      size:"S",
      product:1,
    
     
      
    }
  }

calculateCurrentPrice(actualPrice,discount)
{
    currentPrice = actualPrice-((discount/100)*actualPrice)
    return currentPrice
}

componentDidMount = () => {
  var pathArray = window.location.pathname.split('/');
  id = pathArray[pathArray.length-1]
  productType = pathArray[pathArray.length-3]
  // axios.get(`/design/${productType}/productView/${id}`)
  //       .then(response=>
  //       {
  //         console.log(response.data)
  //         this.setState({product:response.data,inWishlist:response.data.inWishlist
           
  //         })
  //       })
  //       .catch(err => {
            
  //       console.log(err);
  //       })
  
        this.setState({
         
          // arrayB: arrayB_var,
          // arrayFimg: product.arrayFimg,
          // arrayBimg: product.arrayBimg,
        
          name:this.props.location.state.name,
          discount: this.props.location.state.discount,
          actualPrice: this.props.location.state.actualPrice,
          inWishlist: this.props.location.state.inWishlist,
          productType: this.props.location.state.productType,
          index: this.props.location.state.index,
          id: this.props.location.state.id,
          product:this.props.location.state.product
        },()=>console.log(this.props))
}
arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => binary += String.fromCharCode(b));
  return window.btoa(binary);
};
moveToCartHandle= () =>
{
  axios.post(`http://localhost:3001/design/${productType}/productView/${id}`,{size: this.state.size})
  .then(response=>console.log(response.data))
  .catch(err => {
      console.log(err);
  })
}

moveToWishlistHandle= (id) =>
{
  console.log(this.state.inWishlist)
  this.setState({inWishlist:!this.state.inWishlist},()=>{
    console.log(this.state.inWishlist)
        axios.post(`http://localhost:3001/design/${productType}/productView/${id}`,{inWishlist: this.state.inWishlist})
        .then(response=>console.log(response.data))
        .catch(err => {
            console.log(err);
        })
  })
}

  render() {
    const {
      arrayF,
      arrayB,
      border,
      image,
      name,
      index,
      inWishlist,
      discount,
      actualPrice,
      tshirtFront,
      tshirtBack,
      arrayFimg,
      arrayBimg,
      productType,
      _id
    } = this.state;
   
    return (
      <div className="app">
      {this.state.product==1?<div></div>:
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="p-0">
            <div
              className="row m-0 ml-sm-4 justify-content-between"
              style={{ width: "300px" }}
            >
              <div
                className="rounded "
                style={{ background:"rgb(216,216,216)",height: "65px",border:"1px solid grey", width: "65px", overflow: "hidden" }}
                onClick={() => this.setState({img:img1})}
              >
                <img className="h-100 float-right"        src="/white_mockup.png"
               alt="" />
              </div>
              <div
                className="rounded "
                style={{ background:"rgb(216,216,216)",height: "65px",border:"1px solid grey", width: "65px", overflow: "hidden" }}
                onClick={() => this.setState({img:img2})}
              >
                <img className="h-100 float-right"        src="/white_mockup.png" alt="" />
              </div>
              <div
                className="rounded "
                style={{ background:"rgb(216,216,216)",height: "65px",border:"1px solid grey", width: "65px", overflow: "hidden" }}
                onClick={() => this.setState({img:img3})}
              >
                <img className="h-100 float-right" 
                       src="/white_mockup.png" alt="" />
              </div>
              <div
                className="rounded "
                style={{ background:"rgb(216,216,216)",height: "65px",border:"1px solid grey", width: "65px", overflow: "hidden" }}
                onClick={() => this.setState({img:img4})}
              >
                <img className="h-100 float-right"        src="/white_mockup.png"
              alt="" />
              </div>
            </div>

            <div className="col-12 my-5 mx-4   border border-secondary" style={{background:"rgb(216,216,216)", height: "300px", borderRadius: "4px" }}>
        
       
       


       
            
       <img style={{width:"270px",position:"absolute",zIndex:"2"}}
       src="/white_mockup.png"/>
       {/* src={`data:${this.state.product.customized_object.image.type};base64,` + this.arrayBufferToBase64(this.state.product.customized_object.image.data.data)} /> */}
            
             

      
      </div>


          
          </div>
          <div className="col-12 col-sm-4 col-md-5 col-xl-8 m-2 mx-md-4">
            <h3 className="text-dark">
              <b>{this.state.product.name}</b>
            </h3>
            {this.state.product.discount != null?
            <h4>Rs. {this.calculateCurrentPrice(parseInt(this.state.product.actualPrice),parseInt(this.state.product.discount))}/- &nbsp;&nbsp;
              <span className="text-muted card-text">
            <del>Rs. {this.state.product.actualPrice}/-</del>
              </span>&nbsp;&nbsp; 
              <span className="text-success card-text">
                {this.state.product.discount}% OFF
              </span>
            </h4>:
            <h4>
              Rs. {this.state.actualPrice}
            </h4>}
            <p style={{ fontSize: "10px", marginTop: "100px" }}>SELECT SIZE</p>
            <div className="row m-0">
              <label
                className="border border-secondary rounded d-flex justify-content-center align-items-center size-btn"
                style={{ width: "40px", height: "40px" }}
              >
                <input
                  className=""
                  type="radio"
                  name="radioname"
                  onChange={() => this.setState({size:"S"})}
                />
                <div
                  className="m-0 h-100 w-100 text-center p-1"
                  style={{ fontSize: "15px" }}
                >
                  S
                </div>
              </label>
              <label
                className="border border-secondary rounded d-flex justify-content-center align-items-center size-btn ml-3"
                style={{ width: "40px", height: "40px" }}
              >
                <input
                  className=""
                  type="radio"
                  name="radioname"
                  onChange={() => this.setState({size:"M"})}
                />
                <div
                  className="m-0 h-100 w-100 text-center p-1"
                  style={{ fontSize: "15px" }}
                >
                  M
                </div>
              </label>
              <label
                className="border border-secondary rounded d-flex justify-content-center align-items-center size-btn ml-3"
                style={{ width: "40px", height: "40px" }}
              >
                <input
                  className=""
                  type="radio"
                  name="radioname"
                  onChange={() => this.setState({size:"L"})}
                />
                <div
                  className="m-0 h-100 w-100 text-center p-1"
                  style={{ fontSize: "15px" }}
                >
                  L
                </div>
              </label>
              <label
                className="border border-secondary rounded d-flex justify-content-center align-items-center size-btn ml-3"
                style={{ width: "40px", height: "40px" }}
              >
                <input
                  className=""
                  type="radio"
                  name="radioname"
                  onChange={() => this.setState({size:"XL"})}
                />
                <div
                  className="m-0 h-100 w-100 text-center p-1"
                  style={{ fontSize: "15px" }}
                >
                  XL
                </div>
              </label>
              <label
                className="border border-secondary rounded d-flex justify-content-center align-items-center size-btn ml-3"
                style={{ width: "40px", height: "40px" }}
              >
                <input
                  className=""
                  type="radio"
                  name="radioname"
                  onChange={() => this.setState({size:"XXL"})}
                />
                <div
                  className="m-0 h-100 w-100 text-center p-1"
                  style={{ fontSize: "15px" }}
                >
                  XXL
                </div>
              </label>
            </div>
            <p>{this.state.size}</p>
            <div className="row m-0">
            <div>
              <button style={{backgroundColor:"white",padding:"10px",border:"1px solid black",borderRadius:"3px"}} onClick={()=> this.moveToWishlistHandle(id)}>
              {(this.state.inWishlist==0)?<span style={{fontSize:"22px"}}className="fa fa-heart-o m-1"></span>:<span style={{fontSize:"22px",color:"red"}} className="fa fa-heart m-1"></span>}</button>
            </div>
              <a onClick={()=> this.moveToCartHandle(id)}
                className="border border-secondary rounded d-flex justify-content-center align-items-center cart-add ml-3"
                style={{ width: "209px", height: "40px" }}
              >
                <div className="m-0 text-center" style={{ fontSize: "12px",color: "white" }}>
                  ADD TO CART
                </div>
              </a>
              {/* <p>{localStorage.getItem('user_id')}</p> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-4 col-md-5 mt-3">
            <h5 className="text-muted">Product description</h5>
            <p className="text-muted" style={{ fontSize: "16px" }}>
              Men's Yellow Hoodie - Some Brand
            </p>
          </div>
          <div className="col-12 col-sm-4 col-md-5 mt-3">
            <h5 className="text-muted">Regular Fit</h5>
            <p className="text-muted" style={{ fontSize: "16px" }}>
              Fits just right - not too tight, not too loose
            </p>
          </div>
          <div className="col-12 col-sm-4 col-md-5 mt-3">
            <h5 className="text-muted">100% Cotton</h5>
            <p className="text-muted" style={{ fontSize: "16px" }}>
              Classic, lightweight jersey fabric comprising 100% cotton.
            </p>
          </div>
          <div className="col-12 col-sm-4 col-md-5 mt-3">
            <h5 className="text-muted">15 Day Returns</h5>
            <p className="text-muted" style={{ fontSize: "16px" }}>
              If you arent satisfied with this product, return it for a refund.
            </p>
          </div>
        </div>
        <h4 className="mt-5 text-secondary">
          Recommended
          <div
            className="bg-secondary"
            style={{ height: "3px", width: "100px" }}
          />
        </h4>
        <div className="row d-flex justify-content-center m-md-5">
          <div className="card h-100 my-3 mx-md-3" style={{ height: "200px", width: "200px", overflow: "hidden" }}>
            <img className="card-img" src={require(`./${OrderDetails[0].OrderImg}.jpg`)
          } alt="" />
            <div className="m-2" style={{ position: "absolute", bottom: "0" }}>
              <h5 className="text-white p-0 m-0">Something</h5>
              <div
                className="bg-secondary p-0 m-0"
                style={{ height: "3px" }}
              ></div>
            </div>
          </div>
          <div className="card h-100 my-3 mx-md-3" style={{ height: "200px", width: "200px", overflow: "hidden" }}>
            <img className="card-img" src={require(`./${OrderDetails[0].OrderImg}.jpg`)
          } alt="" />
            <div className="m-2" style={{ position: "absolute", bottom: "0" }}>
              <h5 className="text-white p-0 m-0">Something Else</h5>
              <div
                className="bg-secondary p-0 m-0"
                style={{ height: "3px", fontSize: "0" }}
              >
                d
              </div>
            </div>
          </div>
          <div className="card h-100 my-3 mx-md-3" style={{ height: "200px", width: "200px", overflow: "hidden" }}>
            <img className="card-img" src={require(`./${OrderDetails[0].OrderImg}.jpg`)
          } alt="" />
            <div className="m-2" style={{ position: "absolute", bottom: "0" }}>
              <h5 className="text-white p-0 m-0">Something 2</h5>
              <div
                className="bg-secondary p-0 m-0"
                style={{ height: "3px", fontSize: "0" }}
              >
                d
              </div>
            </div>
          </div>
        </div>
      </div>}
    </div>
    )
  }
}

export default Product


// function Product() {


//   return (
    
//   );
// }

// export default Product;
