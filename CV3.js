$(document).ready(function(){
    // menu appears when scrolling up
    var lastScrollTop = 0;
    $(document).on("scroll", function(){
        var st = $(this).scrollTop();
        if(st < lastScrollTop){
           // monter
           $("#navi").css("top", st);
        }
        lastScrollTop = st;
    });

    var bar = new ProgressBar.Line(progress, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      });
      
      bar.animate(1.0); 
});

//changer background-color quand menu est dans le container
//mettre une bar de progression 