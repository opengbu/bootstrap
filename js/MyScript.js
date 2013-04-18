
$(document).ready(function(){
    var lessons = ["Первая", "Вторая", "Третья", "Четвертая", "Пятая", "Шестая"];

    var past=$('<div id="past" class="past outL"></div>');
    var now=$('<div id="now" class="now outL"></div>');
    var next=$('<div id="next" class="next outL"></div>');
    var content = $('<div class="lessons"></div>');
    var block = $('');
    var row = $('#row').clone();


    content.append(past);
    content.append(now);
    content.append(next);
    $('.center').append(content);
    $('.past').parent('#span').addClass('span3 offset1');
    $('.now').parent('#span').addClass('span5');
    $('.next').parent('#span').addClass('span3 offset1');

    /*$('#past').parent('#span').parent('#row').animate(
        {
            opacity: "hide",
            height: "hide"
        },
        1000); */
    /*$("#now").click(
            function(){
            $(this).$('.past').animate(
                {
                    opacity: "hide",
                    height: "hide"
                },
                1000);

            }
        );*/

     function pastF (){
         $('.past').parent('#span').parent('#row').animate(
             {
                 opacity: "hide",
                 height: "hide"
             },
             1000);


     };

    function less (s){
        var less;
        if(s <= 9){
           less = 0;
           return less;

        }
        else if(s >= 10 && s <= 19){

            less = 1;
            return less;
        }
        else if(s >= 20 && s <= 29){

            less = 2;
            return less;
        }
        else if(s >= 30 && s <= 39){
            less = 3;
            return less;
        }
        else if(s >= 40 && s <= 49){

            less = 4;
            return less;
        }
        else{

            less = 5;
            return less;
        }

    }


    setInterval(function setTime (){
        var forTime = new Date();
         hour = forTime.getHours();
         minutes = forTime.getMinutes();
         seconds = forTime.getSeconds();

        var less = less(seconds);

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
    }, 500);


});