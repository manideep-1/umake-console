import React from "react";
import style from "./appStyle.module.css";
import { Link } from "react-router-dom";

const arrow = {
  fontSize: "20px",
  opacity: "0.9",
  position: "relative",
  top: "5px",
};
function MyWalletHead() {
  return (
    <div>
      <div className="container">
        <div class={`"row" ${style.websiteMyacTitle}`}>
          <Link to="/accounts/">
            <p id={style.backtoaccount}>
              <i class="fa fa-angle-left" style={arrow}></i>&nbsp;Back
            </p>
          </Link>
          <div class={style.websiteMyacTitle}>
            <div className="float-left ">
              <div class={`${style.WebAccHeading} "h-50 d-inline-block"`}>
                <div>My Wallet</div>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyWalletHead;
