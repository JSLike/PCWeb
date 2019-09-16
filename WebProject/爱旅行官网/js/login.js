$(function () {
    //点击动画
    let bl=true;
    $(".login-box .i-code").click(function () {
            if (bl){
                $("div.section-code").show();
                $(this).addClass("i-change");
                $(".trans-box .pho").addClass("left");
                $(".trans-box .i").addClass("right")
             }else{
                $(this).removeClass("i-change");
                $("div.section-code").hide();
                $(".trans-box .pho").removeClass("left");
                $(".trans-box .i").removeClass("right")
           }
     bl=!bl;
    return false;

    })
    //点击切换选项卡
    $("#login-nomal").click(function () {
        $(".verify .static").css("display","flex");
        $(".verify .move").hide();
        $(".pass-box").css("display","flex")
    });
    $("#login-phone").click(function () {
        $(".verify .move").css("display","flex");
        $(".verify .static").hide();
        $(".pass-box").css("display","none")
    });


    //表单验证
    fnVerify();
    function fnVerify(){
        let $p=$("#login-form .danger").find("p");
let vebl1;
let vebl2;



        $("#login-form").submit(function () {
            $(".ve-v").map(function (index, item) {
                console.log(item.value)
                if (item.value===""){
                    vebl1=item.value
                } else {
                    vebl2=item.value
                }
            });

            if($("#tex").val()===""){
                $("#login-form .danger").css("display","flex");
                $p.html("请输入邮箱或手机号");
                return false;
            }
            if ($(".pass-box").css("display")!=="none") {
                if($("#pas").val()===""){
                    $("#login-form .danger").css("display","flex");
                    $p.html("请输入密码");
                    return false;
                }
            }
           if(!vebl1===true&&!vebl2===true){
                $("#login-form .danger").css("display","flex");
                $p.html("请输入验证码");
                return false;
            }
        });
    }


});