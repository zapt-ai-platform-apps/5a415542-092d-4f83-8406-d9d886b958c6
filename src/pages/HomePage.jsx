import React from 'react';
import { Link } from 'react-router-dom';
import { useTasks } from '@/contexts/TaskContext';

export default function HomePage() {
  const { tasks, isLoading } = useTasks();
  
  // Count active and completed tasks
  const activeTasks = tasks.filter(task => !task.completed).length;
  const completedTasks = tasks.filter(task => task.completed).length;
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Welcome to TaskFlow
        </h1>
        <p className="text-xl text-gray-600">
          A simple way to manage your tasks and boost productivity
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="card text-center">
          <div className="text-5xl font-bold text-blue-600 mb-2">{activeTasks}</div>
          <div className="text-gray-600">Active Tasks</div>
          <Link 
            to="/tasks" 
            className="inline-block mt-4 btn btn-primary cursor-pointer"
          >
            View Tasks
          </Link>
        </div>
        
        <div className="card text-center">
          <div className="text-5xl font-bold text-green-600 mb-2">{completedTasks}</div>
          <div className="text-gray-600">Completed Tasks</div>
          <Link 
            to="/completed" 
            className="inline-block mt-4 btn btn-primary cursor-pointer"
          >
            View Completed
          </Link>
        </div>
      </div>
      
      <div className="card mb-8">
        <h2 className="text-xl font-semibold mb-4">How to use TaskFlow</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Add new tasks with a title and priority level</li>
          <li>Manage your active tasks in the Tasks tab</li>
          <li>Mark tasks as complete by checking the checkbox</li>
          <li>View and manage completed tasks in the Completed tab</li>
          <li>Delete tasks you no longer need</li>
        </ul>
      </div>
      
      <div className="text-center">
        <Link 
          to="/tasks" 
          className="btn btn-primary text-lg px-6 py-3 cursor-pointer"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}