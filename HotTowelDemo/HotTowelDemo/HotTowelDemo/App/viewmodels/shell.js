﻿define(['durandal/system', 'plugins/router', 'services/logger'],
    function (system, router, logger) {
        var shell = {
            activate: activate,
            router: router
        };
        
        return shell;

        //#region Internal Methods
        function activate() {
            return boot();
        }

        function boot() {
            log('Hot Towel SPA Loaded!', null, true);

            router.on('router:route:not-found', function (fragment) {
                logError('No Route Found', fragment, true);
            });

            var routes = [
                { route: '', moduleId: 'home', title: 'Home', nav: 1 },
                { route: 'beers', title: 'Beers', moduleId: 'beers', nav: 2 },
                { route: 'settings', title: 'Settings', moduleId: 'settings', nav: 3 },
                { route: 'add', moduleId: 'add', nav: false },
                { route: 'beer/:id', moduleId: 'beer-detail', nav: false },
                { route: 'not-found', moduleId: 'not-found', nav: false }];

            return router.makeRelative({ moduleId: 'viewmodels' }) // router will look here for viewmodels by convention
                .map(routes)            // Map the routes
                .buildNavigationModel() // Finds all nav routes and readies them
                .activate();            // Activate the router
        }

        function log(msg, data, showToast) {
            logger.log(msg, data, system.getModuleId(shell), showToast);
        }

        function logError(msg, data, showToast) {
            logger.logError(msg, data, system.getModuleId(shell), showToast);
        }
        //#endregion
    });