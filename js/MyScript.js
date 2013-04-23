
$(document).ready(function () {
    $('#button').hover(
        function(){
        $('#button').popover('show');
    },
        function(){
        $('#button').popover('hide');

    });



    $('#button').click(function(){
        $('#button').popover('hide');
        $('#button').hover(
            function(){
                $('#button').popover('hide');
            },
            function(){
                $('#button').popover('hide');

            });

        $('#center').css({ 'width': '400px', 'height': '255' ,'borderWidth' : '3px'});

        var block = $('<div class="less outL"></div>');
        var lessons = ["Первая", "Вторая", "Третья", "Четвертая", "Пятая", "Шестая"];
        var progressStriped = $('<div class="bar" style="width: 0%;"></div>');

        function createBlockLessons(s) {
            var i = s * 10;
            $('.active').append('<div class="bar" style="width: '+i+'%;"></div>');
            $('.lessons').append(block);

            $('.less').attr({"id" : "last"}).animate({marginLeft : '50px',width : '280px'},1000);
            $('#last').clone().attr({"id" : "now"}).appendTo('.lessons');
            $('#now').css({marginLeft : '50px',width : '280px'}).animate({marginLeft : '0px',width : '380px'},1000);
            $('#now').clone().attr({"id" : "next"}).appendTo('.lessons');
            $('#next').css({marginLeft : '0px',width : '380px'}).animate({marginLeft : '50px',width : '280px'},1000);

        };

        function move(l,s){
            $('#last').attr('id', 'dead').slideUp(1000);
            $('#now').attr('id', 'last').animate({marginLeft : "50px", width : "280px"},2000);
            $('#next').attr('id', 'now').animate({marginLeft : "0px", width : "380px"},2000);
            $('#now').clone().attr('id','next').text(lessons[l[2]]).css({display : 'none', width: '380', marginLeft: '0px'}).appendTo('.lessons')
                .fadeIn(500)
                .animate({display : 'block', marginLeft: '50px', width : '280px'},1500);
            $('.bar').remove();
            $('.active').append(progressStriped);
            bar(s);

        }
        function secondsForBar(s){
            if([0,10,20,30,40,50].indexOf(s)>=0){
                return 0;
            }
            else if([1,11,21,31,41,51].indexOf(s)>=0){
                return 1;
            }
            else if([2,12,22,32,42,52].indexOf(s)>=0){
                return 2;
            }
            else if([3,13,23,33,43,53].indexOf(s)>=0){
                return 3;
            }
            else if([4,14,24,34,44,54].indexOf(s)>=0){
                return 4;
            }
            else if([5,15,25,35,45,55].indexOf(s)>=0){
                return 5;
            }
            else if([6,16,26,36,46,56].indexOf(s)>=0){
                return 6;
            }
            else if([7,17,27,37,47,57].indexOf(s)>=0){
                return 7;
            }
            else if([8,18,28,38,48,58].indexOf(s)>=0){
                return 8;
            }
            else{
                return 9;
            }
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

        function bar(i){

            $('.bar').css({width : i+'%'});



        }

        function addL(l,r,s){
          if($('.less').text() == ""){
              createBlockLessons(s);
              $('#last').text(lessons[l[0]]);
              $('#now').text(lessons[l[1]]);
              $('#next').text(lessons[l[2]]);
          }
          else{
              if($('#last').text() != lessons[l[0]]){
                  move(l,r);
              }
             else{
                  bar(r);
              }

          }
        }

        setInterval(function setTime (){
            var forTime = new Date();
            var hour = forTime.getHours();
            var minutes = forTime.getMinutes();
            var s = forTime.getSeconds();
            var ms = forTime.getMilliseconds();

            var sec = secondsForBar(s);
            var r = (sec*1000 + ms)/100;
            var result = Math.round(r);
            var l = less(s);
            addL(l,result,sec);

            if(s < 10){
                s = "0" + s;
            }
            if(minutes < 10){
                minutes = "0" + minutes;
            }
            if(hour < 10){
                hour = "0" + hour;
            }
            $('.time').text(hour + ":" + minutes + ":" + s);
        }, 100);


       setInterval(function (){
           $('#dead').remove()
       },5000);

    });
});