import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.formatSeconds.bind(this);
  }
  defaultProps(){
    return {
      totalSeconds: 0
    }
  }
  propType() {
    return{
      totalSeconds: PropTypes.number
    }
  }
  concatZero(number){
    var returnVal = parseInt(number);
    if(number < 10){
      returnVal = '0'+returnVal;
    }
    return returnVal;
  }
  formatSeconds(totalSeconds){
    var seconds = totalSeconds % 60;
    var minutes = totalSeconds / 60;

    seconds = this.concatZero(seconds);
    minutes = this.concatZero(minutes);

    return minutes + ':'+seconds;
  }
  render(){
    var {totalSeconds} = this.props;
    return (
      <div className="clock">
          <span className="clock-text">
            {this.formatSeconds(totalSeconds)}
          </span>
      </div>
    );
  }
}

export default Clock;
