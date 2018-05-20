class Node{
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}


function print(head){
    let p = head;
    while(p){
        console.log(p.val);
        p = p.next;
    }
}

let head = new Node(0);
let p = head;

for(let i = 1; i < 4; i++){
    p.next = new Node(i);
    p = p.next;
}

p = head;
let temp = [];

while(p){
    temp.push(p);
    p = p.next;
}

// 0 -> n-1 -> 1 -> n-2 -> 2 -> n-3 ->3...
// 0 > 1 > 2 > 3
// 0 > 3 > 1 > 2

p = head;

for(let i = 1; i < temp.length/2; i++){
    p.next = temp[temp.length - i];
    p = p.next;
    p.next = temp[i];
    p = p.next;
}

// next of the end is null
temp[parseInt(temp.length/2)].next = null;


print(head);