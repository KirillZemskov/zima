window.onload = function () {
  let windowHeight = $(window).height();
  /*
  const date = new Date();
  let month = date.getMonth();
  console.log(month);
  if (month == 11) {
    $('.christmas').each(function() {
      let self = $(this);
      self.addClass('animate__animated');
      self.addClass('animate__fadeIn');
    });
  }
*/
  let animzima = function(){
    $('.animateright').each(function() {
      let self = $(this),
      height = self.offset().top + self.height() / 4;
      if ($(document).scrollTop() + windowHeight >= height) {
        self.addClass('animate__animated');
        self.addClass('animate__fadeInRight');
        self.css('opacity' , '1');
      }
    });
    $('.animateleft').each(function() {
      let self = $(this),
      height = self.offset().top + self.height() / 4;
      if ($(document).scrollTop() + windowHeight >= height) {
        self.addClass('animate__animated');
        self.addClass('animate__fadeInLeft');
        self.css('opacity' , '1');
      }
    }); 
    $('.animateup').each(function() {
      let self = $(this),
      height = self.offset().top + self.height() / 4;
      if ($(document).scrollTop() + windowHeight >= height) {
        self.addClass('animate__animated');
        self.addClass('animate__fadeInUp');
        self.css('opacity' , '1');
      }
    }); 
    $('.animatein').each(function() {
      let self = $(this),
      height = self.offset().top + self.height() / 4;
      if ($(document).scrollTop() + windowHeight >= height) {
        self.addClass('animate__animated');
        self.addClass('animate__fadeIn');
      }
    });   
  };

  animzima();

  $(document).on('scroll', function() {
    animzima();
  });

};


