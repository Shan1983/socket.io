'use strict';

module.exports = function(_) {
  return {
    SetRouting(router) {
      router.get('/', this.indexPage);
    },
    indexPage(req, res) {
      res.render('index', { test: 'this is working!' });
    },
  };
};
