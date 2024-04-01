const path = require('path');

module.exports = {
  entry: './src/index.js', // Your main JavaScript entry point
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory for the bundled file
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};