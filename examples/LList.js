/**
 * 
 * This is a definition for linked list with Javascript 
 *
 * Author: Frankxin
 * 
 */
;var Node = function(element){
  this.element = element
  this.next = null
}

var LList = function(){
  this.head = new Node('head')
  this.insert = insert
  this.find = find
  this.showAll = showAll
  this.remove = remove
  this.findPre = findPre
}

function insert(newEl , item){
  var newNode = new Node(newEl),
      curItem = this.find(item)

  newNode.next = curItem.next
  curItem.next = newNode

  return this
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
function findPre(el){
  var curNode = this.head
  while( curNode.next !== null && curNode.next.element !== el){
    curNode.next = curNode
  }
  return curNode
}
function remove(el){
  var prevNode = this.findPre(el)
  if(prevNode.next !== null){
    var next = prevNode.next
    prevNode.next = prevNode.next.next
    //free the deleted Node
    delete next
  }
}

//test case

var ll = new LList()
ll.insert('first','head')
ll.insert('second','first')
ll.showAll()

//inverse LList
function inverseLList(ll){
  var newll = new LList(),
      curNode = ll.head
  //traverse all nodes in ll and copy to a new linked list
  while(curNode.next !== null){
    newll.insert(curNode.next.element,'head')
    curNode = curNode.next
  }
  return newll
};