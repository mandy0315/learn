const path = require('path');

module.exports = {
	// 'mode' option has not been set 沒有指定模式
	// 使用正式版正式版
	mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
		// __dirname 資料夾 node_modules 
		// dist 資料打包檔
    path: path.resolve(__dirname, 'dist'),
  },
};