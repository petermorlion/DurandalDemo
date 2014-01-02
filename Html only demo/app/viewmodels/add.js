define(['knockout', 'models/Beer', 'plugins/router'], function (ko, Beer, router) {
    return {
        displayName: 'Add Beer',
        name: ko.observable(''),
        brewery: ko.observable(''),
        save: function () {
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

            this.name('');
            this.brewery('');
            router.navigate('#beers');
        }
    }
});