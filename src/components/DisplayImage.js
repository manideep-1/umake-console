import React, { Component } from 'react'
import axios from 'axios'
import style from "./appStyle.module.css";

import DisplayImageEach from './DisplayImageEach';

export class DisplayImage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            img: null,
            category:null,
            subCategory:null,
            stickers:null,
            
        }
    }

    submitHandle=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/display",{category:this.state.category,subCategory:this.state.subCategory})
            .then((response) => {
                console.log(response)
                this.setState({
                    stickers:response.data
                })
            }).catch((error) => {
                console.log(error)
        });
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <div  className="container-fluid">
                <div className="row">
            <div className="col-6">
             <label className="ml-5 mt-5">
              <input name="category" value={this.state.category} onChange={this.changeHandler} id={style.category} placeholder=" " />
              <span class={style.inputname}>Category</span>
            </label>
            <br></br>
            <label  className="ml-5">
              <input name="subCategory" value={this.state.subCategory} onChange={this.changeHandler} id={style.category} placeholder=" " />
              <span class={style.inputname}>Sub-Category</span>
            </label>
               
               <br></br>
                <button className="btn btn-dark ml-5 px-5" onClick={this.submitHandle}>DISPLAY</button>
             
          
            </div>
            <div className="bg-light col-4 my-4 py-5  text-center" style={{border:"1px grey dashed"}}>
            {this.state.stickers==null?
                <h2 className="text-secondary ">TOTAL: 0</h2>:
                <h2 className="text-secondary"> TOTAL:{this.state.stickers.length}</h2>}
            
            </div>
            </div>
               <div className=" row text-center" >
                {this.state.stickers==null?<p className="ml-5 p-5">Empty</p>:
                this.state.stickers.map((sticker)=>(
                    <DisplayImageEach sticker={sticker}
                  >
                    </DisplayImageEach>
                    
                ))}
               
               </div>
            </div>
        )
    }
}

export default DisplayImage