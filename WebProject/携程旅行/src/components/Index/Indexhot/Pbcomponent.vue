<template>
    <div>
      <ul class="pb-cont">
        <li></li>
        <li></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Pbcomponent",
        props:['jingxuandata'],
      data(){
        return{
          alldata:'',
        }
      },
        methods:{
         getMinIndex(li) {
          let firstHeight = li.eq(0).outerHeight();    //获取第一个li的高度
          let smIndex = 0;                              //设置下标，初始化0
           // console.log(li)

          li.map(function (index, ele) {            //循环每一个li
              // console.log("aaaaaa--->")
              if (firstHeight > $(ele).outerHeight()) {   //将储存的变量与每一个li的高度比较（转化jq对象）
                firstHeight = $(ele).outerHeight();        //将较短的li的高度数据储存下来
                smIndex = index;                          //并且获取它的下标
              }
        });
        return smIndex;
    }
    },
      mounted() {
        console.log("aaaa")
        let $this=this;
        let jdda='';
        this.$axios.get('../../../static/JSON/Indexhotnav/data.json')
          .then(function (response) {
            $this.alldata=response.data;
          })
          .catch(function (error) {
            console.log("error--->",error)
          });
              //获取最短的li下标
              // let firstHeight;
              // let smIndex;
              let vuethis = this;
              let pageNum = 0;
              let $li = $(".pb-cont").find("li");
              $(window).scroll(function () {      //窗口滚动条触发
                let oHeight = $(window).height();//可视区高度；
                let oViewHeight = oHeight + $(this).scrollTop();//获取可视区高度+滚动条高度之和
                let smIndex = vuethis.getMinIndex($li);    // 第一次调用，获取初始最小li下标
                //获取最小下标的li高度+距离文档顶部的距离
                let rowHeight = $li.eq(smIndex).outerHeight() + $li.eq(smIndex).position().top;

                if (oViewHeight >= rowHeight) { //判定瀑布的触发条件,滚动到一定距离的时候调用ajax
                  console.log("vuethis.alldata-->>",typeof vuethis.alldata)
                  let res = vuethis.alldata;
                  let dLength = res.imgdata.length; //数组长度
                  if (pageNum < dLength) {      //当Num值小于数组的长度时，才触发
                    let data = res.imgdata[pageNum]; //获取数据数组下标
                    //通过循环，将获取的src数据放入图片中，并将盒子放入最短的li中

                    for (let i = 0; i < data.length; i++) {
                      //创建图片对象
                      let $oImg = new Image();

                      let $div = $("<div></div>");
                      let $p = $("<p>" + data[i].title + "</p>");
                      $oImg.src = data[i].src;

                      $oImg.onload = function () {

                        let $img = $($oImg);
                        $img.css("display", "none");
                        //清除rest。css的默认设置样式
                        $img.fadeIn(2000);
                        //图片预加载完成时，更新下标值，并添加内容
                        smIndex = vuethis.getMinIndex($li); //每次循环更新最短的下标值
                        $div.append($img);
                        $div.append($p);
                        $li.eq(smIndex).append($div);


                      };
                    }
                    pageNum++;
                  }

                }
              })
            }




    }
</script>

<style scoped lang="less">

</style>
