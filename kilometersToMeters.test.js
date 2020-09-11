const {kmh_ms, ms_kmh} = require('./kilometersToMeters');
// const { describe } = require('yargs');

describe("конвертирование", ()=>{
    test("из километров в час в метры в секунду", ()=>{
        expect(kmh_ms(0).toEqual(0));
        expect(kmh_ms(60).toEqual(16.67));
        expect(kmh_ms(120).toEqual(33.33));
    } )
    test("из метров в секунду в километры в час", ()=>{
        expect(ms_kmh(0).toEqual(0));
        expect(ms_kmh(23).toEqual(82.8));
        expect(ms_kmh(33).toEqual(118.8));
    })
})