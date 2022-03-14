import React, { Component } from "react";
import style from "./appStyle.module.css";
import { Link } from "react-router-dom";
import axios from 'axios'
import SelectDeliveryAddressHead from './SelectDeliveryAddressHead'
import { Redirect } from 'react-router';

export class SelectDeliveryAddress extends Component {
    constructor(props) {
        super(props)

        this.state = {
            totalPrice: 50,
            DeliveryInfo: null,
            selected:0
        }
    }
    componentWillMount = () => {
        this.setState({ totalPrice: this.props.location.state.totalPrice })
        var user_id = localStorage.getItem('user_id')
        axios.post('http://localhost:3001/accounts/addresses', { userId: user_id })
            .then(response => {
                this.setState({
                    DeliveryInfo: response.data
                })
                // console.log(this.state.DeliveryInfo)
            })
            .catch(error => {
                alert(error)
            })
    }

    render() {
        let { DeliveryInfo, totalPrice,selected } = this.state
        console.log(this.state.DeliveryInfo)
        return (
            <div style={{ backgroundColor: "#f8f8f8"}}>
                <div className="container">
                    <SelectDeliveryAddressHead></SelectDeliveryAddressHead>
                    <div className="row ">
                        <div className="col-8">
                        <div className="col-12 col-lg-12  my-2 bg-white py-1 shadow" style={{height:"15%", border: "2px solid #eeeeee" }}>
                            <div className="row px-3 my-2" style={{ float: "left" }} >
                                <span className="py-2" style={{ fontSize: "19px" }}>Select Delivery Address</span>
                            </div>
                            <div className="row px-3 my-1" style={{ float: "right" }} >
                                <button className=" btn  my-2" style={{ borderRadius: "0px", color: "rgba(20,20,20)", border: "none" }}><span className="fa fa-plus">
                                </span> ADD ADDRESS</button>
                            </div>

                        </div>
                       



                        {DeliveryInfo == null ? <div></div> :
                            DeliveryInfo.map((comp_info, index) => (
                              
                                <div className="col-12 col-lg-12 my-2 bg-white shadow pt-3 "  style={(selected!=index)?{ height:"35%",border: "2px solid #eeeeee" }:{height:"35%",border:"2px solid rgba(20,20,20)"}}
                                onClick={() => this.setState({ selected: index })}>
                                    <div >
                                        {selected!=index ?
                                    <span className="far fa-check-circle " style={{float:"right",fontSize:"50px",color:"#eeeeee"}}></span>
                                    :
                                    <span className="far fa-check-circle " style={{float:"right",fontSize:"50px",color:"rgba(20,20,20)"}}></span>

                                        }
                                       
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
                                            to={{
                                                pathname: `/accounts/addresses/editaddress/${comp_info._id}`,
                                            }}
                                            style={{ textDecoration: "none", color: "inherit" }}
                                        >
                                            <button
                                                className="btn "
                                                style={{ color: "rgba(20,20,20)", border: "1px solid rgba(20,20,20)" }}
                                                id={style.buttonedit}
                                            >
                                                Edit
                                  </button>
                                        </Link>
                                        <button
                                            className="btn"
                                            style={{ color: "rgba(20,20,20)", border: "1px solid rgba(20,20,20)" }}
                                            id={style.buttonremove}
                                            onClick={() => this.removeAddress(comp_info._id)}
                                        >
                                            Remove
                                </button>
                                    </div>
                                </div>
                            ))}
                         </div>
                         <div className="col-4">
                        <div className="col-12 col-lg-12 px-1 pt-0">


                            {/*PRICE DETAILS*/}
                            {/* <PriceDetails totalPrice={totalPrice}></PriceDetails> */}


                            <div className="container-fluid px-2 py-0 bg-white" style={{ border: "2px solid #eeeeee"}}>
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
                                            <h6 className="card-text"><span style={{ fontSize: "14px" }} className="fas fa-rupee-sign py-2 mb-0"></span>{totalPrice}</h6>
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
                                            <h6 className="card-text" ><span style={{ fontSize: "14px" }} className="fas fa-rupee-sign py-2 mb-0"></span>{totalPrice}</h6>
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
                                            <h5 className="card-text"><span style={{ fontSize: "18px" }} className="fas fa-rupee-sign py-2 mb-0"></span>{totalPrice}</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div
                                            className="col-12"
                                            style={{ textAlign: "center", marginTop: "20px" }}
                                        >
                                           <button className="btn btn-dark p-3" 
                                           style={{borderRadius:"0px",width:"100%",backgroundColor:"rgba(20,20,20)",border:"none"}}>CONTINUE</button>
                                        </div>
                                    </div>

                                    <div className="row"></div>
                                </div>
                            </div>
                            {this.state.redirect == true ?
                                <Redirect
                                    to={{
                                        pathname: "/cart/selectAddress",
                                        state: { totalPrice: totalPrice }
                                    }}
                                /> : null}


                        </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default SelectDeliveryAddress
