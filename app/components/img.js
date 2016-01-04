import React from 'react';

export default React.createClass({
	getInitialState() {
		return {
			selected: true
		};
	},
	render() {
		const { src } = this.props;
		const hanldeClick = (img) => {
			this.setState({
				selected: !this.state.selected
			});
		};
		const className = this.state.selected ? 'selected' : '';
		return (
			<img src={src} className={className} onClick={hanldeClick}/>
		);
	}
});