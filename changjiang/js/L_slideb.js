   $(function(){
            //图片轮播开始
            var recommend_book_banner2 = $(".recommend_book_banner2");
            var recommend_book_bannerlis2 = $(".recommend_book_banner2 ul li");
            var recommend_book_bannerul2 = $(".recommend_book_banner2 ul");
            var $recommend_book_banner_key2 = 0;  /*控制图片的播放张数*/
           
           /* 克隆第一个*/
            $(".recommend_book_banner2 ul").append($(".recommend_book_banner2 ul li:lt(2)").clone(true));
            /*右侧按钮*/
            $(".recommend_book_banner_S-right2").on("click",function(){
               
                $recommend_book_banner_key2++;
                if($recommend_book_banner_key2>recommend_book_bannerlis2.length)
                {
                    $recommend_book_banner_key2 = 1;
                    recommend_book_bannerul2.css("left",0);
                }
                recommend_book_banner_play2();
               
            })
            /*左侧按钮*/
            $(".recommend_book_banner_S-left2").on("click",function(){
                $recommend_book_banner_key2--;
                if($recommend_book_banner_key2<0)
                {
                    $recommend_book_banner_key2 = recommend_book_bannerlis2.length-1;
                    recommend_book_bannerul2.css("left",-recommend_book_bannerlis2.length*340);
                }
                recommend_book_banner_play2();
                
            })
            /*播放模块开始*/
            function recommend_book_banner_play2(){
               
                recommend_book_bannerul2.stop().animate({"left":-$recommend_book_banner_key2*340},500);
                 
           }
            
          
            //定时器
        timer02 = setInterval(function(){
                $recommend_book_banner_key2++;
                if($recommend_book_banner_key2>recommend_book_bannerlis2.length)
                {
                    $recommend_book_banner_key2  = 1;
                    recommend_book_bannerul2.css("left",0);
                }
                recommend_book_banner_play2();
                
        },4000);
        
          
            /*鼠标滑过banner定时器开启和关闭*/
            $('.recommend_book_banner2').hover(function(){
                clearInterval(timer02);
               
            },function(){
                
                timer02 = setInterval(function(){
                $recommend_book_banner_key2++;
                if($recommend_book_banner_key2>recommend_book_bannerlis2.length)
                {
                    $recommend_book_banner_key2  = 1;
                    recommend_book_bannerul2.css("left",0);
                }
                recommend_book_banner_play2();
        },4000);        
            });
            
            
        //图片轮播结束      
    })