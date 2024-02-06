function strStr(haystack: string, needle: string): number {
    let needleLen = needle.length;
    for (let i = 0, len = haystack.length; i < len; i++) {
        let j = 0;
        while (j < needleLen) {
            if (haystack[i+j] !== needle[j]) {
                break;
            }
            j++;
        }
        if (j === needleLen) {
            return i;
        }
    }
    return -1;
    
};