define(['durandal/app', 'plugins/router', 'knockout'], function (app, router, ko) {
    // returns an object --> a singleton; Durandal will not make multiple instances of it.
    return {
        displayName: "Settings",
        name: ko.observable(''),
        save: function () {
            if (localStorage) {
                localStorage.profile = { name: self.name() };
            }

            app.showMessage('Saved!');
        }
    };
});