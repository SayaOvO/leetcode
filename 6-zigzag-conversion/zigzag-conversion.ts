function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;
    let row = 0, forward = true, arr = new Array(numRows).fill(0).map(_ => []);
    for (let i = 0, len = s.length; i < len; i++) {
       arr[row].push(s[i]);
       if (forward) {
        if (row === numRows - 1) {
            row--;
            forward = false
        } else {
            row++;
        }
       } else {
        if (row === 0) {
            row++;
            forward = true;
        } else {
            row--;
        }
       }
    }
    return arr.map((strs) => strs.join('')).join('')
    
};