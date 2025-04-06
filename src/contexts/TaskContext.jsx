import React, { createContext, useContext, useEffect, useState } from 'react';
import * as Sentry from '@sentry/browser';

// Create context
const TaskContext = createContext();

// Custom hook to use the task context
export function useTasks() {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}

// Provider component
export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load tasks from localStorage on initial render
  useEffect(() => {
    try {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error('Failed to load tasks from localStorage:', error);
      Sentry.captureException(error, {
        extra: {
          message: 'Failed to load tasks from localStorage',
        }
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (error) {
        console.error('Failed to save tasks to localStorage:', error);
        Sentry.captureException(error, {
          extra: {
            message: 'Failed to save tasks to localStorage',
            tasks: JSON.stringify(tasks),
          }
        });
      }
    }
  }, [tasks, isLoading]);

  // Generate a unique ID
  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };

  // Add a new task
  const addTask = (taskData) => {
    try {
      const newTask = {
        id: generateId(),
        title: taskData.title,
        priority: taskData.priority || 'medium',
        completed: false,
        createdAt: new Date().toISOString(),
      };
      
      setTasks(prevTasks => [...prevTasks, newTask]);
      return newTask;
    } catch (error) {
      console.error('Error adding task:', error);
      Sentry.captureException(error, {
        extra: {
          message: 'Error adding task',
          taskData,
        }
      });
      throw error;
    }
  };

  // Toggle task completion status
  const toggleTaskCompletion = (taskId) => {
    try {
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === taskId
            ? { ...task, completed: !task.completed }
            : task
        )
      );
    } catch (error) {
      console.error('Error toggling task completion:', error);
      Sentry.captureException(error, {
        extra: {
          message: 'Error toggling task completion',
          taskId,
        }
      });
      throw error;
    }
  };

  // Delete a task
  const deleteTask = (taskId) => {
    try {
      setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
      Sentry.captureException(error, {
        extra: {
          message: 'Error deleting task',
          taskId,
        }
      });
      throw error;
    }
  };

  // Clear all completed tasks
  const clearCompletedTasks = () => {
    try {
      setTasks(prevTasks => prevTasks.filter(task => !task.completed));
    } catch (error) {
      console.error('Error clearing completed tasks:', error);
      Sentry.captureException(error, {
        extra: {
          message: 'Error clearing completed tasks',
        }
      });
      throw error;
    }
  };

  const contextValue = {
    tasks,
    isLoading,
    addTask,
    toggleTaskCompletion,
    deleteTask,
    clearCompletedTasks,
  };

  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  );
}