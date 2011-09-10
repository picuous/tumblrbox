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
