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

class PopUpSize extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       selectedOption:this.props.size
    }
    // console.log(this.state.selectedOption)
  }
  setChange(event){
    this.setState({
    selectedOption: event.target.value,
    })
  }
  componentDidUpdate=(prevProps)=>{

    if(prevProps !== this.props)
    {
    this.setState({selectedOption:this.props.size})
    console.log(this.props.size)
    }
  }
   setSelectedOption=()=>{
    this.setState({selectedOption:this.props.size})
  }

  render() 
  {
    //console.log(this.props.size)
    return (
      <>
        <div className="modal fade" id="popUpSize" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" id={style.close} data-dismiss="modal">
                  &times;&nbsp;
                </button>
                <h5 className="modal-title">Select Size</h5>

              </div>
              <div className="modal-body" onChange={this.setChange.bind(this)}>
                <span id={style.checkedid}>
                  <input type="radio" name="payment" id="xs" value="XS" />
                  <label id={style.option} for="xs">
                    <span style={labelspan}>XS</span>
                  </label>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span id={style.checkedid}>
                  <input type="radio" name="payment" id="s" value="S" />
                  <label id={style.option} for="s">
                    <span style={labelspan}>S</span>
                  </label>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span id={style.checkedid}>
                  <input type="radio" name="payment" id="m" value="M" />
                  <label id={style.option} for="m">
                    <span style={labelspan}>M</span>
                  </label>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span id={style.checkedid}>
                  <input type="radio" name="payment" id="l" value="L" />
                  <label id={style.option} for="l">
                    <span style={labelspan}>L</span>
                  </label>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span id={style.checkedid}>
                  <input type="radio" name="payment" id="xl" value="XL" />
                  <label id={style.option} for="xl">
                    <span style={labelspan}>XL</span>
                  </label>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span id={style.checkedid}>
                  <input type="radio" name="payment" id="xxl" value="XXL" />
                  <label id={style.option} for="xxl">
                    <span style={labelspan}>XXL</span>
                  </label>
                </span>
                &nbsp;&nbsp;&nbsp;

              </div>
              <div className="modal-footer">
                <a href="/" className="badge badge-light mr-auto">
                  Size Chart
                </a>
                <p>{this.props.productId}</p>
                <p>{this.props.size}</p>
                <p>{this.state.selectedOption}</p>
                <button type="button" data-dismiss="modal" 
                onClick={()=> this.props.setSelectedSizeHandler(this.state.selectedOption,this.props.productId)} 
                class="btn btn-dark">Done</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PopUpSize;
