define(['knockout', 'models/beerRepository', 'jquery', 'viewmodels/beer-summary', 'models/beer'], function (ko, beerRepository, $, BeerSummary, Beer) {
    return function beersViewModel() {
        var self = this;
        self.displayName = 'Beers';
        
        self.getBeers = function () {
            var existingBeers = beerRepository.find();

            var result = [];
            for (i = 0; i < existingBeers.length; i++) {
                result.push(new BeerSummary(existingBeers[i]));
            }

            return existingBeers;
        };

        self.items = ko.observableArray(self.getBeers());

        self.newBeerName = ko.observable('');
        self.newBeerBrewery = ko.observable('');
        self.quickAdd = function () {
            var beer = new Beer(self.newBeerName(), self.newBeerBrewery(), '');
            beerRepository.save(beer);
            self.items.push(new BeerSummary(beer));
        };
    }
});