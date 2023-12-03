// root and nodes
// node have data and reference of the child nodes

class Node {
  constructor(value) {
    this.data = value;
    this.parent = null;
    this.child = [];
  }

  setParent(node) {
    this.parent = node;
  }

  getParent() {
    return this.parent;
  }

  addChild(node) {
    node.setParent(this);
    this.child.push(node);
    return node;
  }

  getChild() {
    return this.child;
  }
}

const root = new Node("root");
const c1 = root.addChild(new Node("C1"));
const c2 = root.addChild(new Node("C2"));

const cc1 = c1.addChild(new Node("CC1"));
console.log(cc1.getParent());
