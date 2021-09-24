
import React from 'react';
import { shallow } from 'enzyme';
import H2 from '../index';
import { checkProps, findByTestAttr } from 'utils/testing';

const setUp = (props = {}) => {
  const component = shallow(<H2 {...props} />);
  return component;
};

describe('H2 Element', () => {


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
      const propsErr = checkProps(H2, expectedProps)
      expect(propsErr).toBeUndefined();

    });

  });

  describe('Have props', () => {

    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Desc'
      };
      wrapper = setUp(props);
    });

    it('Should render without errors', () => {
      // console.log({ wrapper });
      const component = findByTestAttr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    });

    it('Should render a H1', () => {
      const h1 = findByTestAttr(wrapper, 'header');
      expect(h1.length).toBe(0);
    });

    it('Should render a desc', () => {
      const desc = findByTestAttr(wrapper, 'desc');
      expect(desc.length).toBe(0);
    });

  });

  describe('Have NO props', () => {

    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('Should not render', () => {
      const component = findByTestAttr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    });


  });

})