import React ,{ useState} from 'react'
// import Component from 'react'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
const Otp = () => {
    
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    return(
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <div style={{display: 'flex'}}>
        <p style={{cursor:"pointer" , marginLeft:"auto"}} data-toggle="modal" data-dismiss="modal"><i className="fa fa-arrow-left"></i></p></div>
        </Modal.Header>
        <Modal.Body>
            <h4 className="text-center">OTP Verification</h4>
			<p className="text-center">We have sent you an OTP on your mobile number 19451945</p>
            <br />
            <form>
				<div className="form-row">
					<div className="col-6 offset-3">
						<input className="form-control form-control-sm mr-1"placeholder="Enter OTP" />
					</div>
				</div>
			</form>
            <br />
            <p className="text-center">You can also use an existing OTP sent to you in the past 15 minutes</p>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default Otp