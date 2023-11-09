import './scss/global.scss';
import './css/global.css';

import { render } from 'solid-js/web';

import App from './app';

const root = document.querySelector('#root');

render(() => <App />, root as HTMLElement);
