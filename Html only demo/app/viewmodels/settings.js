define(['durandal/app', 'plugins/router', 'knockout'], function (app, router, ko) {
    return function settingsViewModel() {
        var self = this;

        this.name = ko.observable('');

        if (localStorage) {
            this.name(JSON.parse(localStorage.profile).name);
        }

        this.displayName = "Settings";
        
        this.save = function () {
            if (localStorage) {
                localStorage.profile = JSON.stringify({ name: self.name() });
            }

            app.showMessage('Saved!');
        }
    };
});