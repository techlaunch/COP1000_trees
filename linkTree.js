let tree = {
  root: {
    id: 'A',
    data: 'data',
    next: {
      id: 'B',
      data: 'data',
      next: {
        id: 'C',
        data: 'data',
        next: {
          id: 'E',
          data: 'data',
          next: {
            id: 'F',
            data: 'data',
            next: null
          }
        }
      }
    }
  }
}

let D = {
  id: 'D',
  data: 'data',
  next: null
}

let save = tree.root.next.next.next;

tree.root.next.next.next = D.next = save;







// class Node {
//   constructor(data){
//     this.id   = Math.random() * 7;
//     this.data = data;
//     this.next = null;
//   }
// }

class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class LinkedList {
  constructor(headValue) {
    if (headValue === undefined) console.log('Must provide value for first node');
    this.head = new Node(headValue);
    this.tail = this.head;
  }

  forEach(callback) {
    let node = this.head;
    while (node) {
      callback(node.value);
      node = node.next;
    }
  }

  print() {
    let result = [];
    this.forEach(function(value) {
      result.push(value);
    });
    return result.join(', ');
  }

  insertAfter(node, value) {
    //get reference to former next
    let oldNext = node.next;
    // create new node
    let newNext = new Node(value);
    // store it as the new next
    node.next = newNext;
    //set next for the new node to be the old next
    newNext.next = oldNext;
    //if reference node is tail, set tail to newNext
    if (this.tail === node) this.tail = newNext;
    return newNext;
  };

}


// ====================

function Node(value) {
  this.next = null;
  this.value = value;
}

function LinkedList(value) {
  if (value === undefined) console.log('Must provide value for first node');

  this.head = new Node(value);
  this.tail = this.head;
}

LinkedList.prototype.forEach = function (callback) {
  let node = this.head;
  console.log('node ', node);
  while (node) {
    callback(node);
    node = node.next;
  }
}

LinkedList.prototype.insert = function (value){
  let node = this.head;
  console.log('node ', node);
  while (node) {
    if(node.next && node.next.value > value){
      let newNode = new Node(value);
      let next = node.next;

      newNode.next = next;
      node.next = newNode;
      return this;
    }
    else if (!node.next) {
      let newNode = new Node(value);

      this.tail = newNode;
      node.next = newNode;
      return this;
    }
    node = node.next;
  }
}

LinkedList.prototype.remove = function (value) {
  let node = this.head;
  while (node) {
    if (node.next && node.next.value === value) {
      node.next = node.next.next;
    }
    node = node.next;
  }
  return this;
}

let linkList = new LinkedList(1);

linkList.insert(2);
linkList.insert(3);
linkList.insert(4);
linkList.insert(5);












class Node {
  constructor(data, id) {
    this.id = id;
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;

    this.id = 0;
  }

  insert(data) {
    if(!data) return alert('no data to insert');

    const node = new Node(data, this.id);

    if(!this.head) {
      this.head = node;
      this.tail = node;
    }
    else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    this.id++;

    return this;
  }

  reset() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.id = 0;
  }

  forEach(callback) {
    let node = this.head;
    while (node) {
      callback(node.data);
      node = node.next;
    }
  }

  toArray() {
    let result = [];
    this.forEach(function (data) {
      result.push(data);
    });
    return result;
  }

  pop() {
    let node = this.head;

    if(!node) {
      return this;
    }
    else if(!this.head.next) {
      this.reset();
      return this;
    }
    else {
      while (node.next && node.next.next) {
        node = node.next;
      }
      node.next = null;
      this.tail = node;
      this.length--;

      return this;
    }
  }

  remove(id) {
    let node = this.head;

    if (!node) {
      alert('the list is empty');
      return this;
    }
    else if (this.tail.id === id) {
      return this.pop();
    }
    else if (this.head.id === id && !this.head.next) {
      this.reset();
      return this;
    }
    else if (this.head.id === id && this.head.next) {
      this.head = this.head.next;
      this.length--;
      return this;
    }
    else {
      while (node.next && node.next.id !== id) {
        node = node.next;
      }
      if(!node.next) {
        return alert(`the element with id ${id} does not exist`)
      }
      else if (node.next.id === id){
        node.next = node.next.next;
        this.length--;

        return this;
      }
    }
  }
}

let linkedList = new LinkedList();

linkedList.insert('Adrian');
linkedList.insert('Ines');
linkedList.insert('Brian');
linkedList.insert('Gabriel');

console.log(linkedList);