/**
 * @func printTreeLevels
 * @param {Node} root - a tree made up of nodes
 * @author Jason Seminara <jseminaraWgmail.com>
 * @since 2019-02-17
 * @desc traverses a tree breadth-first and prints out the levels
 * down from the root
 */


function printTreeLevels(root) {
  for (let Q = [root]; Q.length;) {
    // deQueue, destructure
    const [node, ...rest] = Q;

    // enQueue the children, splat/spread them onto the end
    Q = [
      ...rest,
      ...node.children,
    ];

    // print the node names
    console.log(node.name);
  }
}

module.exports = printTreeLevels;
