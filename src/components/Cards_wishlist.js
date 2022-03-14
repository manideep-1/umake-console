// import React, { Component } from "react";
// import styles from "./custom.module.css";
// import { InputGroup, FormControl, Card } from "react-bootstrap";
// import Draggable from "react-draggable";
// import Dropzone from "react-dropzone";
// import axios from 'axios'


// export class Cards_wishlist extends Component {


//     state = {

//         arrayF: [],
//         arrayB: [],
//         fontName: "Montserrat",
//         color: "black",
//         alignment: "left",
//         bold: false,
//         underline: false,
//         italic: false,
//         word: "",
//         fontSize: 20,
//         border: true,
//         option: 0,
//         background: "#ffffff",
//         tshirtFront: "white_mockup.png",
//         tshirtBack: "tshirtback4.png",
//         selected: "",
//         deltaPosition: { x: 0, y: 0 },
//         acceptedFiles: [],
//         arrayFimg: [],
//         arrayBimg: [],
//     };


//     render() {

//         const {
//             arrayF,
//             arrayB,
//             border,
//             tshirtFront,
//             tshirtBack,
//             arrayFimg,
//             arrayBimg,
//         } = this.state;

//         return (


//             <div class="">
//                 <div className="col-8 border border-secondary rounded my-5">
//                     <div className="row" style={{ cursor: "default" }}>
//                         <div id={styles.cartbox} className="col-5" style={{ height: "250px" }}>


//                             {border == false ? <img
//                                 onClick={() => this.setState({ border: true })} id={styles.arrow}
//                                 alt=""
//                                 src={require("./left-arrow.png")}
//                                 style={{ position: "absolute", zIndex: "2", opacity: "0.6", left: "0%", bottom: "45%", transform: "scaleY(1.5)" }}
//                             /> :

//                                 <img
//                                     onClick={() => this.setState({ border: false })} id={styles.arrow}
//                                     alt=""
//                                     src={require("./right-arrow.png")}
//                                     style={{ position: "absolute", zIndex: "2", opacity: "0.6", right: "0%", bottom: "45%", transform: "scaleY(1.5)" }}
//                                 />
//                             }

//                             {border ? <span className="far fa-circle" style={{ position: "absolute", zIndex: "2", bottom: "3%", left: "49%", fontSize: "9px" }}></span>
//                                 : <span className="fas fa-circle" style={{ position: "absolute", zIndex: "2", bottom: "3%", left: "49%", fontSize: "9px" }}></span>}
//                             {border ? <span className="fas fa-circle" style={{ position: "absolute", zIndex: "2", bottom: "3%", left: "45%", fontSize: "9px" }}></span>
//                                 : <span className="far fa-circle" style={{ position: "absolute", zIndex: "2", bottom: "3%", left: "45%", fontSize: "9px" }}></span>}
//                             <img
//                                 src="black_mockup.png"
//                                 alt=""
//                                 style={{ width: "80%", height: "250px", position: "absolute", zIndex: "0", top: "0%", left: "8%" }}
//                             />
//                             <div className="" style={{ height: "60%", position: "absolute", zIndex: "1", left: "29%", top: "10%", width: "45%" }}>

//                                 {border
//                                     ? arrayF.map((arr, index) => (
//                                         <Draggable
//                                             position={arr["deltaPosition"]}
//                                             className="p-0 m-0"
//                                             bounds="parent"

//                                         >
//                                             <div
//                                                 className={
//                                                     "p-0 m-0"
//                                                 }
//                                                 style={{
//                                                     cursor: "grab",
//                                                     fontSize: arr["fontSize"] + "px",
//                                                     fontStyle: arr["italic"]
//                                                         ? "italic"
//                                                         : "",
//                                                     fontWeight: arr["bold"]
//                                                         ? "bold"
//                                                         : "",
//                                                     textDecoration: arr["underline"]
//                                                         ? "underline"
//                                                         : "",
//                                                     textAlign: arr["alignment"],
//                                                     color: arr["color"],
//                                                     fontFamily: arr["fontName"],
//                                                     width: "fit-content",
//                                                 }}

//                                             >
//                                                 {arr["element"]}

//                                             </div>
//                                         </Draggable>
//                                     ))
//                                     : arrayB.map((arr, index) => (
//                                         <Draggable
//                                             position={arr["deltaPosition"]}
//                                             className="p-0 m-0"
//                                             bounds="parent"
//                                         >
//                                             <div
//                                                 className={
//                                                     "p-0 m-0"
//                                                 }
//                                                 style={{
//                                                     fontSize: arr["fontSize"] + "px",
//                                                     fontStyle: arr["italic"]
//                                                         ? "italic"
//                                                         : "",
//                                                     fontWeight: arr["bold"]
//                                                         ? "bold"
//                                                         : "",
//                                                     textDecoration: arr["underline"]
//                                                         ? "underline"
//                                                         : "",
//                                                     textAlign: arr["alignment"],
//                                                     color: arr["color"],
//                                                     fontFamily: arr["fontName"],

//                                                     width: "fit-content",
//                                                 }}
//                                             >
//                                                 {arr["element"]}
//                                             </div>
//                                         </Draggable>
//                                     ))}
//                             </div>
//                         </div>
//                         <div className="col-6 my-3 ml-3">
//                             <span style={{ fontSize: "20px" }}>White TShirt StarWars Lord</span>
//                             <br>
//                             </br>
//                             <span className="text-secondary" style={{ fontSize: "18px" }}> Size: M</span>
//                             <br></br>
//                             <label className="p-1" id={style.labeldeliverysuccess}>delivered</label>


//                         </div>

//                     </div>
//                 </div>


//             </div>
//         );
//     }

// }

// export default Cards_wishlist;
