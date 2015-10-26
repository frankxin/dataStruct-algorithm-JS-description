/**
 * 
 * This is a list class implementation
 * Author: Frankxin
 * Inspire by a book called data structures and algorithms with JS
 *
 * 
 * Todo: Implement a Iterator which can be used in workflow control
 * 
 */

;function list(){
  this.listSize = 0
  this.store = []
  this.find = find
  this.append = append
  this.remove = remove
  this.clear = clear
  this.insert = insertAfter
  this.showAll = showAll
}

function append(el){
  this.store[this.listSize++] = el
}

function find(el){
  var i,result

  for(i = 0;i < this.listSize;i++){
    this.store[i] === el ? result = i : result = -1
    if(result !== -1){
      return result
    }
  }
  
  return result
}

function remove(el){
  var num = this.find(el)
  if(num !== -1){
    this.store.splice(num,1)
    --this.listSize
    return true
  }else{
    alert('no such item')
    return false
  }
}

function clear(){
  this.store = []
  this.listSize = 0
}

function insertAfter(el , pos){
  if(pos > -1 && pos <= this.listSize){
    this.store.splice(pos , 0 , el)
    ++this.listSize
  }else{
    alert('no such position')
  }
}

function showAll(){
  console.log(this.store)
}

