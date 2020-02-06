$(`#logo`).slideUp(600);
$(`.number`).addClass(`text-dark`);
$(`#smallText`).slideUp(600);
$('#contact1').removeClass('flex-column');
$('#contact1').addClass('flex-row');
$(`.number`).addClass(`numberDark`);
$('nav').addClass('navBlack');
$('.email').slideUp(0);
$('#padding5').removeClass('p-4');
$('#padding5').addClass('p-1');
$('.camburger').addClass('my-auto');
$('#menu2').addClass('my-auto');
$(`#showLogo`).slideDown(600);
$(`.question`).addClass(`questionDark`);
$(`.line`).addClass(`lineDark`);
$(`#menu2`).addClass(`menuDark`);

let cambFlag = true;
$('.camburger').click(function () { 
    let leftMenu = $('.leftMenu > nav').height();
    let windHeight = $(window).height();
    $('.outMenu').height(windHeight - leftMenu);
    $('nav').removeClass('navBlack');
    $('.email').slideDown();
    if(cambFlag){
        $('.leftMenu').addClass('leftMenuClick');
        $('#menu').addClass('text-dark');
        $('.number').addClass('text-dark');
        $('.email').addClass('text-dark');
        $('.question').addClass('text-dark');
        $('.line').addClass('blackLine');
        $('.logo').addClass('logoDark');
        $('.fixed-top').hide();
        cambFlag = false;
    }
    else{
        $('.leftMenu').removeClass('leftMenuClick');
        $('#menu').removeClass('text-dark');
        $('.number').removeClass('text-dark');
        $('.email').removeClass('text-dark');
        $('.question').removeClass('text-dark');
        $('.line').removeClass('blackLine');
        $('.fixed-top').show();
        $(`#logo`).slideUp(600);
        $('nav').addClass('navBlack');
        $('.email').slideUp();
        $('.logo').removeClass('logoDark');
        $('.email').slideUp();
        cambFlag = true;
    }
});

$(".selection:nth-child(1)").click(function () {
    $(".picture").css({"background": "url(img/komer.jpg)", "background-size": "cover", "height": "70vh"});
});
$(".selection:nth-child(2)").click(function () {
    $(".picture").css({"background": "url(img/sklad.jpg)", "background-size": "cover", "height": "70vh"});
});
$(".selection:nth-child(3)").click(function () {
    $(".picture").css({"background": "url(img/logich.jpg)", "background-size": "cover", "height": "70vh"});
});
$(".selection:nth-child(4)").click(function () {
    $(".picture").css({"background": "url(img/jkx.jpg)", "background-size": "cover", "height": "70vh"});
});