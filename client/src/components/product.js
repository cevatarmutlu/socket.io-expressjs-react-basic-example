import React from "react";
import axios from "axios";
import "../css/product.css";
import RealPrice from "./realtime-price";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:4002/product/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({data: res.data})
      })
      .catch((err) => console.log(err))
  }

  dataRender() {
    return this.state.data.map((val, index) => {
      return (
        <tr key={val._id}>
          <td>{val.name}</td>
          <td>{val.price}</td>
          <td>{val.price_history}</td>
          <td>{val.category}</td>
        </tr>
      );
    });
  }


  render() {
    let price;
    console.log(this.state.data);
    if (this.state.data.length <= 0) {
      price = "";
    }else {
      price = <RealPrice price_id={this.state.data[0]._id} />;
    }
  return (
    <div>
      {<table className="table table-bordered">
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Price History</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          {this.dataRender()}
        </tbody>
      </table> }
      {price}
    </div>
    );
  }
}

export default Product;