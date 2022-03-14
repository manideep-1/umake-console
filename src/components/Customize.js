import React, { Component } from "react";
import style from "./custom.module.css";
import { InputGroup, FormControl, Card } from "react-bootstrap";
import Draggable from "react-draggable";
import Dropzone from "react-dropzone";
import { Resizable, ResizableBox } from 'react-resizable';
import { Rnd } from "react-rnd";
import axios from 'axios';
import SVG from 'react-inlinesvg';
import html2canvas from 'html2canvas'
import ImageInCustomize from "./ImageInCustomize";

const styler= {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};
export class Customize extends Component {
  constructor(props) {
    super(props)

    this.state = {
      colorselect:"white",
      arrayF: [],
      arrayB: [],
      draftId:null,
      fontName: "Montserrat",
      color: "black",
      alignment: "left",
      bold: false,
      underline: false,
      italic: false,
      word: "",
      frontString:"",
      backString:"",
      file:null,
      fontSize: 20,
      current_mode:false,
      border: true,
      option: 0,
      background: "#ffffff",
      tshirtFront: "white_mockup.png",
      tshirtBack: "white_mockup.png",
      selected: "",
      deltaPosition: { x: 0, y: 0 },
      acceptedFiles: [],
      arrayFimg: [],
      arrayBimg: [],
      stickers: null,
      withProps: false,
      height:"50px",
      width:"50px",
      disabledd:false,
      stickerId:null,
      src:null,
      stickerNumber:0,
      svg_color:"red",
      text_colors:["white","black","red","orange","green","blue","purple","pink","gray","yellow","brown","silver","gold","indigo"],
     tshirt_colors:["white","blue","#8b0000","black","brown","red","yellow","green","#90ee90","pink","orange","white","blue","#8b0000","black","brown","red","yellow","green","#90ee90","pink","orange","#3f4377","#3f4377"],
      category:-1,
      subCategory:-1,
      cat_subcat_array:[["Dance","Smileys","People","Hands","Animals","Nature","Love","Excited","Weather","Objects & Symbols"]
    ,["Most Popular","smile","Peoplee","Hands","Animals","Nature","Love","Excited","Weather","Objects & Symbols"],
    ["Most Popular","Smileys","Peopleee","Hands","Animals","Nature","Love","Excited","Weather","Objects & Symbols"],
    ["Most Popular","Smileys","People","Hands","Animals","Nature","Love","Excited","Weather","Objects & Symbols"],
    ["Most Popular","Smileys","People","Hands","Animals","Nature","Love","Excited","Weather","Objects & Symbols"],
    ["Most Popular","Smileys","People","Hands","Animals","Nature","Love","Excited","Weather","Objects & Symbols"],
    ["Most Popular","Smileys","People","Hands","Animals","Nature","Love","Excited","Weather","Objects & Symbols"],
    ["Most Popular","Smileys","People","Hands","Animals","Nature","Love","Excited","Weather","Objects & Symbols"]],
      category_array:["Music_and_Dance","emojis","Shapes & Symbols","Nature","Music","Transportation","Food","Travel"],
      fonts:["homoarak","adler","architext","aTheme","blackchancery","burnstown-dam","carnivalee",
      "earwigfactory","eutemia","fakereceipt","goodtimes","gotheroin","gypscurve","hjnaruto","piazzolla","precious",
    "pricedown","quickhand","runytunes","scriptin","still-time","the-godfather","action-jackson","alanis-hand",
    "bloktype","bricks","cenobyte","channel-tuning","domestic-manners","dotty","flatline","ghastly-panic","guild",
  "gyparody","hvd-peace","hvdsteinzeit","if","iron-maiden","james-almaien","jeansunho","jo-wrote",
"metal-lord","mistervampire","octin-stencil","rm-serifancy","rm-typerighter",
"sicknees","spiders","two-turtle"]

    
    };
    this.onChangeFile = this.onChangeFile.bind(this);
  }
  onChangeFile(e) {
    this.setState({file:e.target.files[0]}
      ,()=>console.log(this.state.file.mimetype));
   
}
retrieveStickers=()=>{
  axios.post("http://localhost:3001/customize",{category:this.state.category_array[this.state.category],
  subCategory:this.state.cat_subcat_array[this.state.category][this.state.subCategory]})
      .then((response) => {
        this.setState({ stickers: response.data.images })
        console.log(response.data.images)
      }).catch((error) => {
        console.log(error)
      });
}
 htmltocanvas=async()=>{
  console.log(this.state.arrayFimg)
    var arrayFimgCopy2 = []
    var arrayBimgCopy2 = []
    this.state.arrayF.map((arr)=>{
      arr.selected = false
    })
    this.state.arrayB.map((arr)=>{
      arr.selected = false
    })
    this.state.arrayFimg.map((arr) => {
      arrayFimgCopy2.push({ stickerId: arr.stickerId, deltaPosition: arr.deltaPosition, height: arr.height,width:arr.width,stickerNumber:arr.stickerNumber })
    })
    this.state.arrayBimg.map((arr) => {
      arrayBimgCopy2.push({ stickerId: arr.stickerId, deltaPosition: arr.deltaPosition, height: arr.height,width:arr.width,stickerNumber:arr.stickerNumber  })
    })
  var front=null
  var back=null
  this.clearSelection()
  this.setState({
   border:true
  },async()=>
  
  {console.log(this.state.category_array)
    await html2canvas(document.getElementById("imp"),{scale:1,allowTaint: true, useCORS: true,
      taintTest: false,scrollY:-window.scrollY,scrollX:-window.scrollX}).
      then(function(canvas) {
      document.body.appendChild(canvas);
      front=canvas.toDataURL('image/png') 
      console.log(front)
      document.body.removeChild(canvas);
      
  }
  )
  this.setState({border:false},
    async()=>{console.log(this.state.cat_subcat_array[0][0])
      await html2canvas(document.getElementById("imp"),{scale:1,allowTaint: true, useCORS: true,
        taintTest: false,scrollY:-window.scrollY,scrollX:-window.scrollX}).
        then(await function(canvas) {
        document.body.appendChild(canvas);
        back=canvas.toDataURL('image/png') 
        document.body.removeChild(canvas);
        })
        let user_id = localStorage.getItem('user_id')
        axios.post(`http://localhost:3001/customize`, {
          color: this.state.colorselect, frontArray: this.state.arrayF, backArray: this.state.arrayB,
          frontImgArray: arrayFimgCopy2, backImgArray: arrayBimgCopy2, user_id,draftId:this.state.draftId,front:front,
          back:back
        })
          .then(response =>{
          console.log(response)
          this.setState({
            draftId:response.data.draftId
          })})
          .catch(err => {
            console.log(err);
          })
    })   
});
}
  arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };

 
  componentDidMount = () => {
    var arrayFimgCopy = []
    var arrayBimgCopy = []
    
    if(this.props.location.state != undefined)
    {
      this.props.location.state.arrayFimg.map((arr) => {
        arrayFimgCopy.push({ stickerId: arr.customizeImg_attributes_front.stickerId,
           deltaPosition: arr.customizeImg_attributes_front.deltaPosition,
           height: arr.customizeImg_attributes_front.height,
           width: arr.customizeImg_attributes_front.width,
           stickerNumber:arr.customizeImg_attributes_front.stickerNumber,
           name: `/Images/${arr.sticker.category}/${arr.sticker.subCategory}/${arr.sticker.name}/${arr.customizeImg_attributes_front.stickerNumber}.${
            arr.customizeImg_attributes_front.stickerNumber>0?"svg#svgView(preserveAspectRatio(none))":arr.sticker.imageType}` })
      })
      this.props.location.state.arrayBimg.map((arr)=>{
        arrayBimgCopy.push({ stickerId: arr.customizeImg_attributes_back.stickerId,
          deltaPosition: arr.customizeImg_attributes_back.deltaPosition,
          height: arr.customizeImg_attributes_back.height,
          // name: `data:${arr.sticker.type};base64,` + this.arrayBufferToBase64(arr.sticker.data.data) })
          // name: require(`../Images/${arr.sticker.name}.svg`) })
          name: `/Images/${arr.sticker.category}/${arr.sticker.subCategory}/${arr.sticker.name}/${arr.customizeImg_attributes_front.stickerNumber}.${arr.sticker.imageType}#svgView(preserveAspectRatio(none))` })
      })
      console.log("PROPS")
        console.log(this.props.location.state)
        this.setState({arrayF:this.props.location.state.arrayF,
                       arrayB:this.props.location.state.arrayB,
                       arrayFimg:arrayFimgCopy,
                       arrayBimg:arrayBimgCopy,
                       draftId:this.props.location.state.draftId,
                       tshirtFront:this.props.location.state.image+"_mockup.png",
                       tshirtBack:this.props.location.state.image+"_mockup.png",
                       colorselect:this.props.location.state.image
                      })   
    }
    axios.get("/customize")
      .then((response) => {
        this.setState({ stickers: response.data })
        console.log(response.data)
      }).catch((error) => {
        console.log(error)
      });
     
  }

  removeElementF = (comp_info, index) => {
    console.log(comp_info);

    var newarrayF = this.state.arrayF.splice(comp_info, 1);
    this.setState({
      arrF: newarrayF,
    },()=>this.clearSelection());
  };

  removeElementFImg = (comp_info, index) => {
    console.log(comp_info);

    var newarrayF = this.state.arrayFimg.splice(comp_info, 1);
    this.setState({
      arrFimg: newarrayF,
    });
  };
  
  removeElementB = (comp_info, index) => {
    console.log(comp_info);
    var newarrayB = this.state.arrayB.splice(comp_info, 1);
    this.setState({
      arrB: newarrayB,
    },()=>this.clearSelection());
  };

  removeElementBImg = (comp_info, index) => {
    console.log(comp_info);

    var newarrayB = this.state.arrayBimg.splice(comp_info, 1);
    this.setState({
      arrBimg: newarrayB,
    });
  };
  changeWord = (event) => {
    this.setState({
      word: event.target.value,
    });
  };

  handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    });
  };

  handleDragImg = (e, ui) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    });
  };

  clearSelection = (event) => {
    this.state.arrayF.map((arr) => (arr["selected"] = false));
    this.state.arrayB.map((arr) => (arr["selected"] = false));
    this.state.arrayFimg.map((arr) => (arr["selected"] = false));
    this.state.arrayBimg.map((arr) => (arr["selected"] = false));
    this.setState({
      word: "",
      fontSize: "20",
      bold: false,
      underline: false,
      italic: false,
      fontName: "Montserrat",
      color: "black",
      alignment: "left",
    });
  };
  changeFontSize = (event) => {
    this.setState({
      fontSize: event.target.value,
    });
  };

  addImgF = (event) => {
    // console.log(event)
    var newaddImgf = this.state.arrayFimg.slice();
    newaddImgf.push({
      stickerId:this.state.stickerId,
      stickerNumber:this.state.stickerNumber,
      name: this.state.src+"#svgView(preserveAspectRatio(none))",
      deltaPosition: { x: 0, y: 0 },
      height: "50px",
      width:"50px",
      color:"black",
      selected:false
      
    });
    this.setState({
      arrayFimg: newaddImgf,
      // selected: false,
    });
  };
  addImgB = (event) => {
    // console.log(event)
    var newaddImgB = this.state.arrayBimg.slice();
    newaddImgB.push({
      stickerId:this.state.stickerId,
      stickerNumber:this.state.stickerNumber,
      name: this.state.src+"#svgView(preserveAspectRatio(none))",
      deltaPosition: { x: 0, y: 0 },
      height: "50px",
      width:"50px",
      color:"black",
      
    });
    this.setState({
      arrayBimg: newaddImgB,
      // selected: false,
    });
  };
 
  addNewF = (event) => {
    // console.log(this.state.deltaPosition)
    var newarrayF = this.state.arrayF.slice();
    var c = 0;
    console.log(newarrayF)
    this.state.arrayF.map((arr, index) => (
      (arr["selected"] == true) ?

        (this.state.arrayF[index]["element"] = this.state.word,
          this.state.arrayF[index]["fontName"] = this.state.fontName,
          this.state.arrayF[index]["color"] = this.state.color,
          this.state.arrayF[index]["bold"] = this.state.bold,
          this.state.arrayF[index]["underline"] = this.state.underline,
          this.state.arrayF[index]["italic"] = this.state.italic,
          this.state.arrayF[index]["fontSize"] = this.state.fontSize
        ) : c++

    )
    );
    if (this.state.word != "" && c == newarrayF.length) {
      newarrayF.push({
        element: this.state.word,
        fontName: this.state.fontName,
        color: this.state.color,
        alignment: this.state.alignment,
        bold: this.state.bold,
        underline: this.state.underline,
        italic: this.state.italic,
        fontSize: this.state.fontSize,
        selected: false,
        deltaPosition: { x: 0, y: 0 },
      });
      this.setState({
        arrayF: newarrayF,
        word: "",
        fontSize: "20",
        bold: false,
        underline: false,
        italic: false,
        fontName: "Montserrat",
        color: "black",
        alignment: "left",
      });
    }
  };
  addNewB = (event) => {
    // console.log(this.state.deltaPosition)
    var newarrayB = this.state.arrayB.slice();
    var c = 0;
    console.log(newarrayB)
    this.state.arrayB.map((arr, index) => (
      (arr["selected"] == true) ?

        (this.state.arrayB[index]["element"] = this.state.word,
          this.state.arrayB[index]["fontName"] = this.state.fontName,
          this.state.arrayB[index]["color"] = this.state.color,
          this.state.arrayB[index]["bold"] = this.state.bold,
          this.state.arrayB[index]["underline"] = this.state.underline,
          this.state.arrayB[index]["italic"] = this.state.italic,
          this.state.arrayB[index]["fontSize"] = this.state.fontSize
        ) : c++

    )
    );
    if (this.state.word != "" && c == newarrayB.length) {
      newarrayB.push({
        element: this.state.word,
        fontName: this.state.fontName,
        color: this.state.color,
        alignment: this.state.alignment,
        bold: this.state.bold,
        underline: this.state.underline,
        italic: this.state.italic,
        fontSize: this.state.fontSize,
        selected: false,
        deltaPosition: { x: 0, y: 0 },
      });
      this.setState({
        arrayB: newarrayB,
        word: "",
        fontSize: "20",
        bold: false,
        underline: false,
        italic: false,
        fontName: "Montserrat",
        color: "black",
        alignment: "left",
      });
    }
  };
  callbackFunction = (childData,stickerid,number) => {
    this.setState({
      src:childData,
      stickerId:stickerid,
      stickerNumber:number
      // src:`/Images/${sticker.category}/${sticker.subCategory}/${sticker.name}/0.${sticker.imageType}`
    },this.state.border?this.addImgF:this.addImgB)
};
 
  render() {

    const {
      category,
      subCategory,
      arrayF,
      arrayB,
      current_mode,
      fontName,
      color,
      alignment,
      bold,
      italic,
      underline,
      border,
      option,
      colorselect,
      tshirtFront,
      tshirtBack,
      word,
      fontSize,
      deltaPosition,
      acceptedFiles,
      arrayFimg,
      arrayBimg,
      stickerId,
      tshirt_colors,
      src,
      svg_color,
      disabledd
    } = this.state;
    var tshirtfront1 = "white_mockup.png";
    var tshirtback1 = "white_mockup.png";
    var tshirtfront2 = "blue_mockup.png";
    var tshirtback2 = "blue_mockup.png";
    var tshirtfront3 = "darkred_mockup.png";
    var tshirtback3 = "darkred_mockup.png";
    var tshirtfront4 = "black_mockup.png";
    var tshirtback4 = "black_mockup.png";
    var tshirtfront5 = "brown_mockup.png";
    var tshirtback5 = "brown_mockup.png";
    var tshirtfront6 = "red_mockup.png";
    var tshirtback6 = "red_mockup.png";
    var tshirtfront7 = "yellow_mockup.png";
    var tshirtback7 = "yellow_mockup.png";
    var tshirtfront8 = "green_mockup.png";
    var tshirtback8 = "green_mockup.png";
    var tshirtfront9 = "lightgreen_mockup.png";
    var tshirtback9 = "lightgreen_mockup.png";
    var tshirtfront10 = "pink_mockup.png";
    var tshirtback10 = "pink_mockup.png";
    var tshirtfront11 = "orange_mockup.png";
    var tshirtback11 = "orange_mockup.png";

    let mainelement;
    let map_val;
    let font_val;
    let text_colors,tshirt_colors_val
    if(option===1)    {
      font_val = this.state.fonts.map(arr=>
        <span
        className={
          fontName === arr
            ? "m-2 rounded bg-dark text-white float-left pt-2"
            : "m-2 rounded  float-left pt-2"
        }
        id={style.fontBox}
        onClick={() => this.setState({ fontName:arr })}
      >
        <h2
          className="display2 pb-0 pt-1 mb-0"
          style={{ textAlign: "center",fontFamily:arr }}
        >
          aA
        </h2>
        <div
          className="pt-0 mt-0"
          style={{ textAlign: "center", fontSize: "10px" }}
        >
          {arr}
        </div>
      </span>
      
        )

    }
    if(option===1)
    {
      text_colors= this.state.text_colors.map(arr=>
        <div
                className="rounded m-1"
                style={{
                  backgroundColor: arr,
                  height: "30px",
                  cursor: "pointer",
                  width: "30px",
                  border: "1px #CCCCCC solid",
                }}
                onClick={() => this.setState({ color: arr })}
              ></div>)
    }
    if(option===0)
    {
      tshirt_colors_val= this.state.tshirt_colors.map((arr,index)=>
        <div
        className="rounded m-2 "
        id={style.colorBtn}
        style={{ backgroundColor: arr }}
        onClick={() =>
          this.setState({
            colorselect: arr,
            tshirtFront: arr+"_mockup.png",
            tshirtBack: arr+"_mockup.png",
          })
        }
      ></div>)
    }
    if(category!==-1 && subCategory!==1)
    {
    map_val= this.state.cat_subcat_array[category].map((arr,index)=>
    <div onClick={
      ()=>{
      this.setState({subCategory:index},()=>this.retrieveStickers())
    //  
    }}
    className="text-center py-3 pt-4" id={style.subCategory}>
      {arr}
      </div>
    );
    }
    if (option === 0) {
      // ---------------------- Colors -------------------------------
      mainelement = (
        <div className="p-5">
         
          <div className="row p-3 mb-5 align-items-end d-flex justify-content-center">
            <div className="pb-0 mb-0">SELECTED COLOR :</div>
            <div
              className="rounded mx-3 pb-0 mb-0 border border-secondary"
              style={{
                height: "30px",
                width: "30px",
                backgroundColor: colorselect,
              }}
            ></div>
          </div>
          <div className="row p-0 m-0 d-flex justify-content-center">
 
          
         
       {tshirt_colors_val}
          </div>
        </div>
      );
    } else if (option === 1) {
      // ---------------------- ADD TEXT -------------------------------
      mainelement = (
        <div className="p-5">
          <input
            className="form-control mb-2"
            type="text"
            value={word}
            onChange={this.changeWord}
          ></input>
          <button
            className="btn btn-dark mb-4 float-right"
            onClick={border ? this.addNewF : this.addNewB}
          >
            ADD TO DESIGN
          </button>
          <div className="mb-4 col-12 row mx-0 px-0">
            {/* <span className="col-4 pb-2 mx-0 px-0" style={{fontSize:"15px"}}>Font Size :</span> */}
            <input
              className="form-control col-2 mx-0"
              type="number"
              value={fontSize}
              onChange={this.changeFontSize}
            ></input>
            <div className="btn-group col-3">
              <div
                className={bold ? "btn btn-dark active" : "btn btn-secondary"}
                onClick={() => this.setState({ bold: !bold })}
                style={{ fontWeight: "bold" }}
              >
                B
              </div>
              <div
                className={italic ? "btn btn-dark active" : "btn btn-secondary"}
                onClick={() => this.setState({ italic: !italic })}
                style={{ fontStyle: "italic" }}
              >
                I
              </div>
              <div
                className={
                  underline ? "btn btn-dark active" : "btn btn-secondary"
                }
                onClick={() => this.setState({ underline: !underline })}
                style={{ textDecoration: "underline" }}
              >
                U
              </div>
            </div>
          
          </div>
          <div className="col-12 row mx-0 px-0">
            <span className="col-2 mx-0 px-0 mt-1" style={{ fontSize: "15px" }}>
              Text Color :
            </span>
            <div className="row col-10">
              {text_colors}
               </div>

            <span className="col-4 pb-2 mt-2 px-0" style={{ fontSize: "15px" }}>
              Font :
            </span>
            <div
              className="mt-1"
              style={{ overflowX:"scroll", height: "130px" }}
            >
              <div style={{ width: "1000px" }}>
               {font_val}
             
             
              </div>
            </div>
          </div>
        </div>
      );
    } else if (option === 2 && category===-1) {
      // ---------------------- ADD ART -------------------------------
      mainelement = (
        <div className="py-4 px-3">
    
          <InputGroup className="">
            <FormControl
              className="bg-light shadow-none border-left-0 pl-0"
              placeholder="Search"
              style={{ fontSize: "14px" }}
            />
            <InputGroup.Append>
              <InputGroup.Text className="bg-light border-right-0"> 
                <a href="#">
                <span className="fa fa-search text-muted" size={14} />
                </a>       
              </InputGroup.Text>  
            </InputGroup.Append>
          </InputGroup>
          <div
            className="row d-flex justify-content-center"
            style={{ height: "400px", overflowY: "scroll" }}
          >
            <div
              className="rounded col-5 fa fa-heart text-center pt-4 m-2 mt-4"
              id={style.artStyle1}
              onClick={() =>
                this.setState({
                  category:0
                })
              }
            >
              <p>Most Popular</p>
            </div>
            <div
              className="rounded col-5 fa fa-meh-o text-center pt-4 m-2 mt-4"
              id={style.artStyle2}
              onClick={() =>
                this.setState({
                  category:1
                })
              }
            >
              <p>Emojis</p>
            </div>
            <div
              className="rounded col-5 fa fa-star text-center pt-4 m-2 mt-4"
              id={style.artStyle3}
              onClick={() =>
                this.setState({
                  category:2
                })
              }
            >
              <p>Shapes & Symbols</p>
            </div>
            <div
              className="rounded col-5 fa fa-leaf text-center pt-4 m-2 mt-4"
              id={style.artStyle4}
              onClick={() =>
                this.setState({
                  category:3
                })
              }
            >
              <p>Nature</p>
            </div>
            <div
              className="rounded col-5 fa fa-music text-center pt-4 m-2 mt-4"
              id={style.artStyle1}
              onClick={() =>
                this.setState({
                  category:4
                })
              }
            >
              <p>Music</p>
            </div>
            <div
              className="rounded col-5 fa fa-car text-center pt-4 m-2 mt-4"
              id={style.artStyle2}
              onClick={() =>
                this.setState({
                  category:5
                })
              }
            >
              <p>Transportation</p>
            </div>
            <div
              className="rounded col-5 fa fa-lemon text-center pt-4 m-2 mt-4"
              id={style.artStyle3}
              onClick={() =>
                this.setState({
                  category:6
                })
              }
            >
              <p>Food</p>
            </div>
            <div
              className="rounded col-5 fa fa-globe text-center pt-4 m-2 mt-4"
              id={style.artStyle4}
              onClick={() =>
                this.setState({
                  category:7
                })
              }
            >
              <p>Travel</p>
            </div>
          </div>
        </div>
      );
    } else if (option === 3) {
      // ---------------------- UPLOAD -------------------------------
      mainelement = (
        // <div>
        //   <input type="file" name="myImage" onChange= {this.onChangeFile}/>
        // </div>
        <div className="p-5">
          <Dropzone
            onDrop={
              (acceptedFiles) =>
                this.setState({
                  acceptedFiles: acceptedFiles,
                },()=>console.log(this.state.acceptedFiles))
                
            }
          >
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()} id={style.uploadBox}>
                  <input {...getInputProps()} />
                  <p>Drag and drop some files here, or click to select files</p>
                  <div className="btn bg-white">Upload</div>
                </div>
              </section>
            )}
          </Dropzone>
          {/* <div>{acceptedFiles[0]["name"]}</div> */}
        </div>
      );
    } else if (option === 2 && category!==-1 && subCategory!==-1) {
      
      mainelement = (
        <>
        <div className="py-1 text-center" style={{backgroundColor:"#eeeeee",border:"1px solid #cccccc"}}>
        <span   className="fas fa-chevron-left p-1 px-2 float-left" 
        onClick={()=>{this.setState({subCategory:-1})}}
        id={style.back_sub}></span>
         <span   className="fas fa-times p-1 px-2 float-right" 
        onClick={()=>{this.setState({category:-1,subCategory:-1})}}
        id={style.back_sub}></span>
        <div className="pr-4">{this.state.cat_subcat_array[this.state.category][this.state.subCategory]}</div>
        </div>
        <div className="row ">
        {this.state.stickers == null? <p></p> :
              
              this.state.stickers.map((sticker, index) => ( 
                <div className={`${style.nopadding} col-6 "`}
                id={style.img_subcategory}
                style={{textAlign:"center"}}>
                   {/* <img
                   src={`/Images/${sticker.category}/${sticker.subCategory}/${sticker.name}/0.${sticker.imageType}`}
                   style={{ height: "170px",width:"170px" }} 
                   onClick={()=>{
                    this.setState({
                      stickerId:sticker._id,
                      src:`/Images/${sticker.category}/${sticker.subCategory}/${sticker.name}/0.${sticker.imageType}`
                    },border?this.addImgF:this.addImgB)
                   }}
                  alt={sticker.name}
                   /> */}
                   <ImageInCustomize
                   sticker={sticker}
                   parentCallback = {this.callbackFunction}
                  //  onClick={()=>{
                  //   this.setState({
                  //     stickerId:sticker._id,
                  //     src:`/Images/${sticker.category}/${sticker.subCategory}/${sticker.name}/0.${sticker.imageType}`
                  //   },border?this.addImgF:this.addImgB)
                  //  }}
                   ></ImageInCustomize>
                   
                </div>
              ))}
            </div>
        </>
      );
    }
    else if(option===2 && category!==-1 && subCategory===-1)
    {
      mainelement=(
        <>
        <div className="py-1 text-center" style={{backgroundColor:"#eeeeee",border:"1px solid #cccccc"}}>
        <span   className="fas fa-chevron-left p-1 px-2 float-left" 
        onClick={()=>{this.setState({category:-1})}}
        id={style.back_sub}></span>
        <div className="pr-4">{this.state.category_array[category]}</div>
        </div>
             {map_val}
             </>
      );

    }
  
    
    return (

      <div>
        <div
          className="container-fluid pb-2"
          style={{ backgroundColor: "#d8d8d8" }}
        >
          <div className="row mb-5">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-2">
                  <div className="row d-flex justify-content-center px-3 py-5">
                    <div
                      className="rounded col-2 col-lg-12 my-2 mx-1 mx-lg-0 p-1 text-center"
                      id={style.sideBtn}
                      style={{
                        width: "30px",
                        height: "30px",
                        cursor: "pointer",
                        fontSize: "14px",
                      }}
                      onClick={() =>
                        this.setState({
                          arrayF: [],
                          arrayB: [],
                          word: "",
                          fontSize: "20",
                          bold: false,
                          underline: false,
                          italic: false,
                          fontName: "Montserrat",
                          color: "black",
                          alignment: "left",
                          arrayFimg: [],
                          arrayBimg: [],
                        })
                      }
                     
                    >
                      Reset
                    </div>

                  
                      <div
                        className="col-2 col-lg-12 mx-1 mx-lg-0 my-2 p-1 rounded text-center"
                        onClick={()=>{this.setState({border:true},()=>this.clearSelection())}}
                        id={style.pconly}
                        style={
                          border?
                          {
                          border: "none",
                          borderBottom: "solid 3px #333333",
                          }:null
                        
                        }
                      >
                        <img
                          className="w-75 m-0 my-2"
                          src={tshirtFront}
                          alt=""
                        />
                        <div
                          className="text-center"
                          style={{ fontSize: "10px" }}
                        >
                          FRONT
                        </div>
                      </div>
                   
                      <div
                        className="col-2 col-lg-12 mx-1 mx-lg-0 my-2 p-1 rounded text-center"
                        onClick={()=>{this.setState({border:false},()=>this.clearSelection())}}
                        id={style.pconly}
                        style={
                          border==false?
                          {
                          border: "none",
                          borderBottom: "solid 3px #333333",
                          }:null
                        
                        }
                      >
                        <img
                          className="w-75 m-0 my-2"
                          src={tshirtFront}
                          alt=""
                        />
                        <div
                          className="text-center"
                          style={{ fontSize: "10px" }}
                        >
                            BACK
                        </div>
                      </div>
                  </div>
                </div>
               
                <div className="col-lg-9" style={{height:"fit-content",backgroundColor:"#d8d8d8"}}
               
                // id={style.image_custom}
                >
                  <div className="row" id="imp" style={{backgroundColor:"#d8d8d8"}}>
                  {border ? (
                    <img 
                    
                      style={{width:"100%",height:"100%"}}
                      src={tshirtFront}
                      alt=""
                      
                    />
                  ) : (
                      <img
                      style={{width:"100%",height:"100%"}}
                        src={tshirtBack}
                        alt=""
                       
                      />
                    )}
                  
                  <div
                    onClick={(e) => {
                      border?this.addNewF():this.addNewB()
                      this.clearSelection();

                    }}
                    className={
                      current_mode
                        ? "p-0 border border-secondary border-dotted"
                        : "p-0 "
                    }
                    // id="boundedone"
                    style={{
                      position: "absolute",
                      margin:"0 auto",
                      // width:"270px",
                      // height:"400px",
                      // top:"-450px",
                      right: "28%",
                      top: "130px",
                      left:"24%",
                      top:"20%",
                      width: "51%",
                      height:"60%",
                      overflow: "hidden",
                      
                    }}
                  >
                    {border
                      ? arrayFimg.map((arr, index) => (
                        <Draggable
                         
                          onDrag={this.handleDragImg}
                          // bounds="#boundedone"
                          onStart={() =>
                            this.setState({
                              deltaPosition: arr["deltaPosition"],
                              current_mode:true,
                            })
                          }
                          onStop={() => (
                            (arr["deltaPosition"] = deltaPosition),
                            this.setState({
                              deltaPosition: { x: 0, y: 0 },
                              current_mode:false
                            })
                          )}
                          position={arr["deltaPosition"]}
                          className="p-0 m-0"
                          // bounds="#boundedone"
                        >
                          <div
                            className={
                              arr["selected"]
                                ? "p-0 m-0 border border-secondary"
                                : "p-0 m-0"
                            }
                            style={{
                              cursor: "grab",
                              position:"absolute"
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              arrayFimg.map(
                                (arr2) => (arr2["selected"] = false)
                              );
                              arr["selected"] = true;
                            }}
                          >
                            {arr["selected"] ? (
                              <span
                                className="btn btn-light btn-circle"
                                onClick={this.removeElementFImg.bind(
                                  arr,
                                  index
                                )}
                                id={style.closeBtnImg}
                              >
                                <i class="fa fa-times" aria-hidden="true"></i>
                              </span>
                            ) : null}
                         
                        <Rnd
                          className={
                            arr["selected"]
                              ? "p-0 m-0 border border-secondary"
                              : "p-0 m-0"
                          }
                        // bounds="#boundedone"
                        // bounds="parent"
                        id={style.image_gallery}               
                        size={{ width: arr["width"],  height: arr["height"] }}
                        position={{ x: this.state.x, y: this.state.y }}
                        onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}
                        onResizeStart={(e, direction, ref, delta, position) => {
                          ref.style.width=arr["width"]
                          ref.style.height=arr["height"]
                          this.setState({
                            width: arr["width"],
                            height: arr["height"],
                            ...position,
                          });
                        }}
                        onResizeStop={(e, direction, ref, delta, position) => {
                          arr["width"]=ref.style.width
                          arr["height"]=ref.style.height
                          this.setState({
                            width: ref.style.width,
                            height: ref.style.height,
                            ...position,
                          });
                        }}
                      >
                        <img
                            
                              style={{
                                cursor: "grab",
                               width:arr["width"],
                               height:arr["height"]
                              }}
                              draggable={false}
                              src={arr["name"]}
                            ></img>
                            </Rnd>
                      {/* </Resizable>  */}
                           
                            {/* {arr["selected"] ? (
                              <div
                                className="btn btn-light btn-circle"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  var arrayFimgg = arrayFimg;
                                  arrayFimgg[index]["height"]=arrayFimg[index]["height"]+20
                                  this.setState({
                                    arrayFimg:arrayFimgg
                                  })
                                }}
                                id={style.plusBtn}
                              >
                                <i class="fa fa-plus" aria-hidden="true"></i>
                              </div>
                            ) : null}
                            {arr["selected"] ? (
                              <div
                                className="btn btn-light btn-circle"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  var arrayBimgg = arrayBimg;
                                  arrayBimgg[index]["height"]=arrayBimg[index]["height"]+20
                                  this.setState({
                                    arrayBimg:arrayBimgg
                                  })
                                }}
                                id={style.minusBtn}
                              >
                                <i class="fa fa-minus" aria-hidden="true"></i>
                              </div>
                            ) : null} */}
                          </div>
                        </Draggable>
                      ))
                      
                      :arrayBimg.map((arr, index) => (
                        <Draggable
                         
                          onDrag={this.handleDragImg}
                          // bounds="#boundedone"
                          onStart={() =>
                            this.setState({
                              deltaPosition: arr["deltaPosition"],
                              current_mode:true,
                            })
                          }
                          onStop={() => (
                            (arr["deltaPosition"] = deltaPosition),
                            this.setState({
                              deltaPosition: { x: 0, y: 0 },
                              current_mode:false
                            })
                          )}
                          position={arr["deltaPosition"]}
                          className="p-0 m-0"
                          // bounds="#boundedone"
                        >
                          <div
                            className={
                              arr["selected"]
                                ? "p-0 m-0 border border-secondary"
                                : "p-0 m-0"
                            }
                            style={{
                              cursor: "grab",
                              position:"absolute"
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              arrayBimg.map(
                                (arr2) => (arr2["selected"] = false)
                              );
                              arr["selected"] = true;
                            }}
                          >
                            {arr["selected"] ? (
                              <span
                                className="btn btn-light btn-circle"
                                onClick={this.removeElementBImg.bind(
                                  arr,
                                  index
                                )}
                                id={style.closeBtnImg}
                              >
                                <i class="fa fa-times" aria-hidden="true"></i>
                              </span>
                            ) : null}
                         
                        <Rnd
                          className={
                            arr["selected"]
                              ? "p-0 m-0 border border-secondary"
                              : "p-0 m-0"
                          }
                        // bounds="#boundedone"
                        // bounds="parent"
                        id={style.image_gallery}               
                        size={{ width: arr["width"],  height: arr["height"] }}
                        position={{ x: this.state.x, y: this.state.y }}
                        onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}
                        onResizeStart={(e, direction, ref, delta, position) => {
                          ref.style.width=arr["width"]
                          ref.style.height=arr["height"]
                          this.setState({
                            width: arr["width"],
                            height: arr["height"],
                            ...position,
                          });
                        }}
                        onResizeStop={(e, direction, ref, delta, position) => {
                          arr["width"]=ref.style.width
                          arr["height"]=ref.style.height
                          this.setState({
                            width: ref.style.width,
                            height: ref.style.height,
                            ...position,
                          });
                        }}
                      >
                        <img
                            
                              style={{
                                cursor: "grab",
                               width:arr["width"],
                               height:arr["height"]
                              }}
                              draggable={false}
                              src={arr["name"]+"#svgView(preserveAspectRatio(none))"}
                            ></img>
                            </Rnd>
                      
                          </div>
                        </Draggable>
                      ))
                        }
                     

                    {border
                      ?
                      arrayF.map((arr, index) => (
                        <Draggable
                          onDrag={this.handleDrag}
                          onStart={() =>
                            this.setState({
                              current_mode:true,
                              deltaPosition: arr["deltaPosition"],
                            })
                          }
                          onStop={() => (
                            (arr["deltaPosition"] = deltaPosition),
                            this.setState({
                              current_mode:false,
                              deltaPosition: { x: 0, y: 0 },
                            })
                          )}
                          position={arr["deltaPosition"]}
                          className="p-0 m-0"
                          // bounds="#boundedone"
                        
                        >
                          <div
                            className={
                              arr["selected"]
                                ? "m-0 border border-secondary"
                                : " m-0"
                            }
                            style={{
                              position:"absolute",
                              fontSize: arr["selected"]
                                ? fontSize + "px"
                                : arr["fontSize"] + "px",
                              fontStyle: arr["selected"]
                                ? italic
                                  ? "italic"
                                  : ""
                                : arr["italic"]
                                  ? "italic"
                                  : "",
                              fontWeight: arr["selected"]
                                ? bold
                                  ? "bold"
                                  : ""
                                : arr["bold"]
                                  ? "bold"
                                  : "",
                              textDecoration: arr["selected"]
                                ? underline
                                  ? "underline"
                                  : ""
                                : arr["underline"]
                                  ? "underline"
                                  : "",
                              textAlign: arr["alignment"],
                              color: arr["selected"] ? color : arr["color"],
                              fontFamily: arr["selected"]
                                ? fontName
                                : arr["fontName"],
                              cursor: "grab",
                              width: "fit-content",
                            }}
                            id={style.image_gallery}
                            onClick={(e) => {
                              e.stopPropagation();
                              arrayF.map(
                                (arr2) => (
                                  arr2["selected"]
                                    ? ((arr2["fontSize"] = fontSize),
                                      (arr2["italic"] = italic),
                                      (arr2["bold"] = bold),
                                      (arr2["underline"] = underline),
                                      (arr2["fontName"] = fontName),
                                      (arr2["color"] = color),
                                      (arr2["element"] = word))
                                    : null,
                                  (arr2["selected"] = false)
                                )
                              );
                              this.setState({
                                fontSize: arr["fontSize"],
                                bold: arr["bold"],
                                italic: arr["italic"],
                                underline: arr["underline"],
                                color: arr["color"],
                                fontName: arr["fontName"],
                                word: arr["element"],
                              });
                              arr["selected"] = true;
                            }}
                          >
                            {arr["selected"] ? word : arr["element"]}
                            {arr["selected"] ? (
                              <span
                                className="btn btn-light btn-circle"
                                onClick={this.removeElementF.bind(arr,index)}
                                id={style.closeBtn}
                              >
                                <i class="fa fa-times" aria-hidden="true"></i>
                              </span>
                            ) : null}
                          </div>
                        </Draggable>
                      ))
                    
                      : arrayB.map((arr, index) => (
                        <Draggable
                          onDrag={this.handleDrag}
                          onStart={() =>
                            this.setState({
                              current_mode:true,
                              deltaPosition: arr["deltaPosition"],
                            })
                          }
                          onStop={() => (
                            (arr["deltaPosition"] = deltaPosition),
                            this.setState({
                              current_mode:false,
                              deltaPosition: { x: 0, y: 0 },
                            })
                          )}
                          position={arr["deltaPosition"]}
                          className="p-0 m-0"
                          // bounds="#boundedone"
                        
                        >
                          <div
                            className={
                              arr["selected"]
                                ? "m-0 border border-secondary"
                                : " m-0"
                            }
                            style={{
                              position:"absolute",
                              fontSize: arr["selected"]
                                ? fontSize + "px"
                                : arr["fontSize"] + "px",
                              fontStyle: arr["selected"]
                                ? italic
                                  ? "italic"
                                  : ""
                                : arr["italic"]
                                  ? "italic"
                                  : "",
                              fontWeight: arr["selected"]
                                ? bold
                                  ? "bold"
                                  : ""
                                : arr["bold"]
                                  ? "bold"
                                  : "",
                              textDecoration: arr["selected"]
                                ? underline
                                  ? "underline"
                                  : ""
                                : arr["underline"]
                                  ? "underline"
                                  : "",
                              textAlign: arr["alignment"],
                              color: arr["selected"] ? color : arr["color"],
                              fontFamily: arr["selected"]
                                ? fontName
                                : arr["fontName"],
                              cursor: "grab",
                              width: "fit-content",
                            }}
                            id={style.image_gallery}
                            onClick={(e) => {
                              e.stopPropagation();
                              arrayB.map(
                                (arr2) => (
                                  arr2["selected"]
                                    ? ((arr2["fontSize"] = fontSize),
                                      (arr2["italic"] = italic),
                                      (arr2["bold"] = bold),
                                      (arr2["underline"] = underline),
                                      (arr2["fontName"] = fontName),
                                      (arr2["color"] = color),
                                      (arr2["element"] = word))
                                    : null,
                                  (arr2["selected"] = false)
                                )
                              );
                              this.setState({
                                fontSize: arr["fontSize"],
                                bold: arr["bold"],
                                italic: arr["italic"],
                                underline: arr["underline"],
                                color: arr["color"],
                                fontName: arr["fontName"],
                                word: arr["element"],
                              });
                              arr["selected"] = true;
                            }}
                          >
                            {arr["selected"] ? word : arr["element"]}
                            {arr["selected"] ? (
                              <span
                                className="btn btn-light btn-circle"
                                onClick={this.removeElementF.bind(arr,index)}
                                id={style.closeBtn}
                              >
                                <i class="fa fa-times" aria-hidden="true"></i>
                              </span>
                            ) : null}
                          </div>
                        </Draggable>
                      ))
                    
                      }
                
                  </div>

                </div>
                <div className="row d-flex justify-content-center"   style={{height:"fit-content",backgroundColor:"#d8d8d8"}}>
                  <button className="btn btn-dark py-2 col-5 mx-1" 
                    onClick={(e) => {
                    this.htmltocanvas();}}
                    style={{borderRadius:"0px",width:"150px",}}
                     >
                    SAVE
                  </button>
                  <button className="btn btn-dark py-2 col-5 mx-1" 
                    style={{borderRadius:"0px",width:"150px",}}
                    onClick={this.htmltocanvas}>
                      PROCEED
                  </button>
                </div>
              </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="btn-group mt-2 w-100">
                <div
                  className={
                    option === 0
                      ? "btn btn-dark p-3 active"
                      : "btn btn-dark p-3"
                  }
                  id={style.clicked}
                  onClick={() => this.setState({ option: 0,category:-1,subCategory:-1})}
                >
                  <span
                    className="fa fa-tint text-light"
                    style={{ fontSize: "30px" }}
                  ></span>
                  <br />
                  <span style={{ fontSize: "10px" }}> COLOR</span>
                </div>

                <div
                  className={
                    option === 1
                      ? "btn btn-dark p-3 active"
                      : "btn btn-dark p-3"
                  }
                  id={style.clicked}
                  onClick={() => this.setState({ option: 1 ,category:-1,subCategory:-1})}
                >
                  <span
                    className="fa fa-font"
                    style={{ fontSize: "30px" }}
                  ></span>
                  <br />
                  <span style={{ fontSize: "10px" }}>ADD TEXT</span>
                </div>

                <div
                  className={
                    option !== 0 && option !== 1 && option !== 3
                      ? "btn btn-dark p-3 active"
                      : "btn btn-dark p-3"
                  }
                  id={style.clicked}
                  onClick={() => this.setState({ option: 2,category:-1,subCategory:-1})}
                >
                  <span
                    className="fa fa-picture-o"
                    style={{ fontSize: "30px" }}
                  ></span>
                  <br />
                  <span style={{ fontSize: "10px" }}>ADD ART</span>
                </div>

                <div
                  className={
                    option === 3
                      ? "btn btn-dark  p-3 active"
                      : "btn btn-dark p-3"
                  }
                  id={style.clicked}
                  onClick={() => this.setState({ option: 3,category:-1,subCategory:-1})}
                >
                  <span
                    className="fa fa-cloud-upload"
                    style={{ fontSize: "30px" }}
                  ></span>
                  <br />
                  <span style={{ fontSize: "10px" }}>UPLOAD</span>
                </div>
              </div>
              <div className=" bg-light" style={{overflowY:"scroll",height:"500px"}}>{mainelement}</div>
            </div>
          </div>
        </div>
      </div>
    
    )
    ;
  }
}

export default Customize;