"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function routes(app) {
    app.get('/healthcheck', function (req, res) {
        res.sendStatus(200);
    });
    // GET customer
    app.get('/customer/:id', function (req, res) {
        res.status(200).send("GET customer");
    });
    // GET invoice
    app.get('/invoice/:id', function (req, res) {
        res.status(200).send("GET invoice");
    });
    // POST invoice
    app.post('/invoice', function (req, res) {
        res.status(200).send("POST invoice");
    });
    // POST customer
    app.post('/customer', function (req, res) {
        res.status(200).send("POST customer");
    });
}
exports.default = routes;
