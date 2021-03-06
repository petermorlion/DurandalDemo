// rating is added as a dependency so it is added on the page; there might be better ways to do this
define(['knockout', 'models/beer', 'plugins/router', 'models/beerRepository', 'customBindings/rating'], function (ko, Beer, router, beerRepository, rating) {
    return function AddViewModel() {
        this.displayName = 'Add Beer';
        this.name = ko.observable('');
        this.brewery = ko.observable('');
        this.comments = ko.observable('');
        this.rating = ko.observable(0);
        this.save = function() {
            var beer = new Beer(this.name(), this.brewery(), this.comments());
            beer.rating = this.rating();
            beerRepository.save(beer);
            router.navigate('#beers');
        };
        this.clearRating = function() {
            this.rating(0);
        };
    };
});