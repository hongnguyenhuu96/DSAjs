class Heap{
  constructor(){
    this.data = [];
    this.comparator = (a, b) => (a.weight - b.weight);
  }
  push(key, value, weight){
    this.data.push({key, value, weight});
    this.up(this.data.length - 1);
  }
  get size(){
    return this.data.length;
  }
  pop(){
    [this.data[0], this.data[this.size - 1]] = [this.data[this.size - 1], this.data[0]];
    let result = this.data.pop();
    this.down(0);
    return result;
  }

  update(key, weight){
    for(let i = 0; i < this.data.length; i++){
      if(this.data[i].key == key){
        this.data[i].weight = weight;
        this.down(i);
        this.up(i);
      }
    }
  }
  
  down(p){
    let left = 2*p + 1;
    let right = 2*p + 2;
    let max = p;
    if(left < this.data.length){
      if(this.comparator(this.data[left], this.data[max]) > 0) max = left;
    }
    if(right < this.data.length){
      if(this.comparator(this.data[right], this.data[max]) > 0) max = right;
    }
    if(max != p){
      [this.data[max], this.data[p]] = [this.data[p], this.data[max]];
      this.down(max);
    }
  }

  up(c){
    if(c <= 0) return;
    let p = Math.floor((c + 1)/2) - 1;
    if(this.comparator(this.data[c], this.data[p]) > 0){
      [this.data[c], this.data[p]] = [this.data[p], this.data[c]];
      this.up(p);
    }
  }
}



let heap = new Heap();
heap.push('hong', 'deptrai', 3);
heap.push('hai', 'em cua hong', 2);
heap.push('dung', 'ban cua hong', 4);
heap.push('hoang', 'lop truong k59 ca', 1);
heap.update('hong', 5);
heap.pop();