/* 
 * Author: Picuous
 */

$('#title').click(function(e) {
  $('#code_howto:visible, #further:visible').fadeOut('fast', function() {
    $('#presentation').fadeIn('normal', runTitleAnimation);
  });
  e.preventDefault();
});
$('#enable').click(function() {
  $('#presentation').fadeOut('normal', function() {
    $('#code_howto').fadeIn();
  });
});
$('#done').click(function() {
  $('#code_howto').fadeOut('normal', function() {
    $('#further').fadeIn();
  });
});
$('#code').click(function() {
  $(this).focus().select();
});
$('#bookmarklet').click(function(e) {
  alert("In order for this bookmarklet to be usable:\n1. Add it to your favorites\n2. Use it on your tumblog");
  e.preventDefault();
});

function updateTitle(title) {
  var t = title.split('.');
  $('#title').attr('text-data', title.toLowerCase()).text(t[0]+'.').append($('<span>').text(t[1]));
}
function runTitleAnimation() {
  setTimeout(function() {updateTitle('tumblr.bo')}, 500);
  setTimeout(function() {updateTitle('tumblr.b')}, 650);
  setTimeout(function() {updateTitle('tumblr.')}, 900);
  setTimeout(function() {updateTitle('tumblr.b')}, 1400);
  setTimeout(function() {updateTitle('tumblr.bo')}, 1650);
  setTimeout(function() {updateTitle('tumblr.box')}, 1900);
}
runTitleAnimation();
