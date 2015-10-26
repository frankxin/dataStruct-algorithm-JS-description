/**
 * This is a definition for doubly linked list with Javascript
 *
 * Author: Frankxin
 */

;var Node = function(element){
  this.element = element
  this.next = null
  this.prev = null
}

function DLList() {
  this.head = new Node("head")
  this.find = find
  this.insert = insert
  this.display = showAll
  this.remove = remove
  this.findLast = findLast
  this.dispReverse = dispReverse
}

function find(el){
  var curItem =  this.head
  while(curItem.element !== el){
    curItem = curItem.next
  }
  return curItem
}

function showAll(){
  var curNode = this.head

  //Start from head node , So see the next is existent or not
  while( curNode.next !== null ){
    console.log(curNode.next.element)
    curNode =  curNode.next
  }
}

function insert(element , item){
  var newNode = new Node(element),
      curNode = this.find(item)
  newNode.prev = curNode
  newNode.next = curNode.next
  curNode.next = newNode
}

function findLast(){
  var curNode = this.head
  while( curNode.next !== null ){
    curNode =  curNode.next
  }
  return curNode
}

function dispReverse(){
  var curNode = this.findLast()
  while(curNode.prev !== null){
    console.log(curNode.element)
    curNode = curNode.prev
  }
}

function remove(item) {
  var currNode = this.find(item)
  if (!(currNode.next == null)) {
    currNode.prev.next = currNode.next
    currNode.next.prev = currNode.prev
    currNode.next = null
    currNode.prev = null
  }else{
    currNode.prev.next = currNode.next
    currNode.next = null
    currNode.prev = null
  }
};

//test case

var ll = new DLList()
ll.insert('first','head')
ll.insert('second','first')
ll.insert('third','second')
ll.display()