$(function(){
    //初始载入
   var ulhtml="";

      $.ajax({
          url: "http://www.bilibili.com/index/catalogy/1-1day.json",
          dataType: "json"
           
      }).done(function (data) {
          $(data.hot_original.list).each(function(index,ele) 
          {
            if (index < 10) {
            var link = '"http://www.bilibili.com/video/av'+this.aid+'"';
            var lihtml ='<li><a target="_blank" href='+link+' title=" '+this.title+'" class="orlink"></br><span class="intitle">'+this.title+'</span><div class="discrb">'+this.description+'</div><span class="inword">播放：'+this.play+'  UP主：'+this.author+'</span></a></li>';
            ulhtml= ulhtml + lihtml; 
          }
        })

          var linkmore = '<div><a href="http://www.bilibili.com/ranking#!/all/1/1/1/" target="_blank">更多</a></div>' 
          ulhtml = ulhtml + linkmore;
          $("#animation-list").html(ulhtml);      
      });


    //动画按钮
    $("#animation-btn").bind("click",function(){
      $(".head button").css({
        "background-color":"white",
        "color":"#F25D8E"
      });
      $(this).css({
        "background-color":"#F25D8E",
        "color":"white",
        "border-style":"none"
      });

      var ulhtml="";

      $.ajax({
          url: "http://www.bilibili.com/index/catalogy/1-1day.json",
          dataType: "json"
           
      }).done(function (data) {
          $(data.hot_original.list).each(function(index,ele) 
          {
            if (index < 10) {
            var link = '"http://www.bilibili.com/video/av'+this.aid+'"';
            var lihtml ='<li><a target="_blank" href='+link+' title=" '+this.title+'" class="orlink"></br><span class="intitle">'+this.title+'</span><div class="discrb">'+this.description+'</div><span class="inword">播放：'+this.play+'  UP主：'+this.author+'</span></a></li>';
            ulhtml= ulhtml + lihtml;
            
          }
        })
          
          var linkmore = '<div><a href="http://www.bilibili.com/ranking#!/all/1/1/1/" target="_blank">更多</a></div>' 
          ulhtml = ulhtml + linkmore;
            $(".orderlist ul").hide();
            $("#animation-list").html(ulhtml).show();      
    });
  });

   //番剧列表
    $("#series-btn").bind("click",function(){
      $(".head button").css({
        "background-color":"white",
        "color":"#F25D8E",
        /*"border-buttom-width":"2px",
        "border-buttom-style":"solid",
        "border-buttom-color":"#F25D8E"*/
      });
      $(this).css({
        "background-color":"#F25D8E",
        "color":"white",
        "border-style":"none"
      });

      var ulhtml="";

      $.ajax({
          url: "http://www.bilibili.com/index/catalogy/13-1day.json",
          dataType: "json"
           
      }).done(function (data) {
          $(data.hot_original.list).each(function(index,ele) 
          {
            if (index < 10) {
            var link = '"http://www.bilibili.com/video/av'+this.aid+'"';
            var lihtml ='<li><a target="_blank" href='+link+' title=" '+this.title+'" class="orlink"></br><span class="intitle">'+this.title+'</span><div class="discrb">'+this.description+'</div><span class="inword">播放：'+this.play+'  UP主：'+this.author+'</span></a></li>';
            ulhtml= ulhtml + lihtml;
            
          }
        })
          var linkmore = '<div><a href="http://www.bilibili.com/ranking#!/all/13/1/1/" target="_blank">更多</a></div>' 
          ulhtml = ulhtml + linkmore;
          $(".orderlist ul").hide();
          $("#series-list").html(ulhtml).show();      
    });
  });
  //音乐
  $("#music-btn").bind("click",function(){
      $(".head button").css({
        "background-color":"white",
        "color":"#F25D8E"
      });
      $(this).css({
        "background-color":"#F25D8E",
        "color":"white",
        "border-style":"none"
      });

      var ulhtml="";

      $.ajax({
          url: "http://www.bilibili.com/index/catalogy/3-1day.json",
          dataType: "json"
           
      }).done(function (data) {
          $(data.hot_original.list).each(function(index,ele) 
          {
            if (index < 10) {
            var link = '"http://www.bilibili.com/video/av'+this.aid+'"';
            var lihtml ='<li><a target="_blank" href='+link+' title=" '+this.title+'" class="orlink"></br><span class="intitle">'+this.title+'</span><div class="discrb">'+this.description+'</div><span class="inword">播放：'+this.play+'  UP主：'+this.author+'</span></a></li>';
            ulhtml= ulhtml + lihtml;
            
          }
        })
          var linkmore = '<div><a href="http://www.bilibili.com/ranking#!/all/3/1/1/" target="_blank">更多</a></div>' 
          ulhtml = ulhtml + linkmore;
          $(".orderlist ul").hide();
          $("#music-list").html(ulhtml).show();      
    });
  });
  //舞蹈
  $("#dance-btn").bind("click",function(){
      $(".head button").css({
        "background-color":"white",
        "color":"#F25D8E"
      });
      $(this).css({
        "background-color":"#F25D8E",
        "color":"white",
        "border-style":"none"
      });

      var ulhtml="";

      $.ajax({
          url: "http://www.bilibili.com/index/catalogy/129-1day.json",
          dataType: "json"
           
      }).done(function (data) {
          $(data.hot_original.list).each(function(index,ele) 
          {
            if (index < 10) {
            var link = '"http://www.bilibili.com/video/av'+this.aid+'"';
            var lihtml ='<li><a target="_blank" href='+link+' title=" '+this.title+'" class="orlink"></br><span class="intitle">'+this.title+'</span><div class="discrb">'+this.description+'</div><span class="inword">播放：'+this.play+'  UP主：'+this.author+'</span></a></li>';
            ulhtml= ulhtml + lihtml;
            
          }
        })
          var linkmore = '<div><a href="http://www.bilibili.com/ranking#!/all/129/1/1/" target="_blank">更多</a></div>' 
          ulhtml = ulhtml + linkmore;
          $(".orderlist ul").hide();
          $("#dance-list").html(ulhtml).show();      
    });
  });
  //游戏
  $("#game-btn").bind("click",function(){
      $(".head button").css({
        "background-color":"white",
        "color":"#F25D8E"
      });
      $(this).css({
        "background-color":"#F25D8E",
        "color":"white",
        "border-style":"none"
      });

      var ulhtml="";

      $.ajax({
          url: "http://www.bilibili.com/index/catalogy/4-1day.json",
          dataType: "json"
           
      }).done(function (data) {
          $(data.hot_original.list).each(function(index,ele) 
          {
            if (index < 10) {
            var link = '"http://www.bilibili.com/video/av'+this.aid+'"';
            var lihtml ='<li><a target="_blank" href='+link+' title=" '+this.title+'" class="orlink"></br><span class="intitle">'+this.title+'</span><div class="discrb">'+this.description+'</div><span class="inword">播放：'+this.play+'  UP主：'+this.author+'</span></a></li>';
            ulhtml= ulhtml + lihtml;
            
          }
        })
          var linkmore = '<div><a href="http://www.bilibili.com/ranking#!/all/4/1/1/" target="_blank">更多</a></div>' 
          ulhtml = ulhtml + linkmore;
          $(".orderlist ul").hide();
          $("#game-list").html(ulhtml).show();      
    });
  });
  //科技
    $("#tech-btn").bind("click",function(){
      $(".head button").css({
        "background-color":"white",
        "color":"#F25D8E"
      });
      $(this).css({
        "background-color":"#F25D8E",
        "color":"white",
        "border-style":"none"
      });

      var ulhtml="";

      $.ajax({
          url: "http://www.bilibili.com/index/catalogy/36-1day.json",
          dataType: "json"
           
      }).done(function (data) {
          $(data.hot_original.list).each(function(index,ele) 
          {
            if (index < 10) {
            var link = '"http://www.bilibili.com/video/av'+this.aid+'"';
            var lihtml ='<li><a target="_blank" href='+link+' title=" '+this.title+'" class="orlink"></br><span class="intitle">'+this.title+'</span><div class="discrb">'+this.description+'</div><span class="inword">播放：'+this.play+'  UP主：'+this.author+'</span></a></li>';
            ulhtml= ulhtml + lihtml;
            
          }
        })
          var linkmore = '<div><a href="http://www.bilibili.com/ranking#!/all/36/1/1/" target="_blank">更多</a></div>' 
          ulhtml = ulhtml + linkmore;
          $(".orderlist ul").hide();
          $("#tech-list").html(ulhtml).show();      
    });
  });
  //娱乐
    $("#ent-btn").bind("click",function(){
      $(".head button").css({
        "background-color":"white",
        "color":"#F25D8E"
      });
      $(this).css({
        "background-color":"#F25D8E",
        "color":"white",
        "border-style":"none"
      });

      var ulhtml="";

      $.ajax({
          url: "http://www.bilibili.com/index/catalogy/5-1day.json",
          dataType: "json"
           
      }).done(function (data) {
          $(data.hot_original.list).each(function(index,ele) 
          {
            if (index < 10) {
            var link = '"http://www.bilibili.com/video/av'+this.aid+'"';
            var lihtml ='<li><a target="_blank" href='+link+' title=" '+this.title+'" class="orlink"></br><span class="intitle">'+this.title+'</span><div class="discrb">'+this.description+'</div><span class="inword">播放：'+this.play+'  UP主：'+this.author+'</span></a></li>';
            ulhtml= ulhtml + lihtml;
            
          }
        })
          var linkmore = '<div><a href="http://www.bilibili.com/ranking#!/all/5/1/1/" target="_blank">更多</a></div>' 
          ulhtml = ulhtml + linkmore;
          $(".orderlist ul").hide();
          $("#ent-list").html(ulhtml).show();      
    });
  });
  //时尚
    $("#fashion-btn").bind("click",function(){
      $(".head button").css({
        "background-color":"white",
        "color":"#F25D8E"
      });
      $(this).css({
        "background-color":"#F25D8E",
        "color":"white",
        "border-style":"none"
      });

      var ulhtml="";

      $.ajax({
          url: "http://www.bilibili.com/index/catalogy/155-1day.json",
          dataType: "json"
           
      }).done(function (data) {
          $(data.hot_original.list).each(function(index,ele) 
          {
            if (index < 10) {
            var link = '"http://www.bilibili.com/video/av'+this.aid+'"';
            var lihtml ='<li><a target="_blank" href='+link+' title=" '+this.title+'" class="orlink"></br><span class="intitle">'+this.title+'</span><div class="discrb">'+this.description+'</div><span class="inword">播放：'+this.play+'  UP主：'+this.author+'</span></a></li>';
            ulhtml= ulhtml + lihtml;
            
          }
        })
          var linkmore = '<div><a href="http://www.bilibili.com/ranking#!/all/155/1/1/" target="_blank">更多</a></div>' 
          ulhtml = ulhtml + linkmore;
          $(".orderlist ul").hide();
          $("#fashion-list").html(ulhtml).show();      
    });
  });
})
//音乐http://www.bilibili.com/index/catalogy/3-1day.json
//舞蹈http://www.bilibili.com/index/catalogy/129-1day.json
//游戏http://www.bilibili.com/index/catalogy/4-1day.json
//科技http://www.bilibili.com/index/catalogy/36-1day.json
//娱乐http://www.bilibili.com/index/catalogy/5-1day.json
//电影http://www.bilibili.com/index/catalogy/23-1day.json
//电视剧http://www.bilibili.com/index/catalogy/11-1day.json
//时尚http://www.bilibili.com/index/catalogy/155-1day.json