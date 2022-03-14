import React, { Component } from "react";
import style from "./appStyle.module.css";
import axios from 'axios'
import Draggable from "react-draggable";
import styles from "./custom.module.css";

export class OrderInfoCard extends Component {
   
        constructor(props) {
            super(props)
          
            this.state = {
            order:null,
            product:null,
            address:null,
            arrayF:[],
                border: true,   
                order_info:[],
                status:"",
                frontString:null,
                backString:null
            }
          }
          componentDidMount=()=>{

            this.setState({
                order_info:this.props.order_info,
                frontString:this.props.frontString,
                backString:this.props.backString,
                status:this.props.status,
            })
            
        }
    
    render() {
        let {
            border,
            order_info,
            status,
        }=this.state
        return (
            <div>
               <>
        <div className="row my-2" style={{ cursor: "default" }}>
        <div
                                id={style.cartbox}
                                className={`col-5  ${styles.nopadding}`}
                                style={{height: "fit-content",position:"relative"}}>
                                     {this.state.frontString != null ?

                                <img 
                                style={{ width: "100%", height: "100%" }}
                                src={this.state.border?this.state.frontString:this.state.backString}/>
                                :
                                <img></img>}

                                {border == false
                                    ? <img
                                            onClick={() => this.setState({border: true})}
                                            id={styles.arrow}
                                            alt=""
                                            src={require("./left-arrow.png")}
                                            style={{
                                            position: "absolute",
                                            zIndex: "2",
                                            width:"30px",
                                            opacity: "0.6",
                                            left: "0%",
                                            bottom: "45%",
                                            transform: "scaleY(1.5)"
                                        }}/>
                                    : <img
                                        onClick={() => this.setState({border: false})}
                                        id={styles.arrow}
                                        alt=""
                                        src={require("./right-arrow.png")}
                                        style={{
                                        position: "absolute",
                                        width:"30px",
                                        zIndex: "2",
                                        opacity: "0.6",
                                        right: "0%",
                                        bottom: "45%",
                                        transform: "scaleY(1.5)"
                                    }}/>
}

                                {border
                                    ? <span
                                            className="far fa-circle"
                                            style={{
                                            position: "absolute",
                                            zIndex: "2",
                                            width:"30px",
                                            bottom: "3%",
                                            left: "49%",
                                            fontSize: "9px"
                                        }}></span>
                                    : <span
                                        className="fas fa-circle"
                                        style={{
                                        position: "absolute",
                                        zIndex: "2",
                                        bottom: "3%",
                                        left: "49%",
                                        fontSize: "9px"
                                    }}></span>}
                                {border
                                    ? <span
                                            className="fas fa-circle"
                                            style={{
                                            position: "absolute",
                                            zIndex: "2",
                                            bottom: "3%",
                                            left: "45%",
                                            fontSize: "9px"
                                        }}></span>
                                    : <span
                                        className="far fa-circle"
                                        style={{
                                        position: "absolute",
                                        zIndex: "2",
                                        bottom: "3%",
                                        left: "45%",
                                        fontSize: "9px"
                                    }}></span>}

                       

                            </div>
                            
             
              <div className="col-6 my-3 ml-3">
                        <span style={{ fontSize: "20px" }}>{order_info.name}</span>
                  <br>
                  </br>
                 
                  <span className="text-secondary" style={{ fontSize: "18px" }}> Size: {order_info.size}</span>
                 
                  {order_info.quantity!=1?
                  <>
                   <br></br>
                   <span className="text-secondary" style={{ fontSize: "18px" }}> Qty: {order_info.quantity}</span>
                   </>
                   :null
                  }
                 
                  <br></br>
                  {status=="DELIVERED" ?
                   <label className="p-1" id={styles.labeldeliverysuccess}>delivered</label>:
                   <label className="p-1" id={styles.labeldeliveryfailed}>failed</label>
                  }
                 


              </div>

          </div>
      </>

            </div>
        )
    }
}

export default OrderInfoCard
