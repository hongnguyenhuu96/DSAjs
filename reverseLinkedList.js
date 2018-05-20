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

function reverse(head){
	let previous = null;
	let current = head;
	
	while(current){
		let next = current.next;
		current.next = previous;
		previous = current;
		current = next;
	}
	
	head = previous;
	return head;
}

let head = new Node(0, new Node(1, new Node(2, new Node(3))));
head = reverse(head);

print(head);