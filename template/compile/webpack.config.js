var glob = require("glob")
var webpack = require('webpack')
var path = require('path')
var compileConfig = require('../compile')
var entryMap = {}
var entryFiles = glob.sync('**/**demo{.js,.vue.js}')
var iPackage = require('../package.json')
entryFiles.forEach(function (filePath) {
    if (/^output/.test(filePath)) {
        return
    }
    var name = filePath
    entryMap[name]  = [
        './' + filePath,
        'webpack-hot-middleware/client'
    ]
})
module.exports = {
    entry: entryMap,
    output: {
        publicPath: '/',
        path: path.join(__dirname, '../output'),
		filename: '[name]',
	    chunkFilename: '__chunk/[name]-[id]-[hash]-chunk.js'
    },
    resolve: {
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	},
    devServer: {
        hot: true
    },
    plugins: [
	   new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
	],
    module: {
        rules: [
            {
                test: /.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
	            exclude: /(node_modules|\.vue.js$)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: compileConfig.babel
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: (function () {
            var alias = {}
            alias[iPackage.name] = path.join(__dirname, '../', iPackage.main || 'index.js')
            return alias
        })()
    }
}
