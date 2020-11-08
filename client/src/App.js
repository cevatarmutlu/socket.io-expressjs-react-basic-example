import React from "react";
import routes from "./routes/index";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        {routes}
      </div>
    )
  }

}

export default App;
