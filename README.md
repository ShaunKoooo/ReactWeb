# AsianSquat 更新網站

<!-- # React
# Tailwind css -->

# webpack setting (webpack.config.js)
  ### 1. mode: 'development' | 'production'
  ```js
  // 告訴 webpack 是用哪種環境設定
  mode:"development",
  ```
  **開發模式產出的檔案會有較多細節，檔案較大。上線模式則會優化成最短程式碼。**  
     
  packege.json 的 'script' 裡 webpack 指令  
  ```json
  // 開發版指令
  "dev": "webpack --mode development"
  ```  
  ```json
  // 上線版指令
  "deploy": "webapck --mode production"
  ``` 

  ___

  ### 2. entry 
  ```js
  // 程式進入點
  entry: [
    './public/index.html',
    ...
  ]
  ```

___

  ### 3. output 
  ```js
  // 輸出後檔案名稱及檔案放置點
  output:{
    filename: 'bundle.js',
    path: path.resolve('pack', './'),
  },
  ```
___

  ### 4. module: {rules: []}
  **1. 編譯規則**
  ```js
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
  ```  
  ___

  ### 5. devServer
  ```js
  // 增加 devServer 試跑程式碼
  devServer: {
    port: 3000,
  }
  ```  
___

  ### 6. resolve
  一般情況未設置時，webpack 解析檔案必須要含有副檔名才行。
  ```js
  resolve: {
    // resolve.alias 為專案設置絕對路徑
    alias: {
      '@': path.resolve('src'),
    },
    // resolve.extensions 為檔案設置擴展，使檔案 import 時可不用加副檔名
    extensions: ['.js', '.jsx'],
  },
  ```
  

***

## [webpack 加入 tailwindcss](https://gist.github.com/bradtraversy/1c93938c1fe4f10d1e5b0532ae22e16a#:~:text=Webpack%20%26%20Tailwind%20CSS%20Setup)

***
## problems && solves
### [devServer blank page -> 加入 plugin](https://forum.freecodecamp.org/t/anyone-used-webpack-dev-server-cant-figure-out-how-to-serve-app/149533)

```js
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/public/index.html'
    })
  ],
  // ...
};
```

### [啟動 devServer 後，console 顯示找不到 React](https://stackoverflow.com/a/64994595)
```js
{
     "presets": [
         "@babel/preset-env",
        ["@babel/preset-react", {"runtime": "automatic"}]
     ]
 }
 ```

### [webpack warning -> The 'mode' option has not been set, webpack will fallback to 'production' for this value.Set 'mode' option to 'development' or 'production' to enable defaults for each environment.You can also set it to 'none' to disable any default behavior.](https://www.webpackjs.com/concepts/mode/)
webpack.config.js 設定 mode: 'development' / 'production'

