$(document).foundation();

$('.top-bar').on('sticky.zf.stuckto:top', function(){
    $(this).addClass('shrink');
  }).on('sticky.zf.unstuckfrom:top', function(){
    $(this).removeClass('shrink');
  });

  $(document).ready(function() {
    var time = 5;
    var $bar,
        $slick,
        isPause,
        tick,
        percentTime;

    $slick = $('.slider');
    $slick.slick({
      draggable: false,
      adaptiveHeight: false,
      dots: false,
      arrows: false
    });

    $bar = $('.slider-progress .progress');
  

  
  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 10);
  }
  
  function interval() {
    if(isPause === false) {
      percentTime += 1 / (time+0.1);
      $bar.css({
        width: percentTime+"%"
      });
      if(percentTime >= 100)
        {
          $slick.slick('slickNext');
          startProgressbar();
        }
    }
  }
  
  
  function resetProgressbar() {
    $bar.css({
     width: 0+'%' 
    });
    clearTimeout(tick);
  }
  
  startProgressbar();
  })

  