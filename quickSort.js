let a = [4,3,6,7,2, 3,1,3,1,4,3,2,1]

quickSort(a, 0, a.length - 1);

let result = "";
a.forEach(value => result += (value + " "));
console.log(result);

function quickSort(a, left, right){
	if(left < right){
		let k = partition(a, left, right);
		quickSort(a, left, k - 1);
		quickSort(a, k + 1, right);
	}
}


function partition(a, left, right){
	let i = left;
	let j = right;
	do{
		while(i <= j && a[i] <= a[left]) i++;
		while(i <= j && a[j] > a[left]) j--;
		if(i < j){
			let temp = a[i];
			a[i] = a[j];
			a[j] = temp;
		}
	} while(i <= j)
	let temp = a[left];
	a[left] = a[j];
	a[j] = temp;
	return j;
}