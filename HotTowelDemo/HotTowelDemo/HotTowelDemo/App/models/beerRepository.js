// This is a crappy repository implementation and is not to be taken as a decent example (for example: we're constantly serializing/deserializing)
// It's not important because it isn't central to the demo of Durandal
define([], function () {
    return {
        save: function (beer) {
            if (!localStorage.beers) {
                beer.beerId = 1;
                var beers = {
                    items: [beer]
                };

                localStorage.beers = JSON.stringify(beers);
            } else {
                var beers = JSON.parse(localStorage.beers);
                var highestId = 0;
                for (var i = 0; i < beers.items.length; i++) {
                    if (beers.items[i].beerId >= highestId) {
                        highestId = beers.items[i].beerId + 1;
                    }
                }

                beer.beerId = highestId;
                beers.items.push(beer);
                localStorage.beers = JSON.stringify(beers);
            }
        },

        get: function (id) {
            if (!localStorage.beers) {
                return null;
            }

            var beers = JSON.parse(localStorage.beers);
            for (i = 0; i < beers.items.length; i++) {
                if (beers.items[i].beerId === id) {
                    return beers.items[i];
                }
            }

            return null;
        },

        delete: function (id) {
            if (!localStorage.beers) {
                return;
            }

            var beers = JSON.parse(localStorage.beers);
            for (i = 0; i < beers.items.length; i++) {
                if (beers.items[i].beerId === id) {
                    beers.items.splice(i, 1);
                }
            }

            localStorage.beers = JSON.stringify(beers);
            return;
        },

        find: function () {
            var beers = [];

            if (localStorage.beers) {
                beers = JSON.parse(localStorage.beers).items;
            }

            return beers;
        }
    };
});