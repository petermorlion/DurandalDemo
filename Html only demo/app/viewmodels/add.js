define(['knockout', 'models/beer', 'plugins/router'], function (ko, Beer, router) {
    return function AddViewModel() {
        this.displayName = 'Add Beer';
        this.name = ko.observable(''),
        this.brewery = ko.observable(''),
        this.save = function () {
            var beer = new Beer(this.name(), this.brewery());

            if (!localStorage.beers) {
                var beers = {
                    items: [beer]
                };

                localStorage.beers = JSON.stringify(beers);
            } else {
                var beers = JSON.parse(localStorage.beers);
                beers.items.push(beer);
                localStorage.beers = JSON.stringify(beers);
            }

            router.navigate('#beers');
        }
    }
});