let a = [12,13,9,25,7,31,3,37,14,22,15,12,35,23,12,89,42,21]

heapSort(a);

let result = "";
a.forEach(value => result += (value + " "));
console.log(result);

function heapSort(a){
	for(i = Math.floor(a.length/2) - 1; i >= 0; i--){
		heapify(a, a.length, i);
	}
	for(i = a.length - 1; i >= 0; i--){
		[a[i], a[0]] = [a[0], a[i]]
		heapify(a, i, 0);
	}
}


function heapify(a, n, i){
	let largest = i;
	let left = 2*i + 1;
	let right = 2*i + 2;
	if(left < n && a[left] > a[largest]) largest = left;
	if(right < n && a[right] > a[largest]) largest = right;
	if(i != largest){
		[a[i], a[largest]] = [a[largest], a[i]]
		heapify(a, n, largest);
	}
}