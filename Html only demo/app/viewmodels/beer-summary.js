define(['models/beerRepository'], function (beerRepository) {
    return function beerSummaryViewModel(beer) {
        var self = this;

        self.beerId = beer.beerId;
        self.name = beer.name;
        self.brewery = beer.brewery;

        ////TODO: won't be called in home page because of $parent.delete
        //self.delete = function () {
        //    beerRepository.delete(this.beerId);
        //};
    };
});