import React, { Component } from 'react'
import axios from 'axios'
import style from "./custom.module.css";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export class DisplayImageEach extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sno:null,
            name:null,
            _id:null,
            stickerName:null,
            category:null,
            subCategory:null,
            imageType:null,
            left:0,
            right:0
        }
    }

    componentDidMount=()=>{
        this.setState({sno:this.props.sticker.sno,
        name:this.props.sticker.name,
        _id:this.props.sticker._id,
        stickerName:this.props.sticker.name,
        category:this.props.sticker.category,
        subCategory:this.props.sticker.subCategory,
        imageType:this.props.sticker.imageType,
        left:this.props.sticker.left,
        right:this.props.sticker.right
    })
        console.log(this.props.sticker)

    }
    saveChanges=()=>{
        var person = prompt("Please enter your name", "Harry Potter");
    //     axios.post("http://localhost:3001/display",{sno:this.state.sno,name:this.state.name,stickerId:this.state._id,
    // left:this.state.left,right:this.state.right,imageType:this.state.imageType})
    //         .then((response) => {
    //             console.log(response)
    //             this.setState({
    //                 stickerName:this.state.name
    //             })
    //         }).catch((error) => {
    //             console.log(error)
    //     });
    }
    
    removeConfirm=()=>{
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to delete this?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => this.removeSticker()
              },
              {
                label: 'No',
              }
            ]
          });
    }
    removeSticker=()=>{
        
        axios.post("http://localhost:3001/display",{stickerId:this.state._id})
            .then((response) => {
                this.setState({
                    stickerName:null,
                    name:null,
                    sno:null,
                    _id:null,
                    imageType:null,
                    left:0,
                    right:0
                })
                console.log(response)
            }).catch((error) => {
                console.log(error)
        });
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        var {sno,name,_id,stickerName,category,subCategory,imageType,left,right}=this.state
        return (
            <>  
                {name==null?null:
                <div className={`${style.nopadding} col-4 "`}
               
                style={{textAlign:"center"}}>
                    <h5>
                    <span style={{color:"blue"}}><a onClick={this.saveChanges}><i class="fas fa-save"></i></a></span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    <input name="sno" value={sno} size="4" onChange={this.changeHandler}></input>
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 
                    <span><a onClick={this.removeConfirm}><i class="fa fa-trash-o" aria-hidden="true"></i></a></span></h5>

                   <img
                   src={`/Images/${category}/${subCategory}/${stickerName}/0.${imageType}`}
                   style={{ height: "170px",width:"170px" }}
                  alt={name}
                   />
                   <h5><input name="name" value={name} onChange={this.changeHandler}></input></h5>
                   <h5><input name="imageType" value={imageType} onChange={this.changeHandler}></input></h5>
                   <h5><input name="left" value={left} onChange={this.changeHandler}></input></h5>
                   <h5><input name="right" value={right} onChange={this.changeHandler}></input></h5>
                   <h5><input name="category" value={category} onChange={this.changeHandler}></input></h5>
                   <h5><input name="subCategory" value={subCategory} onChange={this.changeHandler}></input></h5>
                </div>}
                
            </>
        )
    }
}

export default DisplayImageEach