import React from "react";
import axios from "axios";
import "../css/product.css";
import RealProduct from "./realtime-product-value";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.nameRef = React.createRef();
    this.priceRef = React.createRef();
    this.priceHistoryRef = React.createRef();
    this.categoryRef = React.createRef();
    this.sendDataClick = this.sendDataClick.bind(this);
  }

  sendDataClick() {
      var newName = this.nameRef.current.value;
      var newPrice = this.priceRef.current.value;
      var newPriceHistory = new Date();
      var newCategory = this.categoryRef.current.value;
      var data = {};

      newName !== '' ? data[this.nameRef.current.name] = newName : console.log();;
      newPrice !== '' ? data[this.priceRef.current.name] = newPrice : console.log();;
      newPriceHistory !== '' ? data[this.priceHistoryRef.current.name] = new Date() : console.log();;
      newCategory !== '' ? data[this.categoryRef.current.name] = newCategory : console.log();;


      axios
        .get(
          `http://localhost:4002/edit/${this.state.data[0]._id}`,
          {
            params: {
              data: data,
            }
          }
        )
        .then((res) => {
          console.log("at");
        })
      
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
      if (this.state.data.length > 0) {
      return (
        <tbody key={this.state.data._id}>
          <tr>
              <td>Name</td>
              <td>
                  <input 
                    type="text"
                    name="name"
                    placeholder={this.state.data[0].name} 
                    ref={this.nameRef}
                  />
                </td>
              </tr>
          <tr>
            <td>Price</td>
            <td>
              <input 
                type="text" 
                name="price" 
                placeholder={this.state.data[0].price} 
                ref={this.priceRef}
              />
            </td>
          </tr>
          <tr>
            <td>Price History</td>
            <td>
              <input 
                type="text" 
                name="price_history" 
                placeholder={this.state.data[0].price_history} 
                ref={this.priceHistoryRef}
              />
            </td>
          </tr>
          <tr>
            <td>Category</td>
            <td>
              <input 
                type="text" 
                name="category" 
                placeholder={this.state.data[0].category} 
                ref={this.categoryRef}
                />
            </td>
          </tr>
        </tbody>
      );
    }else {
        return <div></div>;
    }

  }
  


  render() {
    let price;
    if (this.state.data.length <= 0) {
      price = "";
    }else {
      price = <RealProduct price_id={this.state.data[0]._id} />;
    }
  return (
    <div>
      {<table>
        {this.dataRender()}
      </table> }
      <button onClick={this.sendDataClick}>Send Data</button>
      {price}
    </div>
    );
  }
}

export default Product;