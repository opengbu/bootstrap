
$(document).ready(function () {

    $('#button').click(function(){

        $('#center').animate({ 'width': '400px', 'height': '220' ,'borderWidth' : '3px'},500);
        var block = $('<div class="less outL"></div>');
        var lessons = ["Первая", "Вторая", "Третья", "Четвертая", "Пятая", "Шестая"];

        function createBlockLessons() {

            $('.lessons').append(block);
            $('.less').attr({"id" : "last"}).animate({marginLeft : '50px',width : '280px'},1000);
            $('#last').clone().attr({"id" : "now"}).appendTo('.lessons');
            $('#now').css({marginLeft : '50px',width : '280px'}).animate({marginLeft : '0px',width : '380px'},1000);
            $('#now').clone().attr({"id" : "next"}).appendTo('.lessons');
            $('#next').css({marginLeft : '0px',width : '380px'}).animate({marginLeft : '50px',width : '280px'},1000);

        };

        function move(l){
            $('#last').attr('id', 'dead').slideUp(1000);
            $('#now').attr('id', 'last').animate({marginLeft : "50px", width : "280px"},2000);
            $('#next').attr('id', 'now').animate({marginLeft : "0px", width : "380px"},2000);
            $('#now').clone().attr('id','next').text(lessons[l[2]]).css({display : 'none', width: '380', marginLeft: '0px'}).appendTo('.lessons')
                .fadeIn(500)
                .animate({display : 'block', marginLeft: '50px', width : '280px'},1500);

        }

        function less (s){
            var less = [];
            if(s <= 9){
               less = [5,0,1];
               return less;

            }
            else if(s >= 10 && s <= 19){

                less = [0,1,2];
                return less;
            }
            else if(s >= 20 && s <= 29){

                less = [1,2,3];
                return less;
            }
            else if(s >= 30 && s <= 39){
                less = [2,3,4];
                return less;
            }
            else if(s >= 40 && s <= 49){

                less = [3,4,5];
                return less;
            }
            else{

                less = [4,5,0];
                return less;
            }

        }

        function addL(l){
          if($('.less').text() == ""){
              createBlockLessons();
              $('#last').text(lessons[l[0]]);
              $('#now').text(lessons[l[1]]);
              $('#next').text(lessons[l[2]]);
          }
          else{
              if($('#last').text() != lessons[l[0]]){
                  move(l);

              }
          }
        }

        setInterval(function setTime (){
            var forTime = new Date();
            var hour = forTime.getHours();
            var minutes = forTime.getMinutes();
            var seconds = forTime.getSeconds();

            var l = less(seconds);
            addL(l);
            /*debug.log(l);*/


            if(seconds < 10){
                seconds = "0" + seconds;
            }
            if(minutes < 10){
                minutes = "0" + minutes;
            }
            if(hour < 10){
                hour = "0" + hour;
            }
            $('.time').text(hour + ":" + minutes + ":" + seconds);
        }, 100);


       setInterval(function (){
           $('#dead').remove()
       },5000);

    });
});