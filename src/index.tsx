import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routing from './Routing';
import Theme from './styles/Theme';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <Routing />
      </Theme>
    </Provider>
  </React.StrictMode>
);
