import React, { Component } from "react";
import style from "./appStyle.module.css";
import data from "./data";

const WalletDetails = data.WalletDetails;

export class mywallet extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <br></br>
            <span class={style.piggibank}>MY PIGGIBANK</span>
            <br></br>
            <h4 class={style.walletmoney}>Rs. 0</h4>
            <p>
              <span class={style.howtousewallet}>How to use Wallet?</span>
            </p>
            <hr></hr>
          </div>
        </div>

        <div class={style.walletsummary}>
          <h5>Wallet Summary</h5>
          <div className="row">
            <table class={style.wallettable}>
              <tr>
                <th>date</th>
                <th>order id</th>
                <th>type</th>
                <th>particulars</th>
                <th>amount</th>
                <th>closing balance</th>
              </tr>
              {WalletDetails.map((comp_info, index) => (
                <tr>
                  <td>{comp_info.Date}</td>
                  <td>{comp_info.OrderId}</td>
                  <td> {comp_info.Type}</td>
                  <td>{comp_info.Particulars}</td>
                  {comp_info.Money ? (
                    <td class={style.tableval}>{comp_info.Amount}</td>
                  ) : (
                    <td class={style.tablevaladded}>{comp_info.Amount}</td>
                  )}
                  <td> {comp_info.ClosingBalance}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default mywallet;
