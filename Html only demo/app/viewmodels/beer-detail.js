define(['models/beerRepository'], function (beerRepository) {
    return function beerDetailViewModel() {
        var self = this;

        // TODO: is it possible to pass an object to the viewmodel when navigating to a new viewmodel?
        self.activate = function (id) {
            id = parseInt(id);
            var beer = beerRepository.get(id);
            if (beer) {
                self.displayName = beer.name;
                self.brewery = beer.brewery;
            }
        }
    };
});