define(['knockout'], function (ko) {
    return function HomeViewModel() {
        var self = this;
        self.displayName = "Beer o'clock";
        self.isProfileComplete = ko.computed(function () {
            if (!localStorage) {
                return true;
            }

            return localStorage.profile != undefined && localStorage.profile.name !== '';
        });
    };
})