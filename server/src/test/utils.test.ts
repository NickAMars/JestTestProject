import StringUtils, {stringInfo} from "../app/utils";

const mockData: string = 'abc';
const expected: string = 'ABC';
let stringUtils: StringUtils;
describe('Utils test', ()=>{
    //JEST Hooks
    beforeAll(()=>{
        // set up
    })
    beforeEach(()=>{
        stringUtils = new StringUtils();
    })
    afterEach(()=>{
        // clearing mocks
    })
    afterAll(()=>{
        // clearing set up
    })
    it('should return uppercase of valid string', ()=>{
        const fn: Function = stringUtils.toUpperCase;
        const result: string = fn(mockData);
        expect(result).toBe(expected);
    })
    describe('ToUpperCase test for errors example', () =>{
        it('should throw error on invalid argument - function', ()=>{
            const fn: Function = stringUtils.toUpperCase;
            function expectError(){
                const actual = fn('');
            }
            expect(expectError).toThrow();
            expect(expectError).toThrowError('Invalid arguments');
        })
    
        it('should throw error on invalid argument - arrow function', ()=>{
            const fn: Function = stringUtils.toUpperCase;
            expect( ()=>{fn('')} ).toThrow();
            expect( ()=>{fn('')} ).toThrowError('Invalid arguments');
        })
        it('should throw error on invalid argument - try catch block', (done)=>{
            try{
               const fn: Function = stringUtils.toUpperCase;
                fn('');
                //    fail('GetStringInfo should throw error for invalid arg!')
                done('GetStringInfo should throw error for invalid arg!')
            }catch(error){
                expect(error).toBeInstanceOf(Error);
                expect(error).toHaveProperty('message', 'Invalid arguments');
                done();
            }
        })
    })

    // write more functionality with less code
    describe('ToUpperCase examples', ()=>{
        it.each([
            { input: 'abc', expected: 'ABC'},
            { input: 'My-Name', expected: 'MY-NAME'},
            { input: 'nick', expected: 'NICK'},
        ])('$input toUpperCase should be $expected', ({input, expected})=>{
            const actual :string = stringUtils.toUpperCase(input);
            expect(actual).toBe(expected); 
        })
    })


    describe('getStringInfo for arg abc should', ()=>{
        it('return right length', ()=>{
            const result: stringInfo = stringUtils.getStringInfo(mockData);
            expect(result.length).toBe(mockData.length);
        })
        it('return right lower case', ()=>{
            const result: stringInfo = stringUtils.getStringInfo(mockData);
            expect(result.lowerCase).toBe(expected.toLowerCase());
        })
        it('return right upper case', ()=>{
            const result: stringInfo = stringUtils.getStringInfo(mockData);
            expect(result.upperCase).toBe(expected.toUpperCase());
        })

        it('return right characters', ()=>{
            const result: stringInfo = stringUtils.getStringInfo(mockData);
            expect(result.characters).toEqual(Array.from(mockData));
            expect(result.characters).toHaveLength(mockData.length);
            expect(result.characters).toContain<string>('b');
            // enter any item that exist in an object
            expect(result.characters).toEqual(expect.arrayContaining(['b','a']));
        })
        it('return defined extra info', ()=>{
            const result: stringInfo = stringUtils.getStringInfo(mockData);
            expect(result.extraInfo).not.toBe(undefined);
            expect(result.extraInfo).not.toBeUndefined();
            expect(result.extraInfo).toBeDefined();
            expect(result.extraInfo).toBeTruthy();
            expect(result.extraInfo).toEqual({message: `your parameter was ${mockData}`});
            expect(result.extraInfo).toMatchObject({message: `your parameter was ${mockData}`});
        })
    })
});