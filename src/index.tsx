import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './styles/main.sass';

const rootEl = document.getElementById('root');
if (rootEl) {
  rootEl.classList.add('container');
}
ReactDOM.render(<App />, rootEl);
