define(['knockout', 'models/beerRepository', 'jquery', 'viewmodels/beer-summary', 'models/beer'], function (ko, beerRepository, $, BeerSummary, Beer) {
    return function beersViewModel() {
        var self = this;
        self.displayName = 'Beers';

        self.getBeers = function() {
            var existingBeers = beerRepository.find();

            var result = [];
            for (i = 0; i < existingBeers.length; i++) {
                result.push(new BeerSummary(existingBeers[i]));
            }

            return result;
        };

        self.items = ko.observableArray(self.getBeers());

        self.newBeerName = ko.observable('');
        self.newBeerBrewery = ko.observable('');
        self.quickAdd = function() {
            var beer = new Beer(self.newBeerName(), self.newBeerBrewery(), '');
            beerRepository.save(beer);
            self.items.push(new BeerSummary(beer));
            self.newBeerName('');
            self.newBeerBrewery('');
        };

        // Technically, glowGreen now has a dependency on the DOM (because it receives an element).
        // If you want to avoid this, you might be able to work around it by 
        //  - creating a custom binding
        //  - let this binding listen to events from your viewmodel
        //  - let your viewmodel raise an event (work with callbacks) when it is added to the DOM
        //  - bind your li like so: <li data-bind="glowGreenOn: addToDom"></li>
        self.fadeIn = function(element, index, data) {
            // afterAdd is called for each node that KO finds in the template. Whitespaces (text) included.
            if (!element.tagName) {
                return;
            }

            $(element)
                .hide() // hide first so jQuery can fadeIn
                .fadeIn();
        };
    };
});