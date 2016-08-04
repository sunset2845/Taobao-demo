
function clickGoTop() {
    $('.wrap').scroll(function () {
        var sTop = $('.wrap').scrollTop();
        //console.log(sTop);
        if(sTop>=400){
            $(".gotop").show();
        }else if(sTop<400){
            $(".gotop").hide();
        }
    });

    $(".gotop").click(function () {
        $('.wrap').animate({scrollTop: '0px'}, 600);
    });
}

$(function () {
    clickGoTop();
});

// $(function () {
//     $(".gotop").css("top", window.screen.availHeight / 2 - 100 + "px");
//     $(window).scroll(function () {
//         if ($(window).scrollTop() >= 100) {
//             $('.gotop').fadeIn(300);
//         } else {
//             $('.gotop').fadeOut(300);
//         }
//     });
//     $('.gotop').click(function () {
//         $('html,body').animate({scrollTop: '0px'}, 800);
//     });
//     $('.gotop').click(function () {
//         $('html,body').animate({scrollTop: document.body.clientHeight + 'px'}, 800);
//     });
// });