import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductBySold } from "./ProducActions";
import CardBlock from "./../../../Utills/card/CardBlock";

const actions = {
  getProductBySold
};

class ProductBySold extends Component {
  componentDidMount() {
    this.props.getProductBySold().then(data => {
      //console.log(this.props.product);
    });
  }
  render() {
    return (
      <div>
        <CardBlock
          list={this.props.product.bySell}
          title={"Best Selling Guitars"}
        />
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
)(ProductBySold);
