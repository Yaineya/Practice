function C2F(c) {
    let result = c * (9/5) + 32;
    return parseFloat(result.toFixed(2));
}

function F2C(f) {
    let result = (f - 32) * (5/9);
    return parseFloat(result.toFixed(2));
}

module.exports = {
    C2F: C2F,
    F2C: F2C
}