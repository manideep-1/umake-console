import React ,{ useState} from 'react'
// import Component from 'react'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
const OtpPasswordComponent = () => {
    
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    return(
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal id="hello" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            
            
			<h4 className="text-center"><strong>Log In</strong></h4>
			<h5 className="text-center"><strong>Discover Fashion!</strong></h5>
			<h6 className="text-center">You're just one step away from signing up</h6><br />

            <div className="container">
				<div className="row">
					<div className="col-5 offset-1">
						 <a href="http://www.facebook.com/profile.php?id=" class="btn btn-lg btn-social btn-facebook">
							<i className="fa fa-facebook fa-fw"></i>Facebook
						</a>
					</div>
					<div className="col-5 offset-1">
					<p className="btn btn-lg btn-social btn-google">
						<i className="fa fa-google fa-fw"></i> Google
					</p>
					</div>
				</div><br />
        <div style={{width: "100%", height:" 20px", borderBottom: "1px solid black", textAlign: "center"}}>
          <span style={{fontSize: "20px", backgroundColor:" #FFFFFF", padding:"0 10px"}}>
                     or
          </span>
        </div>                
        <br />
                <form spellCheck="false">		
					        <div class="form-row">
						        <div class="col-6 offset-3">
                		<input type="tel" class="form-control form-control-sm mr-1" name="mobile" id="mobile" placeholder="Enter Mobile" />
                        <br/>
                    </div>
                  </div>
					<div class="form-row">
						<div class="col-6 offset-3">
							<input type="password" class="form-control form-control-sm mr-1" placeholder="Enter Password" />
						</div>
					</div>
          <br />

					<div className="form-row">
						<div className="col-6 offset-3">
         
            <Link
              to="/login/otp"
              style={{ textDecoration: "none", color: "inherit" }}>
							<button className="justify-content-center" data-toggle="modal" 
						 data-dismiss="modal" style={{color:"blue",cursor:"pointer"}}>Login With OTP ></button>
             </Link>
						</div>
					</div>
          <br />
          <div className="form-row">
						<button className="btn btn-primary offset-5" data-toggle="modal" 
						data-target="#demo-2" data-dismiss="modal">Continue</button>
          </div>
                </form>

			</div>


        </Modal.Body>
        <Modal.Footer>
        <div className="options text-center text-md-right mt-1">

                <p>Not a member?
                {/* <Link
              to="/signup"
              style={{ textDecoration: "none", color: "inherit" }}> */}
               <Link
              to="/signup"
              style={{ textDecoration: "none", color: "inherit" }}>
                   <button data-toggle="modal" href="/login/continue/signup" 
						 data-dismiss="modal" style={{cursor:"pointer",color:"blue"}}>Sign Up</button>
              </Link>
             </p>
                <p>Forgot <p className="blue-text"  data-toggle="modal"  data-dismiss="modal" style={{cursor:"pointer",color:"blue"}}>Password?</p></p>
             
              </div>

        </Modal.Footer>
      </Modal>
    </>
  );
}
export default OtpPasswordComponent