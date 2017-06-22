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
  }

  handleSubmit(name, amount) {
    this.setState((prevState) => {
      const prevTimers = prevState.timers;
      const attributes = {
        time: amount,
        key: prevState.timersCount,
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

  render() {
    return (
      <div>
        <h1>Fitness Timer</h1>
        <h3>Add a new timer</h3>
        <UserInput onSubmit={this.handleSubmit} />
        <div className="timers">
          <Timer
            time={5000}
            label="This is a long label"
            key="a1"
          />
          <Timer
            time={0}
            label="Awesome"
            key="b2"
          />
          <Timer
            time={5000}
            label="This is a way even longer label, you can't even begin to imagine how long this label is!"
            key="c3"
          />
          <Timer
            time={500}
            label="Timer"
            key="d4"
          />
          <Timer
            time={50}
            label="Timer"
            key="e5"
          />
          <Timer
            time={5}
            label="Timer"
            key="f6"
          />
          <Timer
            time={50000}
            label="Timer"
            key="g7"
          />
          {this.state.timers.map(timer => timer)}
        </div>
      </div>
    );
  }
}
