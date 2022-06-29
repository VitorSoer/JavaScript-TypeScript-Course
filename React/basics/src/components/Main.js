import React, { Component } from 'react';

export default class Main extends Component {
  state = {
    textValue: '',
  };

  handleChange = (e) => {
    this.setState({
      textValue: e.target.value,
    });
  };

  render() {
    return (
      <div className="Main">
        <h1>To Do List</h1>

        <form action="#">
          <input onChange={this.handleChange} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
