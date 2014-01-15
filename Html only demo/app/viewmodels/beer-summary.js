define(['models/beerRepository'], function (beerRepository) {
    return function beerSummaryViewModel(beer) {
        var self = this;

        self.beerId = beer.beerId;
        self.name = beer.name;
        self.brewery = beer.brewery;
    };
});