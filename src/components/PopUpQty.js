import React, { Component } from "react";
import style from "./appStyles.module.css";

const labelspan = {
  fontSize: "15px",
  fontFamily: "Poppins",
  fontWeight: "500",
  position: "absolute",
  left: "50%",
  bottom: "70%",
  transform: "translate(-50%, 80%)",
};

class PopUpQty extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       selectedOption:null
    }
  }
  componentDidUpdate=(prevProps)=>{

    if(prevProps !== this.props)
    {
    this.setState({selectedOption:this.props.qty})
    console.log(this.props.qty)
    }
  }
  setChange(event){
    this.setState({
    selectedOption: event.target.value,
    })
}
  
  render() {

    return (
      <>
        <div className="modal fade" id="popUpQty" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" id={style.close} className="close" data-dismiss="modal">
                  &times;&nbsp;
                </button>
                <h5 className="modal-title">Set Quantity</h5>
              </div>
              <div className="modal-body" onChange={this.setChange.bind(this)}>
                <span id={style.checkedid}>
                  <input type="radio" name="payment" id="1" value="1" />
                  <label id={style.option} for="1">
                    <span style={labelspan}>1</span>
                  </label>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span id={style.checkedid}>
                  <input type="radio" name="payment" id="2" value="2" />
                  <label id={style.option} for="2">
                    <span style={labelspan}>2</span>
                  </label>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span id={style.checkedid}>
                  <input type="radio" name="payment" id="3" value="3" />
                  <label id={style.option} for="3">
                    <span style={labelspan}>3</span>
                  </label>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span id={style.checkedid}>
                  <input type="radio" name="payment" id="4" value="4" />
                  <label id={style.option} for="4">
                    <span style={labelspan}>4</span>
                  </label>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span id={style.checkedid}>
                  <input type="radio" name="payment" id="5" value="5" />
                  <label id={style.option} for="5">
                    <span style={labelspan}>5</span>
                  </label>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span id={style.checkedid}>
                  <input type="radio" name="payment" id="6" value="6" />
                  <label id={style.option} for="6">
                    <span style={labelspan}>6</span>
                  </label>
                </span>
                &nbsp;&nbsp;&nbsp;
              </div>
              <div className="modal-footer">
              <p>{this.props.productId}</p>
              <p>{this.props.qty}</p>
              <button type="button" data-dismiss="modal" onClick={()=> this.props.setSelectedQtyHandler
                (this.state.selectedOption,this.props.productId)} class="btn btn-dark">Done</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PopUpQty;
