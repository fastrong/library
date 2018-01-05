const express = require( 'express' );
const path = require( "path" )
const http = require( "http" )
const bodyParser = require( "body-parser" )
const app = express()

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended : false } ) )
app.use( express.static( path.join( __dirname, "dist" ) ) )
app.get( "*", ( req, res ) => {
	res.sendFile( path.join( __dirname, 'dist/index.html' ) )
})
var server = http.createServer( app )
var port = 8080
server.listen( port, () => console.log( `Listening at ${ port }` ) )

