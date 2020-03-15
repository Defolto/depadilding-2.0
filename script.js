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
        if(window.pageYOffset == 0){
            $(`#logo`).slideDown(600);
            $('nav').removeClass('navBlack');
            $('.email').slideDown();
        }else{
            $(`#logo`).slideUp(600);
            $('nav').addClass('navBlack');
            $('.email').slideUp();
        }
        $('.logo').removeClass('logoDark');
        $('.email').slideUp();
        cambFlag = true;
    }
});

$(`#showLogo`).slideUp(0);
let flag = true;
$(window).scroll(function () { 
    if (cambFlag) {
        if(window.pageYOffset == 0){
            $(`#logo`).slideDown(600);
            $(`#smallText`).slideDown(600);
            $('nav').removeClass('navBlack');
            $('.email').slideDown(0);
            $('.camburger').removeClass('my-auto');
            $('#menu2').removeClass('my-auto');
            $('#contact1').removeClass('flex-row');
            $('#contact1').addClass('flex-column');
            $(`#showLogo`).slideUp(600);
            $(`.number`).removeClass(`numberDark`);
            $(`.question`).removeClass(`questionDark`);
            $(`.line`).removeClass(`lineDark`);
            $(`#menu2`).removeClass(`menuDark`);
            if ($(window).width() > 700) {
                $('#padding5').addClass('p-4');
            }
            if ($(window).width() < 700) {
                $(`.number`).removeClass(`text-dark`);
            }
            flag = true;
        }else{
            if (flag) {
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
                flag = false;
            }
        }
    }
});

if ($(window).width() < 750) {
    $('.lineBlock > div').removeClass('flex-row');
    $('.lineBlock > div').addClass('flex-column');
    $('#ico1 img').detach();
    $('#ico2 img').detach();
    $('.email').detach();
    $('#ico1').prepend('<img src="img/ico3.jpg" class="ico ml-auto" id="ico1" alt="Первое преимущество">');
    $('#ico2').prepend('<img src="img/ico5.jpg" class="ico ml-auto" id="ico1" alt="Первое преимущество">');
}

if ($(window).width() > 750) {
    $(`#mainScreen`).removeClass('mt-auto');
    $(`#mainScreen`).addClass('m-auto');
}

let target;
function loop(height) {
    if (height < target) {
        return;
    }else{
        setTimeout(() => {
            target += 5;
            window.scrollTo(0,target);
            loop(height);
        }, 1);
    }
}

$(`.tigle`).click(function () { 
    var offset = $(`#tigleTarget`).offset();
    var top = offset.top - 40;
    target = window.pageYOffset;
    loop(top);
});

if ($(window).width() < 1130) {
    $(`.number`).hide();
}

if ($(window).width() < 920) {
    $(`#showBlock`).detach();
}

if ($(window).width() < 700) {
    $(`.tigle`).detach();
    $(`.mainText + small`).hide();
    $(`.number`).show();
    $(`.question`).hide();
    $(`#menu2`).detach();
    $(`.callBack`).text('Задать вопрос');
    $(`.callBack`).removeClass(`mt-5`);
    $(`.callBack`).addClass(`mt-2`);
}
if ($(window).width() < 450) {
    $('#padding5').removeClass('p-4');
    $('#padding5').addClass('p-1');
}

if ($(window).width() < 400) {
    $('#smallText').detach();
}