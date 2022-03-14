import React, { useState } from "react";
import "./App.css";

function Product() {
  var img1 = "./hoodie.jpg";
  var img2 = "./tshirt.jpg";
  var img3 = "./shirt.jpg";
  var img4 = "./hoodiee.jpg";
  const [img, setImg] = useState(img1);
  const [size, setSize] = useState("S");

  return (
    <div className="app">
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="p-0">
            <div
              className="row m-0 ml-sm-4 justify-content-between"
              style={{ width: "300px" }}
            >
              <div
                className="rounded bg-warning"
                style={{ height: "65px", width: "65px", overflow: "hidden" }}
                onClick={() => setImg(img1)}
              >
                <img className="h-100 float-right" src={img1} alt="" />
              </div>
              <div
                className="rounded bg-warning"
                style={{ height: "65px", width: "65px", overflow: "hidden" }}
                onClick={() => setImg(img2)}
              >
                <img className="h-100 float-right" src={img2} alt="" />
              </div>
              <div
                className="rounded bg-warning"
                style={{ height: "65px", width: "65px", overflow: "hidden" }}
                onClick={() => setImg(img3)}
              >
                <img className="h-100 float-right" src={img3} alt="" />
              </div>
              <div
                className="rounded bg-warning"
                style={{ height: "65px", width: "65px", overflow: "hidden" }}
                onClick={() => setImg(img1)}
              >
                <img className="h-100 float-right" src={img4} alt="" />
              </div>
            </div>
            <div
              className="rounded ml-sm-4 my-2"
              style={{ height: "300px", width: "300px", overflow: "hidden" }}
            >
              <img className="h-100 float-right" src={img} alt="" />
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-5 col-xl-8 m-2 mx-md-4">
            <h3 className="text-dark">
              <b>Men's Yellow Hoodie - Some Brand</b>
            </h3>
            <h4 className="text-muted">Rs. 499/-</h4>
            <p style={{ fontSize: "10px", marginTop: "100px" }}>SELECT SIZE</p>
            <div className="row m-0">
              <label
                className="border border-secondary rounded d-flex justify-content-center align-items-center size-btn"
                style={{ width: "40px", height: "40px" }}
              >
                <input
                  className=""
                  type="radio"
                  name="radioname"
                  onChange={() => setSize("S")}
                />
                <div
                  className="m-0 h-100 w-100 text-center p-1"
                  style={{ fontSize: "15px" }}
                >
                  S
                </div>
              </label>
              <label
                className="border border-secondary rounded d-flex justify-content-center align-items-center size-btn ml-3"
                style={{ width: "40px", height: "40px" }}
              >
                <input
                  className=""
                  type="radio"
                  name="radioname"
                  onChange={() => setSize("M")}
                />
                <div
                  className="m-0 h-100 w-100 text-center p-1"
                  style={{ fontSize: "15px" }}
                >
                  M
                </div>
              </label>
              <label
                className="border border-secondary rounded d-flex justify-content-center align-items-center size-btn ml-3"
                style={{ width: "40px", height: "40px" }}
              >
                <input
                  className=""
                  type="radio"
                  name="radioname"
                  onChange={() => setSize("L")}
                />
                <div
                  className="m-0 h-100 w-100 text-center p-1"
                  style={{ fontSize: "15px" }}
                >
                  L
                </div>
              </label>
              <label
                className="border border-secondary rounded d-flex justify-content-center align-items-center size-btn ml-3"
                style={{ width: "40px", height: "40px" }}
              >
                <input
                  className=""
                  type="radio"
                  name="radioname"
                  onChange={() => setSize("XL")}
                />
                <div
                  className="m-0 h-100 w-100 text-center p-1"
                  style={{ fontSize: "15px" }}
                >
                  XL
                </div>
              </label>
              <label
                className="border border-secondary rounded d-flex justify-content-center align-items-center size-btn ml-3"
                style={{ width: "40px", height: "40px" }}
              >
                <input
                  className=""
                  type="radio"
                  name="radioname"
                  onChange={() => setSize("XXL")}
                />
                <div
                  className="m-0 h-100 w-100 text-center p-1"
                  style={{ fontSize: "15px" }}
                >
                  XXL
                </div>
              </label>
            </div>
            <p>{size}</p>
            <div className="row m-0">
              <label
                className="border border-secondary rounded d-flex justify-content-center align-items-center wishlist"
                style={{ width: "40px", height: "40px" }}
              >
                <input className="" type="checkbox" name="wishlist" />
                <div
                  className="m-0 h-100 w-100 text-center"
                  style={{ fontSize: "22px" }}
                >
                  <span className="fa fa-heart-o"></span>
                </div>
              </label>
              <div
                className="border border-secondary rounded d-flex justify-content-center align-items-center cart-add ml-3"
                style={{ width: "209px", height: "40px" }}
              >
                <div className="m-0 text-center" style={{ fontSize: "12px" }}>
                  ADD TO CART
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-4 col-md-5 mt-3">
            <h5 className="text-muted">Product description</h5>
            <p className="text-muted" style={{ fontSize: "16px" }}>
              Men's Yellow Hoodie - Some Brand
            </p>
          </div>
          <div className="col-12 col-sm-4 col-md-5 mt-3">
            <h5 className="text-muted">Regular Fit</h5>
            <p className="text-muted" style={{ fontSize: "16px" }}>
              Fits just right - not too tight, not too loose
            </p>
          </div>
          <div className="col-12 col-sm-4 col-md-5 mt-3">
            <h5 className="text-muted">100% Cotton</h5>
            <p className="text-muted" style={{ fontSize: "16px" }}>
              Classic, lightweight jersey fabric comprising 100% cotton.
            </p>
          </div>
          <div className="col-12 col-sm-4 col-md-5 mt-3">
            <h5 className="text-muted">15 Day Returns</h5>
            <p className="text-muted" style={{ fontSize: "16px" }}>
              If you arent satisfied with this product, return it for a refund.
            </p>
          </div>
        </div>
        <h4 className="mt-5 text-secondary">
          Recommended
          <div
            className="bg-secondary"
            style={{ height: "3px", width: "100px" }}
          />
        </h4>
        <div className="row d-flex justify-content-center m-md-5">
          <div className="card h-100 my-3 mx-md-3">
            <img className="card-img" src="dress-w.jpg" alt="" />
            <div className="m-2" style={{ position: "absolute", bottom: "0" }}>
              <h5 className="text-white p-0 m-0">Something</h5>
              <div
                className="bg-secondary p-0 m-0"
                style={{ height: "3px" }}
              ></div>
            </div>
          </div>
          <div className="card h-100 my-3 mx-md-3">
            <img className="card-img" src="hoodie-w.jpg" alt="" />
            <div className="m-2" style={{ position: "absolute", bottom: "0" }}>
              <h5 className="text-white p-0 m-0">Something Else</h5>
              <div
                className="bg-secondary p-0 m-0"
                style={{ height: "3px", fontSize: "0" }}
              >
                d
              </div>
            </div>
          </div>
          <div className="card h-100 my-3 mx-md-3">
            <img className="card-img" src="tshirt-w.jpg" alt="" />
            <div className="m-2" style={{ position: "absolute", bottom: "0" }}>
              <h5 className="text-white p-0 m-0">Something 2</h5>
              <div
                className="bg-secondary p-0 m-0"
                style={{ height: "3px", fontSize: "0" }}
              >
                d
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
