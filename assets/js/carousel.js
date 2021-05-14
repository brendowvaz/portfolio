let $slide = $(".banner__imagem").hide();
var i = 0;

$($slide[0]).show();

setInterval(() => {

    $($slide[i]).hide();

    i++;
    
    if(i == $slide.length) i=0;

    $($slide[i]).fadeIn("slow");
    console.log(i)

},5000);

