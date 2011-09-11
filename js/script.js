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
updateTitle('tumblr.');
setTimeout(function() {updateTitle('tumblr.b')}, 500);
setTimeout(function() {updateTitle('tumblr.bo')}, 1000);
setTimeout(function() {updateTitle('tumblr.box')}, 1500);
