import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="max-w-lg mx-auto text-center">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        We couldn't find the page you're looking for. It might have been moved or deleted.
      </p>
      <Link to="/" className="btn btn-primary inline-block cursor-pointer">
        Return to Home
      </Link>
    </div>
  );
}