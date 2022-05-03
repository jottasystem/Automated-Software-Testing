import app from '../src/app';
import port from './normalize';

const server = app.listen(port);
server.timeout = 7 * 60 * 1000;
console.log(`Connection server port => ${port}`);
