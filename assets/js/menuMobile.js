let $botaoMenu = $(".cabecalho__menu--mobile");
let $menu = $(".cabecalho__menu");
let $conteudo = $("#conteudo");
let $corpo = $("body");
let $links = $(".cabecalho__menu__item");
var menuAberto = false;

function abreFechaMenu(){
    $menu.toggleClass("cabecalho__menu--aberto");
    $conteudo.toggleClass("conteudo--menu-aberto");
    $corpo.toggleClass("corpo--menu-aberto");
    if(menuAberto){
        menuAberto = false;
    } else {
        menuAberto = true;
    }
    
}

$botaoMenu.click(abreFechaMenu);

$conteudo.click(() => {
    if(menuAberto){
        abreFechaMenu();
    }
});

$links.click(abreFechaMenu);