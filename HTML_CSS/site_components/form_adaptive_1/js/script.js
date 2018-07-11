
 


$(function() {

   $('#ticket').on('click', function(){

      $('.submenu').slideToggle(900, function() {

         if($(this).css('display') === 'block') {
            

         }

      });
   });
   
});

$(function() {

   $('.currency').on('click', function(){

      $('.noneelem').slideToggle(900, function() {

         if($(this).css('display') === 'block') {
            
            

         }


      });
   });
   
});




   $(".currency").on("click", "li", function() {




$("#lis li").addClass("noneelem"); 

$("#lis li").removeClass("active"); 

$("#lis noneelem").css('display' === 'none'); 

$(this).removeClass("noneelem");

$(this).addClass("active"); 

$(this).prependTo(this.parentNode);



});

$(function() {

   $('.checkbox').on('click',"li", function(){

      $('.retdateinp , .retrdate').slideToggle( function() {

         if($(this).css('display') === 'none') {
            
            

         }


      });
   });
   
});
