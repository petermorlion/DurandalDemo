define(['knockout', 'jquery'], function (ko, $) {
    ko.bindingHandlers.collapsibleSection = {

        init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
            // Called when first applied to the element. Set up initial state, event handlers,...
            var value = valueAccessor();
            var valueUnwrapped = ko.utils.unwrapObservable(value);
            var element = $(element);
            var header = $('<h3></h3>').text(valueUnwrapped);

            header.insertBefore(element);
            header.click(function () {
                element.toggle();
            });
        },

        update: function (element, valueAccessor, allbindingsAccessor, viewModel) {
            // Called once when applying binding, and again when observable changes value

            // nothing much to do here...
        }
    };
});