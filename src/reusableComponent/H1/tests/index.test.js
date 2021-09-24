
import React from 'react';
import { shallow } from 'enzyme';
import H1 from '../index';
import { checkProps, findByTestAtrr } from 'utils/testing';

const setUp = (props = {}) => {
  const component = shallow(<H1 {...props} />);
  return component;
};

describe('H1 Element', () => {


  describe('Checking PropTypes', () => {

    it('Should not throw a warning', () => {

      const expectedProps = {
        header: 'Test Header',
        desc: 'Test Desc',
        tempArr: [{
          fName: 'Test fName',
          lName: 'Test lName',
          email: 'test@email.com',
          age: 23,
          onlineStatus: false
        }]
      };
      const propsErr = checkProps(H1, expectedProps)
      expect(propsErr).toBeUndefined();

    });

  });

})