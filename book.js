

$('#genrate').click(function(){

$('#book_title').text($('#title').val());
$('#book_subtitle').text('Authored By:');
$('#author_name').text($('#author').val());
$('aside').css('background-color',$('#background_color').val());
$('aside').css('color',$('#font_color').val());
$('#year').text($('#publisher').val());

})
