class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChildren(children) {
    const childs = children.length ? children : [children];

    this.children = [
      ...this.children,
      ...childs,
    ];
    return this;
  }
}

module.exports = Node;
