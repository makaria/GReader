'use strict';

(app => {
  app.ReaderComponent =
    ng.core.Component({
      selector: 'greader-reader',
      templateUrl: 'templates/reader.component.html',
      viewProviders: [app.HeaderComponent, app.ContentComponent, app.FooterComponent],
      directives: [app.HeaderComponent, app.ContentComponent, app.FooterComponent]
    })
    .Class({
      constructor: function () {}
    })
})(window.app || (window.app = {}))
