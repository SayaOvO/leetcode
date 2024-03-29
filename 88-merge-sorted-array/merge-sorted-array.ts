/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let index = m + n - 1;
    while (m > 0 && n > 0) {
        if (nums1[m-1] > nums2[n-1]) {
            nums1[index--] = nums1[m-1]; 
            m--
        } else {
            nums1[index--] = nums2[n-1]; 
            n--
        }
    }
    if (m === 0) {
        for (let i = n - 1; i >= 0; i--) {
            nums1[index--] = nums2[i]
        }
    }
};