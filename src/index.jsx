import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // React component
import './index.css';

// Ensure the root element exists in the DOM
const container = document.getElementById('root');
if (!container) {
  throw new Error('Root container not found');
}

const root = createRoot(container);
root.render(<App />);
