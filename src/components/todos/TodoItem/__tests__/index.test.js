import { shallow, mount, render } from 'enzyme';
import { todos_data } from 'containers/Stores/Redux/store/initialState';
import { checkProps, Providers } from 'utils/testing';
import TodoItem from 'components/todos/TodoItem';


const items = todos_data;
const current_items = items[0];

const renderComponent = (props = {}) => mount(<Providers><TodoItem  {...current_items} {...props} /></Providers>);


describe('TodoItem component', () => {


    describe('Checking PropTypes', () => {
        const propsErr = checkProps(TodoItem, { ...current_items });
        expect(propsErr).toBeUndefined();
    });

    describe('Checking element', () => {


        it('input', () => {

            let checkedState = {};
            let prop = { handleCheckboxClick: (prop) => checkedState = prop, handleDeleteClick: jest.fn(), }
            let wrapper = renderComponent(prop)

            wrapper.find('input').simulate('click');
            wrapper.find('button').simulate('click');

            expect(checkedState.id).toEqual(current_items.id);
            expect(checkedState.completed).toEqual(current_items.completed);

            expect(prop.handleDeleteClick).toHaveBeenCalled();
            expect(prop.handleDeleteClick.mock.calls.length).toEqual(1);

        });


        it('button', () => {

            let deletedState = {};

            let prop = { handleCheckboxClick: jest.fn(), handleDeleteClick: (prop2) => deletedState = prop2, }

            let wrapper = renderComponent(prop)

            wrapper.find('button').simulate('click');
            wrapper.find('input').simulate('click');

            expect(deletedState.id).toEqual(current_items.id);

            expect(prop.handleCheckboxClick).toHaveBeenCalled();
            expect(prop.handleCheckboxClick.mock.calls.length).toEqual(1);

        });

    });

})