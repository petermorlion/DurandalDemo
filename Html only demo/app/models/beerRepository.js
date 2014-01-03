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
        }
    };
});