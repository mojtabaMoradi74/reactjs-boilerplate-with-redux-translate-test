import { mount, render } from 'enzyme';
import Counter from '..';
import React, { useState as useStateMock } from 'react';
import { Providers } from 'utils/testing';


jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
    // useState: jest.fn(),
}));

describe('<Counter />', () => {

    let wrapper;
    const setState = jest.fn();

    beforeEach(() => {
        useStateMock.mockImplementation(init => [init, setState]);
        // useStateMock.mockImplementation(jest.requireActual('react').useState);
        // useStateMock.mockReturnValueOnce([0, () => console.log("count")]).mockReturnValueOnce([0, () => console.log("countdown")]);
        // .mockReturnValueOnce(["5ft", () => console.log("setHeight")]);
        wrapper = mount(<Providers><Counter /></Providers>);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('Count Up', () => {
        it('calls setCount with count + 1', () => {
            let find = wrapper.find('.count-up').at(0);
            let count = wrapper.find('.show-count');
            expect(wrapper).toBeTruthy()
            expect(find).toBeTruthy()
            expect(count).toBeTruthy()
            // console.log({ find: find.text() });
            expect(find.text()).toEqual('Count Up');
            // find.simulate('click');
            expect(count).not.toContain(0);
            // expect(count).toContain(1);
            find.props().onClick();
            expect(setState).toHaveBeenCalledTimes(1);
            expect(setState).toHaveBeenCalled();
        });
    });

    // describe('Count Down', () => {
    //     it('calls setCount with count - 1', () => {
    //         wrapper.find('.count-down').at(0).props().onClick();
    //         expect(setState).toHaveBeenCalledWith(-1);
    //     });
    // });

    // describe('Zero', () => {
    //     it('calls setCount with 0', () => {
    //         wrapper.find('.zero-count').at(0).props().onClick();
    //         expect(setState).toHaveBeenCalledWith(0);
    //     });
    // });
});