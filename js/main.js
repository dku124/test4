$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});

$('.questions .item').click((e) => {
  if ($(e.currentTarget).hasClass('active')) {
    $(e.currentTarget).removeClass('active');
  } else {
    $(e.currentTarget).addClass('active');
  }
});

$('#close-button').click(function () {
  $('#header').removeClass('active');
});
$('#list-button').click(function () {
  $('#header').addClass('active');
});
