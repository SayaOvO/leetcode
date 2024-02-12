function isSubsequence(s: string, t: string): boolean {
    let lastIndex: number = -1;
    for (let ch of s) {
        t = t.slice(lastIndex + 1);
        const index = t.indexOf(ch);
        if (index === -1) {
            return false;
        }
        lastIndex = index;
    }
    return true;
};