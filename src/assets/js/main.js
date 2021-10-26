$(document).ready(function () {


    let lightMood = document.getElementById('lightMood');
    let darkMood = document.getElementById('darkMood');

    let light = () => {

        document.body.style.background = "#ddd"
      
      }
      lightMood.addEventListener('click', light);
      
      let dark = () => {
      
        document.body.style.background = "black"
      }
      darkMood.addEventListener('click', dark);






      new WOW().init();



    $(function() {  
        $("body").niceScroll({
            cursorcolor: "rgba(6, 4, 100, 0.74)",
            cursorwidth: "15px",
        });
    });


})


$(window).scroll(function () {
    let x = $(window).scrollTop();
    if (x > 400) {
        $('.go-up').css('opacity', "1")
        
    }  else {
        $('.go-up').css('opacity', "0")
        
    }

    if (x >= 7100) {
        $('.go-down').css('opacity', "0")

    } else {
        $('.go-down').css('opacity', "1")
    }
    

    



})