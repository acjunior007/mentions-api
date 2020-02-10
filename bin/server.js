'use strict';

const app = require("../src/app");
const http = require("http");
const debug = require("debug")("nodestr:server");

// port based on express-generator
function normalizePort(val){
    const port = parseInt(val);
    if(isNaN(port)){
        return val;
    }
    if(port >= 0){
        return port;
    }
    return false;
}

const port = normalizePort(process.env.port || 3000);
app.set('port', port);

// error handle
function onError(error){
    if(error.syscall != 'listen'){
        throw error;
    }
        const bind = typeof port === 'string' ? 'Pipe' + port: 'Port' + port;
        switch(error.code){
            case 'EACCSES':
                console.error(bind + 'requires elevated privileges');
                process.exit(1);
            default:
                throw error;
        }
    }
     // listener handler
    function onListening(){
        const addr = server.address();
        const bind = typeof addr === 'string'? 'pipe' + addr: 'port' + addr.port;
        debug('Listening on ' + bind);
    }

    //server
    const server = http.createServer(app);
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);
    console.log(`API is alive on  ${port}`);