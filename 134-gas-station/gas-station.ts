function canCompleteCircuit(gas: number[], cost: number[]): number {
    let len = gas.length, start = 0, sum = 0;

    for (let i = 0; i < len; i++) {
        gas[i] = gas[i] - cost[i];
    }

    while (start < len) {
        let acc = 0, i = start;
        for (;i < len; i++) {
            acc += gas[i]
            console.log("acc:", acc)
            if (acc < 0) {
                start = i + 1;
                sum += acc;
                break;
            }
        }
        if (i === len) {
            return sum + acc >= 0 ? start : -1;
        }
    }
    return -1;
};