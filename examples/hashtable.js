/**
 * This is a definition for hash table with Javascript
 *
 * Author: Frankxin
 */

;var Hashtable = function(){
  //the length of Array is changable
  this.table = new Array(139) //139 can be done , but not the best
  this.hash = hash
  this.put = put
  this.get = get
  this.showDistro = showDistro
}

function hash(string) {
  var H = 37,
      total = 0,
      string = string.toString()
  debugger
  for (var i = 0; i < string.length; ++i) {
    total += H * total + string.charCodeAt(i)
  }
  total = total % this.table.length
  //?
  if (total < 0) {
    total += this.table.length - 1
  }
  return parseInt(total)
}

function put(data) {
  var pos = this.hash(data)
  this.table[pos] = data
}

function get(key) {
  return this.table[this.hash(key)]
}

function showDistro() {
  var n = 0
  for (var i = 0; i < this.table.length; ++i) {
    if (this.table[i] != undefined) {
      print(i + ": " + this.table[i]);
    }
  }
}
var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia",
  "Mike", "Clayton", "Danny", "Jonathan"
];
var hTable = new Hashtable();
for (var i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i]);
}
hTable.showDistro();


