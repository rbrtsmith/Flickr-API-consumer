export default function(imgIndex, highlightedImages) {
    return highlightedImages.map((selectedValue, index) => {
        if (imgIndex === index) {
            highlightedImages[index] = !highlightedImages[index];
            return !selectedValue;
        } else {
            return selectedValue;
        }
    });
};