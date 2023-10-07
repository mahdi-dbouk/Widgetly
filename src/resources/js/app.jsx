import './bootstrap';
import React from "react";
import  ReactDOM from "react-dom/client";
import Main from './main';
import store from './redux/store'
import { Provider } from 'react-redux'
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Main />
   </Provider>
);