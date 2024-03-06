const cache: {[n: number]: number} = {1: 1, 2: 2};

function climbStairs(n: number): number {

   if (n === 1 || n === 2)  {
       return n;
   }
   let n_1: number, n_2: number;
   if (cache[n-1]) {
       n_1 = cache[n-1];
    } else {
        n_1 = climbStairs(n-1);
        cache[n-1] = n_1;
    }
    if (cache[n-2]) {
        n_2 = cache[n-2];
    } else {
        n_2 = climbStairs(n-2);
        cache[n-2] = n_2;
    }
   
   return n_1 + n_2;
};