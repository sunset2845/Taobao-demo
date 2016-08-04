/**
 * Created by Administrator on 2016/7/25.
 */
/*图片轮播*/
$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,

        // 如果需要分页器
        pagination: '.swiper-pagination',
        autoplay:2000
    })
});
