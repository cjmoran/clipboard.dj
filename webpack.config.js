var path = require("path");

module.exports = {
  entry: {
    player: "./js/player.jsx"
  },

  output: {
    path: __dirname + "/build",
    filename: "[name].bundle.js"
  },

  module: {
    loaders: [
      {
        // Build JS and JSX with Babel
        loader: "babel-loader",
        test: /\.(js|jsx)$/,
        include: [ path.resolve(__dirname, "js") ],
        query: { presets: ["es2015", "react"] }
      },
      {
        // Compile SCSS into CSS and allow requiring from JS files
        test: /\.scss$/,
        include: [ path.resolve(__dirname, "style") ],
        loaders: ["style", "css", "sass"]
      }
    ]
  },

  // Mark these as external (not to be included in the bundle,
  // because they're included through script tags linking to CDNs)
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "socket.io-client": "io"
  }
};
