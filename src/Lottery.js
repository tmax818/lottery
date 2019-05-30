import React, { Component } from 'react';
import './Lottery.css';
import Ball from './Ball';

export default class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    maxBalls: 6,
    maxNum: 40
  };

  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.maxBalls }) };
  }

  generate = () => {
    this.setState(curState => ({
      nums: curState.nums.map(
        x => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }));
  };

  handleClick = () => {
    this.generate();
  };

  render() {
    return (
      <div className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => (
            <Ball num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </div>
    );
  }
}
