import {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class CRUD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:4002/products')
      .then((res) => {
        this.setState({data: res.data})
      })
      .catch((err) => console.log(err))
  }


  render() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>_id</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.data.map(x => {
              return (
                <tr key={x._id}>
                  <td>
                    { console.log(x.name)}
                      <Link to={`/products/${x._id}`}>
                        {x.name}
                      </Link>
                  </td>
                  <td>{x._id}</td>
                </tr>
              )
            })
          }   
        </tbody>
      </table>
    </div>
    );
  }
}

export default CRUD;