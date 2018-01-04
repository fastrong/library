const express = require( 'express' );
const path = require( "path" )
const http = require( "http" )
const bodyParser = require( "body-parser" )
const app = express()

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended : false } ) )
app.use( express.static( path.join( __dirname, "dist" ) ) )
app.get( "*", ( req, res ) => {
	res.sendFile( path.join( __dirname, 'index.html' ) )
})
var server = http.createServer( app )
server.listen( 8080, () => console.log( "Listening at 8080" ) )

