class TrackStack{
  constructor(){
    this.stack = [];
    this.track = [];
  }
  
  pop(){
    this.stack.pop();
    this.track.pop();
  }
  
  getMax(){
    return this.track[this.track.length - 1];
  }
  
  push(x){
    if(this.stack.length == 0){
      this.stack.push(x);
      this.track.push(x);
      return;
    }
    if(x > this.track[this.track.length - 1]){
      this.stack.push(x);
      this.track.push(x);
      return;
    }
    this.stack.push(x);
    this.track.push(this.track[this.track.length - 1]);
  }
}


let test = new TrackStack();
test.push(1);

test.push(3);
test.push(5);
test.push(2);
console.log(test.getMax());
test.push(7);
console.log(test.getMax());
test.pop(7);
console.log(test.getMax());
test.pop();
console.log(test.getMax());
test.pop();
console.log(test.getMax());