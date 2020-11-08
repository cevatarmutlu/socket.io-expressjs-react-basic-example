import React from "react";
import axios from "axios";
import "../css/product.css";

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
    </div>
    );
  }
}

export default Product;