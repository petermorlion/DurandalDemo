define(['knockout', 'jquery'], function (ko, $) {
    ko.bindingHandlers.rating = {
        init: function (element, valueAccessor, allBindingAccessor, viewModel) {
            var element = $(element);
            var currentScore = ko.utils.unwrapObservable(valueAccessor());

            var stars = [];

            for (var i = 1; i <= 5; i++) {
                var star = $('<span></span>').data('score', i);
                if (i <= currentScore) {
                    star.addClass('icon-star');
                } else {
                    star.addClass('icon-star-empty');
                }

                stars.push(star);

                // we just created an array of stars and added it to the DOM
                element.append(star);

                // when clicked we loop over our stars and set the correct classes
                star.click(function () {
                    var score = $(this).data('score');
                    for (var i = 0; i < stars.length; i++) {
                        var item = stars[i];
                        if (item.data('score') <= score) {
                            stars[i].addClass('icon-star').removeClass('icon-star-empty');
                        } else {
                            stars[i].addClass('icon-star-empty').removeClass('icon-star');
                        }
                    }

                    // don't forget to set the score
                    var observable = valueAccessor();
                    observable(score);
                });
            }
        },

        update: function (element, valueAccessor, allBindingAccessor, viewModel) {
            var element = $(element);
            var stars = element.find('span.icon-star, span.icon-sar-empty');
            var value = valueAccessor();
            var score = ko.utils.unwrapObservable(value);

            for (var i = 0; i < stars.length; i++) {
                var item = $(stars[i]);
                if (item.data('score') <= score) {
                    item.addClass('icon-star').removeClass('icon-star-empty');
                } else {
                    item.addClass('icon-star-empty').removeClass('icon-star');
                }
            }
        }
    };
});