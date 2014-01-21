define(['knockout', 'models/beer', 'plugins/router', 'models/beerRepository'], function (ko, Beer, router, beerRepository) {
    return function AddViewModel() {
        this.displayName = 'Add Beer';
        this.name = ko.observable(''),
        this.brewery = ko.observable(''),
        this.comments = ko.observable(''),
        this.save = function () {
            var beer = new Beer(this.name(), this.brewery(), this.comments());
            beerRepository.save(beer);
            router.navigate('#beers');
        }
    }
});