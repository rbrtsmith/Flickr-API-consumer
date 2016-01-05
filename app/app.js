import React from 'react';
import ReactDOM from 'react-dom';
import Img from './components/img';
import css from './styles/style.scss';

const App = React.createClass({
	getInitialState(){
		const { data } = this.props;
		const disselectAll = (data) => data.map(() => false);
		let selectedImages;
		if (localStorage.getItem('selectedImages')) {
			// state is found in localStorage... then get that state
			selectedImages = JSON.parse(localStorage.getItem('selectedImages'));
		} else {
			// No state foun in localStorage so create a new state with all objects disselected
			selectedImages = disselectAll(data);
			// then push the new state to localStorage.
			localStorage.setItem('selectedImages', JSON.stringify(selectedImages));
		}
		return {
			selectedImages
		};
	},
	selectImage(imgIndex) {
		// get state from localStorage
		const selectedImages = JSON.parse(localStorage.getItem('selectedImages'));

		const newState = this.state.selectedImages.map((selectedValue, index) => {
			if (imgIndex === index) {
				selectedImages[index] = !selectedImages[index];
				return !selectedValue;
			} else {
				return selectedValue;
			}
		});
		// update state in localStorage.
		localStorage.setItem('selectedImages', JSON.stringify(selectedImages));
		// force re-render of the app
		this.setState({
			selectedImages: newState
		});
	},
	render() {
		const { data } = this.props;		
		const images = data.map((item, index) => {
			return (
				<li key={index} className='o-grid__item'>
					<Img selectImage={this.selectImage} 
						isSelected={this.state.selectedImages[index]}
						index={index} 
						src={item.media.m} 
					/>
				</li>
			);
		});
		return (
			<div className='o-wrapper'>
				<ul className='o-grid'>
					{images}
				</ul>
			</div>
		);
	}
});

window.APP = data => ReactDOM.render( <App data={data.items} />, document.querySelector('#app'));

