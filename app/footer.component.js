'use strict';
(app => {
  app.FooterComponent =
    ng.core.Component({
      selector: 'greader-footer',
      templateUrl: 'templates/footer.component.html'
    })
    .Class({
      constructor: function () {}
    })
})(window.app || (window.app = {}))
