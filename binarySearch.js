let a = [1,2,3,4,5,6,7,8,9,11,15,16,18,20,31,35]

function find(x, a, left, right){
  if(left <= right){
    let mid = Math.floor((left + right)/2);
    if(x == a[mid]) return mid;
    if(x < a[mid]){
      return find(x, a, left, mid - 1);
    }
    if(x > a[mid]){
      // x > a[mid]
      return find(x, a, mid + 1, right);
    }
  } else {
    console.log("not found")
  }
}

console.log(find(11, a, 0, a.length - 1));