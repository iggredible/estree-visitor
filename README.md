![ESTree-visitor](readme_assets/ESTree-visitor-logo.png)

Traverse through Javascript AST as described by [ESTree-spec](https://github.com/estree/estree).

# Installation / Usage
Run `npm i estree-visitor`

Visitor accepts an optional `enter` function so you can play around with current ESTree node you are on!

```
const visitor = require("estree-visitor");
const acorn = require("acorn");

const statement = "console.log('hello')"; // pass any JS code
const ast = acorn.parse(statement);
visitor(ast, {
  enter: function(currentNode) {
    console.log("current node: ", currentNode);
    // do more stuff with currentNode
  }
});
```

# Example
Check out the demo folder for an example.

```
cd demo
npm i
npm run start-demo // will run on localhost:1234
```

# License
MIT
