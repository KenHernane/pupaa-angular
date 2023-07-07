$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a.nav-link").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 0, function(){
        window.location.hash = hash;
      });
    }
  });

  // Add/remove "active" class on navigation links when scrolling
  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    $('section').each(function() {
      var sectionTop = $(this).offset().top - 50; // Adjust the offset as needed
      var sectionBottom = sectionTop + $(this).outerHeight();
      var sectionId = $(this).attr('id');
      if (scrollDistance >= sectionTop && scrollDistance <= sectionBottom) {
        $('.navbar-nav a.nav-link').removeClass('active');
        $('.navbar-nav a.nav-link[href="#' + sectionId + '"]').addClass('active');
      }
    });
  }).scroll();
});