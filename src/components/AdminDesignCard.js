import React, { Component } from "react";
import style from "./custom.module.css";
import { InputGroup, FormControl, Card } from "react-bootstrap";
import Draggable from "react-draggable";
import Dropzone from "react-dropzone";
import axios from 'axios';
import { Redirect } from 'react-router';


export class AdminDesignCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            arrayF:[],
            arrayB: [],
            draftId: null,
            image:null,
            border: true,
            tshirtFront: "white_mockup.png",
            tshirtBack: "red_mockup.png",
            arrayFimg: [],
            arrayBimg: [],
            order_info:null,
            redirect:false,
            frontString:null,
            backString:null
        };
    }

    componentDidMount = (props) =>{
        this.setState({ arrayF: this.props.arrayF,
            arrayB : this.props.arrayB,
            image:this.props.image,
            order_info:this.props.order_info,
            arrayFimg:this.props.arrayFimg,
            arrayBimg:this.props.arrayBimg,
            draftId:this.props.draftId,
            frontString:this.props.frontString,
            backString:this.props.backString
        })
      
    }
      removeHandle=()=>{
        axios.post('http://localhost:3001/adminDesigns', {draftId:this.props.draftId})
      .then((response) => {
        console.log(response.data)
        this.setState({order_info:null})
      })
      .catch(err => {
        console.log("hello.....");
        console.log(err);
      })
    }
    goToCustomize=()=>{
        this.setState({redirect:true})
      }
    
    render() {

        const {
            order_info,
            border,
        } = this.state;
       

        return (
            <>

                {order_info==null?null:
                (
                <>
            <div id={style.boxx}  className="col-4 m-4 " style={{border:"3px solid #eeeeee"}}>
                
                <div  className="row " style={{height: "fit-content",display:"inline-block",position:"relative"}}>
                {/* <div className="row bg-light " style={{ borderTop: "1px solid gray", borderRadius: "0px", width: "100%", position: "absolute", bottom: "0px", height: "23%" }}></div> */}
                <a onClick={this.removeHandle}  >
                <i className="fas fa-trash-alt " id={style.dustbin} style={{ position: "absolute", zIndex: "2", fontSize: "35px", right: "7px", top: "7px" }}></i>
                </a>
                {border == false ? <img
                    onClick={() => this.setState({ border: true })} id={style.arrow}
                    alt=""
                    src={require("./left-arrow.png")}
                    style={{ position: "absolute",  opacity: "0.6", left: "0%", bottom: "45%", transform: "scaleY(1.5)" }}
                /> :

                    <img
                        onClick={() => this.setState({ border: false })} id={style.arrow}
                        alt=""
                        src={require("./right-arrow.png")}
                        style={{ position: "absolute", opacity: "0.6", right: "0%", bottom: "45%", transform: "scaleY(1.5)" }}
                    />
                }
           
               
           {this.state.frontString && this.state.backString!= null ?

            <img 
            style={{ width: "100%" }}
            src={border? this.state.frontString: this.state.backString}/>
            :
            <img></img>}
                        

                
                </div>
                <div className="row bg-light"  >

                  <div className="col-12 d-flex justify-content-center"> 
                {border ?
                
                 <span style={{fontSize: "20px", opacity: "0.8",textDecoration: "underline", textDecorationColor: "#9bceec" }}>FRONT</span > : 
                 <span style={{ fontSize: "20px", opacity: "0.8",textDecoration: "underline", textDecorationColor: "#9bceec" }}>
                    BACK</span>
               }
                </div>
                <br></br>
                <div className="col-12 d-flex justify-content-center pt-1">
                {border ? <span className="far fa-circle " style={{ position: "absolute", fontSize: "10px", left: "52%" }}></span>
                    : <span className="fas fa-circle " style={{ position: "absolute", fontSize: "10px", left: "52%" }}></span>}
               <span>&nbsp;</span>
                {border ? <span className="fas fa-circle " style={{ position: "absolute", fontSize: "10px", left: "48%"}}></span>
                    : <span className="far fa-circle " style={{ position: "absolute", fontSize: "10px", left: "48%" }}></span>} 
               
                </div>
                {/* {border ? <span className="far fa-circle" style={{ position: "absolute", zIndex: "2", bottom: "5%", left: "52%", fontSize: "10px" }}></span>
                    : <span className="fas fa-circle " style={{ position: "absolute", zIndex: "2", bottom: "5%", left: "52%", fontSize: "10px" }}></span>}
                <span>&nbsp;&nbsp;</span>
                {border ? <span className="fas fa-circle " style={{ position: "absolute", zIndex: "2", bottom: "5%", left: "48%", fontSize: "10px" }}></span>
                    : <span className="far fa-circle" style={{ position: "absolute", zIndex: "2", bottom: "5%", left: "48%", fontSize: "10px" }}></span>} */}
              
                <div className="row pb-1 px-1">
                <button className="btn ml-3 btn btn-dark"  style={{ float:"left",borderRadius:"0px"}}>View/Buy <span class="fas fa-eye" ></span></button>
                <button className="btn px-4 ml-4 btn btn-dark"   onClick={this.goToCustomize}  style={{ borderRadius: "0px",position:"absolute",right:"5px" }}>Edit <span class="fas fa-edit" ></span></button>
                </div>
                </div>
            </div>
           
            </>
            )
            
}
{this.state.redirect==true?
                <Redirect
                to={{
                pathname: "/customizeAdmin",
                state: { 
                  arrayF: this.state.arrayF,
                  arrayB: this.state.arrayB,
                  arrayFimg: this.state.arrayFimg,
                  arrayBimg: this.state.arrayBimg,
                  draftId: this.state.draftId,
                  image:this.state.image
                  }
              }}
            />:null}

</>          

        );
    }
}

export default AdminDesignCard;
