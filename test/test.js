import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import toggleImageHighlight from './../app/functions/toggle-img-highight';

import Images from './../app/components/images';
import Img from './../app/components/img';



// Test functions
describe('toggle-img-highlight', () => {
    it('should return an array with the boolean at the index reversed.', () => {
        const index = 1;
        const initialState = [false, false, false];
        const expected = [false, true, false];
        const actual = toggleImageHighlight(index, initialState);
        expect(actual).toEqual(expected);
    })
});





// Test components
describe('Images', () => {
    const testData = {
        data: [
            {
                media: {
                    m: ''
                }
            }, 
            {
                media: {
                    m: ''
                }
            }
        ],
        selectImage(){ return null },
        highlightedImages: [false, false, false]
    };
    it('should be an unordered list.', () =>{
        const renderer = TestUtils.createRenderer();
        renderer.render(<Images
            data={testData.data}
            selectImage={testData.selectImage}
            highlightedImages={testData.highlightedImages}
        />);
        const actual = renderer.getRenderOutput().type;
        const expected = 'ul';
        expect(actual).toEqual(expected);
    });

    it('should have the correct classname.', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<Images
            data={testData.data}
            selectImage={testData.selectImage}
            highlightedImages={testData.highlightedImages}
        />);
        const actual = renderer.getRenderOutput().props.className;
        const expected = 'o-grid';
        expect(actual).toEqual(expected);
    });
});



describe('Img', () => {
    const clickHandler = () => null;

    it('should render an image.', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<Img 
            selectImage={clickHandler} 
            index={1} 
            isSelected={false} 
            src={'http://farm2.staticflickr.com/1482/23548579844_820dd5f1f4_m.jpg'}
        />);
        const actual = renderer.getRenderOutput();
        const expected = <img 
            src={'http://farm2.staticflickr.com/1482/23548579844_820dd5f1f4_m.jpg'} 
            className={'o-flickr-img'}
            onClick={clickHandler}
        />;
        expect(actual).toIncludeJSX(expected);
    });

    it('should have the correct classname.', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<Img 
            selectImage={clickHandler} 
            index={1} 
            isSelected={false} 
            src={'http://farm2.staticflickr.com/1482/23548579844_820dd5f1f4_m.jpg'}
        />);
        const actual = renderer.getRenderOutput().props.className;
        const expected = 'o-flickr-img';
        expect(actual).toIncludeJSX(expected);
    });

    it('should give a selected class if favourited.', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<Img 
            selectImage={clickHandler} 
            index={1} 
            isSelected={true} 
            src={'http://farm2.staticflickr.com/1482/23548579844_820dd5f1f4_m.jpg'}
        />);
        const actual = renderer.getRenderOutput().props.className;
        const expected = 'o-flickr-img selected';
        expect(actual).toIncludeJSX(expected);
    });
});