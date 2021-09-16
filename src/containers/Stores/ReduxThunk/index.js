import React, { useEffect } from "react";

import AddTodoForm from "components/todos/AddTodoForm";
import TodoList from "components/todos/TodoList";
import TotalCompleteItems from "components/todos/TotalCompleteItems";

import { useDispatch, useSelector } from "react-redux";

import styles from './styles';

import { FormattedMessage, useIntl } from 'react-intl';

import { getTodosAsync, addTodoAsync, deleteTodoAsync, toggleCompleteAsync } from 'containers/Stores/ReduxThunk/thunk';

const ReduxThunk = () => {

    const ReduxState = useSelector(state => state?.todoThunk);

    const completeTodo = ReduxState?.data?.filter((todo) => todo.completed === true)

    const dispatch = useDispatch();

    const { formatMessage } = useIntl();

    const submitted = (value) => dispatch(addTodoAsync({ title: value }));

    const handleCheckboxClick = (id, completed) => dispatch(toggleCompleteAsync({ id, completed: !completed }));

    const handleDeleteClick = (id) => dispatch(deleteTodoAsync({ id }));

    useEffect(() => {
        dispatch(getTodosAsync());
    }, [dispatch]);

    return (
        <styles.div_container className='bg-white p-4 mt-5'>
            {/* <ListTodo {...{ action: sagaActions, renderList }} /> */}
            <h1>{formatMessage({ id: 'redux.headTitle' }) + " " + formatMessage({ id: 'withAuthor', }, { author: formatMessage({ id: 'thunk.title' }) })}</h1>

            <AddTodoForm {...{ submitted }} />
            <TodoList {...{ todos: ReduxState?.data, handleCheckboxClick, handleDeleteClick }} />
            <TotalCompleteItems {...{ todos: completeTodo }} />
        </styles.div_container>
    );

}
export default ReduxThunk;