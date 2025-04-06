import React from 'react';
import { useTasks } from '@/contexts/TaskContext';

export default function TaskItem({ task }) {
  const { toggleTaskCompletion, deleteTask } = useTasks();
  
  const priorityColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800'
  };

  return (
    <div className="card flex items-start">
      <div className="mr-3 pt-1">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
          className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
        />
      </div>
      
      <div className="flex-grow">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className={`text-lg font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
            {task.title}
          </h3>
          <span className={`${priorityColors[task.priority]} text-xs font-medium px-2.5 py-0.5 rounded-full`}>
            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
          </span>
        </div>
        
        <div className="text-xs text-gray-500">
          Created: {new Date(task.createdAt).toLocaleString()}
        </div>
      </div>
      
      <button
        onClick={() => deleteTask(task.id)}
        className="ml-4 text-gray-400 hover:text-red-600 focus:outline-none cursor-pointer"
        aria-label="Delete task"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}