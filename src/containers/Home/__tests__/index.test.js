import React from 'react'
import { mount } from 'enzyme';
import Home from '../';
import { Providers } from 'utils/testing';
import { en } from 'locales';



describe('<Home />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Providers> <Home /></Providers>);
    });

    describe('find element text', () => {

        it('exists', () => {
            expect(wrapper.exists()).toBeTruthy();
        });

        it('h1', () => {
            expect(wrapper.find('h1').text()).toEqual(en.translation.home.title);
        });

        it('div', () => {
            expect(wrapper.find('.content').at(0).text()).toEqual(en.translation.home.content);
        });

    });

});