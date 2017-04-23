'use strict';
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const React = require("react");
const server_1 = require("react-dom/server");
const react_router_1 = require("react-router");
const express = require("express");
const routes_1 = require("./routes");
const router = express.Router();
const app = express();
// app.set("views", path.resolve(__dirname + "/dist"))
app.use("/public", express.static("dist"));
const serve = (req, res) => {
    // Note that req.url here should be the full URL path from
    // the original request, including the query string.
    react_router_1.match({ routes: routes_1.default, location: req.url }, (error, redirectLocation, renderProps) => {
        // pending to add types from the browser.
        // redirectLocation would be window.location type.
        // https://www.w3schools.com/js/js_window_location.asp
        if (error) {
            // res.statusCode = 500
            // res.end(error.message)
            res.status(500).send(error.message); // same as above
        }
        else if (redirectLocation) {
            // res.statusCode = 302
            // res.end(redirectLocation.pathname + redirectLocation.search)
            res.redirect(302, redirectLocation.pathname + redirectLocation.search); // same as above
        }
        else if (renderProps) {
            // You can also check renderProps.components or renderProps.routes for
            // your "not found" component or route respectively, and send a 404 as
            // below, if you're using a catch-all route.
            // const css = new Set(); // CSS for all rendered React components
            // const context = { insertCss: (...styles) => styles.forEach(style => css.add(style._getCss())); };
            const body = server_1.renderToString(React.createElement(react_router_1.RouterContext, __assign({}, renderProps)));
            const html = `<!doctype html><html class="no-js" lang=""><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="description" content=""><meta name="viewport" content="width=device-width"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"><link rel="stylesheet" href="/public/main.css"><title>Roy Forums</title></head><body><div id="app" class="layout-fill ng-scope layout-row">${body}</div><script type="text/javascript" async src="/public/bundle.js"></script></body></html>`;
            // res.statusCode = 200
            // res.end(html);
            res.status(200).send(html);
        }
        else {
            // res.statusCode = 404
            // res.end("Not Found")
            res.status(404).send('Not found');
        }
    });
};
router.get("*", serve);
app.use(router);
const port = process.env["PORT"] || 9000;
app.listen(port, function () {
    console.log("started the server at http://localhost:" + port + " ...");
});
//# sourceMappingURL=server.js.map