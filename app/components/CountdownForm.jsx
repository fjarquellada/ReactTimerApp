import React from 'react';
import Clock from 'Clock';
import PropTypes from 'prop-types';
class CountdownForm extends React.Component{
    constructor(props) {
        super(props);
        /* Previene que this sea nulo  */
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        var strSeconds = this.refs.seconds.value;

        if(strSeconds.match(/^[0-9]*$/)){
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    }
    render(){
      return(
        <div>
          <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
              <input type="text" ref="seconds" placeholder="Enter seconds" />
              <button className="button expanded">Start</button>
          </form>
        </div>
      );
    }
}
CountdownForm.propTypes = {
  onSetCountdown: PropTypes.func
}

export default CountdownForm;
