import React from 'react';
import TaskItem from '@/components/TaskItem';
import { useTasks } from '@/contexts/TaskContext';

export default function TaskList({ showCompleted = false }) {
  const { tasks } = useTasks();
  
  // Filter tasks based on completion status
  const filteredTasks = tasks.filter(task => task.completed === showCompleted);
  
  // Sort tasks by priority (high -> medium -> low)
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  if (sortedTasks.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">
          {showCompleted 
            ? "You don't have any completed tasks yet." 
            : "You don't have any active tasks. Add one above!"}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {sortedTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}