$(function(){
      //输入文本域高度切换
    $('#big').click(function(){
      if($(this).find('i').hasClass('fa-square-o')){
        $(this).find('i').attr('class','fa fa-check-square').css('color','#F85959');
        $(this).parents('.msg_tab').find('textarea').stop().animate({height:'300px'},500);
      }else{
        $(this).find('i').attr('class','fa fa-square-o').css('color','#888');
        $(this).parents('.msg_tab').find('textarea').stop().animate({height:'100px'},500);
      }
    })

    //tab切换
    var tab = document.getElementsByClassName('msg_tab');
    var title = document.getElementsByClassName('msg_title')[0].getElementsByTagName('li');
    function showTab(i){
      for(var j=0;j<tab.length;j++){
        tab[j].style.display='none';
        title[j].className='';
      }
      tab[i].style.display='block';
      title[i].className='check';
    }
    for(var i=0;i<title.length;i++){
      title[i].index = i;
      
      title[i].onclick=function(){
        showTab(this.index);
        console.log(i);
      }

    }

    //输入字数判断1
    var num1 = document.getElementById('num1');
    var area1 = document.getElementById('area1');
    var btn = document.getElementById('btn');
    area1.onkeyup=function(){
      var m1 = area1.value.replace(/\s/g,"").length;
      if(m1>0 && m1<=2000){
        area1.style.color='#333';
        area1.style.backgroundColor='#F4F5F6';
        btn.classList.remove("disabled");
        
      }else{
        area1.style.color='#ED4040';
        area1.style.backgroundColor='#FFF7F8';
        btn.classList.add("disabled");
      }
      num1.innerHTML= m1;
    }

    //输入字数判断2
    var num2 = document.getElementById('num2');
    var area2 = document.getElementById('area2');
    var btn2 = document.getElementById('btn2');
    area2.onkeyup=function(){
      var m2 = area2.value.replace(/\s/g,"").length;
      if(m2>0 && m2<=30){
        area2.style.color='#333';
        area2.style.backgroundColor='#F4F5F6';
        btn2.classList.remove("disabled");
      }else{
        area2.style.color='#ED4040';
        area2.style.backgroundColor='#FFF7F8';
        btn2.classList.add("disabled");
      }
      num2.innerHTML= m2;
    }

    //输入字数判断3
    var num3 = document.getElementById('num3');
    var area3 = document.getElementById('area3');
    var btn3 = document.getElementById('btn3');
    area3.onkeyup=function(){
      var m3 = area3.value.replace(/\s/g,"").length;
      if(m3>0 && m3<=40){
        area3.style.color='#333';
        area3.style.backgroundColor='#F4F5F6';
        btn3.classList.remove("disabled");
      }else{
        area3.style.color='#ED4040';
        area3.style.backgroundColor='#FFF7F8';
        btn3.classList.add("disabled");
      }
      num3.innerHTML= m3;
    }

    //表情包
    for(var i=1;i<60;i++){
      $('.emoji').append("<img src='static/images/emoji/f"+i+".png' width='20'/>");
    }
    $('.Emoji_tit').click(function(){
      $('.Emoji').toggle();
    })
    $('.close').click(function(){
      $('.Emoji').hide();
    })

    //删除new_list列表内容
    $(document).on('click','.remove_box',function(){
        $(this).parents('.new_list').remove();
    })

    //点击发布添加new_list内容
    $(document).on('click','.btn',function(){
        var new_tit = $(this).parents('.msg_tab').find('textarea').val();
        $('.msg').after("<div class='new_list bb clearfix'><div class='fl' style='width:100%;'><a href='' class='strong'>"+new_tit+"</a><p class='mt_10'><span class='blue'>时政</span><span><img src='static/images/a.jpg' width='18'>  央视新闻网</span><span>.人评论</span><span>.时间</span><span class='fr remove_box'><span class='remove_txt'>不感兴趣</span><span class='fa fa-close remove'></span></span></p></div></div>");
        $(this).parents('.msg_tab').find('textarea').val("");//清空输入文本域
        $(this).parents('.msg_tab').find('#num1,#num2,#num3').text("0");//清空输入字数
        $(this).addClass("disabled"); //按钮禁用
    })

    //左边菜单悬停
    $(window).scroll(function(){
        if($(this).scrollTop()>60){
            $('.main_left').css('top','10px');
        }else{
            $('.main_left').css('top','60px');
        }
    })

    //不感兴趣指向时候效果
    $(document).on('mouseover','.remove_box',function(){
        $(this).css('backgroundColor','#ed4040');
        $(this).stop().animate({
        'width': '75px',
        },500);
        $(this).find('.remove_txt').css('display','block');
    })
    //不感兴趣离开时候效果
    $(document).on('mouseleave','.remove_box',function(){
        $(this).css('backgroundColor','#fff');
        $(this).stop().animate({
          'width': '16px'
        },50);
        $(this).find('.remove_txt').css('display','none');
    })
})


