import React, { Component } from "react";
import style from "./Login.module.css";
// import {OTPInput} from "otp-input-react";
import axios from 'axios'
import { getElementError } from "@testing-library/react";
// import Home from './Home'
// import { Redirect } from "react-router-dom";
export class LoginPage extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      email: true, 
      password: true, 
      login: true, 
      otp: true ,
      loginName:'',
      loginPass:'',
      phone:'',
      otpVal:''
    }
  }
  loginorSignup(e){
    // console.log(this.state)
    // if(this.login==true)
    // {
      e.preventDefault();
      // console.log(this.state.loginPass,this.state.loginName)
      axios.post('http://localhost:3001/login',this.state)
      .then(resp=>{
        alert(resp.data.message);
        console.log(resp.data);
        if(resp.data.message=='successful login!!!')
        {
          // return <Redirect to="/"/>
          // localStorage.setItem('user',JSON.stringify(resp.data));
          localStorage.setItem('user_name',resp.data.userName)
          localStorage.setItem('user_id',resp.data._id);
          // alert(JSON.stringify(resp.data));
          this.props.history.push('/')
        }
        else if(resp.data.message=='Succesfully registered')
        {
          // return <Redirect to="/"/>
          this.props.history.push('/')
        }
        // if(resp.data.message=='successful login!!!')
        // {
        //   // return <Redirect to="/"/>
        //   let data={
        //     email:resp.data.email,
        //     messege:resp.data.messege,
        //     password:resp.data.password
        //   }
          
          
        //   store.set('user',{
        //     email:resp.data.email,
        //     messege:resp.data.messege,
        //     password:resp.data.password
        //   });
        //   alert(data);
        //   // this.props.history.push('/')
        // }
        // else if(resp.data.message=='Succesfully registered')
        // {
        //   // return <Redirect to="/"/>
        //   this.props.history.push('/')
        // }
        
      })
      .catch(err=>{
        alert(err);
        console.log(err);
      })
    // }
    // else
    // {
    //   e.preventDefault();
    //   axios.post('http://localhost:3001/login',this.state)
    //   .then(resp=>{
    //     alert(resp.data.message);
    //     console.log(resp.data.message);
    //   })
    //   .catch(err=>{
    //     alert(err);
    //     console.log(err);
    //   })
    // }
  }
  onChangeUname=(e)=>{
    this.setState({
      loginName : e.target.value
    });
  }
  onChangePhone=(e)=>{
    this.setState({
      phone : e.target.value
    });
  }
  onChangeOtp=(e)=>{
    this.setState({
      otpVal : e.target.value
    });
  }
  onChangePass=(e)=>{
    this.setState({
      loginPass : e.target.value
    });
  }
  render() {
    const { email, password, login, otp, loginName , loginPass } = this.state;
    return (

      <div class="container" style={{ backgroundColor: "white", height:"600px" }}>
        
        <div class="row mt-5" id={style.loginbox}>
          <div
            class="col-5 d-none d-md-block"
            id={style.gradient_login}
            style={{
             
              height: "match-parent",
              padding:"20px",
              paddingTop: "40px",
              paddingLeft: "40px",
              borderTopLeftRadius: "7px",
              borderBottomLeftRadius: "7px"
            }}
          >
            <span class={style.logintext}>
              {login ? <span>Login </span> : <span>SignUp</span>}
            </span>

            <span class={style.loginpagedata}>
              <br></br>
              <br></br>
              {login ? (
                <span>
                  {" "}
                  Get access to your Customizations, Orders, Wislists and
                  Recommendations
                </span>
              ) : (
                <span>
                  Looks like you're new here. SignUp and customize your own
                  tshirts.
                </span>
              )}
            </span>
            <img
              class={style.hand}
              style={{ marginTop: "130px" }}
              src={require("./tshirt.svg")}
            />
          </div>
          {login ? (
            <div class="col-12 col-md-7 text-center" style={{ padding: "20px", paddingTop: "100px" }}>
               <h3 className="d-block d-md-none" style={{color:"rgb(20,20,20)"}}>Login</h3>
              <form onSubmit={(e)=>{this.loginorSignup(e)}}>
                {email ? (
                  <div  class="form-group text-center"  style={{ }}>
                   <label className="w-75">
                      <input id={style.emailId} class="input-text" type="email" placeholder=" " autocomplete="new-password" className="w-100" onChange={this.onChangeUname} />
                      <span class={style.inputname}>Email Id</span>
                    </label>
                    <br></br>
                    <a
                      class="btn btn-link"
                      onClick={() => this.setState({ email: !email })}
                      type="button"
                      style={{
                        fontSize: "12px",
                        float: "right",
                        cursor: "pointer",
                        paddingTop: "0px",
                      }}
                    >
                      {" "}
                      Login With Phone Number
                    </a>
                  </div>
                ) : (
                  <div class="form-group text-center" style={{  }}>
                    <label className="w-75">
                      <input id={style.emailId} autocomplete="new-password" type="tel" placeholder=" "  className="w-100" onChange={this.onChangePhone}/>
                      <span class={style.inputname} >Phone Number </span>
                    </label>
                    <br></br>
                    <a
                      class="btn btn-link"
                      onClick={() => this.setState({ email: !email })}
                      type="button"
                      style={{
                        fontSize: "12px",
                        float: "right",
                        cursor: "pointer",
                        paddingTop: "0px",
                      }}
                    >
                      {" "}
                      Login With Email
                    </a>
                  </div>
                )}

                {password ? (
                   <div className="form-group text-center">
                   <label className="w-75">
                      <input
                      autocomplete="new-password"
                        id={style.emailId}
                        type="password"
                        placeholder=" "
                        className="w-100"
                        onChange={this.onChangePass}
                      />
                      <span class={style.inputname} onChange={this.onChangePass}>Password</span>
                    </label>
                    <br></br>
                    <a
                      class="btn btn-link"
                      onClick={() => this.setState({ password: !password })}
                      type="button"
                      style={{
                        fontSize: "12px",
                        float: "right",
                        cursor: "pointer",
                        paddingTop: "0px",
                      }}
                    >
                      {" "}
                      Login With OTP
                    </a>
                  </div>
                ) : (
                  <div class="form-group text-center" style={{}}>
                   <label className="w-75">
                      <input type="tel" placeholder=" " 
                      autocomplete="new-password"
                        className="w-100"/>
                      <span class={style.inputname} onChange={this.onChangeOtp}>Enter OTP</span>
                    </label>
                    {/* <OTPInput onChange={this.handleotp} value="123456" OTPLength={6} /> */}
                    <br></br>
                    <a
                      class="btn btn-link"
                      onClick={() => this.setState({ password: !password })}
                      type="button"
                      style={{
                        fontSize: "12px",
                        float: "right",
                        cursor: "pointer",
                        paddingTop: "0px",
                      }}
                    >
                      {" "}
                      Login With Password
                    </a>
                  </div>
                )}

                <div
                  class="form-group text-center"
                  style={{marginTop: "50px" }}
                >
                  <button
                    class="btn btn-dark"
                    style={{
                      width: "70%",
                      height: "50px",
                      borderRadius: "0px",
                      backgroundColor:"rgba(20,20,20)"
                    }}
                  >
                    Login
                  </button>
                </div>

                <div
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  <br></br>
                  <a 
                  onClick={() => 
                  {
                    
                    this.setState({ 
                    login: !login,
                    loginName:"",
                    loginPass:"" 
                    })}}>
                    <span>New to Umake? Create an account</span>
                  </a>
                </div>
              </form>
            </div>
          ) : (
            <div class="col-7" style={{ padding: "20px", paddingTop: "20px" }}>
              <form  onSubmit={(e)=>this.loginorSignup(e)}>
                {email ? (
                  <div class="form-group" style={{ marginLeft: "30px" }}>
                    <label>
                      <input autocomplete="new-password"
                      id={style.emailId} type="email" placeholder="" onChange={this.onChangeUname} />
                      <span class={style.inputname} >Email Id</span>
                    </label>
                    <br></br>
                    <a
                      class="btn btn-link"
                      onClick={() => this.setState({ email: !email })}
                      type="button"
                      style={{
                        fontSize: "12px",
                        float: "right",
                        cursor: "pointer",
                        paddingTop: "0px",
                      }}
                    >
                      {" "}
                      Signup With Phone Number
                    </a>
                  </div>
                ) : (
                  <div class="form-group" style={{ marginLeft: "30px" }}>
                    <label>
                      <input
                      autocomplete="new-password" id={style.emailId} type="tel" placeholder=" " onChange={this.onChangePhone}/>
                      <span class={style.inputname} >Phone Number </span>
                    </label>
                    <br></br>
                    <a
                      class="btn btn-link"
                      onClick={() => this.setState({ email: !email })}
                      type="button"
                      style={{
                        fontSize: "12px",
                        float: "right",
                        cursor: "pointer",
                        paddingTop: "0px",
                      }}
                    >
                      {" "}
                      Signup With Email{" "}
                    </a>
                  </div>
                )}

                <div class="form-group" style={{ marginLeft: "30px" }}>
                  <label>
                    <input autocomplete="new-password" id={style.emailId} placeholder=" " onChange={this.onChangeOtp}/>
                    <span class={style.inputname} >Enter OTP</span>
                  </label>
                  {otp ? (
                    <a
                      class="btn btn-link"
                      onClick={() => this.setState({ otp: !otp })}
                      type="button"
                      style={{
                        fontSize: "12px",
                        float: "right",
                        cursor: "pointer",
                        paddingTop: "0px",
                      }}
                    >
                      {" "}
                      Request OTP
                    </a>
                  ) : (
                    <a
                      class="btn btn-link"
                      type="button"
                      style={{
                        fontSize: "12px",
                        float: "right",
                        cursor: "pointer",
                        paddingTop: "0px",
                      }}
                    >
                      {" "}
                      Request OTP Again
                    </a>
                  )}
                </div>

                <div class="form-group" style={{ marginLeft: "30px" }}>
                  <label>
                    <input autocomplete="new-password" id={style.emailId} type="password" placeholder=" " onChange={this.onChangePass} />
                    <span class={style.inputname} onChange={this.onChangePass}>Set Password</span>
                  </label>
                  <br></br>
                </div>

                <div
                  class="form-group"
                  style={{ marginLeft: "30px", marginTop: "50px" }}
                >
                  <button
                    class="btn btn-dark text-white"
                    style={{
                      width: "100%",
                      height: "50px",
                      borderRadius: "0px",
                      backgroundColor:"rgba(20,20,20)"
                    }}
                  >
                    SignUp
                  </button>
                </div>

                <div
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  <a onClick={() => this.setState({ login: !login,loginPass:"",loginName:"" })}>
                    <span>Existing User ? Log in</span>
                  </a>
                </div>
              </form>
            </div>
          )}
        </div>
        
      </div>
    );
  }
}

export default LoginPage;
