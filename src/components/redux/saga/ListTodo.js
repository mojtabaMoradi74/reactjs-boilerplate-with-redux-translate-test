import React from "react";
import { useDispatch } from 'react-redux';

export default function ListTodo({ action, renderList }) {
  const dispatch = useDispatch();


  return (
    <div>
      <button onClick={() => dispatch({ type: action.FETCH_DATA_SAGA })}>
        Getdata
      </button>
      {renderList()}
    </div>
  );
}
