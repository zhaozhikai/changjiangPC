$(function(){
    //图片轮播开始
    var recommend_book_banner = $(".recommend_book_banner");
    var recommend_book_bannerlis = $(".recommend_book_banner ul li");
    var recommend_book_bannerul = $(".recommend_book_banner ul");
    var $recommend_book_banner_key = 0;  /*控制图片的播放张数*/
   
    /* 克隆第一个*/
    $(".recommend_book_banner ul").append($(".recommend_book_banner ul li:lt(2)").clone(true));
    /*右侧按钮*/
    $(".recommend_book_banner_S-right").on("click",function(){
       
        $recommend_book_banner_key++;
        if($recommend_book_banner_key>recommend_book_bannerlis.length)
        {
            $recommend_book_banner_key = 1;
            recommend_book_bannerul.css("left",0);
        }
        recommend_book_banner_play();
       
    })
    /*左侧按钮*/
    $(".recommend_book_banner_S-left").on("click",function(){
        $recommend_book_banner_key--;
        if($recommend_book_banner_key<0)
        {
            $recommend_book_banner_key = recommend_book_bannerlis.length-1;
            recommend_book_bannerul.css("left",-recommend_book_bannerlis.length*340);
        }
        recommend_book_banner_play();
        
    })
    /*播放模块开始*/
    function recommend_book_banner_play(){
        recommend_book_bannerul.stop().animate({"left":-$recommend_book_banner_key*340},500);
    }
            
          
    //定时器
    timer00 = setInterval(function(){
            $recommend_book_banner_key++;
            if($recommend_book_banner_key>recommend_book_bannerlis.length)
            {
                $recommend_book_banner_key  = 1;
                recommend_book_bannerul.css("left",0);
            }
            recommend_book_banner_play();
            
    },4000);
        
          
    /*鼠标滑过banner定时器开启和关闭*/
    $('.recommend_book_banner').hover(function(){
        clearInterval(timer00);
       
    },function(){
        
        timer00 = setInterval(function(){
	        $recommend_book_banner_key++;
	        if($recommend_book_banner_key>recommend_book_bannerlis.length)
	        {
	            $recommend_book_banner_key  = 1;
	            recommend_book_bannerul.css("left",0);
	        }
	        recommend_book_banner_play();
		},4000);        
    });
            
            
    //图片轮播结束      
})