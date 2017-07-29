var pContainerHeight = $('.caixanav').height();

$(window).scroll
  (function()
    {
      var wScroll = $(this).scrollTop();

    /*stuffs do cabeçalho*/
      if (wScroll <= pContainerHeight) 
      {
        $('.logo').css
        (
          {
            'transform' : 'translate(0px, '+ wScroll /2 +'0,9%)'
          }
        );

        $('.back-portal').css
        (
          {
            'transform' : 'translate(0px, '+ wScroll /4 +'%)'
          }
        );

        $('.makingof').css
        (
          {
            'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
          }
        );
      }

      // Fade das fotos da colum four
      if(wScroll > $('.sprites').offset().top - ($(window).height() / 1.2)) 
      {
        $('.sprites figure').each
          (function(i)
            {
              setTimeout
              (function()
                {
                  $('.sprites figure').eq(i).addClass('is-showing');
                } , (700 * (Math.exp(i * 0.14))) - 700
              );
            }
          );
      }


      // Efeito da large-window
      if(wScroll > $('.large-window').offset().top - $(window).height())
      {

        $('.large-window').css
          (
            {'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'}
          );

        var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

        $('.window-tint').css
          (
            {'opacity': opacity}
          );
      }

    }
  );

function relodar() {
    location.reload();
}

function scrollTo(elem){
    $('html, body').animate({
        scrollTop: $(elem).offset().top
    }, 500);
}

$(document).ready
(
  function()
  {
    $('#carro_ceu').slick
    (
      {
        speed: 500,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-2x fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-2x fa-angle-right"></i></button>',
      }
    );

    $('.loading').remove();
  }
);
