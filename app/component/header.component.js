'use strict';
(app => {
  app.HeaderComponent =
    ng.core.Component({
      selector: 'greader-header',
      templateUrl: 'app/view/header.component.html',
    })
    .Class({
      constructor: function () {}
    })
})(window.app || (window.app = {}))
