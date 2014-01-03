define(['models/beerRepository'], function (beerRepository) {
    return function beerViewModel() {
        // TODO: is it possible to pass an object to the viewmodel?
        this.activate = function (id) {
            var beer = beerRepository.get(id);
            if (beer) {
                this.displayName = beer.name;
                this.brewery = beer.brewery;
            }
        }
    };
});