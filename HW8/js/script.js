$(document).ready(function () {
  $('.navigation a').on('click', function () {
    $(this).parent().siblings().removeClass('active');
    $(this).parent().addClass('active');
    var id = $(this).attr('href');
    $('.sub-content').removeClass('active');
    $(id).addClass('active');
  });
});
