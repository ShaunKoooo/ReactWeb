const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // 設定 mode none/development/production 
  // mode 告訴 webpack 是用哪種環境設定
  mode:"development",
  entry: [
    // './public/index.html',
    './src/index.js',
  ],
  output:{
    filename: 'bundle.js',
    path: path.resolve('pack', './'),
  },
  module: {
    rules: [
      // 編譯 css|scss|tailwindcss
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      // 編譯圖片
      {
        test: /\.(png|jpg|JPG)$/,
        type: 'asset/resource'
      },
      // 編譯 jsx + 編譯 ES6
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: [['@babel/preset-react', {"runtime": "automatic"}], '@babel/preset-env'] }
        } 
      },
      // 編譯 html 
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ]
  },
  resolve: {
    // 絕對路徑
    alias: {
      '@': path.resolve('src'),
    },
    // 讓 webpack 解析時不用帶入 .js 或 .jsx -> import xxx from 'xxx';
    extensions: ['.js', '.jsx'],
  },
  // 增加 devServer 試跑程式碼
  devServer: {
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
}