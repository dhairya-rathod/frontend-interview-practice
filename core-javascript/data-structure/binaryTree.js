// almost same as generic tree
// the only difference is that each node can have max two child nodes which are left and right

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

// const root = new Node("root");
// const c1 = root.addChild(new Node("C1"));
// const c2 = root.addChild(new Node("C2"));

// const cc1 = c1.addChild(new Node("CC1"));
// console.log(cc1.getParent());
