import React from "react";
import style from "./appStyle.module.css";
import { Link } from "react-router-dom";

const arrow = {
  fontSize: "1.43vw",
  opacity: "0.9",
  position: "relative",
  top: "2px",
};

export default function AccountBox() {
  return (
    <div class={`"accBox w-100 p-3 " `}>
      <div class={`${style.accOptions}`}>
        <div className="row">
          {/* <div className="col"></div> */}
          <div className="col-lg-1"></div>
          <div className="col-12 col-md-4 col-lg-3 my-2">
            <Link
              to="/accounts/orders"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div class={style.addbordertocards}>
                {" "}
                <p class={style.font_set}>
                  <span class={style.accdetails}>My Orders &nbsp;</span>
                  <i class="fa fa-angle-right" style={arrow}></i>
                  <br></br>
                  <span class={style.accinfo}>
                    View, modify and track orders
                  </span>
                </p>
              </div>
            </Link>
          </div>
          {/* <div className="col-12 col-md-4 col-lg-3 my-2">
            <Link
              to="/accounts/mywallet"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div class={style.addbordertocards}>
                {" "}
                <p class={style.font_set}>
                  <span class={style.accdetails}>My Wallet &nbsp;</span>
                  <i class="fa fa-angle-right" style={arrow}></i>
                  <br></br>
                  <span class={style.accinfo}>Your Wallet History</span>
                </p>
              </div>
            </Link>
          </div> */}

          <div className="col-12 col-md-4 col-lg-3 my-2">
            <Link
              to="/accounts/addresses"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div class={style.addbordertocards}>
                {" "}
                <p class={style.font_set}>
                  <span class={style.accdetails}>My Addresses &nbsp;</span>
                  <i class="fa fa-angle-right" style={arrow}></i>
                  <br></br>
                  <span class={style.accinfo}>
                    Edit,Add or Remove Addresses
                  </span>
                </p>
              </div>
            </Link>{" "}
          </div>

          <div className="col-12 col-md-4 col-lg-3 my-2">
            <Link
              to="/accounts/myprofile"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div class={style.addbordertocards}>
                {" "}
                <p class={style.font_set}>
                  <span class={style.accdetails}>My Profile &nbsp;</span>
                  <i class="fa fa-angle-right" style={arrow}></i>
                  <br></br>
                  <span class={style.accinfo}>
                    Edit personal info, change password
                  </span>
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="">
          <div className="col-6 mx-auto">
            <div class={style.displaycenter}>
              <img
                alt=""
                class={style.cartoon}
                src={require("./shoppingcartoon.jpg")}
              />
              <br></br>
              <span class={style.spanbuy} style={{ maxWidth: "50%" }}>
                {" "}
                &nbsp; Buy Something More <br></br> &nbsp; Or Customize Yourself{" "}
              </span>
              <span>&nbsp;&nbsp;</span>
              <button
                type="button"
                id={style.buttonset}
                className="btn "
                style={{ backgroundColor: "rgba(20,20,20)", color: "white", fontWeight: "bold" }}
              >
                Continue Shopping
              </button>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}
