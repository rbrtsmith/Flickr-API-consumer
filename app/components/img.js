import React from 'react';

export default React.createClass({
	/**
	 * This component has no state, it is passed down from the App component.
	 */
	render() {
		const { selectImage, index, isSelected, src } = this.props;
		// click handler calls function selectImage that was passed from App as a prop
		const handleClick = (index) => selectImage(index);
		// set classname based on boolean value of the prop isSelected.
		const className = isSelected ? 'o-flickr-img selected' : 'o-flickr-img';
		return (
			<img src={src} className={className} onClick={handleClick.bind(null, index)}/>
		);
	}
});