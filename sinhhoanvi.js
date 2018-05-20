let a = [1,2,3];

let result = [];
let mark = [];

for(let i = 0; i < a.length; i++){
  mark[i] = false;
}

function backtrack(i){
  if(i == a.length){
    console.log("" + result);
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