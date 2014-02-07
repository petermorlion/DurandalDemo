define(['durandal/app', 'plugins/router', 'knockout', 'customBindings/collapsibleSection'], function (app, router, ko) {
    return function SettingsViewModel() {
        var self = this;

        self.displayName = "Features";

        self.features = [
            { name: 'Favorites', free: true, pro: true },
            { name: 'Facebook integration', free: true, pro: true },
            { name: 'Twitter integration', free: true, pro: true },
            { name: 'Untappd integration', free: false, pro: true },
            { name: 'Ratebeer integration', free: false, pro: true }
        ];
    };
});