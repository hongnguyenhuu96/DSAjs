let a = [1,3,2,4,10,5,1,23,435,4,5,54,65,7,56,76,78,657,3,45,345,45,6,67,657,6,78789,789,789,8]

selectionShort(a);

let result = "";
a.forEach(value => result += (value + " "));
console.log(result);

function selectionShort(a){
	for(let i = 0; i < a.length - 1; i++){
		let min = i;
		for(let j = i + 1; j < a.length; j++){
			if(a[j] < a[min]){
				min = j;
			}
		}
		if(min != i){
			let temp = a[i];
			a[i] = a[min];
			a[min] = temp;
		}
	}
}
