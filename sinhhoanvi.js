let a = [1,2,3];

let result = [];
let mark = [];

for(let i = 0; i < a.length; i++){
  mark[i] = false;
}

function backtrack(i){
  if(i == a.length){
    console.log(result);
  }

  for(let j = 0; j < a.length; j++){
    if(!mark[j]){
      result[i] = a[j];
      mark[j] = true;
      backtrack(i + 1);
      mark[j] = false;
    }
  }
}

backtrack(0);


console.log('================')

function permute(a, left, right){
  if(left == right){
    console.log(a)
  }
  for(let i = left; i <= right; i++){
    // console.log(left, i)
    swap(a, left, i) // lan luot dao 1 phan tu len dau tien
    permute(a, left + 1, right) // sinh hoan vi cho phan con lai
    swap(a, left, i)
  }
}

function swap(a, i, j){
  let temp = a[i]
  a[i] = a[j]
  a[j] = temp
}

console.log(permute([1,2,3], 0, 2))