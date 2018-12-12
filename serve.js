const http = require('http');
const https = require('https');
const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();

const HOST = '10.200.12.243';
const HTTP_PORT = 3000;
const HTTPS_PORT = 3001;

console.log(app)
app.use(serve("."));

app.use(serve('test/fixtures'));

app.use(serve(__dirname + '/examples'));

const httpServer = http.createServer(app.callback()).listen(HTTP_PORT, HOST, listeningReporter);
const httpsServer = https.createServer(app.callback()).listen(HTTPS_PORT, HOST, listeningReporter);
// app.listen(3000);

function listeningReporter() {
    const {address, port} = this.address();
    const protocol = this.addContext ? 'https' : 'http';
    console.log(`Listening on ${protocol}://${address}:${port}...`);
};