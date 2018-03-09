

let colores = ["blue", "yellow", "red", "grey", "green", "orange", "purple"];

$("#anuncio").ready(function(){

    $("#anuncio").text("Click para cambiar el color")
    .widht(300)
    .height(500)
    .hide()
    .fadeIn(3000)

});

$("#anuncio").on("click" , function()
{
    let color = colores[Math.floor(Math.random() * colores.lenght)];

    $("#anuncio").css("background", color);

});

