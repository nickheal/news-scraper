module.exports = {
  "plugins": [
    "@babel/plugin-proposal-partial-application",
    ["@babel/plugin-proposal-pipeline-operator", { "proposal": "smart" }]
  ],
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry"
      }
    ]
  ]
};
