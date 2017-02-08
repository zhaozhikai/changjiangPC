$(function(){
    //图片轮播开始
    var recommend_book_banner1 = $(".recommend_book_banner1");
    var recommend_book_bannerlis1 = $(".recommend_book_banner1 ul li");
    var recommend_book_bannerul1 = $(".recommend_book_banner1 ul");
    var $recommend_book_banner_key1 = 0;  /*控制图片的播放张数*/
   
    /* 克隆第一个*/
    $(".recommend_book_banner1 ul").append($(".recommend_book_banner1 ul li:lt(2)").clone(true));
    /*右侧按钮*/
    $(".recommend_book_banner_S-right1").on("click",function(){
       
        $recommend_book_banner_key1++;
        if($recommend_book_banner_key1>recommend_book_bannerlis1.length)
        {
            $recommend_book_banner_key1 = 1;
            recommend_book_bannerul1.css("left",0);
        }
        recommend_book_banner_play1();
       
    })
    /*左侧按钮*/
    $(".recommend_book_banner_S-left1").on("click",function(){
        $recommend_book_banner_key1--;
        if($recommend_book_banner_key1<0)
        {
            $recommend_book_banner_key1 = recommend_book_bannerlis1.length-1;
            recommend_book_bannerul1.css("left",-recommend_book_bannerlis1.length*340);
        }
        recommend_book_banner_play1();
        
    })
    /*播放模块开始*/
    function recommend_book_banner_play1(){
       
        recommend_book_bannerul1.stop().animate({"left":-$recommend_book_banner_key1*340},500);
         
    }
    
  
    //定时器
    timer01 = setInterval(function(){
            $recommend_book_banner_key1++;
            if($recommend_book_banner_key1>recommend_book_bannerlis1.length)
            {
                $recommend_book_banner_key1  = 1;
                recommend_book_bannerul1.css("left",0);
            }
            recommend_book_banner_play1();
            
    },4000);
    
      
    /*鼠标滑过banner定时器开启和关闭*/
    $('.recommend_book_banner1').hover(function(){
        clearInterval(timer01);
       
    },function(){
        
        timer01 = setInterval(function(){
        $recommend_book_banner_key1++;
        if($recommend_book_banner_key1>recommend_book_bannerlis1.length)
        {
            $recommend_book_banner_key1  = 1;
            recommend_book_bannerul1.css("left",0);
        }
        recommend_book_banner_play1();
		},4000);        
    });      
    //图片轮播结束      
})