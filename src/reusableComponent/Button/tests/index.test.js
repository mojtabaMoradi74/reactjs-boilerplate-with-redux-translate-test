
import React from 'react';
import { shallow } from 'enzyme';
import Button from '../index';
import { checkProps } from 'utils/testing';



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
      const propsErr = checkProps(Button, expectedProps)
      expect(propsErr).toBeUndefined();

    });

  });

})