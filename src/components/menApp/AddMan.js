import React, { Component } from 'react';
import { FaUserPlus } from 'react-icons/fa';

class AddMan extends Component {
  state = {
    id: "",
    name: "",
    age: ""
  };
  addValues = (e) => {
    let newId = Math.random()+e.target.value.toString();
    this.setState({
      [e.target.id]: e.target.value,
      id: newId
    });
    newId = null;
  }
  submitMan = (e) => {
    e.preventDefault();
    this.props.addMan(this.state);
    this.setState({name: "", age: ""});
  }
  render() {
    return (
      <div className="men-add row">
        <div className="col s12 m12 l12 xl12">
          <h2>Add Man:</h2>
          <form onSubmit={this.submitMan}>
            <p>
              <label htmlFor="name">Name:  </label>
              <input type="text" id="name" onChange={this.addValues} value={this.state.name}/>
            </p>
            <p>
              <label htmlFor="age">Age:  </label>
              <input type="number" id="age" onChange={this.addValues} value={this.state.age}/>
            </p>
            <p><button type="submit" className="btn waves-effect waves-light"><FaUserPlus/></button></p>
          </form>
        </div>
      </div>
    );
  }
}

export default AddMan;
