'use strict'

import React from 'react'
import {renderToString} from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import express from 'express'
import path from 'path'
import routes from './routes'
const router = express.Router()

const app = express()

// app.set("views", path.resolve(__dirname + "/dist"))

app.use("/public", express.static("dist"))


const serve = (req, res) => {


  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      // You can also check renderProps.components or renderProps.routes for
      // your "not found" component or route respectively, and send a 404 as
      // below, if you're using a catch-all route.
      


      // const css = new Set(); // CSS for all rendered React components
      // const context = { insertCss: (...styles) => styles.forEach(style => css.add(style._getCss())); };
      const body = renderToString(<RouterContext {...renderProps} />);
      const html = `<!doctype html>
                    <html class="no-js" lang="">
                      <head>
                          <meta charset="utf-8">
                          <meta http-equiv="X-UA-Compatible" content="IE=edge">
                          <meta name="description" content="">
                          <meta name="viewport" content="width=device-width">
                          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
                          <link rel="stylesheet" href="/public/main.css">
                          <title>Roy Forums</title>
                      </head>
                      <body>
                        <div id="app" class="layout-fill ng-scope layout-row">
                          ${body}
                        </div>
                        <script type="text/javascript" async src="/public/bundle.js"></script>
                      </body>
                    </html>`;
      res.status(200).send(html);
    } else {
      res.status(404).send('Not found')
    }
  })
}

router.get("*", serve);

app.use(router)

const port = process.env["PORT"] || 9000

app.listen(port, function () {
	console.log("started the server at http://localhost:" + port + " ...")
})