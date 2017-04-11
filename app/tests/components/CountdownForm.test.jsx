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
});
