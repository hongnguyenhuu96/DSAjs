let a = [7,0,1,2,0,3,0,4,2,3,0,3,2,1,2,0,1,7,0,1]; // page that a process request to load in to the memory by the time

let n = 3; // the number of free frames in the memory

let swap = []; // the process that we swap by the time to load the sequence a

// key: value of page
// value: -1 page not in frames, x recentused

let frames = [];
let isInMemory = {};

for(let i = 0; i < a.length; i++){
  isInMemory[a[i]] = false;
}

for(let i = 0; i < a.length; i++){
  if(isInMemory[a[i]]){
    let j = 0;
    while(frames[j] != a[i]) j++;
    while(j < n - 1){
      frames[j] = frames[j + 1];
      j++;
    }
    frames[frames.length - 1] = a[i];
  } else {
    if(frames.length < n){
      // if free frames avaiable, push in to the memory if not exist before
      let pos = frames.indexOf(a[i]);
      if(pos == -1){
        frames.push(a[i]);
        isInMemory[a[i]] = true;
      } else {
        // if the page is already in the memory, move the page to the front of the queue
        let j = pos;
        while(j < frames.length - 1){
          frames[j] = frames[j + 1];
          j++;
        }
        frames[frames.length - 1] = a[i];
      }
    } else {
      let temp = frames.shift();
      swap.push(temp);
      isInMemory[temp] = false;
      
      frames.push(a[i]);
      isInMemory[a[i]] = true;
    }
  }
}

console.log("swap page:")
console.log(swap);

console.log("page in the frames")
console.log(frames);