/**
 * Created by Administrator on 2016/7/26.
 */
/*移动端图片大小自适应*/
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=540){
                docEl.style.fontSize = 20 * (540 / 108) + 'px';
            }else{
                docEl.style.fontSize = 20 * (clientWidth / 108) + 'px';
            }

        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

/*淘宝头条轮播*/
$(document).ready(function () {
    var ttSwiper = new Swiper ('.swiper-container-toutiao', {
        direction: 'vertical',
        loop: true,
        autoplay:2000
    })
});