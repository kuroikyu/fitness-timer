import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

const style = {
  color: 'red',
};

const propTypes = {
  time: PropTypes.number.isRequired,
  label: PropTypes.string,
  timerKey: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

const defaultProps = {
  label: 'Timer',
};

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startingTime: props.time,
      time: props.time,
      label: props.label,
      divStyle: null,
    };

    this.getTimerPercent = this.getTimerPercent.bind(this);
    this.deleteTimer = this.deleteTimer.bind(this);
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
    this.deleteTimer();
  }

  deleteTimer() {
    if (this.timerInterval) {
      window.clearInterval(this.timerInterval);
    }
    this.props.onClose(this.props.timerKey);
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
        <span
          role="button"
          tabIndex={0}
          className="close"
          onClick={this.deleteTimer}
        >
          x
        </span>
        <p className="timer">{formattedTime}</p>
        <p className="timer-label">{label}</p>
      </div>
    );
  }
}

Timer.propTypes = propTypes;
Timer.defaultProps = defaultProps;

export default Timer;
