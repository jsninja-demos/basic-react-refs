import React from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';

import './Input.css';

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  onInputChange = value => {
    this.setState({ value });
    if (this.props.onChange) this.props.onChange(value);
  };

  handleInputRef = node => {
    this.input = node;
    if (node) {
      this.calendar = flatpickr(node, {
        dateFormat: 'F j, Y',
        onChange: this.onInputChange,
      });
    } else {
      this.calendar.destroy();
    }
  };
  
  focusInput = () => {
    this.input.focus();
  };

  render() {
    const { label, required } = this.props;
    const { value } = this.state;

    return (
      <div className="group">
        <input
          type="text"
          className={value ? 'filled' : ''}
          ref={this.handleInputRef}
          defaultValue={value}
          required={required}
        />
        <span className="bar" />
        <label>{label}</label>
      </div>
    );
  }
}
