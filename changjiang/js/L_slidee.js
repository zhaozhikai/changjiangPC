   $(function(){
            //图片轮播开始
            var recommend_book_banner5 = $(".recommend_book_banner5");
            var recommend_book_bannerlis5 = $(".recommend_book_banner5 ul li");
            var recommend_book_bannerul5 = $(".recommend_book_banner5 ul");
            var $recommend_book_banner_key5 = 0;  /*控制图片的播放张数*/
           
           /* 克隆第一个*/
            $(".recommend_book_banner5 ul").append($(".recommend_book_banner5 ul li:lt(2)").clone(true));
            /*右侧按钮*/
            $(".recommend_book_banner_S-right5").on("click",function(){
               
                $recommend_book_banner_key5++;
                if($recommend_book_banner_key5>recommend_book_bannerlis5.length)
                {
                    $recommend_book_banner_key5 = 1;
                    recommend_book_bannerul5.css("left",0);
                }
                recommend_book_banner_play5();
               
            })
            /*左侧按钮*/
            $(".recommend_book_banner_S-left5").on("click",function(){
                $recommend_book_banner_key5--;
                if($recommend_book_banner_key5<0)
                {
                    $recommend_book_banner_key5 = recommend_book_bannerlis5.length-1;
                    recommend_book_bannerul5.css("left",-recommend_book_bannerlis5.length*390);
                }
                recommend_book_banner_play5();
                
            })
            /*播放模块开始*/
            function recommend_book_banner_play5(){
               
                recommend_book_bannerul5.stop().animate({"left":-$recommend_book_banner_key5*390},500);
                 
           }
            
          
            //定时器
        timer05 = setInterval(function(){
                $recommend_book_banner_key5++;
                if($recommend_book_banner_key5>recommend_book_bannerlis5.length)
                {
                    $recommend_book_banner_key5  = 1;
                    recommend_book_bannerul5.css("left",0);
                }
                recommend_book_banner_play5();
                
        },4000);
        
          
            /*鼠标滑过banner定时器开启和关闭*/
            $('.recommend_book_banner5').hover(function(){
                clearInterval(timer05);
               
            },function(){
                
                timer05 = setInterval(function(){
                $recommend_book_banner_key5++;
                if($recommend_book_banner_key5>recommend_book_bannerlis5.length)
                {
                    $recommend_book_banner_key5  = 1;
                    recommend_book_bannerul5.css("left",0);
                }
                recommend_book_banner_play5();
        },4000);        
            });
            
            
        //图片轮播结束      
    })