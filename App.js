import axios from "axios";
import React, { Component }  from "react";
class App extends Component
{
  constructor(props)
  {
      super(props);
      this.state={mydata:[]  };
  }
  componentDidMount()
  {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res=>{
        console.table(res.data);
        this.setState({mydata:res.data})
      })
  }
  render()
  {
    return (
     <>
     <h1>API Demo</h1>
     <table border='1'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
     {this.state.mydata.map((value,index) =>{
        return <tr>
        <td>{value.id}</td>
        <td>{value.name}</td>
        <td>{value.email}</td>
        <td>{value.address.city}</td>
        </tr>
     })}
     </tbody>
     </table>
     </>
    );
  }
}

export default App;
