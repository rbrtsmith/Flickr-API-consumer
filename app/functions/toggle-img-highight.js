export default (imgIndex, highlightedImages) => {
    return highlightedImages.map((selectedValue, index) => 
    	imgIndex === index ? !selectedValue : selectedValue );
};
