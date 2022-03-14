import React, { Component } from 'react'
import style from "./custom.module.css";
export default class ImageInCustomize extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             number:0
        }
    }
    IncreaseNumber=()=>{
        if(this.state.number==this.props.sticker.right)
        {
            this.setState({
                number:this.props.sticker.left
            })
        }
        else
        if(this.state.number<this.props.sticker.right)
        {
            this.setState({
                number:this.state.number+1
            })
        }
        
       
    }
    DecreaseNumber=()=>{
        if(this.state.number>this.props.sticker.left)
        {
            this.setState({
                number:this.state.number-1
            })
        }
        else
        if(this.state.number==this.props.sticker.left)
        {
            this.setState({
                number:this.props.sticker.right
            })
        }
        // else
        // {
        //     this.setState({
        //         number:this.props.sticker.right
        //     })
        // }
    }
    
    sendData = () => {
        if(this.state.number==0)
        this.props.parentCallback(`/Images/${this.props.sticker.category}/${this.props.sticker.subCategory}/${this.props.sticker.name}/${this.state.number}.${this.props.sticker.imageType}`,this.props.sticker._id,this.state.number);
        else
        this.props.parentCallback(`/Images/${this.props.sticker.category}/${this.props.sticker.subCategory}/${this.props.sticker.name}/${this.state.number}.svg#svgView(preserveAspectRatio(none))`,this.props.sticker._id,this.state.number);
    };
    render() {
        // let img_src
        // if(this.state.number==0)
        // {
        //     img_src=
        //     <img
        //     src={`/Images/${this.props.sticker.category}/${this.props.sticker.subCategory}/${this.props.sticker.name}/${this.state.number}.${this.props.sticker.imageType}`}
        //     style={{ height: "170px",width:"170px" }} 
        //     onClick={this.sendData}
        //    alt={this.props.sticker.name}
        //  /> 
        // }
        // else
        // if(this.state.number>0)
        // {
        //     img_src=
        //     <img
        //     src={`/Images/${this.props.sticker.category}/${this.props.sticker.subCategory}/${this.props.sticker.name}/${this.state.number}.svg`}
        //     style={{ height: "170px",width:"170px" }} 
        //     onClick={this.sendData}
        //    alt={this.props.sticker.name}
        //  /> 
        // }
        // else
        // {
        //     <img
        //     src={`/Images/${this.props.sticker.category}/${this.props.sticker.subCategory}/${this.props.sticker.name}/${this.state.number}.${this.props.sticker.imageType}`}
        //     style={{ height: "170px",width:"170px" }} 
        //     onClick={this.sendData}
        //    alt={this.props.sticker.name}
        //  /> 
        // }
        return (
            <>
            
            {/* {img_src} */}
            {this.state.number>0 ?
             <img
             src={`/Images/${this.props.sticker.category}/${this.props.sticker.subCategory}/${this.props.sticker.name}/${this.state.number}.svg#svgView(preserveAspectRatio(none))`}
             style={{ height: "200px",width:"60%" }}
             onClick={this.sendData}
            alt={this.props.sticker.name}
          /> :
          <img
          src={`/Images/${this.props.sticker.category}/${this.props.sticker.subCategory}/${this.props.sticker.name}/${this.state.number}.${this.props.sticker.imageType}#svgView(preserveAspectRatio(none))`}
          style={{ height: "200px",width:"60%" }} 
          onClick={this.sendData}
         alt={this.props.sticker.name}
       /> 
            }

           {(this.props.sticker.left==0 && this.props.sticker.right==0) ?
          null: <>
          <span
          className="fas fa-chevron-left"
          onClick={this.DecreaseNumber} 
          style={{ position: "absolute",  opacity: "0.9", left: "7%", bottom: "45%", fontSize:"18px",transform: "scaleY(1.8)" }}
          ></span>
          <span
          className="fas fa-chevron-right"
          onClick={this.IncreaseNumber} 
          style={{ position: "absolute",  opacity: "0.9", right: "7%", bottom: "45%", fontSize:"18px",transform: "scaleY(1.8)" }}
          ></span>
          </>
           }
                
            </>
        )
    }
}
