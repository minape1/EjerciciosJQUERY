
$("Document"). ready(function(){

$("#mensaje_img1").hide()

});


$("#imagen1"). hover(function(){

    console.log(

        $("mensaje_img1").show()

    );

}, function(){

    console.log(

        $("mensaje_img1").hide()
        
    );

});