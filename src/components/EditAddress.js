import React, { Component } from "react";
import style from "./appStyle.module.css";
import axios from "axios";
var id = null
export class EditAddress extends Component {
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
      state: 'Telangana',
      country: 'India',
      addrType: '',

    }
  }
  saveChanges = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/accounts/addresses/editaddress/${id}`, this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
  componentDidMount = () => {
    var pathArray = window.location.pathname.split('/');
    id = pathArray[pathArray.length - 1]
    axios.get(`http://localhost:3001/accounts/addresses/editaddress/${id}`)
      .then(response => {
        this.setState({
          recvName: response.data.receiversName,
          phnNum: response.data.phoneNumber,
          altNum: response.data.alternatePhoneNumber,
          pinCode: response.data.pincode,
          addr: response.data.address,
          locality: response.data.locality,
          landMark: response.data.landMark,
          city: response.data.city,
          state: response.data.state,
          country: response.data.country,
          addrType: response.data.addressType
        })
      })
      .catch(error => {
        alert(error)
      })

  }

  render() {

    const { recvName, phnNum, altNum, pinCode, addr, locality, landMark, city, state, country } = this.state
    return (

      <div className="container">
        <div class={style.gaplimit}> </div>
        <br></br>
        <div class={style.gaplimit}></div>
        <div class={`${style.Heading} "h-50 d-inline-block"`}>
          <div>Delivery Info</div>
          <hr></hr>
          <form spellCheck='false' onSubmit={(e) => this.saveChanges(e)}>
            <br></br>
            <label >
              <input id={style.recname} placeholder=" " name="recvName" value={recvName} onChange={(e) => { this.setState({ recvName: e.target.value }) }} />
              <span class={style.inputname}>Receivers Name</span>
            </label>
            <br></br>
            <label>
              <input id={style.phonenumber} placeholder=" " name="phnNum" value={phnNum} onChange={(e) => this.setState({ phnNum: e.target.value })} />
              <span class={style.inputname}>Phone Number</span>
            </label>
            <span>&nbsp; &nbsp;</span>
            <label>
              <input id={style.phonenumber} placeholder=" " name="altNum" value={altNum} onChange={(e) => this.setState({ altNum: e.target.value })} />
              <span class={style.inputname}>Alternate Number(Optional)</span>
            </label>
            <br></br>
            <label>
              Address
            <hr></hr>
            </label>
            <br></br>
            <label>
              <input id={style.phonenumber} placeholder=" " name="pinCode" value={pinCode} onChange={(e) => this.setState({ pinCode: e.target.value })} />
              <span class={style.inputname}>Pincode</span>
            </label>
            <br></br>
            <label>
              <input id={style.addressbox} placeholder=" " name="addr" value={addr} onChange={(e) => this.setState({ addr: e.target.value })} />
              <span class={style.inputname}>Address</span>
            </label>
            <br></br>
            <label>
              <input id={style.phonenumber} placeholder=" " name="locality" value={locality} onChange={(e) => this.setState({ locality: e.target.value })} />
              <span class={style.inputname}>Locality</span>
            </label>
            <br></br>
            <label>
              <input id={style.phonenumber} placeholder=" " name="landMark" value={landMark} onChange={(e) => this.setState({ landMark: e.target.value })} />
              <span class={style.inputname}>Landmark (Optional)</span>
            </label>
            <br></br>
            <label>
              <input id={style.phonenumber} placeholder=" " name="city" value={city} onChange={(e) => this.setState({ city: e.target.value })} />
              <span class={style.inputname}>City</span>
            </label>
            <span>&nbsp;&nbsp;</span>
            <label>
              <input id={style.phonenumber} placeholder=" " name="state" value={state} />
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

            <button type="button" id={style.option} className={this.state.addrType == "Home" ? "btn btn-dark" : "btn btn-outline-warning"}
              onClick={() => this.setState({ addrType: "Home" })}>Home</button>
            <button type="button" id={style.option} className={this.state.addrType == "Office" ? "btn btn-dark" : "btn btn-outline-warning"}
              onClick={() => this.setState({ addrType: "Office" })}>Office</button>
            <button type="button" id={style.option} className={this.state.addrType == "Other" ? "btn btn-dark" : "btn btn-outline-warning"}
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

            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default EditAddress;
