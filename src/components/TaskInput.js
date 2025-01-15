import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import './TaskInput.css';

const TaskInput = () => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('Medium');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName.trim()) {
      const newTask = {
        id: Date.now(),
        name: taskName,
        priority: priority,
      };
      dispatch(addTask(newTask));
      setTaskName('');
      setPriority('Medium');
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter a new task"
      />
      
      <div className="priority-select">
        <label>Priority:</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
