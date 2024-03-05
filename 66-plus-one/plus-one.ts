function plusOne(digits: number[]): number[] {
    let adder = 0;
    let len = digits.length;
    for (let i = len - 1; i >= 0; i--) {
        let sum = digits[i] + adder;
        if (i === len - 1) {
            sum += 1;
        }
        if (sum < 10) {
            digits[i] = sum;
            adder = 0;
            return digits;
        } else {
            digits[i] = sum - 10;
            adder = 1;
        }
    }
    if (adder === 1) {
        digits.unshift(1)
    }

    return digits;
    
};