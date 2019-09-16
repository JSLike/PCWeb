$(function(){
    var $cont=$('.cont_2_div_ul');
    var $li=$cont.children();
    var $contA=$('.cont_2_div_ull');
    var $lis=$contA.children();

    $li.mouseover(function(){
        var index=$(this).index();
        $li.eq(index).find('a').css('color','red');
        $lis.removeClass('active').eq(index).show()
    }), $li.mouseout(function(){
        var index=$(this).index();
        $li.eq(index).find('a').css('color','');
        $lis.eq(index).hide();
    })

})



$(function(){
    var $oList=$('.list');
    var $oLi=$oList.children();
    var $oLists=$('.lists');
    var $oLis=$oLists.children();
    $oLis.click(function(){
        var index=$(this).index();
        console.log(index)
        $oLis.removeClass('fidd');
        $oLis.eq(index).addClass('fidd');
        $oLi.removeClass('fid');
        $oLi.eq(index).show();
    })
})

