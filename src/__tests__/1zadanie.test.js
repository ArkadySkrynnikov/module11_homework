import{countDown} from '../1zadanie.js';

describe("test countDown",()=>{
    it ("counDown",()=>{
        const result = countDown(2);
        expect(result).toBe(2,1)
    }),
    it ("counDown",()=>{
        const result = countDown(3);
        expect(result).toBe(3,2,1)
    }),
    it ("counDown",()=>{
        const result = countDown(4);
        expect(result).toBe(4,3,2,1)
    })
})