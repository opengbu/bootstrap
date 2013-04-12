
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

    function less (s,l){

        if(s <= 9){
            if($('.past').text() == ""){


                $('.now').text(l[0]);


                $('.next').text(l[1]);


            }
            else{
                pastF ();
            $("#now").click();
            $('.past').text(l[5]);

            $('.now').text(l[0]);

            $('.next').text(l[1]);

            }
        }
        else if(s >= 10 && s <= 19){

            $('.past').text(l[0]);
            $('.now').text(l[1]);
            $('.next').text(l[2]);
        }
        else if(s >= 20 && s <= 29){

            $('.past').text(l[1]);
            $('.now').text(l[2]);
            $('.next').text(l[3]);
        }
        else if(s >= 30 && s <= 39){
            $('.past').text(l[2]);
            $('.now').text(l[3]);
            $('.next').text(l[4]);
        }
        else if(s >= 40 && s <= 49){

            $('.past').text(l[3]);
            $('.now').text(l[4]);
            $('.next').text(l[5]);
        }
        else{

            $('.past').text(l[4]);
            $('.now').text(l[5]);
            $('.next').text(l[0]);
        }

    }


    setInterval(function setTime (){
        var forTime = new Date();
         hour = forTime.getHours();
         minutes = forTime.getMinutes();
         seconds = forTime.getSeconds();

        less(seconds,lessons);

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