const visitor = require("estree-visitor");
const acorn = require("acorn");

const statement = "console.log('hello')";
const ast = acorn.parse(statement);

const $demo = document.querySelector("#demo");

const $demoDiv = document.createElement("div");
const $demoStatement = document.createTextNode(`JS code: ${statement}`);
$demoDiv.appendChild($demoStatement);
$demo.appendChild($demoDiv);

visitor(ast, {
  enter: function(currentNode) {
    console.log("current node: ", currentNode);

    const $div = document.createElement("div");
    const $text = document.createTextNode(currentNode.type);
    $div.appendChild($text);
    $demo.appendChild($div);

    // do more cool stuff here!
  }
});
