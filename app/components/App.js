import React from 'react';

import UserInput from './UserInput';
import Timer from './Timer';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timers: [],
      timersCount: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    const testTimers = [
      <Timer
        time={5000}
        label="This is a long label"
        key="a1"
        timerKey="0"
        onClose={this.handleClose}
      />,
      <Timer
        time={0}
        label="Awesome"
        key="b2"
        timerKey="1"
        onClose={this.handleClose}
      />,
      <Timer
        time={5000}
        label="This is a way even longer label, you can't even begin to imagine how long this label is!"
        key="c3"
        timerKey="2"
        onClose={this.handleClose}
      />,
      <Timer
        time={500}
        label="Timer"
        key="d4"
        timerKey="3"
        onClose={this.handleClose}
      />,
      <Timer
        time={50}
        label="Timer"
        key="e5"
        timerKey="4"
        onClose={this.handleClose}
      />,
      <Timer
        time={5}
        label="Timer"
        key="f6"
        timerKey="5"
        onClose={this.handleClose}
      />,
      <Timer
        time={50000}
        label="⚡️ Awesome!"
        key="g7"
        timerKey="6"
        onClose={this.handleClose}
      />,
    ];
    this.setState({
      timers: testTimers,
      timersCount: 7,
    });
  }

  handleSubmit(name, amount) {
    this.setState((prevState) => {
      const prevTimers = prevState.timers;
      const attributes = {
        time: amount,
        key: prevState.timersCount,
        timerKey: prevState.timersCount.toString,
        onClose: this.handleClose,
      };

      if (name) {
        attributes.label = name;
      }

      prevTimers.push(
        <Timer {...attributes} />,
      );

      return {
        timers: prevTimers,
        timersCount: prevState.timersCount + 1,
      };
    });
  }

  handleClose(keyOut) {
    const currentTimers = this.state.timers;
    const newTimersArray = currentTimers.filter(timer => timer.props.timerKey !== keyOut);

    this.setState({ timers: newTimersArray });
  }

  render() {
    return (
      <div>
        <h1>Fitness Timer</h1>
        <h3>Add a new timer</h3>
        <UserInput onSubmit={this.handleSubmit} />
        <div className="timers">
          {this.state.timers.map(timer => timer)}
        </div>
      </div>
    );
  }
}
