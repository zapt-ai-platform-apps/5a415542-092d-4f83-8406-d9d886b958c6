import React from 'react';
import TaskForm from '@/components/TaskForm';
import TaskList from '@/components/TaskList';
import { useTasks } from '@/contexts/TaskContext';

export default function TasksPage() {
  const { isLoading } = useTasks();
  
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Active Tasks</h1>
        <p className="text-gray-600">
          Manage your current tasks and track your progress
        </p>
      </div>
      
      <TaskForm />
      
      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Your Tasks</h2>
        <TaskList showCompleted={false} />
      </div>
    </div>
  );
}