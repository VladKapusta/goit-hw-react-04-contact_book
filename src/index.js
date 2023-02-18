import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContactBook } from 'components/ContactBook/ContactBook';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactBook />
  </React.StrictMode>
);
