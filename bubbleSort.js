let a = [1,2,23,1,23,123,12,3,123,12,42344,5,46,45,6,5767867,87,897,34,53,45,34,53,45,345,6,5,7,65,76,8,678,78,6787,6,56,45]

bubbleSort(a);

let result = "";
a.forEach(value => result += (value + " "));
console.log(result);

function bubbleSort(a){
	for(let j = a.length - 1; j >= 1; j--){
		for(let i = 0; i < j; i++){
			if(a[i] > a[i + 1]){
				let temp = a[i];
				a[i] = a[i + 1];
				a[i + 1] = temp;
			}
		}
	}
}