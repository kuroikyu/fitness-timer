import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

const style = {
  color: 'red',
};

const propTypes = {
  time: PropTypes.number.isRequired,
  label: PropTypes.string,
};

const defaultProps = {
  label: 'Timer',
};

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: props.time,
      label: props.label,
      divStyle: null,
    };
  }

  componentDidMount() {
    this.timerInterval = window.setInterval(() => {
      if (this.state.time > 0) {
        this.setState(prevState => ({ time: prevState.time - 1 }));
      } else {
        this.setState(prevState => ({ divStyle: prevState.divStyle ? null : style }));
      }
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerInterval);
  }

  render() {
    const {
      label,
      time,
      divStyle,
    } = this.state;

    const momentTime = Moment(0).add(time, 's');
    const formattedTime = momentTime.format('HH:mm:ss');

    return (
      <div style={divStyle} className="timer-container">
        <p className="timer">{formattedTime}</p>
        <p className="timer-label">{label}</p>
      </div>
    );
  }
}

Timer.propTypes = propTypes;
Timer.defaultProps = defaultProps;

export default Timer;
