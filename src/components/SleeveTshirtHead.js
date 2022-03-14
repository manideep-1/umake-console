
import React from "react";
import style from "./appStyle.module.css";
import { Link } from "react-router-dom";

// const arrow = {
//   fontSize: "20px",
//   opacity: "0.9",
//   position: "relative",
//   top: "5px",
// };
function SleeveTshirtHead() {
  return (
    <div className="px-md-0 -md-1">
      <div className="p-5 row"  style={{background: "rgb(20, 20, 20)"}}>
        <div className="col-md-5 d-none d-md-block"></div>
        <div className="col-md-5">
          <div
            className=""
            id={style.customizehead}
            style={{ letterSpacing: "1px" , color: "#BBBBBB"}}
          >
            customize to your liking
          </div>
          <h1
            className=""
            id={style.customizehead}
            style={{ letterSpacing: "1px" }}
          >
            customize to your liking
          </h1>
          <a href="/customize">
          <div
            className="tnbutton bg-white col-6 text-center rounded mt-4 p-4"
            id={style.customizeheadbtn}
          >
            <span className="tnbutton-name">Try Now</span>
            <i className="tnbutton-icon fa fa-arrow-right"></i>
          </div>
          </a>
        </div>
        <img
          className="col-2 mt-3 d-none d-md-block"
          src={require(`./arrow.png`)}
          alt=""
        />
      </div>
      <div class={`"row" ${style.websiteMyacTitlehome}`}>
        <div className="container">
          <Link to="/accounts/">
            <p id={style.backtoaccount}>&larr;Back to Home Page</p>
          </Link>
        </div>

        <div className="container">
          <div class={style.websiteMyacTitle}>
            <div className="float-left pb-0 mb-0">
              <div
                class={`${style.WebAccHeading} "h-50 pb-0 mb-0"`}
              >
                <div>Sleeve Tshirt </div>
                <hr ></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SleeveTshirtHead;
