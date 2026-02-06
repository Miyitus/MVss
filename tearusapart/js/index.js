var size = 140;
setInterval(function(){
  $('.pulse').width(size).height(size);
  size++;
  if(size > 200){
    $('.pulse').css('opacity', $('.pulse').css('opacity')-0.001);
  }
  if(size > 500){
    size = 50;
	$('.pulse').width(size).height(size);
    $('.pulse').css('opacity', '0.3');
  }
},0); 

$('.photo').click(function(){
  console.log('CLick'); 
  $( ".pulse" ).clone().appendTo( "body" );
})