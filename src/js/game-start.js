app.showGameStart = function() {

  var landingPage = $('#landing-page').html();
  var landingPageTemplate = _.template(landingPage, {variable: 'm'});

  $('.container').html(landingPageTemplate());
};
