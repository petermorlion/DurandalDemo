define(['knockout', 'models/beerRepository', 'jquery', 'viewmodels/beer-summary'], function (ko, beerRepository, $, BeerSummary) {
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
    }
});