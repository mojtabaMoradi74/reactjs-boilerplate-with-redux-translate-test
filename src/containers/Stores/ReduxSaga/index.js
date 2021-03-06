import AddTodoForm from "components/todos/AddTodoForm";
import TodoList from "components/todos/TodoList";
import TotalCompleteItems from "components/todos/TotalCompleteItems";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './styles';
import { useIntl } from 'react-intl';
import { getTodoSagaAsync, deleteTodoSagaAsync, addTodoSagaAsync, patchToggleCompleteTodoSagaAsync } from "./saga/actions";
import H1 from "reusableComponent/H1";

const ReduxSaga = () => {

    const ReduxState = useSelector(state => state?.todoSaga);

    const completeTodo = ReduxState?.data?.filter((todo) => todo?.completed === true)

    const dispatch = useDispatch();

    const { formatMessage } = useIntl();

    const submitted = (value) => dispatch(addTodoSagaAsync({ title: value }));

    const handleCheckboxClick = ({ id, completed }) => dispatch(patchToggleCompleteTodoSagaAsync({ id, completed: !completed }));

    const handleDeleteClick = ({ id }) => dispatch(deleteTodoSagaAsync({ id }));

    useEffect(() => {
        dispatch(getTodoSagaAsync());
    }, [dispatch]);

    return (
        <styles.div_container className='bg-white p-4 mt-5'>
            <H1>{formatMessage({ id: 'redux.headTitle' }) + " " + formatMessage({ id: 'withAuthor', }, { author: formatMessage({ id: 'saga.title' }) })}</H1>
            <AddTodoForm {...{ submitted }} />
            <TodoList {...{ todos: ReduxState?.data, handleCheckboxClick, handleDeleteClick }} />
            <TotalCompleteItems {...{ todos: completeTodo }} />
        </styles.div_container>
    );

}
export default ReduxSaga;