function addBinary(a: string, b: string): string {
    // padding zeroes
    if (a.length > b.length) {
        b = b.padStart(a.length, '0')
    } else {
        a = a.padStart(b.length, '0')
    }
   const nums1 = a.split('').map((ch) => parseInt(ch)); 
   const nums2 = b.split('').map((ch) => parseInt(ch)); 
   const len = nums1.length;
   let adder = 0;
   const res = []
   for (let i = len - 1; i >= 0; i--) {
       const sum = nums1[i] + nums2[i] + adder
       if (sum > 1) {
           res[i] = sum - 2;
           adder = 1;
       } else {
           res[i] = sum;
           adder = 0;
       }
   }
   if (adder === 1) {
       res.unshift(1)
   }
   return res.join('')

};