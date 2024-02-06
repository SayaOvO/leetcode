function isPalindrome(s: string): boolean {
    s = s.replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase();

    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--
        } else {
            return false;
        }
    }
    return true;

};