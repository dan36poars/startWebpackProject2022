const app = require('express')()
const path = require('path')

const isDev = process.env.NODE_ENV === 'production'

if (!isDev) {
    // Development
    console.log("Development")
    const webpack = require('webpack')
    const configDevClient = require('../configs/webpack.dev.js')
    
    
} else {
    // Production
    console.log("Production")
    const port = process.env.PORT || 8080;
	app.use(express.static('dist'));

	app.get('/', function( req, res ){
		res.render('index');
	})

	app.listen(port , function(){
		console.log('running express in http://localhost:'+ port);
	});
}
