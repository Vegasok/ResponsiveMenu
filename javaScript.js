var main =function() {
    $('.toggle-nav').click(function() {
        $(this).toggleClass('active');
        $('.menu ul').toggleClass('active');


    });
};
$(document).ready(main);