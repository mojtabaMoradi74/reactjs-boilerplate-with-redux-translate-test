import { mount } from 'enzyme';
import TodoList from 'components/todos/TodoList';
import { todos_data } from 'containers/Stores/Redux/store/initialState';
import { checkProps, Providers } from 'utils/testing';
// import renderer from 'react-test-renderer';

describe('TodoList component', () => {
    const items = todos_data;

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Providers><TodoList todos={items} /></Providers>)
    });

    describe('Checking PropTypes', () => {

        it('Should not throw a warning', () => {
            const propsErr = checkProps(TodoList, items)
            expect(propsErr).toBeUndefined();
        });

    });

    describe('Checking element', () => {

        it('Should not throw a warning', () => {
            let listUl = wrapper.find('.list-group');
            expect(listUl.is('ul')).toBe(true);
            expect(listUl.type()).toBe('ul');
            expect(listUl.children()).toHaveLength(items.length);


            // const renderedComponent = renderer.create(
            //     ReactIntProvider(<TodoList todos={items} />)
            // ).toJSON();

            // expect(renderedComponent).toMatchSnapshot();
        });

    });

})