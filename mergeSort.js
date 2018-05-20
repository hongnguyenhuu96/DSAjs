let a = [4,3,6,7,2]

mergeSort(a, 0, a.length - 1);

let result = "";
a.forEach(value => result += (value + " "));
console.log(result);

function mergeSort(a, left, right){
    if(left < right){
    	let mid = parseInt((right + left)/2)
        mergeSort(a, left, mid);
        mergeSort(a, mid + 1, right);
        merge(a, left, right, mid);
    }
}

function merge(a, left, right, mid){ 
    let s1 = left;
	let s2 = mid + 1;
    let temp = [];
 	let k = 0;
    while(s1 <= mid && s2 <= right){
    	if(a[s1] < a[s2]){
        	temp[k] = a[s1];
            s1++;
            k++;
        }
        else {
        	temp[k] = a[s2];
            s2++;
            k++;
        }
    }
    while(s1 <= mid){
    	temp[k] = a[s1];
        s1++;
        k++;
    }
    while(s2 <= right){
    	temp[k] = a[s2];
        s2++;
        k++;
    }
    
    k = 0;
    for(let i = left; i <= right; i++){
    	a[i] = temp[k];
        k++;
    }
}