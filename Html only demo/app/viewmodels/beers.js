define(['knockout', 'bootstrap'], function (ko) {
    return function beersViewModel() {
        this.displayName = 'Beers';
        
        this.getBeers = function () {
            var existingBeers = [];

            if (localStorage.beers) {
                existingBeers = JSON.parse(localStorage.beers).items;
            }

            return existingBeers;
        };

        this.items = ko.observableArray(this.getBeers());

        this.itemsGrouped = ko.computed(function () {
            var rows = [], current = [];
            rows.push(current);
            for (var i = 0; i < this.items().length; i += 1) {
                current.push(this.items()[i]);
                if (((i + 1) % 4) === 0) {
                    current = [];
                    rows.push(current);
                }
            }
            return rows;
        }, this);
    }
});