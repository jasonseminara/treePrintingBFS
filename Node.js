class Node {
  constructor(name) {
    this.name = name;
    this.kids = [];
  }


  set children(c) {
    this.kids = [
      ...this.kids,
      ...(c.length ? c : [c]),
    ];
  }

  get children() {
    return this.kids;
  }
}

module.exports = Node;
