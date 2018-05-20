/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {    
    return quickSort(nums, 0, nums.length - 1, k);
};



function quickSort(a, left, right, k){
    if(left <= right){
        let m = partition(a, left, right);
        console.log(m);
        
        if(m == a.length - k) return a[m];
        if(m < a.length - k) return quickSort(a, m + 1, right, k);
        if(m > a.length - k) return quickSort(a, left, m - 1, k);
    }
}


function partition(a, left, right){
    let i = left;
    let j = right;
    while(i <= j){
        while(a[i] <= a[left] && i <= j) i++;
        while(a[j] > a[left] && i <= j) j--;
        if(i < j){
            [a[i], a[j]] = [a[j],a[i]]
        }
    }
    [a[left],a[j]] = [a[j],a[left]];
    return j;
}