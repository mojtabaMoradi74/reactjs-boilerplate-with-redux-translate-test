// import { mount } from 'enzyme';
// import Increase from '..';
// import React, { useState as useStateMock } from 'react';
// import { Providers } from 'utils/testing';


// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useState: jest.fn(),
// }));

// describe('<Increase />', () => {

//     let wrapper;
//     const setState = jest.fn();

//     beforeEach(() => {
//         useStateMock.mockImplementation(init => [init, setState]);
//         wrapper = mount(<Providers> <Increase /></Providers>);
//     });

//     afterEach(() => {
//         jest.clearAllMocks();
//     });

//     // describe('Count Up', () => {
//     //     it('calls setCount with count + 1', () => {
//     //         wrapper.find('.count-up').at(0).simulate('click');
//     //         // expect(setState).toHaveBeenCalledWith(1);
//     //     });
//     // });

//     // describe('Count Down', () => {
//     //     it('calls setCount with count - 1', () => {
//     //         wrapper.find('.count-down').at(0).props().onClick();
//     //         // expect(setState).toHaveBeenCalledWith(-1);
//     //     });
//     // });

//     // describe('Zero', () => {
//     //     it('calls setCount with 0', () => {
//     //         wrapper.find('.zero-count').at(0).props().onClick();
//     //         // expect(setState).toHaveBeenCalledWith(0);
//     //     });
//     // });
// });