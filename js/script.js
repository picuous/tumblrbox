/* 
 * Author: Picuous
 */

$('.enable').click(function() {
  $(this).fadeOut('normal', function() {
    $('#code_howto').fadeIn();
  });
});
$('#code').click(function() {
  $(this).focus().select();
});

function updateTitle(title) {
  var t = title.split('.');
  $('#title').attr('text-data', title.toLowerCase()).text(t[0]+'.').append($('<span>').text(t[1]));
}
setTimeout(function() {updateTitle('tumblr.bo')}, 500);
setTimeout(function() {updateTitle('tumblr.b')}, 650);
setTimeout(function() {updateTitle('tumblr.')}, 900);
setTimeout(function() {updateTitle('tumblr.b')}, 1400);
setTimeout(function() {updateTitle('tumblr.bo')}, 1650);
setTimeout(function() {updateTitle('tumblr.box')}, 1900);
