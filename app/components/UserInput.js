import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// const defaultProps = {
// }

class UserInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timerName: '',
      timerAmount: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const inputType = event.target.dataset.inputType;
    const value = inputType === 'Name' ? event.target.value : parseInt(event.target.value, 10);

    this.setState(() => ({ [`timer${inputType}`]: value }));
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.state.timerName,
      this.state.timerAmount,
    );

    this.setState(() => ({
      timerName: '',
      timerAmount: '',
    }));
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="timer-name">Name</label>
          <input
            id="timer-name"
            type="text"
            placeholder="Timer name"
            autoComplete="off"
            data-input-type="Name"
            value={this.state.timerName}
            onChange={this.handleInputChange}
          />

          <label htmlFor="timer-amount">Time</label>
          <input
            id="timer-amount"
            type="number"
            placeholder="Time in seconds. E.g. 120 for 2 minutes"
            autoComplete="off"
            data-input-type="Amount"
            value={this.state.timerAmount}
            onChange={this.handleInputChange}
          />

          <button
            type="submit"
            disabled={!this.state.timerAmount}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

UserInput.propTypes = propTypes;
// UserInput.defaultProps = defaultProps;

export default UserInput;
