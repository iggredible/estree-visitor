const isArray = possiblyAnArray => {
  return Object.prototype.toString.call(possiblyAnArray) === "[object Array]";
};

const visit = (node, enter) => {
  if (!node) {
    return;
  }
  if (enter) {
    enter(node);
  }

  const nodeKeys = Object.keys(node);
  const objKeys = nodeKeys.filter(nodeKey => {
    return typeof node[nodeKey] === "object";
  });

  objKeys.forEach((objKey, index) => {
    const nodeKey = node[objKey];
    if (isArray(nodeKey)) {
      nodeKey.forEach((key, index) => {
        visit(key, enter);
      });
    } else {
      visit(nodeKey, enter);
    }
  });
};

const visitor = (ast, { enter }) => {
  visit(ast, enter);
};

module.exports = visitor;
