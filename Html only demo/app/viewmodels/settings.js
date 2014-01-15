﻿define(['durandal/app', 'plugins/router', 'knockout'], function (app, router, ko) {
    return function settingsViewModel() {
        var self = this;

        this.name = ko.observable('');

        if (localStorage && localStorage.profile) {
            this.name(JSON.parse(localStorage.profile).name);
        }

        this.displayName = "Settings";
        
        this.save = function () {
            if (localStorage) {
                localStorage.profile = JSON.stringify({ name: self.name() });
                app.showMessage('Saved!');
            } else {
                app.showMessage('Your browser doesn\'t seem to support saving locally. Update your browser for more fun.');
            }
        }
    };
});