function kmh_ms(kmH){
    let result = kmH * 1000 / 3600;
    return console.log(result.toFixed(2));
} 

function ms_kmh(ms){
    let result = ms * 3.6;
    return console.log(result.toFixed(3));
}

module.exports = {
    // isNumber: isNumber,
    kmh_ms: kmh_ms,
    ms_kmh: ms_kmh
}

// kmh_ms(200);
// kmh_ms(20);
// kmh_ms(120);

// ms_kmh(100);
// ms_kmh(23);
// ms_kmh(33);