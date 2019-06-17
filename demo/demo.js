const visitor = require("estree-visitor");
const acorn = require("acorn");

const statement = "console.log('hello')";
const ast = acorn.parse(statement);
visitor(ast, {
  enter: function(currentNode) {
    console.log("current node: ", currentNode);
    // do more stuff with currentNode
  }
});
