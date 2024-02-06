function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0];
    for (let i = 1, len = strs.length; i < len; i++) {
        let j = 0;
        for (let len = strs[i].length; j < len; j++) {
            if (strs[i][j] !== prefix[j]) {
                break;
            }
        }
        prefix = strs[i].slice(0, j)
    }
    return prefix;
};