
import React, { Component } from "react";
import style from "./appStyle.module.css";
import { Link } from "react-router-dom";
import data from "./data";
import axios from "axios"
import EditAddress from "./EditAddress";

const addon = {
  fontSize: "30px",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "39%",
  float: "right",
};
export default class MyAddressBody extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      DeliveryInfo:[],
      showModal:false
    }
  }
  
  componentDidMount=()=>{
    let user_id = localStorage.getItem('user_id')
    axios.post('http://localhost:3001/accounts/addresses',{userId:user_id})
    .then(response => {
      this.setState({
      DeliveryInfo:response.data
      })
    }) 
    .catch(error => {
      alert(error)
    })
  }
  componentDidUpdate=()=>{
    let user_id = localStorage.getItem('user_id')
    axios.post('http://localhost:3001/accounts/addresses',{userId:user_id})
    .then(response => {
      this.setState({
      DeliveryInfo:response.data
      })
    }) 
    .catch(error => {
      alert(error)
    })
  }
  removeAddress = (addressId) => {
    axios.post('http://localhost:3001/accounts/addresses',{removeId:addressId})
    .then(response => {
      console.log(response.data)
    },()=>{
      this.componentDidUpdate()
  }) 
    .catch(error => {
      console.log(error)
    })
  };
  editclick=(comp_info,index)=>{
    return (
      <EditAddress k={comp_info}/>
      )
  }
  handleClick=(event)=> { 
    this.setState({
      showModal: !this.state.showModal
    });
  }
  getComponent=(comp_info,index)=> {
    if (this.state.showModal) {
      return <EditAddress k={comp_info}/>;
    } else {
      return null;
    }
  }
  render() {
    
    let {DeliveryInfo}=this.state
    return (
      <div class={`${style.accOptions} ${style.scaled}`}>
        <div className="row">
          {DeliveryInfo.map((comp_info, index) => (
            <div className="col-12 col-md-6 col-lg-4 my-2">
              <div class={style.addbordertoadd}>
                {" "}
                <p class={style.font_set}>
                  <span class={style.accdetails}>
                    {comp_info.receiversName}&nbsp;
                  </span>
                  <br></br>
                  <span class={style.addinfo}>
                    {comp_info.address},&nbsp;{comp_info.landMark}
                  </span>
                  <span class={style.cityinfo}>
                    {comp_info.city},{comp_info.pincode}
                  </span>
                  <span class={style.cityinfo}>
                    Contact Number:{comp_info.phoneNumber}
                  </span>
                </p>
                <Link
                  to={{pathname:`/accounts/addresses/editaddress/${comp_info._id}`,
                  }}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <button
                    className="btn "
                    style={{color:"rgba(20,20,20)",border:"1px solid rgba(20,20,20)"}}
                    id={style.buttonedit}
                  >
                    Edit
                  </button>
                </Link>
                <button
                  className="btn"
                  style={{color:"rgba(20,20,20)",border:"1px solid rgba(20,20,20)"}}
                  id={style.buttonremove}
                  onClick={()=>this.removeAddress(comp_info._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="col-12 col-md-6 col-lg-4 my-2 mb-4 ">
            <Link
              to="/accounts/addresses/addaddress"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div class={style.addbordertonew}>
                {" "}
                <p class={style.font_set}>
                  <span class={style.accdetails}>
                    Add Address
                  </span>
                  <i class="fa fa-plus" style={addon}></i>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
