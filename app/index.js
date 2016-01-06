import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import css from './styles/style.scss';



window.APP = data => 
	ReactDOM.render( <App data={data.items} />, document.querySelector('#app'));

