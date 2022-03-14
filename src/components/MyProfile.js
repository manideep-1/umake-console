import React, { Component } from "react";
import style from "./appStyle.module.css";
import styles from "./appStyles.module.css";
import axios from 'axios'
const labelspan = {
  fontSize: "15px",
  fontFamily: "Poppins",
  fontWeight: "500",
  position: "absolute",
  left: "50%",
  bottom: "70%",
  transform: "translate(-50%, 80%)",
};
export class MyProfile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstName:"",
       lastName:"",
       email:"",
       password:"",
       phoneNumber:"",
       dob:"",
       gender:null,
    }
  }
  onChangehandler=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    });
  }

  componentDidMount=()=>{
    // let data=localStorage.getItem('user')
    // data=JSON.parse(data);
    let user_id = localStorage.getItem('user_id')
    axios.post('http://localhost:3001/accounts/myprofile',{user_id,updateReq:false})
    .then(resp=>{
      console.log(resp.data); 
      this.setState({
        email:resp.data.email,
        password:resp.data.password,
        firstName:resp.data.firstName,
        lastName:resp.data.lastName,
        phoneNumber:resp.data.phoneNumber,
        dob:resp.data.dob,
        gender:resp.data.gender
      });
      // localStorage.setItem('user',JSON.stringify(resp.data)) 
    })
    .catch(err=>{
      alert(err);
      console.log(err);
    })
    
    // data=localStorage.getItem('user')
    // data=JSON.parse(data);
    // this.setState({
    //   email:data.email,
    //   password:data.password,
    //   firstName:data.firstName,
    //   lastName:data.lastName,
    //   phoneNumber:data.phoneNumber,
    //   dob:data.dob
    // });
  }

  updateProfile=(e)=>{
    console.log(this.state)
    e.preventDefault();
    let user_id = localStorage.getItem('user_id')
    var stateCopy = this.state
    stateCopy["updateReq"]=true
    stateCopy["user_id"]=user_id
    axios.post('http://localhost:3001/accounts/myprofile',stateCopy)
    .then(resp=>{
      alert(resp.data.message);
      console.log(resp.data.message);
            
    })
    .catch(err=>{
      alert(err);
      console.log(err);
    })
  }

  render() {
    return (
      <div className="container">
        <div class={style.gaplimit}> </div>
        <br></br>

        <div class={`${style.Heading} "h-50 d-inline-block"`}>
          <form onSubmit={(e)=>this.updateProfile(e)} spellCheck="false">
            <label>
              <input name="firstName" onChange={this.onChangehandler} value={this.state.firstName} id={style.phonenumber} placeholder=" " />
              <span class={style.inputname}>First Name</span>
            </label>
            <span>&nbsp; &nbsp;</span>
            <label>
              <input name="lastName" onChange={this.onChangehandler} value={this.state.lastName} id={style.phonenumber} placeholder=" " />
              <span class={style.inputname}>Last Name</span>
            </label>
            <br></br>
            <br></br>
            <label>
              <input
                id={style.emailId}
                name="email"
                onChange={this.onChangehandler}
                value={this.state.email}
                type="email"
                placeholder=" "
              />
              <span class={style.inputname}>Email Id</span>
            </label>
            <br></br>
            <label>
              <input
                id={style.phonenumber}
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChangehandler}
                placeholder=" "
              />
              <span class={style.inputname}>Password</span>
            </label>
            <br></br>
            <label>
              <input name="phoneNumber" onChange={this.onChangehandler} value={this.state.phoneNumber}  id={style.phonenumber} type="tel" placeholder=" " />
              <span class={style.inputname}>Phone Number</span>
            </label>
            <br></br>
            <label>
              <input name="dob" onChange={this.onChangehandler} value={this.state.dob}  id={style.phonenumber} type="date" placeholder=" " />
              <span class={style.inputname}>Date Of Birth</span>
            </label>
            <br></br>
              <span id={style.thisismy}>Gender</span>
              <br></br>
      <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" id={style.option} class={this.state.gender=="Male" ? "btn btn-dark":"btn btn-outline-warning"} 
          onClick={() => this.setState({ gender: "Male" })}>Male</button>
          <button type="button" id={style.option} class={this.state.gender=="Female" ? "btn btn-dark":"btn btn-outline-warning"} 
          onClick={() => this.setState({ gender: "Female" })}>Female</button>
         
      </div>
              <br></br>
              <div className="form-group">
                <div className="row">
                  <div className="col-1">
                    <button
                      className="btn btn-primary"
                      id={style.removeborderrad}
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="col-8"></div>
                  <div className="col">
                    <button type="submit"
                      className="btn btn-primary"
                      id={style.removeborderrad}
                    >
                      Save{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="form-group"></div>
          </form>
        </div>
      </div>
    );
  }
}

export default MyProfile;
