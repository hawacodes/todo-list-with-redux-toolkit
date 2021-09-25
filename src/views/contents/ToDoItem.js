import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../../redux/todoSlice';

const ToDoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch();

    const handleCheckboxClick = () => {
        dispatch(toggleComplete({ id, completed: !completed }));
    };

    const handleDeleteClick = () => {
        dispatch(deleteTodo({ id }));
    };
    return (
        <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
            <div className='d-flex justify-content-between'>
                <span className='d-flex align-items-center' style={{ textDecoration: completed && 'line-through' }}>
                    <input
                        type='checkbox'
                        className='mr-3'
                        onClick={handleCheckboxClick}
                        checked={completed}
                    ></input>
                    {title}
                </span>
                <button className='btn btn-danger' onClick={handleDeleteClick} >X</button>
            </div>
        </li>
    );
};

export default ToDoItem;