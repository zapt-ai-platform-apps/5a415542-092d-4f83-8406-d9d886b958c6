import React, { useState } from 'react';
import { useTasks } from '@/contexts/TaskContext';

export default function TaskForm() {
  const [taskTitle, setTaskTitle] = useState('');
  const [priority, setPriority] = useState('medium');
  const { addTask } = useTasks();
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate input
    if (!taskTitle.trim()) {
      setError('Task title cannot be empty');
      return;
    }
    
    // Add the task
    addTask({
      title: taskTitle.trim(),
      priority,
    });
    
    // Reset form
    setTaskTitle('');
    setPriority('medium');
    setError('');
  };

  return (
    <div className="card mb-6">
      <h2 className="text-lg font-semibold mb-4">Add New Task</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="taskTitle" className="block text-sm font-medium text-gray-700 mb-1">
            Task Title
          </label>
          <input
            type="text"
            id="taskTitle"
            className="input"
            placeholder="Enter task title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
            Priority
          </label>
          <select
            id="priority"
            className="input"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary cursor-pointer w-full"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}