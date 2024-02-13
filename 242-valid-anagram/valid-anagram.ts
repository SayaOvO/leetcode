function isAnagram(s: string, t: string): boolean {
    const sF = getLetterFrequency(s);
    const tF = getLetterFrequency(t);

    if (sF.size !== tF.size) {
        return false;
    }
    
    for (let [key, value] of sF) {
        if (!tF.has(key) || tF.get(key) !== value) {
            return false;
        }
    }
    return true;
};

function getLetterFrequency(str: string) {
    const map = new Map<string, number>();
    for (let i = 0, len = str.length; i < len; i++) {
        map.set(str[i], map.has(str[i]) ? map.get(str[i]) + 1 : 1)
    }
    return map;
}