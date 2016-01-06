import React from 'react';
import Img from './img';

export default ({
    data,
    selectImage,
    highlightedImages
}) => {
    const images = data.map((item, index) => {
        return (
            <li key={index} className='o-grid__item'>
                <Img selectImage={selectImage} 
                    isSelected={highlightedImages[index]}
                    index={index} 
                    src={item.media.m} 
                />
            </li>
        );
    });
    return(
        <ul className='o-grid'>
            {images}
        </ul>
    );
};