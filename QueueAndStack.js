class Node{
  constructor(val, next = null){
    this.val = val;
    this.next = next;
  }
}

class Queue{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  isEmpty(){
    return this.length == 0;
  }
  enQueue(x){
    if(this.isEmpty()){
      this.head = this.tail = new Node(x);
    } else {
      this.tail.next = new Node(x);
      this.tail = this.tail.next;
    }
    this.length++;
  }
  deQueue(){
    if(this.isEmpty()){
      console.log("queue is empty");
      return null;
    } else {
      let temp = this.head.val;
      this.head = this.head.next;
      if(this.head == null) this.tail = null;
      this.length--;
      return temp;
    }
  }
  getHead(){
    if(this.isEmpty()){
      console.log("queue is empty");
      return null;
    }
    return this.head.val;
  }
}

class Stack{
  constructor(){
    this.top = null;
    this.length = 0;
  }
  isEmpty(){
    return this.length == 0;
  }
  push(x){
    this.top = new Node(x, this.top);;
    this.length++;
  }
  pop(){
    if(this.isEmpty()){
      console.log("stack is empty");
      return null;
    } else {
      let temp = this.top.val;
      this.top = this.top.next;
      this.length--;
      return temp;
    }
  }
  getTop(){
    if(this.isEmpty()){
      console.log("Stack is empty");
      return null;
    }
    return top.val;
  }
}

let queue = new Queue();
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4);
queue.deQueue();
queue.deQueue();
queue.deQueue();
console.log(queue);

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();
stack.pop();
console.log(stack);