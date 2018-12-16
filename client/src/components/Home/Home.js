import React, { Component } from "react";
import { HomeSlider } from "./HomeSlider";
import HomePromotion from "./HomePromotion";
import ProductBySold from "./Products/ProductBySold";
import ProductByArrival from "./Products/ProductByArrival";

class Home extends Component {
  render() {
    return (
      <div>
        <HomeSlider />
        <ProductBySold />
        <HomePromotion />
        <ProductByArrival />
      </div>
    );
  }
}

export default Home;
