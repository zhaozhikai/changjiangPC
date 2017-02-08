   $(function(){
            //图片轮播开始
            var recommend_book_banner6 = $(".recommend_book_banner6");
            var recommend_book_bannerlis6 = $(".recommend_book_banner6 ul li");
            var recommend_book_bannerul6 = $(".recommend_book_banner6 ul");
            var $recommend_book_banner_key6 = 0;  /*控制图片的播放张数*/
           
           /* 克隆第一个*/
            $(".recommend_book_banner6 ul").append($(".recommend_book_banner6 ul li:lt(2)").clone(true));
            /*右侧按钮*/
            $(".recommend_book_banner_S-right6").on("click",function(){
               
                $recommend_book_banner_key6++;
                if($recommend_book_banner_key6>recommend_book_bannerlis6.length)
                {
                    $recommend_book_banner_key6 = 1;
                    recommend_book_bannerul6.css("left",0);
                }
                recommend_book_banner_play6();
               
            })
            /*左侧按钮*/
            $(".recommend_book_banner_S-left6").on("click",function(){
                $recommend_book_banner_key6--;
                if($recommend_book_banner_key6<0)
                {
                    $recommend_book_banner_key6 = recommend_book_bannerlis6.length-1;
                    recommend_book_bannerul6.css("left",-recommend_book_bannerlis6.length*340);
                }
                recommend_book_banner_play6();
                
            })
            /*播放模块开始*/
            function recommend_book_banner_play6(){
               
                recommend_book_bannerul6.stop().animate({"left":-$recommend_book_banner_key6*340},500);
                 
           }
            
          
            //定时器
        timer06 = setInterval(function(){
                $recommend_book_banner_key6++;
                if($recommend_book_banner_key6>recommend_book_bannerlis6.length)
                {
                    $recommend_book_banner_key6  = 1;
                    recommend_book_bannerul6.css("left",0);
                }
                recommend_book_banner_play6();
                
        },4000);
        
          
            /*鼠标滑过banner定时器开启和关闭*/
            $('.recommend_book_banner6').hover(function(){
                clearInterval(timer06);
               
            },function(){
                
                timer06 = setInterval(function(){
                $recommend_book_banner_key6++;
                if($recommend_book_banner_key6>recommend_book_bannerlis6.length)
                {
                    $recommend_book_banner_key6  = 1;
                    recommend_book_bannerul6.css("left",0);
                }
                recommend_book_banner_play6();
        },4000);        
            });
            
            
        //图片轮播结束      
    })