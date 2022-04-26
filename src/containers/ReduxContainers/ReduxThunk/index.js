import React, { useEffect } from "react";

import AddTodoForm from "components/todos/AddTodoForm";
import TodoList from "components/todos/TodoList";
import TotalCompleteItems from "components/todos/TotalCompleteItems";

import { useDispatch, useSelector } from "react-redux";

import styles from './styles';

import action from 'containers/ReduxContainers/ReduxThunk/store/action';
import H1 from "reusableComponent/H1";
import { useTranslation } from "react-i18next";

const ReduxThunk = () => {

    const ReduxState = useSelector(state => state?.todoThunk);

    const completeTodo = ReduxState?.data?.filter((todo) => todo.completed === true)

    const dispatch = useDispatch();


    const [t] = useTranslation();


    const submitted = (value) => dispatch(action.addTodo({ title: value }));

    const handleCheckboxClick = ({ id, completed }) => dispatch(action.toggleComplete({ id, completed: !completed }));

    const handleDeleteClick = ({ id }) => dispatch(action.deleteTodo({ id }));

    useEffect(() => {
        dispatch(action.getTodo());
    }, [dispatch]);

    return (
        <styles.div_container className='bg-white p-4 mt-5'>
            {/* <ListTodo {...{ action: sagaActions, renderList }} /> */}
            <H1>{t('redux.headTitle') + " " + t('withAuthor', { author: t('thunk.title') })}</H1>
            <AddTodoForm {...{ submitted }} />
            <TodoList {...{ todos: ReduxState?.data, handleCheckboxClick, handleDeleteClick }} />
            <TotalCompleteItems {...{ todos: completeTodo }} />
        </styles.div_container>
    );

}
export default ReduxThunk;