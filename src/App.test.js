import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { ReactIntProvider } from 'utils/testing';

describe('App', () => {
  it('should render', () => {
    let wrapper = shallow(<ReactIntProvider><App /></ReactIntProvider>);
    expect(wrapper.exists()).toBeTruthy();
  });
});
