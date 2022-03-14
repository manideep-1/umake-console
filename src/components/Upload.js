// import React from 'react'
// import style from "./appStyle.module.css";
// const axios = require("axios");

// class Upload extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             category: null,
//             subCategory: null,
//             name: null,
//             sno: null,
//             imageType: null,
//             left:null,
//             right:null
//         };
//         this.onFormSubmit = this.onFormSubmit.bind(this);
//     }
//     onFormSubmit(e){
//         e.preventDefault();
//         if(this.state.category==null || this.state.subCategory==null || this.state.sno==null ||
//         this.state.name==null || this.state.imageType==null ||this.state.left==null||this.state.right==null||
//         this.state.category=="" || this.state.subCategory=="" || this.state.sno=="" ||this.state.name=="" ||
//         this.state.imageType==""||this.state.left==""||this.state.right=="")
//         {
//             alert("Field cannot be empty")
//         }
//         else
//         {
//             axios.post("http://localhost:3001/upload",{category:this.state.category,subCategory:this.state.subCategory,
//             name:this.state.name,sno:this.state.sno,imageType:this.state.imageType,left:this.state.left,
//         right:this.state.right})
//                     .then((response) => {
//                         alert("successfully uploaded");
//                     }).catch((error) => {
//                         console.log(error)
//                 });
//         }
//     }
    
//     changeHandler = (e) => {
//         this.setState({ [e.target.name]: e.target.value })
//     }

//     render() {
//         return (
//             <div className="row my-3 py-3">
//             <div className="col-3"></div>
//             <div className="text-center border border-secondary rounded col-5 p-3 mx-5 mb-5" style={{backgroundColor:"white"}}>
//             <form method="POST" onSubmit={this.onFormSubmit}>
//                 <h4>Sticker Data Upload</h4>
                
//             <label>
//               <input name="name" value={this.state.name} onChange={this.changeHandler} id={style.phonenumber} placeholder=" " />
//               <span class={style.inputname}>Name</span>
//             </label>
//             <br></br>
//             <label>
//               <input name="category" value={this.state.category} onChange={this.changeHandler} id={style.phonenumber} placeholder=" " />
//               <span class={style.inputname}>Category</span>
//             </label>
//             <br>
//             </br>
//             <label>
//               <input name="subCategory" value={this.state.subCategory} onChange={this.changeHandler} id={style.phonenumber} placeholder=" " />
//               <span class={style.inputname}>Sub Category</span>
//             </label>
//             <br></br>
//             <label>
//               <input name="sno" value={this.state.sno} onChange={this.changeHandler} id={style.phonenumber} placeholder=" " />
//               <span class={style.inputname}>Serial No</span>
//             </label>
//             <br></br>
//             <label>
//               <input name="imageType" value={this.state.imageType} onChange={this.changeHandler} id={style.phonenumber} placeholder=" " />
//               <span class={style.inputname}>ImageType</span>
//             </label><br></br>
//             <label>
//               <input name="left" value={this.state.left} onChange={this.changeHandler} id={style.phonenumber} placeholder=" " />
//               <span class={style.inputname}>Left</span>
//             </label>&nbsp;&nbsp;
//             <label>
//               <input name="right" value={this.state.right} onChange={this.changeHandler} id={style.phonenumber} placeholder=" " />
//               <span class={style.inputname}>Right</span>
//             </label>
//             <br></br>
//             <button className="btn btn-warning px-5" type="submit" style={{width:"60%"}}>UPLOAD</button>
//             </form>
//             </div>
//             </div>
//         )
//     }
// }

// export default Upload
import React from 'react'
import style from "./appStyle.module.css";
const axios = require("axios");

class Upload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            category: null,
            subCategory: null,
            name: null,
            sno: null,
            imageType: null,
            left:null,
            right:null,
            
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onFormSubmit(e){
      const all=this.state.name.split("\n");
        e.preventDefault();
        if(this.state.category==null || this.state.subCategory==null || 
        this.state.name==null || 
        this.state.category=="" || this.state.subCategory=="" || this.state.name=="" )
        {
            alert("Field cannot be empty")
        }
        else
        { all.map((arr,index) => {
          const each = arr.split(" ");
         
          axios.post("http://localhost:3001/upload",{category:this.state.category,subCategory:this.state.subCategory,
          name:each[0],sno:1,imageType:each[1],left:each[2],
      right:each[3]})
                  .then((response) => {
                    console.log(index+1+" done")
                    if(index+1==all.length)
                      alert(" All Successfully uploaded");
                  }).catch((error) => {
                      console.log(error)
              });
      }
        )}
      
      
          
    }
    
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className="row my-3 py-3">
            <div className="col-3"></div>
            <div className="text-center border border-secondary rounded col-5 p-3 mx-5 mb-5" style={{backgroundColor:"white"}}>
            <form method="POST" onSubmit={this.onFormSubmit}>
                <h4>Sticker Data Upload</h4>
                
            <label>
              <textarea name="name" value={this.state.name} onChange={this.changeHandler} id={style.phonenumber} placeholder=" " >
              <span class={style.inputname}>Name</span>
              </textarea>
            </label>
            <br></br>
            <label>
              <input name="category" value={this.state.category} onChange={this.changeHandler} id={style.phonenumber} placeholder=" " />
              <span class={style.inputname}>Category</span>
            </label>
            <br>
            </br>
            <label>
              <input name="subCategory" value={this.state.subCategory} onChange={this.changeHandler} id={style.phonenumber} placeholder=" " />
              <span class={style.inputname}>Sub Category</span>
            </label>
            <br></br>
            {/* <label>
              <input name="sno" value={this.state.sno} onChange={this.changeHandler} id={style.phonenumber} placeholder=" " />
              <span class={style.inputname}>Serial No</span>
            </label>
            <br></br>
            <label>
              <input name="imageType" value={this.state.imageType} onChange={this.changeHandler} id={style.phonenumber} placeholder=" " />
              <span class={style.inputname}>ImageType</span>
            </label><br></br>
            <label>
              <input name="left" value={this.state.left} onChange={this.changeHandler} id={style.phonenumber} placeholder=" " />
              <span class={style.inputname}>Left</span>
            </label>&nbsp;&nbsp;
            <label>
              <input name="right" value={this.state.right} onChange={this.changeHandler} id={style.phonenumber} placeholder=" " />
              <span class={style.inputname}>Right</span>
            </label> */}
            <br></br>
            <button className="btn btn-warning px-5" type="submit" style={{width:"60%"}}>UPLOAD</button>
            </form>
            </div>
            </div>
        )
    }
}

export default Upload