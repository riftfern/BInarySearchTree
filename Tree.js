const Node = (data, left = null, right = null) => {
    return {
        data: data,
        left: left,
        right: right,
    };
};

const buildTree = (arr, start = 0, end = arr.length - 1) => {
    if(start > end) return null;

    const mid = parseInt((start + end) / 2);
    const root = Node(arr[mid]);

    root.left = buildTree(arr, start, mid-1);
    root.right = buildTree(arr, mid + 1, end);
    return root;
}

const Tree = (array) => {

    let toBeSorted;
    if(Array.isArray(array)){
        toBeSorted = [...new Set(array.sort((a, b) => a - b))];
    }

    return {
        root: (Array.isArray(array)) ? buildTree(toBeSorted) : array,
    };
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

const arr = [4,3,2,5,6,5,4,3,9,11,23,123];

const tree = Tree(arr);

prettyPrint(tree.root);