import React, { Component } from 'react';
import './Form.css';
import Input from './Input/Input';

const validateDate = date =>
  new Promise((res, rej) => {
    res({ error: 'invalid_date' });
  });

class Form extends Component {
  state = {
    dateOfBirth: '',
  };

  async componentDidMount() {
    const res = await validateDate(this.state.dateOfBirth);
    if (res.error) {
      this.input.focusInput();
    }
  }

  handleInputChange = value => {
    this.setState({ dateOfBirth: value });
  };

  handleInputRef = instance => {
    this.input = instance;
  };

  render() {
    return (
      <form className="form">
        <Input
          label="Date of birth"
          ref={this.handleInputRef}
          value={this.state.dateOfBirth}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

export default Form;
