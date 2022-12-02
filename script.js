$(document).ready(() => {
  // eslint-disable-next-line func-names
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', () => {
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }
  });

  // eslint-disable-next-line func-names
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate(
      {

        scrollTop: $($(this).attr('href')).offset().top,

      },
      500,
      'linear',
    );
  });
});
