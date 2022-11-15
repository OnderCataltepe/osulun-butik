import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import Routing from './Routing';
import Theme from './styles/themeMui/Theme';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Theme>
      <Routing />
    </Theme>
  </React.StrictMode>
);
