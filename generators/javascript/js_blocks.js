"use strict";

const jsBlocks = [
  {
    type: "getelementbyid",
    message0: "getElementById %1 %2",
    args0: [
      {
        type: "input_value",
        name: "NAME",
        check: "String"
      },
      {
        type: "input_statement",
        name: "TEXT",
        check: "node"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "innerhtml",
    message0: "innerHTML %1",
    args0: [
      {
        type: "input_value",
        name: "NAME",
        check: "String"
      }
    ],
    previousStatement: "node",
    colour: 230,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "function",
    message0: "function %1 %2 %3 %4",
    args0: [
      {
        type: "field_input",
        name: "NAME",
        text: "myFunc"
      },
      {
        type: "input_dummy"
      },
      {
        type: "input_statement",
        name: "STATEMENT"
      },
      {
        type: "input_value",
        name: "RETURN_VALUE",
        align: "RIGHT"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: ""
  }
];

for (let i = 0; i < jsBlocks.length; i++) {
  const blockJson = jsBlocks[i];
  Blockly.Blocks[blockJson.type] = {
    init: function() {
      this.jsonInit(blockJson);
    }
  };
}
