import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

class Countdown extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    };
}
componentDidUpdate(prevProps, prevState){
  if(this.state.countdownStatus !== prevState.countdownStatus){
    switch(this.state.countdownStatus){
      case 'started':
        this.startTimer();
      break;
    }
  }

}
startTimer(){
  this.timer = setInterval(()=>{
    var newCount = this.state.count - 1;
    this.setState({
      count: newCount >= 0 ? newCount : 0
    });

  }, 1000);
}
  handleSetCountdown(seconds){
      this.setState({
        count: seconds,
        countdownStatus: 'started'
      });
  };
  render(){
    var {count} = this.state;

    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown.bind(this)}/>
      </div>
    );
  }
}

export default Countdown;
