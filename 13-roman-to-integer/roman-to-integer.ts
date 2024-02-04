function romanToInt(s: string): number {
   let result = 0; 

    let i = 0, len = s.length;
   for (; i< len - 1; i++) {
       if (riMap[s[i]] >= riMap[s[i+1]]) {
           result += riMap[s[i]];
       } else {
           result += riMap[s[i+1]] - riMap[s[i]];
           i++;
       }
   }
   if (i !== len) {
       result += riMap[s[i]]
   }
   return result;
    
};

const riMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}