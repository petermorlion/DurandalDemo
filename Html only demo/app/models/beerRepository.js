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
                beer.beerId = beers.items.length + 1;
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
                if (beers.items[i].beerId === id.toString()) {
                    return beers.items[i];
                }
            }

            return null;
        }
    };
});