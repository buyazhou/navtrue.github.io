/**
 * Created by BU-bu on 2017/1/17.
 */

(function () {

    function Home(data) {
        this.data = data;
        this.showTopBanner();
        this.caseShowImages();
    }

    Home.prototype.showTopBanner = function () {

        var container = $("<div class='carousel slide'></div>");
        var slideContainer = $("<div class='carousel-inner'></div>");
        container.append(slideContainer);

        $(this.data).each(function () {
            var info = this.homeBanner;

            var slide = $("<div class='item active'><a href=''><img src=" + info.bannerImages[0] + " alt=''></a></div>" + "<div class='item'><a href=''><img src=" + info.bannerImages[1] + " alt=''></a></div>" + "<div class='item'><a href=''><img src=" + info.bannerImages[2] + " alt=''></a></div>");

            slideContainer.append(slide);
        });

        $(".banner").append(container);
    };

    Home.prototype.caseShowImages = function () {

        var slidImages = $("<div class='caseSlidImages'></div>");

        $(this.data).each(function () {
            var info = this.caseOne;
            var infoTwo = this.caseTwo;
            var infoThree = this.caseThree;
            var infoFore = this.caseFore;
            var infoFife = this.caseFife;
            var infoSix = this.caseSix;

            var slideOen = $("<div class='caseImagesOne col-md-2'><img class='caseBG' src="+info.images+" alt=''><div class='hiddenBoxOne'><a href='#'><img class='casePhoto' src="+info.photo+" alt=''></a><h3>"+info.title+"</h3><p>"+info.content+"</p><a href='#'><span>"+info.moreAndMore+"</span></a></div></div>");

            var slideTwo = $("<div class='caseImagesTwo col-md-2'><img class='caseBG' src="+infoTwo.images+" alt=''><div class='hiddenBoxTwo'><a href='#'><img class='casePhoto' src="+infoTwo.photo+" alt=''></a><h3>"+infoTwo.title+"</h3><p>"+infoTwo.content+"</p><a href='#'><span>"+infoTwo.moreAndMore+"</span></a></div></div>");

            var slideThree = $("<div class='caseImagesThree col-md-2'><img class='caseBG' src="+infoThree.images+" alt=''><div class='hiddenBoxThree'><a href='#'><img class='casePhoto' src="+infoThree.photo+" alt=''></a><h3>"+infoThree.title+"</h3><p>"+infoThree.content+"</p><a href='#'><span>"+infoThree.moreAndMore+"</span></a></div></div>");

            var slideFore = $("<div class='caseImagesFore col-md-2'><img class='caseBG' src="+infoFore.images+" alt=''><div class='hiddenBoxFore'><a href='#'><img class='casePhoto' src="+infoFore.photo+" alt=''></a><h3>"+infoFore.title+"</h3><p>"+infoFore.content+"</p><a href='#'><span>"+infoFore.moreAndMore+"</span></a></div></div>");

            var slideFife = $("<div class='caseImagesFife col-md-2'><img class='caseBG' src="+infoFife.images+" alt=''><div class='hiddenBoxFife'><a href='#'><img class='casePhoto' src="+infoFife.photo+" alt=''></a><h3>"+infoFife.title+"</h3><p>"+infoFife.content+"</p><a href='#'><span>"+infoFife.moreAndMore+"</span></a></div></div>");

            var slideSix = $("<div class='caseImagesSix col-md-2'><img class='caseBG' src="+infoSix.images+" alt=''><div class='hiddenBoxSix'><a href='#'><img class='casePhoto' src="+infoSix.photo+" alt=''></a><h3>"+infoSix.title+"</h3><p>"+infoSix.content+"</p><a href='#'><span>"+infoSix.moreAndMore+"</span></a></div></div>");



            slidImages.append(slideOen);
            slidImages.append(slideTwo);
            slidImages.append(slideThree);
            slidImages.append(slideFore);
            slidImages.append(slideFife);
            slidImages.append(slideSix);
        });
        $(".caseShowImagesOne").append(slidImages);

    };


    window.Home = Home;
})();