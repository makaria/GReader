'use strict';
(app => {
  app.HeaderComponent =
    ng.core.Component({
      selector: 'greader-header',
      templateUrl: 'templates/header.component.html'
    })
    .Class({
      constructor: function () {}
    })
})(window.app || (window.app = {}))
