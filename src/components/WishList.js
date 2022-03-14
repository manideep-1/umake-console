import React, { Component } from "react";
import Cards from "./Cards";
import Cards_wishlist from "./Cards_wishlist";

class WishList extends Component {
  render() {
    return (
      <>
        {/* <h3 className="marginSet">My Wishlist</h3> */}
        {/* <Cards></Cards> */}
        <div className="container">
        {/* <Cards_wishlist></Cards_wishlist> */}
        <Cards></Cards>
        </div>
       
      </>
    );
  }
}

export default WishList;
