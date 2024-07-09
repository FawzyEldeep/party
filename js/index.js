
/*leftmenu*/

$('aside i').on('click' , function(){
    $('.outer').animate({with:'toggle'} , 1000)
})


/*text singer*/

$('.sing').on('click' , function(){
   $('.content').animate({hight:'toggle'} , 1000)
})



/*textarea*/

let maxLength = 100;
$('textarea').keyup(function() {
  let length = $(this).val().length;
  let AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
});



