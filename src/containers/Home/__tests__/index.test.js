import React from 'react'
import { mount } from 'enzyme';
import Home from '../';
import { ReactIntProvider, StyledThemeProvider } from 'utils/testing';
import { en } from 'locales';



describe('<Home />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(ReactIntProvider(StyledThemeProvider(<Home />)));
    });

    describe('find element text', () => {

        it('h1', () => {
            expect(wrapper.find('h1').text()).toEqual(en['home.title']);
        });

        it('div', () => {
            expect(wrapper.find('.content').at(0).text()).toEqual(en['home.content']);
        });

    });

});



