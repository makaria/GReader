'use strict';
(app => {
  app.AppComponent =
    ng.core.Component({
      selector: 'greader-app',
      templateUrl: 'templates/app.component.html',
      viewProviders: [app.ReaderComponent],
      directives: [app.ReaderComponent]
    })
    .Class({
      constructor: function () {}
    })
})(window.app || (window.app = {}))
