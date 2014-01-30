define(['plugins/router', 'durandal/app', 'viewmodels/notImplemented'], function (router, app, NotImplemented) {
    return {
        router: router,
        search: function() {
            app.showDialog(new NotImplemented());
        },
        activate: function () {
            router.map([
                { route: '', title: 'Home', moduleId: 'viewmodels/home', nav: true },
                { route: 'beers', title: 'Beers', moduleId: 'viewmodels/beers', nav: true },
                { route: 'settings', title: 'Settings', moduleId: 'viewmodels/settings', nav: true },
                { route: 'add', moduleId: 'viewmodels/add', nav: false },
                { route: 'beer/:id', moduleId: 'viewmodels/beer-detail', nav: false }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});