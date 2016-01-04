import React from 'react';
import ReactDOM from 'react-dom';
import Img from './components/img';



const App = React.createClass({
	render() {
		const { data } = this.props;
		const images = data.map((item, index) => {
			return (
				<li key={index} className='image-grid__item'>
					<Img src={item.media.m} />
				</li>
			);
		});
		return (
			<div>
				<ul className='image-grid'>
					{images}
				</ul>
			</div>
		);
	}
});

window.foo = data => {
	ReactDOM.render( <App data={data.items} />, document.querySelector('#app'));	
};

