import React from 'react';
import TaskList from '@/components/TaskList';
import { useTasks } from '@/contexts/TaskContext';

export default function CompletedPage() {
  const { clearCompletedTasks, tasks, isLoading } = useTasks();
  
  const completedTasksCount = tasks.filter(task => task.completed).length;
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Completed Tasks</h1>
        <p className="text-gray-600">
          Review and manage your completed tasks
        </p>
      </div>
      
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Your Completed Tasks</h2>
          
          {completedTasksCount > 0 && (
            <button 
              onClick={clearCompletedTasks}
              className="btn btn-danger cursor-pointer"
            >
              Clear All
            </button>
          )}
        </div>
        
        <TaskList showCompleted={true} />
      </div>
    </div>
  );
}