/**
 * 二叉树具有一些特殊的计算性质,使得在它们之上的一些操作异常高效
 *
 * Author: Frankxin
 */

//BST (Binary Search Tree)

;var Node = function(data,left,right){
  this.data = data
  this.left = left
  this.right = right
  this.show = show
}

function show(){
  return this.data
}

function BST () {
  this.root = null
  this.insert = insert
  this.inOrder = inOrder
  this.preOrder = preOrder
  this.postOrder = postOrder
  this.getMin = getMin
  this.getMax = getMax
  this.find = find
}

function insert(data) {
  var n = new Node(data, null, null)

  if (this.root == null) {
    this.root = n
  } else {
    var current = this.root,
        parent
    while (true) {
      parent = current
      if (data < current.data) {
        current = current.left
        if (current == null) {
          parent.left = n
          break
        }
      } else {
        current = current.right
        if (current == null) {
          parent.right = n
          break
        }
      }
    }
  }
}

function inOrder(node){
  if(node !== null){
    inOrder(node.left)
    console.log(node.show())
    inOrder(node.right)
  }
}

function preOrder(node){
  if(node !== null){
    console.log(node.show())
    inOrder(node.left)
    inOrder(node.right)
  }
}

function postOrder(node){
  if(node !== null){
    inOrder(node.left)
    inOrder(node.right)
    console.log(node.show())
  }
}

function getMin(){
  var currNode = this.root
  while(currNode !== null && currNode.left !== null){
    currentNode = currNode.left
  }
  return currNode.data
}

function getMax(){
  var currNode = this.root
  while(currNode.right !== null){
    currNode = currNode.right
  }
  return currNode.data
}

function find(data){
  var currNode = this.root
  while(currNode !== null){
    if(currNode.data === data){
      return currNode
    }else if(currNode.data > data){
      currNode = currNode.left
    }else{
      currNode = currNode.right
    }
  }
  return null
}

//Todo: remove Node

//test case
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

