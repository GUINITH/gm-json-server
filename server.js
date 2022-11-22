import jsonServer  from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewars = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(middlewars);
server.use(router);

server.listen(port);