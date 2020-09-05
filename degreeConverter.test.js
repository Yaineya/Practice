const { C2F, F2C } = require('./degreeConverter');

describe("конветирование", () => {
    test("должен конвертнуть цельсии в фаренгейт", () => {
        expect(C2F(100)).toEqual(212);
        expect(C2F(50.5)).toEqual(122.9);
        expect(C2F(-200)).toEqual(-328);
        expect(C2F(0)).toEqual(32);
    })

    test("должен конвертнуть фаренгейты в цельсий", () => {
        expect(F2C(212)).toEqual(100);
        expect(F2C(122.9)).toEqual(50.5);
        expect(F2C(-328)).toEqual(-200); 
    })
})

