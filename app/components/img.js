import React from 'react';

export default React.createClass({
	render() {
		const { selectImage, index, isSelected, src } = this.props;
		const handleClick = (index) => selectImage(index);
		const className = isSelected ? 'o-flickr-img selected' : 'o-flickr-img';
		return (
			<img src={src} className={className} onClick={handleClick.bind(null, index)}/>
		);
	}
});