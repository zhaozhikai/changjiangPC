   $(function(){
            //图片轮播开始
            var recommend_book_banner4 = $(".recommend_book_banner4");
            var recommend_book_bannerlis4 = $(".recommend_book_banner4 ul li");
            var recommend_book_bannerul4 = $(".recommend_book_banner4 ul");
            var $recommend_book_banner_key4 = 0;  /*控制图片的播放张数*/
           
           /* 克隆第一个*/
            $(".recommend_book_banner4 ul").append($(".recommend_book_banner4 ul li:lt(2)").clone(true));
            /*右侧按钮*/
            $(".recommend_book_banner_S-right4").on("click",function(){
               
                $recommend_book_banner_key4++;
                if($recommend_book_banner_key4>recommend_book_bannerlis4.length)
                {
                    $recommend_book_banner_key4 = 1;
                    recommend_book_bannerul4.css("left",0);
                }
                recommend_book_banner_play4();
               
            })
            /*左侧按钮*/
            $(".recommend_book_banner_S-left4").on("click",function(){
                $recommend_book_banner_key4--;
                if($recommend_book_banner_key4<0)
                {
                    $recommend_book_banner_key4 = recommend_book_bannerlis4.length-1;
                    recommend_book_bannerul4.css("left",-recommend_book_bannerlis4.length*340);
                }
                recommend_book_banner_play4();
                
            })
            /*播放模块开始*/
            function recommend_book_banner_play4(){
               
                recommend_book_bannerul4.stop().animate({"left":-$recommend_book_banner_key4*340},500);
                 
           }
            
          
            //定时器
        timer04 = setInterval(function(){
                $recommend_book_banner_key4++;
                if($recommend_book_banner_key4>recommend_book_bannerlis4.length)
                {
                    $recommend_book_banner_key4  = 1;
                    recommend_book_bannerul4.css("left",0);
                }
                recommend_book_banner_play4();
                
        },4000);
        
          
            /*鼠标滑过banner定时器开启和关闭*/
            $('.recommend_book_banner4').hover(function(){
                clearInterval(timer04);
               
            },function(){
                
                timer04 = setInterval(function(){
                $recommend_book_banner_key4++;
                if($recommend_book_banner_key4>recommend_book_bannerlis4.length)
                {
                    $recommend_book_banner_key4  = 1;
                    recommend_book_bannerul4.css("left",0);
                }
                recommend_book_banner_play4();
        },4000);        
            });
            
            
        //图片轮播结束      
    })