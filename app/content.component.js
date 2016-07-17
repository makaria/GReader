'use strict';
(app => {
  app.ContentComponent =
    ng.core.Component({
      selector: 'greader-content',
      templateUrl: 'templates/content.component.html'
    })
    .Class({
      constructor: function () {}
    })
})(window.app || (window.app = {}))
