define(['durandal/app', 'plugins/router', 'knockout', 'customBindings/collapsibleSection'], function (app, router, ko) {
    return function settingsViewModel() {
        var self = this;

        self.name = ko.observable('');

        self.name.subscribe(function(newValue) {
            console.log('Changed name to ' + newValue);
        });

        if (localStorage && localStorage.profile) {
            this.name(JSON.parse(localStorage.profile).name);
        }

        self.displayName = "Settings";

        self.save = function() {
            if (localStorage) {
                localStorage.profile = JSON.stringify({ name: self.name() });
                app.showMessage('Settings were saved!', 'Saved');
            } else {
                app.showMessage('Your browser doesn\'t seem to support saving locally. Update your browser for more fun.');
            }
        };

        self.more = ko.observable('More');
    };
});