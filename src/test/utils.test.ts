import { getStringInfo, stringInfo, toUpperCase } from "../app/utils";

const mockData: string = 'abc';
const expected: string = 'ABC';
describe('Utils test', ()=>{
    it('should return uppercase of valid string', ()=>{
        const fn: Function = toUpperCase;
        const result: string = fn(mockData);
        expect(result).toBe(expected);
    })
    // write more functionality with less code
    describe('ToUpperCase examples', ()=>{
        it.each([
            { input: 'abc', expected: 'ABC'},
            { input: 'My-Name', expected: 'MY-NAME'},
            { input: 'nick', expected: 'NICK'},
        ])('$input toUpperCase should be $expected', ({input, expected})=>{
            const actual :string = toUpperCase(input);
            expect(actual).toBe(expected); 
        })
    })


    describe('getStringInfo for arg abc should', ()=>{
        it('return right length', ()=>{
            const result: stringInfo = getStringInfo(mockData);
            expect(result.length).toBe(mockData.length);
        })
        it('return right lower case', ()=>{
            const result: stringInfo = getStringInfo(mockData);
            expect(result.lowerCase).toBe(expected.toLowerCase());
        })
        it('return right upper case', ()=>{
            const result: stringInfo = getStringInfo(mockData);
            expect(result.upperCase).toBe(expected.toUpperCase());
        })

        it('return right characters', ()=>{
            const result: stringInfo = getStringInfo(mockData);
            expect(result.characters).toEqual(Array.from(mockData));
            expect(result.characters).toHaveLength(mockData.length);
            expect(result.characters).toContain<string>('b');
            // enter any item that exist in an object
            expect(result.characters).toEqual(expect.arrayContaining(['b','a']));
        })
        it('return defined extra info', ()=>{
            const result: stringInfo = getStringInfo(mockData);
            expect(result.extraInfo).not.toBe(undefined);
            expect(result.extraInfo).not.toBeUndefined();
            expect(result.extraInfo).toBeDefined();
            expect(result.extraInfo).toBeTruthy();
            expect(result.extraInfo).toEqual({message: `your parameter was ${mockData}`});
            expect(result.extraInfo).toMatchObject({message: `your parameter was ${mockData}`});
        })
    })
});