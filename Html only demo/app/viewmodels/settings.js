define(['durandal/app', 'plugins/router', 'knockout'], function (app, router, ko) {
    return function settingsViewModel() {
        var self = this;
        self.displayName = "Settings";
        self.name = ko.observable('');
        self.save = function () {
            if (localStorage) {
                localStorage.name = self.name();
            }

            app.showMessage('Saved!');
        };
    };
});