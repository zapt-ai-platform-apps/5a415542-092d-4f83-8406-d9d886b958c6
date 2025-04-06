import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} TaskFlow. All rights reserved.
            </p>
          </div>
          <div className="flex items-center">
            <a
              href="https://www.zapt.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Made on ZAPT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}