define(['knockout', 'models/beerRepository'], function (ko, beerRepository) {
    return function beersViewModel() {
        self = this;
        self.displayName = 'Beers';
        
        self.getBeers = function () {
            var existingBeers = [];

            if (localStorage.beers) {
                existingBeers = JSON.parse(localStorage.beers).items;
            }

            return existingBeers;
        };

        self.items = ko.observableArray(self.getBeers());

        self.delete = function () {
            beerRepository.delete(this.beerId);
            self.items.remove(this);
        };
    }
});