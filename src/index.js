import './index.css'
import {NavigationProvider} from './context/Navigation';
import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';

const ele=document.getElementById('root');
const root=ReactDOM.createRoot(ele);

root.render(<NavigationProvider>
    <App />
</NavigationProvider>);