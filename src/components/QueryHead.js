import React from "react";
import style from "./appStyleTwo.module.css";

function QueryHead() {
  return (
    <div>
      <div class={`"row" ${style.websiteMyacTitle}`}>
        <br></br>

        <div class={style.websiteMyacTitle}>
          <div className="float-left ">
            <div class={`${style.WebAccHeading} "h-50 d-inline-block"`}>
              <div>What's the query About?</div>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QueryHead;
