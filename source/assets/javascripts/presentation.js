(function($){
	
	$(document).ready(function(){
			
		// open external link in new tab/window
		// use rel="external" instead of target="_blank"
		$('a[rel="external"]').click( function() {
		  this.target = "_blank";
		});

    $('#bigtext').bigtext();

    

    var text = $('#bigtext');

    var textTop = text.offset().top;
    var textLeft = text.offset().left;
    var textBottom = textTop + text.height();
    var textRight = textLeft + text.width();

    var textCenterX = (text.width() - textLeft);
    var textCenterY = (text.height() - textBottom);

    var shadowX = '0px';
    var shadowY = '0px';
   

    function getMousePosition(event){
      mouseX = event.pageX;
      mouseY = event.pageY;

        // console.log('mouseX: ' + mouseX);
        // console.log('mouseY: ' + mouseY);

      if (mouseX >= textCenterX) {
        shadowX = (mouseX / 100) + 'px';
      } else {
        shadowX = '-' + (mouseX / 10) + 'px'
      };

      if (mouseY >= textCenterY) {
        shadowY = (mouseY / 100) + 'px';
      } else {
        shadowY = '-' + (mouseY) + 'px'
      };      

      $('#bigtext').css('text-shadow', shadowX  + ' ' + shadowY + ' #fff');
      console.log(shadowX + " " + shadowY);

    };


    $(window).mousemove(getMousePosition);


	});

})(window.jQuery);