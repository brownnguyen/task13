$(function () {
    $('.button__accor').on('click', function () {
        if (!$('.step__content').is('.active')) {
            $('.step__content').removeClass('active');
            $('.step__content').css('height', '0px');
            $(this).children('.faq__questions--A').css('height', $('.faq__questions--hiden').height() + 'px');
            $(this).addClass('active');
        }
        else {
            $(this).removeClass('active');
            $(this).children('.faq__questions--A').css('height', '0px');
        }
    });

});
$('.step__info').on('click', function () {
    if ($(this).parent().is('.expand')) {
        $(this).parent().removeClass('expand');
        $(this).next().css('height', '0px');
    } else {
        $(this).parent().addClass('expand');
        $(this).next().css('height', $(this).next().children().outerHeight() + 'px');
        console.log($(this).next().css('height', $(this).next().children().outerHeight() + 'px'))
        console.log($(this).next().children());
    }
});