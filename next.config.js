let cssModulesIndex = 0;
const cssModulesIndexes = {};
const getLocalIdent = (context, _, localName) => {
  const id = context.resourcePath + localName;
  const index = (cssModulesIndexes[id] = cssModulesIndexes[id] || cssModulesIndex++);
  return `--${index}`;
};
module.exports = {
  reactStrictMode: true,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: true,
              getLocalIdent
            },
          },
        ],
      }
    ]
  }
};

