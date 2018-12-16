import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductByArrival } from "./ProducActions";
import CardBlock from "./../../../Utills/card/CardBlock";

const actions = {
  getProductByArrival
};
class ProductByArrival extends Component {
  componentDidMount() {
    this.props.getProductByArrival().then(data => {
      // console.log(this.props.product);
    });
  }
  render() {
    return (
      <div>
        <CardBlock title="Newly Arrivals" list={this.props.product.byArrival} />
      </div>
    );
  }
}

const mapState = state => ({
  product: state.product
});

export default connect(
  mapState,
  actions
)(ProductByArrival);
