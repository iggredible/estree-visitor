const visitor = require("../visitor");

describe("est-visitor", () => {
  it("visits the code", () => {
    const mockAST = {
      type: "SomeProgram",
      someObj: {
        type: "SomeVariableDeclaration",
        somePath: [
          {
            type: "SomeLiteral1"
          },
          {
            type: "SomeLiteral2"
          }
        ]
      }
    };
    let enteredNode = [];
    visitor(mockAST, {
      enter: function(node) {
        enteredNode.push(node.type);
      }
    });

    expect(enteredNode).toEqual([
      "SomeProgram",
      "SomeVariableDeclaration",
      "SomeLiteral1",
      "SomeLiteral2"
    ]);
  });
});
