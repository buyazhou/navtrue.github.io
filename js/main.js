/**
 * Created by BU-bu on 2017/1/17.
 *
 */

(function () {



    function init() {

        loadDate(function (result) {
            new Home(result.data);

        });
        new Swiper('.swiper-container', {
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next',
            slidesPerView: 5,

            centeredSlides: false,

            onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
                swiperAnimateCache(swiper); //隐藏动画元素
                swiperAnimate(swiper); //初始化完成开始动画
            },
            onSlideChangeEnd: function(swiper){
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            }
        });
        /*显示覆盖物*/
        setTimeout(function () {
            $(".caseImagesOne").hover(function () {
                $(".hiddenBoxOne").css('display','block');
            },function () {
                $(".hiddenBoxOne").css('display','none');
            });
            $(".caseImagesTwo").hover(function () {
                $(".hiddenBoxTwo").css('display','block');
            },function () {
                $(".hiddenBoxTwo").css('display','none');
            });
            $(".caseImagesThree").hover(function () {
                $(".hiddenBoxThree").css('display','block');
            },function () {
                $(".hiddenBoxThree").css('display','none');
            });
            $(".caseImagesFore").hover(function () {
                $(".hiddenBoxFore").css('display','block');
            },function () {
                $(".hiddenBoxFore").css('display','none');
            });
            $(".caseImagesFife").hover(function () {
                $(".hiddenBoxFife").css('display','block');
            },function () {
                $(".hiddenBoxFife").css('display','none');
            });
            $(".caseImagesSix").hover(function () {
                $(".hiddenBoxSix").css('display','block');
            },function () {
                $(".hiddenBoxSix").css('display','none');
            });

        },1000)

    }

    function loadDate(callback) {

        var request = new XMLHttpRequest();
        request.open("GET", "natrue.json");
        request.onload = function () {

            var obj = JSON.parse(request.response);
            console.log(obj);
            callback(obj);

        };
        request.send();
    }

    init();

})();