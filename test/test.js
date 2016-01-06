import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import toggleImageHighlight from './../app/functions/toggle-img-highight';

import App from './../app/components/app';
import Img from './../app/components/img';



// Test functions
describe('toggle-img-highlight', () => {
    it('return an array with the boolean at the index reversed.', () => {
        const index = 1;
        const initialState = [false, false, false];
        const expected = [false, true, false];
        const actual = toggleImageHighlight(index, initialState);
        expect(actual).toEqual(expected);
    })
});

const Foo = () => <div>Foo</div>

// Test components
describe('App', () => {
    it('should render a div', () =>{
        const renderer = TestUtils.createRenderer();
        renderer.render(<Foo/>);
        const actual = renderer.getRenderOutput();
        const expected = <div>Foo</div>;
        expect(actual).toIncludeJSX(expected);
    });
});

describe('Img', () => {

    it('should render an image.', () => {
        const renderer = TestUtils.createRenderer();
        const clickHandler = () => null;
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


    it('should give a selected class if favourited.', () => {
        const renderer = TestUtils.createRenderer();
        const clickHandler = () => null;
        renderer.render(<Img 
            selectImage={clickHandler} 
            index={1} 
            isSelected={true} 
            src={'http://farm2.staticflickr.com/1482/23548579844_820dd5f1f4_m.jpg'}
        />);
        const actual = renderer.getRenderOutput();
        const expected = <img 
            src={'http://farm2.staticflickr.com/1482/23548579844_820dd5f1f4_m.jpg'} 
            className={'o-flickr-img selected'}
            onClick={clickHandler}
        />;
        expect(actual).toIncludeJSX(expected);
    });
});