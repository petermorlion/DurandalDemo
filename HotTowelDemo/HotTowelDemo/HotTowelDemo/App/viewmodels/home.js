define(['knockout', 'viewmodels/beer-summary', 'models/beerRepository'], function (ko, BeerSummary, beerRepository) {
    return function HomeViewModel() {
        var self = this;
        self.displayName = "Beer o'clock";

        self.isProfileComplete = ko.computed(function () {
            if (!localStorage) {
                return true;
            }

            return localStorage.profile != undefined && JSON.parse(localStorage.profile).name !== '';
        });

        self.name = ko.computed(function () {
            if (self.isProfileComplete()) {
                return JSON.parse(localStorage.profile).name;
            }

            return '';
        });

        self.getRandomBeer = function () {
            var beers = beerRepository.find();
            if (beers.length >= 1) {
                var randomBeer = beers[Math.floor(Math.random() * beers.length)];
                return new BeerSummary(randomBeer);
            } else {
                return null;
            }
        };

        self.randomBeer = ko.observable(self.getRandomBeer());

        self.hasRandomBeer = ko.computed(function () {
            return self.randomBeer() !== null;
        });

        self.refreshRandomBeer = function () {
            self.randomBeer(self.getRandomBeer());
        };
    };
})