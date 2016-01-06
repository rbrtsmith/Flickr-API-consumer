import React from 'react';
import Images from './images';
import toggleImageHighlight from './../functions/toggle-img-highight';


export default React.createClass({
    getInitialState(){
        const { data } = this.props;
        const disselectAll = (data) => data.map(() => false);
        let highlightedImages;
        if (localStorage.getItem('highlightedImages')) {
            // state is found in localStorage... then get that state
            highlightedImages = JSON.parse(localStorage.getItem('highlightedImages'));
        } else {
            // No state foun in localStorage so create a new state with all objects disselected
            highlightedImages = disselectAll(data);
            // then push the new state to localStorage.
            localStorage.setItem('highlightedImages', JSON.stringify(highlightedImages));
        }
        return {
            highlightedImages
        };
    },
    selectImage(imgIndex) {
        // get current state from localStorage
        const highlightedImages = JSON.parse(localStorage.getItem('highlightedImages'));

        // update state
        const newState = toggleImageHighlight(imgIndex, highlightedImages);
        // update state in localStorage.
        localStorage.setItem('highlightedImages', JSON.stringify(highlightedImages));
        // force re-render of the app
        this.setState({
            highlightedImages: newState
        });
    },
    render() {
        const { data } = this.props;
        return (
            <div className='o-wrapper'>
                <Images 
                    data={data}
                    selectImage={this.selectImage} 
                    highlightedImages={this.state.highlightedImages}
                />
            </div>
        );
    }
});