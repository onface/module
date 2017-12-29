var webpack = require('webpack')
var compiler = webpack(require('./webpack.config.js'))
var express = require('express')
var path = require('path')
var app = express();

app.use(express.static(path.join(__dirname, '../output')))
app.use(require("webpack-dev-middleware")(compiler, {
	publicPath: '/',
}));
app.use(require("webpack-hot-middleware")(compiler))

app.listen(3000)
