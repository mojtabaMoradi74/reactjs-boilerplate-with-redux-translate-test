import { mount } from 'enzyme';
import { todos_data } from 'containers/ReduxContainers/Redux/store/initialState';
import { Providers, } from 'utils/testing';
import AddTodoForm from 'components/todos/AddTodoForm';

const items = todos_data;
const current_items = items[0];
const wrapComponent = (props = {}) => <Providers><AddTodoForm  {...current_items} {...props} /></Providers>


describe('AddTodoForm component', () => {

    let submitted = jest.fn();

    let wrapper;

    const newInputValue = 'React is Awesome';

    beforeEach(() => {
        wrapper = mount(wrapComponent({ submitted }))
    });

    describe("<AddTodoForm/>", () => {

        describe("changed input and submitted", () => {

            it("should changed state and input value", () => {
                const input = wrapper.find(".add-input");
                input.simulate('change', { target: { value: newInputValue } });
                wrapper.find("form").simulate("submit");
                expect(submitted).toHaveBeenCalledWith(newInputValue);
            });
        })

    });

})