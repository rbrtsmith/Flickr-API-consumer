import expect from 'expect';
import toggleImageHighlight from './../app/functions/toggle-img-highight';


describe('toggle-img-highlight', () => {
    it('should return an array with highlighted item set to true', () => {
        const index = 1;
        const initialState = [false, false, false];
        const expected = [false, true, false];
        const actual = toggleImageHighlight(index, initialState);
        expect(actual).toEqual(expected);
    })
});    
