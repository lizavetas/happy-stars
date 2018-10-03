const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.rewriter({
    '/api/universe/': '/universes',
    '/api/universe/:id': '/universes/:id',
    '/api/star/': '/stars',
    '/api/star/:id': '/stars/:id'
}));


router.render = (req, res) => {
    if (req.url === '/stars') {
        res.jsonp({
            stars: res.locals.data
        });
    } else if (req.url === '/universes') {
        res.jsonp({
            universes: res.locals.data
        });
    }
};

server.use(router);

server.listen(3200, () => {
    console.log('JSON Server is running')
});