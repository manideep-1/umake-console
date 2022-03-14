import React from "react";
import style from "./appStyle.module.css";
import { Link } from "react-router-dom";

const arrow = {
  fontSize: "20px",
  opacity: "0.9",
  position: "relative",
  top: "5px",
};
function MyProfileHead() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Link to="/accounts/">
            <p id={style.backtoaccount}>
              <i class="fa fa-angle-left" style={arrow}></i>&nbsp;Back to Account
            </p>
          </Link>
          <div class={style.websiteMyacTitle}>
            <div className="float-left ">
              <div class={`${style.WebAccHeading} "h-50 d-inline-block"`}>
                <div>My Profile</div>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyProfileHead;
