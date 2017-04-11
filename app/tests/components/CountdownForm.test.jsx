import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import $ from 'jQuery';
import CountdownForm from 'CountdownForm';

describe('CountdownForm', ()=>{
  if('should exist', ()=>{
    expect(CountdownForm).toExist();
  });
  it('should call onSetCountdown if valid seconds entered', ()=>{
    var spy = expect.createSpy();
    var countdownForm = ReactTestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.resf.seconds.value = '109';
    ReactTestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call onSetCountdown if valid seconds entered', ()=>{
    var spy = expect.createSpy();
    var countdownForm = ReactTestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.resf.seconds.value = '109b';
    ReactTestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled(109);
  });

});
