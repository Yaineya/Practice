function kmh_ms(kmH){
    let result = (kmH * 1000 / 3600).toFixed(2);
    result = parseFloat(result);
    return result;
} 

function ms_kmh(ms) 
{
    const result = (ms * 3.6) .toFixed(2);
    return parseFloat(result);
}

module.exports = {
    // isNumber: isNumber,
    kmh_ms,
    ms_kmh
};

//kmh_ms(200);
// kmh_ms(20);
// kmh_ms(120);

// ms_kmh(100);
// ms_kmh(23);
// ms_kmh(33);
