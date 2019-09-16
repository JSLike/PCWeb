//头部首页导航栏下拉
headerNav();
function headerNav(){
        let timer=null;
        let timer2=null;
        $("nav.nav-bj").find("li:gt(0)").hover(
            function () {
                let $_this=$(this);
                        clearTimeout(timer);
                          $("div.nav-content").hide();
                          timer=setTimeout(function () {
                                  $("div.nav-content").eq($_this.index()-1).show().animate({top:"30px"},200)

                          },500)
                  },function () {

                $("div.nav-content").hover(
                    function () {
                        clearTimeout(timer);
                        clearTimeout(timer2);
                    },function () {
                        $("div.nav-content").hide().css("top","-100px")
                    }
                );

               timer2= setTimeout(function () {
                    $("div.nav-content").hide().css("top","-100px")
                },500)



            }
        );
}
/*首页轮播图*/
function tab(){
        let swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination ',
                clickable: true,
            },
            loop:true,
            autoplay:true,
            speed:500,
        });
}
tab();
/*固定窗口*/
fixBox();
function fixBox(){
        let $aClass;
        $("#fixed-box li").hover(
            function () {
                  $aClass=$(this).find("a").attr("class");
                  $(this).find("a").removeClass().addClass("a-text").find("span").show()
            },function(){
                $(this).find("a").removeClass().addClass($aClass).find("span").hide();
            }
        );

        $(window).scroll(
            function () {
                if ($(window).scrollTop() >300){
                    $("#fixed-box .onscroll").show();
                } else{
                    $("#fixed-box .onscroll").hide();
                }
             }
        );

        let scollTimer=null;
        $("#fixed-box .onscroll").click(
            function () {
                clearInterval(scollTimer);  //解决多次点击定时函数的bug
                scollTimer= setInterval(function () {
                    $(window).scrollTop($(window).scrollTop()-10);
                    if ($(window).scrollTop()===0){
                        clearInterval(scollTimer)
                    }

                },10)
            }
        );
}
//主题选项卡
contTab();
function contTab(){
        $(".h2-bor span").click(
            function () {
                let $_index=$(this).index();
                let $_parent=$(this).parents(".many-li");
                $_parent.find("span").removeClass("index-spa");
                $(this).addClass("index-spa");
                $_parent.find("div.cont-box-posi").hide().eq($_index).show();
            }
        );
}