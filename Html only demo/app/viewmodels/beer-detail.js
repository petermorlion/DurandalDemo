define(['durandal/app', 'models/beerRepository', 'plugins/router', 'knockout'], function (app, beerRepository, router, ko) {
    // this returns a singleton, so the viewmodel stays in memory
    // because we use the activate method every time the view is activated (because we need the parameter from the url), 
    // the data will be updated every time the view is activated, giving us the correct data.
    //
    // It makes little sense to keep this object in memory, but I've included it here to show it is possible.
    return {
        beerId: ko.observable(''),
        displayName: ko.observable(''),
        brewery: ko.observable(''),
        comments: ko.observable(''),
        activate: function (id) {
            id = parseInt(id);
            var beer = beerRepository.get(id);
            if (beer) {
                this.beerId(beer.beerId);
                this.displayName(beer.name);
                this.brewery(beer.brewery);
                this.comments(beer.comments);
            }
        },
        remove: function () {
            var that = this;
            app.showMessage('Are you sure you want to delete this beer?', 'Delete', ['Yes', 'No']).then(function (dialogResult) {
                if (dialogResult === 'Yes') {
                    beerRepository.delete(that.beerId());
                    router.navigate('#beers');
                }
            });
        }
    };
});