const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const http = require('http');
const container = require('./container');

// depandency container -- no es6
container.resolve(function (users) {
  const app = setupExpress();

  // set up the server
  function setupExpress() {
    const app = express();
    const server = http.createServer(app);
    server.listen(3000, () => {
      console.log('🎧  listening on port 3000');
    });

    configExpress(app);

    // set up router
    const router = require('express-promise-router')();
    users.SetRouting(router);


    app.use(router);
  }

  // main express configuration
  function configExpress(app) {
    app.use(express.static('public'));
    app.set('view engine', 'ejs');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: true
    }));
  }

});