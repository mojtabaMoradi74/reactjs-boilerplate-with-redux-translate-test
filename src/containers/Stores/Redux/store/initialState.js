import { uniqId } from "utils/uniqId";

let todos = [
    {
        id: uniqId(),
        title: 'todo 1',
        completed: true,
    },
    {
        id: uniqId(),
        title: 'todo 2',
        completed: false,
    },
    {
        id: uniqId(),
        title: 'todo 3',
        completed: false,
    },
    {
        id: uniqId(),
        title: 'todo 4',
        completed: false,
    },
    {
        id: uniqId(),
        title: 'todo 5',
        completed: false,
    },
];


const initialState = {
    isFetching: true,
    errorMessage: "",
    data: todos,
};
export default initialState


