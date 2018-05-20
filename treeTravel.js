class Node {
	constructor(val, left = null, right = null){
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

// DFS

// recursion
function postOrder(node){
	if(node.left) postOrder(node.left); // visit left hand side
	if(node.right) postOrder(node.right); // visit right hand side
	console.log(node.val);
}

function inOrder(node){
	if(node.left) inOrder(node.left); // visit left hand side
	console.log(node.val); // visit currentNode
	if(node.right) inOrder(node.right); // visit right hand side
}

function preOrder(node){
	console.log(node.val); // visit currentNode
	if(node.left) preOrder(node.left);
	if(node.right) preOrder(node.right);
}

// BFS
function levelOrder(node){
	let queue = [];
	queue.push(node);
	while(queue.length > 0){
		let currentNode = queue.shift();
		console.log(currentNode.val); // visit currentNode
		if(currentNode.left) queue.push(currentNode.left);
		if(currentNode.right)  queue.push(currentNode.right);
	}
}


function morrisTraversal(root){
	if(root == null) return;
	let pre;
	let current = root;
	while(current != null){
		// nếu nút hiện tại không có bên trái thì in giá trị hiện tại và dịch sang phải
		if(current.left == null){
			console.log(current.val);
			current = current.right; // (*)
		} else {
			// nếu nút hiện tại có cái bên trái thì tìm node phải nhất của phần bên trái(pre) chưa có link tới node hiện tại và tạo link đến node hiện tại
			
			// tìm node phải nhất của phần bên trái chưa có link đến node hiện tại
			pre = current.left;
			while(pre.right != null && pre.right != current){
				pre = pre.right;
			}
			
			// link node phải nhất đến node hiện tại
			if(pre.right == null){
				pre.right = current;
				current = current.left;
			} else {
			// đến được đây là do cái * ở phía trên và thông qua liên kết tạo phía trên (phần con bên trái được nối quay lại với cha của nó)
			// ở đây là inorder nên sau khi in phần con bên trái ở phía trên ta sẽ in cha ở đây và sang phần bên phải
			
			// xóa liên kết đã tạo phía trên, in giá trị của node hiện tại và sang phần bên phải
				pre.right = null;
				console.log(current.val);
				current = current.right;
			}
		}
	}
}

// let root = new Node(1, new Node(2, new Node(4, new Node(8), new Node(9)), new Node(5)), new Node(3, new Node(6), new Node(7)));


let root  = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3))

// post fix expressions
// console.log("postOrder")
// postOrder(root);


// duyet cay BST ra 1 day so co thu tu tang dan
console.log("inOrder")
inOrder(root);

// polish notation +ab = a + b (prefix expressions)
// console.log("preOrder")
// preOrder(root);


// console.log("levelOrder");
// levelOrder(root);


console.log("inOrder without recursion or using stack")
morrisTraversal(root);