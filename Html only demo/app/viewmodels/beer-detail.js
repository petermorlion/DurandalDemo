define(['models/beerRepository', 'plugins/router', 'knockout'], function (beerRepository, router, ko) {
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
            beerRepository.delete(this.beerId());
            router.navigate('#beers');
        }
    };
});