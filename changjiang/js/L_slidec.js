   $(function(){
            //图片轮播开始
            var recommend_book_banner3 = $(".recommend_book_banner3");
            var recommend_book_bannerlis3 = $(".recommend_book_banner3 ul li");
            var recommend_book_bannerul3 = $(".recommend_book_banner3 ul");
            var $recommend_book_banner_key3 = 0;  /*控制图片的播放张数*/
           
           /* 克隆第一个*/
            $(".recommend_book_banner3 ul").append($(".recommend_book_banner3 ul li:lt(2)").clone(true));
            /*右侧按钮*/
            $(".recommend_book_banner_S-right3").on("click",function(){
               
                $recommend_book_banner_key3++;
                if($recommend_book_banner_key3>recommend_book_bannerlis3.length)
                {
                    $recommend_book_banner_key3 = 1;
                    recommend_book_bannerul3.css("left",0);
                }
                recommend_book_banner_play3();
               
            })
            /*左侧按钮*/
            $(".recommend_book_banner_S-left3").on("click",function(){
                $recommend_book_banner_key3--;
                if($recommend_book_banner_key3<0)
                {
                    $recommend_book_banner_key3 = recommend_book_bannerlis3.length-1;
                    recommend_book_bannerul3.css("left",-recommend_book_bannerlis3.length*340);
                }
                recommend_book_banner_play3();
                
            })
            /*播放模块开始*/
            function recommend_book_banner_play3(){
               
                recommend_book_bannerul3.stop().animate({"left":-$recommend_book_banner_key3*340},500);
                 
           }
            
          
            //定时器
        timer03 = setInterval(function(){
                $recommend_book_banner_key3++;
                if($recommend_book_banner_key3>recommend_book_bannerlis3.length)
                {
                    $recommend_book_banner_key3  = 1;
                    recommend_book_bannerul3.css("left",0);
                }
                recommend_book_banner_play3();
                
        },4000);
        
          
            /*鼠标滑过banner定时器开启和关闭*/
            $('.recommend_book_banner3').hover(function(){
                clearInterval(timer03);
               
            },function(){
                
                timer03 = setInterval(function(){
                $recommend_book_banner_key3++;
                if($recommend_book_banner_key3>recommend_book_bannerlis3.length)
                {
                    $recommend_book_banner_key3  = 1;
                    recommend_book_bannerul3.css("left",0);
                }
                recommend_book_banner_play3();
        },4000);        
            });
            
            
        //图片轮播结束      
    })