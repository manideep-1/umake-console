import React, { Component } from "react";
import style from "./appStyles.module.css";

const marginSet = {
  marginTop: "300px",
 
};

class PriceDetails extends Component {
  render() {
    return (
      <>
        <div className="container-fluid mx-5 border border-secondary px-2 py-3"  style={{position:"absolute",bottom:"20px"}}>
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
              <h6 className="card-text">${this.props.totalPrice}</h6>
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
              <h6 className="card-text" ><span style={{ fontSize: "18px" }} className="fas fa-rupee-sign py-2 mb-0"></span>{this.props.totalPrice}</h6>
              </div>
            </div>

            <div className="row">
              <div className="col-8">
          
                <h6 className="card-text">Delivery charges</h6>
                <br></br>
              </div>
              <div className="col-4">
              <h6 className="text-muted card-text"><del>
              <span style={{ fontSize: "18px" }} className="fas fa-rupee-sign py-2 mb-0"></span>
                99</del></h6>
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
              <h5 className="card-text">${this.props.totalPrice}</h5>
              </div>
            </div>
            <div className="row">
              <div
                className="col"
                style={{ textAlign: "center", marginTop: "20px" }}
              >
                <button type="button" className="btn " id={style.delivery} style={{borderRadius:"0px"}}>
                  SELECT DELIVERY ADDRESS
                </button>
              </div>
            </div>

            <div className="row"></div>
          </div>
        </div>
      </>
    );
  }
}

export default PriceDetails;
