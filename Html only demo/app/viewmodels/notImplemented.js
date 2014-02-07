define(['knockout', 'plugins/dialog'], function (ko, dialog) {
    return function NotImplementedViewModel() {
        var self = this;
        self.email = ko.observable('');
        self.close = function() {
            if (self.email() !== '') {
                console.log('Send email address to server: ' + self.email());
            }
            dialog.close(self);
        };
    };
});