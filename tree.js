// N-ary tree (any number of children)
class Tree {
  constructor(value){
    this.value = value;
    this.children = [];
  }

  //Adds child to tree or subtree bound to this keyword
  // 0(1)
  addChild(value) {
    var child = new Tree(value);
    this.children.push(child);
    return child;
  };
}

var tree = new Tree(1); // {value: 1, children: []}
var branch1 = tree.addChild(2); // {value: 1, children: [{value: 2, children: []}]}
var branch2 = tree.addChild(3); // {value: 1, children: [{value: 2, children: []}, {value: 3, children: []}]}
var branch3 = tree.addChild(4); // {value: 1, children: [{value: 2, children: []}, {value: 3, children: []}, {value: 4, children: []}]}

var branch5 = branch1.addChild(5); // {value: 1, children: [{value: 2, children: [{value: 5, children: []}]}, {value: 3, children: []}, {value: 4, children: []}]}
var branch6 = branch2.addChild(6); // {value: 1, children: [{value: 2, children: [{value: 5, children: []}]}, {value: 3, children: [{value: 6, children: []}]}, {value: 4, children: [{value: 7, children: []}]}]}
var branch7 = branch3.addChild(7);

branch5.addChild(8);







function Node(name, age, gender) {
  this.left = null;
  this.right = null;

  this.name = name;
  this.age = age;
  this.gender = gender;
}

Node.prototype.insert = function (node) {
  if (!this.left && node.age <= this.age) {
    this.left = node;
  }
  else if (!this.right && node.age > this.age) {
    this.right = node;
  }
  else if (this.left && node.age <= this.age) {
    this.left.insert(node);
  }
  else if (this.right && node.age > this.age) {
    this.right.insert(node);
  }
}

function Tree(root) {
  this.root = root;
  this.min = root;
  this.max = root;
}

let root = new Node('Frank', 28, 'male');
let tree = new Tree(root);

Tree.prototype.insert = function (node) {
  
  this.root.insert(node);

  if (node.age < this.min.age) {
    this.min = node;
  }
  if (node.age > this.max.age) {
    this.max = node;
  }
  return this;
}

Tree.prototype.find = function (node, age) {
  if (node.age === age) {
    return node;
  }
  else if (node.left && age < node.age) {
    return this.find(node.left, age);
  }
  else if (node.right && age > node.age) {
    return this.find(node.right, age);
  }
  else {
    return null;
  }
}

Tree.prototype.search = function (age) {
  return this.find(this.root, age);
}

Tree.prototype.min = function () {
  return this.min;
}

Tree.prototype.max = function () {
  return this.max;
}

Tree.prototype.getRelationData = function (node, age) {
  if (node.left && node.left.age === age) {
    return {
      parent: node,
      leftChild: node.left,
    };
  }
  else if (node.right && node.right.age === age){
    return {
      parent: node,
      rightChild: node.right,
    };
  }
  else if (node.left && age < node.age) {
    return this.getRelationData(node.left, age);
  }
  else if (node.right && age > node.age) {
    return this.getRelationData(node.right, age);
  }
  else {
    return null;
  }
}

Tree.prototype.remove = function (age) {
  let ralationData = this.getRelationData(this.root, age);
  
  console.log('relation data ', ralationData);
}

let pepe = new Node('Pepe', 30, 'male');
let lola = new Node('Lola', 18, 'female');
let fifi = new Node('Fifi', 25, 'male');
let victor = new Node('Victor', 31, 'male');
let kevin = new Node('Kevin', 22, 'male');

tree.insert(pepe);
tree.insert(lola);
tree.insert(fifi);
tree.insert(victor);
tree.insert(kevin);

tree.search(22);
tree.remove(22);