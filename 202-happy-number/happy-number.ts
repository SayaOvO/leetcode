function isHappy(n: number): boolean {
    const set = new Set<number>();
    while (true) {
        const sum = sumDigits(n);
        if (sum === 1) {
            return true;
        } else if (set.has(sum)) {
            return false
        } else {
            n = sum;
            set.add(sum)
        }
    }
};

function sumDigits(num: number) {
    let sum = 0;
    for (let x of ''+num) {
        sum += parseInt(x) ** 2
    }
    return sum;
}