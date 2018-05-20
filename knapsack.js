let val = [60,100,120,21,47,53];
let wt = [10,20,30,40,15,30];
let W = 100;


function knapsack(val, wt, W, n){
  let f = [];
  for(let i = 0; i <= n; i++){
    let temp = [];
    for(j = 0; j <= W; j++){
      temp.push(0);
    }
    f.push(temp);
  }
  
  for(let i = 0; i <= n; i++){
    for(let w = 0; w <= W; w++){
      if(i === 0 || w === 0){
        f[i][w] = 0;
      } else {
        if(wt[i - 1] <= w){
          f[i][w] = Math.max(val[i - 1] + f[i - 1][w - wt[i - 1]], f[i - 1][w]);
        } else {
          f[i][w] = f[i - 1][w];
        }
      }
    }
  }
  return f[n][W];
}


// function knapsack(val, wt, w, n){
//   if(n == 0 || w == 0) return 0;
//   if(wt[n - 1] > w){
//     return knapsack(val, wt, w, n - 1);
//   } else {
//     return Math.max(val[n - 1] + knapsack(val, wt, w - wt[n - 1], n - 1), knapsack(val, wt, w, n - 1));
//   }
// }


console.log(knapsack(val, wt, W, val.length));