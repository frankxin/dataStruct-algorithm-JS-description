/**
 * Created by frankxin on 15/11/9.
 */

// const INFINITY = 65535;

// function Vertex(){}

/**
 *
 * @param v is a the number of Vertex temperarily
 *
 */
function Graph(v){
  var i;
  this.vexs = v;
  this.arc = [];
  this.numVertex = v;
  this.numEdge = 0;
  this.addEdge = addEdge;
  this.traverseDFS = traverseDFS;
  this.visited = []
  /**
   *
   * Initialize the arc array like , it represent the relationship of vertexs
   *  [0] -> [""]
   *  [1] -> [""]
   *  [2] -> [""]
   *  [3] -> [""]
   *
   */
  for (i = 0; i < this.vexs; ++i) {
    this.arc[i] = [];
  }
  for (i = 0; i < this.numVertex; i++) {
    this.visited[i] = 0
  };
}
/**
 * [addEdge] 有向图？
 * @param {num} v start
 * @param {num} w end
 */
function addEdge(v, w) {
  this.arc[v].push(w);
  this.arc[w].push(v);
  this.numEdge++;
}

function traverseDFS(v){
  var i;
  this.visited[v] = 1;
  if(this.arc[v] !== undefined){
    console.log("Visited vertex:  " + v);
  }
  for(i = 0;i < this.arc[v].length;i++){
    if(this.visited[this.arc[v][i]] === 0){
     this.traverseDFS(this.arc[v][i]); 
    }
  }
}


