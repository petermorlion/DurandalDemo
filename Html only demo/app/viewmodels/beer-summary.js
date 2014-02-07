// rating is added as a dependency so it is added on the page; there might be better ways to do this
define(['models/beerRepository', 'customBindings/rating', 'knockout'], function (beerRepository, r, ko) {
    return function BeerSummaryViewModel(beer) {
        var self = this;

        self.beerId = beer.beerId;
        self.name = beer.name;
        self.brewery = beer.brewery;
        self.rating = beer.rating;
    };
});