define(['knockout', 'models/Beer'], function (ko, Beer) {
    return {
        displayName: 'Add',
        name: ko.observable(),
        brewery: ko.observable(),
        save: function () {
            var beer = new Beer(this.name(), this.brewery());
            console.log(beer.name + ' ' + beer.brewery);
        }
    }
});