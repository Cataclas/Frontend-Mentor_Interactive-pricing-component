let range = $(".range__line");
let switchCheck = $(".switch__check");
let pageviews = $(".card__title");
let price = $(".card__price__number");
let discount = .25;

const prices = [{ "month": 8, "views": '10k' }, { "month": 12, "views": '50k' }, { "month": 16, "views": '100k' }, { "month": 24, "views": '500k' }, { "month": 36, "views": '1M' }];

range.on('input', function() {
    let position = $(this).val() / percent;
    let characteristics = prices[position];
    $(this).css({ 'background': 'linear-gradient(90deg, var(--primary-one)' + $(this).val() + '%, rgb(234, 238, 251) 0%)' });

    printcharacteristics(characteristics);

    function printcharacteristics(e) {
        pageviews.html(e.views + ' pageviews');
        if (switchCheck.is(":checked")) {
            price.html('$' + (e.month - (e.month * discount)) + '.00');
        } else {
            price.html('$' + e.month + '.00');
        }
    }
})

switchCheck.on('click', function() {
    range.trigger('input');
})

let divitions = prices.length - 1;
let percent = 100 / divitions;
let positionCircle = Math.round(divitions / 2) * percent;

range.attr('step', percent).attr('value', positionCircle).trigger('input').mouseup(function() { $(this).removeClass('grab') }).mousedown(function() { $(this).addClass('grab') });