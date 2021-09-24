// // jest-dom adds custom jest matchers for asserting on DOM nodes.
// // allows you to do things like:
// // expect(element).toHaveTextContent(/react/i)
// // learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';

// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });


// import { configure } from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// const Adapter = require('enzyme-adapter-react-16')
// import Adapter from 'enzyme-adapter-react-16';
// Enzyme.configure({ adapter: new Adapter() });
const { configure } = require('enzyme')
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17')
const { createSerializer } = require('enzyme-to-json')

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({
    ignoreDefaultProps: true,
    mode: 'deep',
    noKey: true,
}));