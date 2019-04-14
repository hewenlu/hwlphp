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
    console.log(title);




})


