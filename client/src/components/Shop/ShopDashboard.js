import React, { Component } from "react";
import TopHeading from "./../../Utills/PageHeading/TopHeading";
import { connect } from "react-redux";
import { getBrand, getWood } from "./shopActions";

const actions = {
  getBrand,
  getWood
};

export class ShopDashboard extends Component {
  componentDidMount() {
    this.props.getBrand().then(data => console.log(data));
    this.props.getWood().then(data => console.log(data));
  }
  render() {
    const { brand } = this.props;
    return (
      <div>
        <TopHeading title="Shop Now" />
        <div className="container">
          <div className="shop_wrapper">
            <div className="left">Left</div>
            <div className="right">Right</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapState = state => ({
  brand: state.brand
});

export default connect(
  mapState,
  actions
)(ShopDashboard);
