import React, { Component } from 'react';
import Search from '../components/search';

class SearchContainer extends Component {
  state = {
    value: ''
  }

  setInputRef = (element) => {
    this.input = element;
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
  }

  handleInputChange = (event) => {
    this.setState({
      value: event.target.value.replace(' ', '-')
    });
  }

  render() {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleFormSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    );
  }
}

export default SearchContainer;
