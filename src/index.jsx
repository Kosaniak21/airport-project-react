<<<<<<< HEAD
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import App from "./App";

const rootElement = document.querySelector("#root");

const root = createRoot(rootElement);

root.render(<App />);
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';

const rootElement = document.querySelector('#root');

ReactDOM.render(<App />, rootElement);
>>>>>>> e4bfb1dc507d480f0ecce6a03311b267036c80d3
