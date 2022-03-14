import React, { Component } from 'react'
import style from './bulk.module.css'
import styles from "./appStyle.module.css";
import axios from 'axios';

export default class Bulk extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: null,
            phnNum: null,
            email: null
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/bulk", this.state)
            .then((response) => {
                alert("successfull");
            }).catch((error) => {
                console.log(error)
            });
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 shadow my-lg-5" style={{ backgroundColor: "rgba(20,20,20)", border: "1px solid grey"}}>
                        <h2 className="p-3 text-white" style={{ lineHeight: "1.5", fontSize: "30px" }} >NEED HELP</h2>
                        <h5 className="px-3 text-white" style={{opacity:"0.9"}}>HAVING ANY BULK REQUIREMENT ?</h5>
                        <div className="px-3 text-white " style={{opacity:"0.9"}} id={style.information}>Dont worry, We are there for you. Believe us and chill max. Contact us and get details about designed tshirts, payments and delivery.</div>
                        <br>
                        </br>
                        <h5 className="px-3 mt-5 text-white" style={{opacity:"0.9"}}>Contact Us:</h5>
                        <br></br>
                        <div
                            className="ml-3 bg-white col-8 col-lg-6 p-2 rounded mb-3"
                            id={style.customizeheadbtn}
                        >

                            <div style={{ widthMax: "300px", fontSize: "small" }} className="my-1"> support@umake.in
                                <span className="far fa-copy float-right mx-1" data-toggle="tooltip" title="Copy" id={style.copybutton} style={{ cursor: "pointer", opacity: "0.5", fontSize: "20px", color: "black", verticalAlign: "center" }}
                                    onClick={() => { navigator.clipboard.writeText("chillmax@gmai.com") }}></span>
                                <span className="fas fa-envelope float-right mx-1" style={{ fontSize: "20px", color: "gray" }}></span>
                            </div>
                        </div>
                        <div
                            className="ml-3 bg-white col-8 col-lg-6 p-2 rounded mb-2"
                            id={style.customizeheadbtn}
                        >

                            <div style={{ widthMax: "300px", fontSize: "small" }} className="my-1"> +91 93939 39393
                                <span className="far fa-copy float-right mx-1" data-toggle="tooltip" title="Copy" id={style.copybutton} style={{ cursor: "pointer", opacity: "0.5", fontSize: "20px", color: "black", verticalAlign: "center" }}
                                    onClick={() => { navigator.clipboard.writeText("9393939393") }}></span>
                                <span className="fas fa-phone float-right mx-1" style={{ fontSize: "20px", color: "gray" }}></span>
                            </div>
                        </div>
                        <div className="d-none d-lg-block" style={{ position: "absolute", bottom: "30px", right: "20px" }}>
                            <img className="" style={{ width: "160px", height: "150px" }}
                                src={require("./tshirt.png")}
                            />
                        </div>

                    </div>
                    <div className="col-12 col-lg-6 text-center p-0">

                        <div className="m-lg-5 p-3" style={{ backgroundColor: "#f9f9f9", border: "1px dashed black"}}>
                            <form className="mt-5" onSubmit={(e) => this.onSubmitHandler(e)}>
                                <div className="px-5 my-3 text-center" >Incase of any trouble, you can fill your details. We will contact you later.</div>
                                <label className="mb-4">
                                    <input name="name" value={this.state.name} id={styles.phonenumber} onChange={this.changeHandler} placeholder=" " />
                                    <span class={styles.inputname}>Enter your Name</span>
                                </label>

                                <label className="mb-4">
                                    <input name="phnNum" value={this.state.phnNum} id={styles.phonenumber} onChange={this.changeHandler} placeholder=" " />
                                    <span class={styles.inputname}>Phone Number</span>
                                </label>

                                <label className="mb-4">
                                    <input name="email" value={this.state.email} id={styles.phonenumber} onChange={this.changeHandler} placeholder=" " />
                                    <span class={styles.inputname}>Mail</span>
                                </label>
                                <br></br>
                                <button className="btn btn-dark" style={{ borderRadius: "0px" }}>
                                    SUBMIT
                                </button>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}