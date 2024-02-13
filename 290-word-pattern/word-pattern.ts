function wordPattern(pattern: string, s: string): boolean {
    const patternIdxes = getIdxes([...pattern]);
    const sIdxes = getIdxes(s.split(" "));
    
    if (patternIdxes.length !== sIdxes.length) {
        return false;
    }

    for (let i = 0, len = patternIdxes.length; i < len; i++) {
        if (!compareArray(patternIdxes[i], sIdxes[i])) {
            return false;
        }
    }
    return true;
    
};

function getIdxes(arr: string[]) {
    const map = new Map<string, number[]>();

    for (let i = 0, len = arr.length; i < len; i++) {
        map.set(arr[i], map.has(arr[i]) ? map.get(arr[i]).concat(i) : [i])
    }
    return [...map.values()];
}

function compareArray(arr1: number[], arr2: number[]) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0, len = arr1.length; i < len; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}