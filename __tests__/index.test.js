/* eslint-env jest */
const Node = require('../Node');
const printTree = require('../');

const buildTree = (len) => {
  const nodes = Array(len + 1).fill(0).map((n, i) => (new Node(i)));

  nodes[1].children = nodes.slice(2, 5);
  nodes[2].children = nodes.slice(5, 7);
  nodes[4].children = nodes[7];
  nodes[7].children = nodes[9];
  nodes[6].children = nodes[8];
  return nodes[1];
};

describe('TreePrinting', () => {
  let tree;

  beforeEach(() => {
    tree = buildTree(9);
  });

  it('__check tree__', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should print out a tree in level order', () => {

  });
});
