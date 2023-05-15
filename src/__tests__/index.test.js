import{multiply} from '../index.js';

describe("test multiply",()=>{
    it ("multiply 1 x 0 to equal 0",()=>{
        const result = multiply(1,0);
        expect(result).toBe(0)
    }),
    it ("multiply 1 x 2 to equal 2",()=>{
        const result = multiply (1,2);
        expect(result).toBe(2)
    })
})