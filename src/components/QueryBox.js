import React from "react";
import style from "./appStyleTwo.module.css";
import { Link } from "react-router-dom";

function QueryBox() {
  return (
    <div class={`"accBox w-100 p-3 " ${style.leftgap}`}>
      <div class={`${style.accOptions}`}>
        <div
          className=""
          style={{ margin: "auto", width: "70%" }}
        >
          {/* <div className="col"></div> */}
          <div
            className=""
            style={{ textAlign: "center", top: "50%", left: "50%" }}
          >
            <Link
              to="/helpandsupport/ordersrelated"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div class={style.addbordertocards}>
                {" "}
                <p class={style.font_set}>
                  <span class={style.accdetails}>Orders &nbsp;</span>
                </p>
              </div>
            </Link>
          </div>
          <div
            className=""
            style={{ textAlign: "center", top: "50%", left: "50%" }}
          >
            <Link
              to="/helpandsupport/deliveryrelated"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div class={style.addbordertocards}>
                {" "}
                <p class={style.font_set}>
                  <span class={style.accdetails}>Delivery &nbsp;</span>
                </p>
              </div>
            </Link>
          </div>
          <div
            className=""
            style={{ textAlign: "center", top: "50%", left: "50%" }}
          >
            <Link
              to="/helpandsupport/paymentrelated"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div class={style.addbordertocards}>
                {" "}
                <p class={style.font_set}>
                  <span class={style.accdetails}>Payment &nbsp;</span>
                </p>
              </div>
            </Link>
          </div>
          <div className="" style={{ textAlign: "center" }}>
            <Link
              to="/helpandsupport/refundsandreturns"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div class={style.addbordertocards}>
                {" "}
                <p class={style.font_set}>
                  <span class={style.accdetails}>Returns &nbsp;</span>
                </p>
              </div>
            </Link>
          </div>
          <div
            className=""
            style={{ textAlign: "center", top: "50%", left: "50%" }}
          >
            <Link
              to="/helpandsupport/related"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div class={style.addbordertocards}>
                {" "}
                <p class={style.font_set}>
                  <span class={style.accdetails}>Refunds &nbsp;</span>
                </p>
              </div>
            </Link>
          </div>
          <div className="" style={{ textAlign: "center" }}>
            <Link
              to="/helpandsupport/wallet"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div class={style.addbordertocards}>
                {" "}
                <p class={style.font_set}>
                  <span class={style.accdetails}>My Chillar Wallet &nbsp;</span>
                </p>
              </div>
            </Link>
          </div>
          <div className="" style={{ textAlign: "center" }}>
            <Link
              to="/helpandsupport/account"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div class={style.addbordertocards}>
                {" "}
                <p class={style.font_set}>
                  <span class={style.accdetails}>My Account &nbsp;</span>
                </p>
              </div>
            </Link>
          </div>
          <div className="" style={{ textAlign: "center" }}>
            <Link
              to="/helpandsupport/another"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div class={style.addbordertocards}>
                {" "}
                <p class={style.font_set}>
                  <span class={style.accdetails}>
                    I have another Query &nbsp;
                  </span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QueryBox;
