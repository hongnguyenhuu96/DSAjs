let a = [5,3,1,3,1,23,123,432,4,34,54,6,546,57,56,7,68,1231,123,43,567,67,8,786,8,5645,64]

insertionShort(a);

let result = "";
a.forEach(value => result += (value + " "));
console.log(result);

// function insertionShort(a){
// 	for(let i = 1; i < a.length; i++){
// 		let j = i;
// 		while(a[j] < a[j-1] && j>= 1){
// 			let temp = a[j];
// 			a[j] = a[j-1];
// 			a[j-1] = temp;
// 			j--;
// 		}
// 	}
// }


function insertionShort(a){
	for(let i = 1; i < a.length; i++){
		let t = a[i];
		let j = i - 1;
		while(a[j] > t && j >= 1){
			a[j + 1] = a[j];
			j--;
		}
		a[j] = t;
	}
}