define(['knockout', 'models/beerRepository', 'jquery', 'viewmodels/beer-summary'], function (ko, beerRepository, $, BeerSummary) {
    return function beersViewModel() {
        var self = this;
        self.displayName = 'Beers';
        
        self.getBeers = function () {
            var existingBeers = [];

            if (localStorage.beers) {
                existingBeers = JSON.parse(localStorage.beers).items;
            }

            var result = [];
            for (i = 0; i < existingBeers.length; i++) {
                result.push(new BeerSummary(existingBeers[i]));
            }

            return existingBeers;
        };

        self.items = ko.observableArray(self.getBeers());

        self.delete = function () {
            beerRepository.delete(this.beerId);
            self.items.remove(this);
        };

        self.shrink = function (element, index, data) {
            $(element)
                .filter('*')
                .animate({ width: 0 }, 400, 'swing', function () { $(this).hide() });
        }
    }
});