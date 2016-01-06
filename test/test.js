import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Img from './../app/components/img';

const clickHandler = () => null;


describe('Img', () => {

    it('should render an image', () => {
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


    it('should give a selected class if favourited', () => {
        const renderer = TestUtils.createRenderer();
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