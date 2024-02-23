export function floatToFraction(x, error = 0.000001) {
    let n = Math.floor(x);
    x -= n;
    if (x < error) {
        return [n, 1];
    } else if (1 - error < x) {
        return [n + 1, 1];
    }

    let lowerN = 0;
    let lowerD = 1;

    let upperN = 1;
    let upperD = 1;

    while (true) {
        let middleN = lowerN + upperN;
        let middleD = lowerD + upperD;

        if (middleD * (x + error) < middleN) {
            upperN = middleN;
            upperD = middleD;
        } else if (middleN < (x - error) * middleD) {
            lowerN = middleN;
            lowerD = middleD;
        } else {
            return [n * middleD + middleN, middleD];
        }
    }
}