function productExceptSelf(nums: number[]): number[] {
   const len = nums.length;
   const products = new Array(len);
   let product = 1;
   for (let i = 0; i < len; i++) {
       products[i] = product;
       product = product * nums[i];
   } 
   product = 1;
   for (let i = len - 1; i >= 0; i--) {
       products[i] = products[i] * product;
       product = product * nums[i];
   }
   return products;
};