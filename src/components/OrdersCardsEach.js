import React, { Component } from 'react'
import style from "./custom.module.css";
import {Link} from 'react-router-dom'
import data from './data';
import axios from 'axios'
import Draggable from "react-draggable";


export class OrdersCardsEach extends Component {
    constructor(props) {
        super(props)
        this.state = {
            border: true,
            order_info:[],
            order_total:[],
            products:[],
            frontString:null,
            backString:null

        }
    }

    componentDidMount=()=>{
    this.setState({
        order_info:this.props.order_info,
        order_total:this.props.order_total,
        frontString:this.props.frontString,
        backString:this.props.backString
    })
    }

    render() {
        const {
            border,
            order_total,
            order_info,
          } = this.state;
        return (
            <div>
                <div className="col-11 my-3">
                      <div className="row" style={{cursor:"default"}}>
                      <div
                                id={style.cartbox}
                                className={`col-5 ${style.nopadding}`}
                                style={{height: "fit-content",display:"inline-block",position:"relative"}}>

                                {border == false
                                    ? <img
                                            onClick={() => this.setState({border: true})}
                                            id={style.arrow}
                                            alt=""
                                            src={require("./left-arrow.png")}
                                            style={{
                                            position: "absolute",
                                            zIndex: "2",
                                            opacity: "0.6",
                                            left: "0%",
                                            bottom: "45%",
                                            transform: "scaleY(1.5)"
                                        }}/>
                                    : <img
                                        onClick={() => this.setState({border: false})}
                                        id={style.arrow}
                                        alt=""
                                        src={require("./right-arrow.png")}
                                        style={{
                                        position: "absolute",
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

                        {this.state.frontString != null ?

                        <img 
                        style={{ width: "100%", height: "100%" }}
                        src={this.state.border?this.state.frontString:this.state.backString}/>
                        
                        :
                        <img></img>}
                            </div>
                            
                     
                     
                      <div className="col-6 my-3 ml-3">
                          <span style={{fontSize:"20px"}}>{order_info.name}</span>
                          <br>
                          </br>  
                      <span className="text-secondary" style={{fontSize:"18px"}}> Size: {order_info.size}</span>
                      <br></br>
                      {order_total.status=="DELIVERED" ?
                      <label className="p-1" id={style.labeldeliverysuccess}>delivered</label>
                      :
                      <label className="p-1" id={style.labeldeliveryfailed}>Order Failed</label>
          
                      }
                    
                  
                      </div>
                     
                      </div>
                  </div>
                   
            </div>
        )
    }
}

export default OrdersCardsEach
