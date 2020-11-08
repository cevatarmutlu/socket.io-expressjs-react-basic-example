import React from "react";
import axios from "axios";
import "../css/product.css";

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
      newPriceHistory !== '' ? data["price_history"] = new Date() : console.log();;
      newCategory !== '' ? data[this.categoryRef.current.name] = newCategory : console.log();;

      console.log(data);

      axios
        .get(
          `http://localhost:4002/add/`,
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


  dataRender() {
    console.log("niye burada değilsin");
    return (
    <tbody>
        <tr>
            <td>Name</td>
            <td>
                <input 
                type="text"
                name="name"
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
            ref={this.priceRef}
            />
        </td>
        </tr>
        <tr>
        <td>Category</td>
        <td>
            <input 
            type="text" 
            name="category" 
            ref={this.categoryRef}
            />
        </td>
        </tr>
    </tbody>
    );
  }
  


  render() {
  return (
    <div>
      {<table>
        {this.dataRender()}
      </table> }
      <button onClick={this.sendDataClick}>Send Data</button>
    </div>
    );
  }
}

export default Product;