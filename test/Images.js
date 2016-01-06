import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import Images from './../app/components/images';


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
        highlightedImages: [false, false]
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
        const actual = renderer.getRenderOutput().props.className.includes('o-grid');
        const expected = true;
        expect(actual).toEqual(expected);
    });

    it('should have 2 children', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<Images
            data={testData.data}
            selectImage={testData.selectImage}
            highlightedImages={testData.highlightedImages}
        />);
        const actual = renderer.getRenderOutput().props.children.length;
        const expected = 2;
        expect(actual).toEqual(expected);
    });

    it('should have lis as children', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<Images
            data={testData.data}
            selectImage={testData.selectImage}
            highlightedImages={testData.highlightedImages}
        />);
        const actual = renderer.getRenderOutput().props.children[0].type;
        const expected = 'li';
        expect(actual).toEqual(expected);
    });

    it('should have children with the correct classname', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<Images
            data={testData.data}
            selectImage={testData.selectImage}
            highlightedImages={testData.highlightedImages}
        />);
        const actual = renderer.getRenderOutput().props.children[0].props.className.includes('o-grid__item');
        const expected = true;
        expect(actual).toEqual(expected);
    });

});