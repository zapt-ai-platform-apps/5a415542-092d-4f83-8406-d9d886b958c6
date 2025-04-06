import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import TasksPage from '@/pages/TasksPage';
import CompletedPage from '@/pages/CompletedPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { TaskProvider } from '@/contexts/TaskContext';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TaskProvider>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/completed" element={<CompletedPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </TaskProvider>
    </div>
  );
}