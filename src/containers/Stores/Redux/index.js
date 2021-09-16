import AddTodoForm from "components/todos/AddTodoForm";
import TodoList from "components/todos/TodoList";
import TotalCompleteItems from "components/todos/TotalCompleteItems";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './styles';
import { useIntl } from 'react-intl';
import { addTodo, deleteTodo, toggleComplete } from "./store";

const Redux = (props) => {

    const ReduxState = useSelector(state => state?.reduxTodo);

    const completeTodo = ReduxState?.data?.filter((todo) => todo.completed === true)


    const dispatch = useDispatch();

    const { formatMessage } = useIntl();

    function submitted(value) {
        dispatch(addTodo({ title: value }))
    }


    const handleCheckboxClick = (id, completed) => {
        dispatch(toggleComplete({ id, completed: !completed }));
    };

    const handleDeleteClick = (id) => {
        dispatch(deleteTodo({ id }));
    };

    return (
        <styles.div_container className='bg-white p-4 mt-5'>
            {/* <ListTodo {...{ action: sagaActions, renderList }} /> */}
            <h1>{formatMessage({ id: 'redux.headTitle' }) + " " + formatMessage({ id: 'withAuthor', }, { author: formatMessage({ id: 'redux.title' }) })}</h1>
            <AddTodoForm {...{ submitted }} />
            <TodoList {...{ todos: ReduxState?.data, handleCheckboxClick, handleDeleteClick }} />
            <TotalCompleteItems {...{ todos: completeTodo }} />
        </styles.div_container>
    );
}
export default Redux;