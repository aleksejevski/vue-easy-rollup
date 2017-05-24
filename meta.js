module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Component name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js template project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "outputFile":   {
      "type": "string",
      "message":  "Default output filename",
      "default":  "bundle.js"
    },
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n "
};
