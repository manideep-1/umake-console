import React, { Component } from "react";
import style from "./custom.module.css";
import { InputGroup, FormControl, Card } from "react-bootstrap";
import Draggable from "react-draggable";
import { Redirect } from 'react-router';
import Dropzone from "react-dropzone";
import axios from 'axios';
import { Link } from "react-router-dom";
const close_o = {
  position: "absolute",
  fontSize: "30px", 
  right: "7px",
   top: "7px"
};
const close_f = {
  position: "absolute",
  fontSize: "30px", 
  right: "7px", 
  top: "7px",
  color: "red"
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
var currentPrice = 0;
var productType = null;
export class AdminDesignEach extends Component {

  constructor(props) {
    super(props)

    this.state = {
      arrayF: [],
      arrayB: [],
      actualPrice: 0,
      discount: 0,
      image: null,
      location:"sdf",
      name: "",
      border: true,
      tshirtFront: "white_mockup.png",
      tshirtBack: "red_mockup.png",
      arrayFimg: [],
      arrayBimg: [],
      inWishlist: false,
      redirect:false,
      redirectToView:false,
      frontString:null,
      backString:null
    };
  }

  calculateCurrentPrice(actualPrice, discount) {
    currentPrice = actualPrice - ((discount / 100) * actualPrice)
    return currentPrice
  }
  moveToWishlistHandle = (index, id) => {
    console.log(this.state.inWishlist)
    this.setState(({ inWishlist: !this.state.inWishlist }), () => {
      console.log(this.state.inWishlist)
      axios.post(`http://localhost:3001/design/${this.props.productType}/${id}`, { inWishlist: this.state.inWishlist })
        .then(response => console.log(response.data))
        .catch(err => {
          console.log(err)
        })
    });
  }

  goToCustomize=()=>{
    this.setState({redirect:true})
  }
  viewProduct=()=>{
    this.setState({
      redirectToView:true
    })
  }


  componentDidMount = (props) => {
    if(this.props != undefined)
    {
    this.setState({
      arrayF: this.props.arrayF,
      arrayB: this.props.arrayB,
      arrayFimg: this.props.arrayFimg,
      arrayBimg: this.props.arrayBimg,
      image: this.props.imageColor,
      name: this.props.name,
      discount: this.props.discount,
      actualPrice: this.props.actualPrice,
      inWishlist: this.props.inWishlist,
      productType: this.props.productType,
      index: this.props.index,
      _id: this.props._id,
      frontString:this.props.frontString,
      backString:this.props.backString,
      location:this.props.location
    })
  }
  };
  removeHandle = () => {
    var user_id = localStorage.getItem('user_id')
    axios.post('http://localhost:3001/savedtshirts', { draftId: this.props.draftId, user_id })
      .then((response) => {
        console.log(response.data)
      })
      .catch(err => {
        console.log("hello.....");
        console.log(err);
      })
  }
  render() {

    const {
      name,
      index,
      inWishlist,
      discount,
      actualPrice,
      _id
    } = this.state;

    return (
<>
<div id={style.boxx}  className="col-10 col-md-4 my-3 my-lg-5 mx-0 mx-lg-4 " style={{border:"1px solid #eeeeee"}}>
         <div  className="row" style={{height: "fit-content",display:"inline-block",position:"relative"}}>
         {/* <div className="row bg-light " style={{ borderTop: "1px solid gray", borderRadius: "0px", width: "100%", position: "absolute", bottom: "0px", height: "23%" }}></div> */}
         {/* <a onClick={this.removeHandle}  >
         <i className="fas fa-trash-alt " id={style.dustbin} style={{ position: "absolute", zIndex: "2", fontSize: "25px", right: "-4px", top: "6px" }}></i>
         </a> */}
           <a
   onClick={() => this.moveToWishlistHandle(index, _id)}
 >
   {(inWishlist == false) ? <span id={style.dustbin} style={close_o} className="fa fa-heart-o "></span> : <span style={close_f}
     className="fa fa-heart "></span>}</a>
         {/* {this.state.frontString != null ? */}
         {/* <p>{this.props.name},{this.props.location}</p> */}
         <img 
         style={{ width: "100%", height: "100%" }}
         src={`/${this.state.location}`} />
         
          {/* src={this.state.border?this.state.frontString:this.state.backString}/> */}
         {/* : */}
         {/* <img></img>} */}
        
         
         </div>
         <div className="row bg-light"  >

           <div className="col-12 d-flex justify-content-center"> 
         {/* {border ?
         
          <span style={{fontSize: "20px", opacity: "0.8",textDecoration: "underline", textDecorationColor: "#9bceec" }}>FRONT</span > : 
          <span style={{ fontSize: "20px", opacity: "0.8",textDecoration: "underline", textDecorationColor: "#9bceec" }}>
             BACK</span>
        } */}
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

         <div className="row pb-1 px-1">
        
         <button className="btn ml-3 btn btn-dark" onClick={this.viewProduct} style={{ float:"left",borderRadius:"0px"}}>View/Buy <span class="fas fa-eye" ></span></button>
       
         <button className="btn px-4 ml-4 btn btn-dark"   onClick={this.goToCustomize}  style={{ borderRadius: "0px",position:"absolute",right:"5px" }}>Edit <span class="fas fa-edit" ></span></button>
         </div>
         </div>
     </div>
    
{this.state.redirect==true?
         <Redirect
         to={{
         pathname: "/customize",
         state: { 
           arrayF: this.state.arrayF,
           arrayB: this.state.arrayB,
           inWishlist:this.state.inWishlist,
           arrayFimg: this.state.arrayFimg,
           arrayBimg: this.state.arrayBimg,
           image: this.state.image,
         draftId:null}
       }}
     />:null}
   
   {this.state.redirectToView==true?
         <Redirect
         to={{
         pathname:"/design/men1/productView",
         state: { 
           arrayF: this.state.arrayF,
           product:this.props,
           name:this.state.name,
           actualPrice:this.state.actualPrice,
           inWishlist:this.state.inWishlist,
           discount:this.state.discount,
           productType:this.state.productType,
           arrayB: this.state.arrayB,
           arrayFimg: this.state.arrayFimg,
           arrayBimg: this.state.arrayBimg,
           image: this.state.image,
           id:this.state._id,
         draftId:null}
       }}
     />:null}
</>

 


    );
  }
}

export default AdminDesignEach;
