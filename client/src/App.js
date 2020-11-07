import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios
      .get('http://localhost:4002/products')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err))
  }


  render() {
    return <div>Hello</div>;
  }


}

export default App;
