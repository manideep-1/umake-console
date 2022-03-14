import React, { Component } from 'react'
import style from './appStyle.module.css'
import axios from 'axios';

class AddAddress extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recvName: '',
            phnNum: '',
            altNum: '',
            pinCode: '',
            addr: '',
            locality: '',
            landMark: '',
            city: '',
            state: '',
            country: 'India',
            addrType: '',
            user_id: localStorage.getItem('user_id')
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:3001/accounts/addresses/addaddress', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { recvName, phnNum, altNum, pinCode, addr, locality, landMark, city, state, country } = this.state
        return (
            <div class="container">

                <div class={style.gaplimit}> </div>
                <br></br>
                <div class={style.gaplimit}></div>
                <div class={`${style.Heading} "h-50 d-inline-block"`}>
                    <div>Delivery Info</div>
                    <hr></hr>
                    <form method="POST" action="/login" spellCheck="false" onSubmit={this.submitHandler}>
                        <br></br>
                        <label >
                            <input id={style.recname} placeholder=" " name="recvName" value={recvName} onChange={this.changeHandler} />
                            <span class={style.inputname}>Receivers Name</span>
                        </label>
                        <br></br>
                        <label>
                            <input id={style.phonenumber} placeholder=" " name="phnNum" value={phnNum} onChange={this.changeHandler} />
                            <span class={style.inputname}>Phone Number</span>
                        </label>
                        <span>&nbsp; &nbsp;</span>
                        <label>
                            <input id={style.phonenumber} placeholder=" " name="altNum" value={altNum} onChange={this.changeHandler} />
                            <span class={style.inputname}>Alternate Number(Optional)</span>
                        </label>
                        <br></br>
                        <label>
                            Address
<hr></hr>
                        </label>
                        <br></br>
                        <label>
                            <input id={style.phonenumber} placeholder=" " name="pinCode" value={pinCode} onChange={this.changeHandler} />
                            <span class={style.inputname}>Pincode</span>
                        </label>
                        <br></br>
                        <label>
                            <input id={style.addressbox} placeholder=" " name="addr" value={addr} onChange={this.changeHandler} />
                            <span class={style.inputname}>Address</span>
                        </label>
                        <br></br>
                        <label>
                            <input id={style.phonenumber} placeholder=" " name="locality" value={locality} onChange={this.changeHandler} />
                            <span class={style.inputname}>Locality</span>
                        </label>
                        <br></br>
                        <label>
                            <input id={style.phonenumber} placeholder=" " name="landMark" value={landMark} onChange={this.changeHandler} />
                            <span class={style.inputname}>Landmark (Optional)</span>
                        </label>
                        <br></br>
                        <label>
                            <input id={style.phonenumber} placeholder=" " name="city" value={city} onChange={this.changeHandler} />
                            <span class={style.inputname}>City</span>
                        </label>
                        <span>&nbsp;&nbsp;</span>
                        <label>
                            <input id={style.phonenumber} placeholder=" " name="state" value={state} onChange={this.changeHandler} />
                            <span class={style.inputname}>State</span>
                        </label>
                        <br></br>
                        <label>
                            <input id={style.phonenumber} placeholder=" " value={country} />
                            <span class={style.inputname}>Country</span>
                        </label>
                        <br></br>
                            <span id={style.thisismy}>This is My</span>
                            <br></br>
                            <button type="button" id={style.option} className={this.state.addrType=="Home" ? "btn btn-dark":"btn btn-outline-warning"} 
                                onClick={() => this.setState({ addrType: "Home" })}>Home</button>
                                <button type="button" id={style.option} className={this.state.addrType=="Office" ? "btn btn-dark":"btn btn-outline-warning"} 
                                onClick={() => this.setState({ addrType: "Office" })}>Office</button>
                                <button type="button" id={style.option} className={this.state.addrType=="Other" ? "btn btn-dark":"btn btn-outline-warning"} 
                                onClick={() => this.setState({ addrType: "Other" })}>Other</button>
                            <br>
                            </br>
                            <label>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-1">
                                        <button class="btn btn-primary" id={style.removeborderrad}>Cancel</button>
                                    </div>
                                    <div class="col-8">

                                    </div>
                                    <div class="col">
                                        <button class="btn btn-primary" id={style.removeborderrad} type="submit">Submit</button>
                                    </div>
                                </div>

                            </div>
                            <div class="form-group">

                            </div>
                        </label>
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default AddAddress
