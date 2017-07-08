var path = require('path')
var webpack = require('webpack')
const vuxLoader = require('vux-loader')
//const webpackConfig = originalConfig // 原来的 module.exports 代码赋值给变量 webpackConfig
function resolve(dir) {
	return path.join(__dirname, '.', dir)
}
const webpackConfig =  {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'build.js'
	},
	module: {
		rules: [{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {}
					// other vue-loader options go here
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2)$/,
				loader: 'url-loader'

			},
			{
				test: /\.(css|less)$/,
				loader: 'style-loader!css-loader!less-loader'

			}
			
//			{
//			  test: /\.(eot|svg|ttf|woff|woff2)$/,
//			  loader: 'file-loader',
//			  options: {
//			    name: '[name].[ext]?[hash]'
//			  }
//			}
			
		]
	},
	resolve: {

		//可以忽略的文件后缀
		extensions: ['.js', '.vue', '.json'],

		//alias用来给指定模块起一个别名
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			//'@': resolve('src')
			'@': __dirname + "/src"
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true,
		//host:'https://mainsite-restapi.ele.me',
		proxy: {
			'/ele': {
				target: 'https://mainsite-restapi.ele.me',
				changeOrigin: true,
				secure: false,
				pathRewrite: {'^/ele': ''}
			}
		}
	},
	performance: {
		hints: false
	},
	devtool: '#eval-source-map'
}


module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui']
})

if(process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}