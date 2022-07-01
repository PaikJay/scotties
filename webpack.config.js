const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',  
  entry: {
    index:path.join(__dirname,'src','index.js')
    }, 
  watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
    
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader',
      query: {
        presets: [
          ["@babel/env", {
            "targets": {
              "browsers": "last 2 chrome versions"
            }
          }]
        ]
      }
    },
    {
      test: /\.(css|scss)$/,
      use: [
        "style-loader",
        // creates style nodes from JS strings
        "css-loader"
        // translates CSS into CommonJS
        // "sass-loader"
        // compiles Sass to CSS, using Node Sass by default
      ],
    },  
    {        
      test: /\.(jpg|jpeg|png|gif|mp3|svg|ico)$/,      
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/image',
          type: 'asset/resource',
        },
    },
    {
      test: /\.(eot|ttf|woff|woff2)$/,
      loader: 'file-loader',
      options: {
        limit: 10000,
        name: '[name].[ext]',
        outputPath: 'assets/fonts',
      }
    }
  ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '/dist/'),
    inline: true,
    host: 'localhost',
    port: 8080,
  },
  plugins: [    
    new HtmlWebpackPlugin({      
      template: path.resolve(__dirname, 'public','index.html'),
      favicon: "public/favicon.ico"
    }) ,
    new CleanWebpackPlugin()
]
};