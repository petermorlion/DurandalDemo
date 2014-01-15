﻿define(['knockout', 'viewmodels/beer-summary'], function (ko, BeerSummary) {
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

        self.randomBeer = function () {
            return new BeerSummary({ beerId: 1, name: 'test', brewery: 'Inbev' });
        }
    };
})