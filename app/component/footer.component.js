'use strict';
(app => {
  app.FooterComponent =
    ng.core.Component({
      selector: 'greader-footer',
      templateUrl: 'app/view/footer.component.html'
    })
    .Class({
      constructor: function () {}
    })
})(window.app || (window.app = {}))
