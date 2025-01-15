import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';
import './TaskList.css';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks?.tasks || []);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="task">
            <p>{task.name}</p>
            <span className={`priority ${task.priority.toLowerCase()}`}>Priority: {task.priority}</span>
            <button onClick={() => handleDelete(task.id)} className="delete-button">Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
