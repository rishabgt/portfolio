$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    var date1 = new Date("08/08/2020");
    var currentDate = new Date();
    var exp = currentDate.getTime()-date1.getTime();
    exp = exp/(1000*3600*24*365);
    var exp = Math.round(exp*10)/10;
    $('.counter .box span').text(exp);
    date1 = new Date("07/18/1998");
    exp = currentDate.getTime() - date1.getTime();
    exp = exp/(1000*3600*24*365);
    exp = Math.floor(exp);
    $('.row .info h3:eq(1)').html("<span>age: </span>"+exp);
    $('form .btn').on('click',function(e){
        alert("Oops! Functionality still in progress, mail me at rishabgt@gmail.com for any queries!")
    });
});

$(window).on('scroll load',function(){
     $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    if($(window).scrollTop()>1)
        $('.top').show();
    else
        $('.top').hide();
});

// smooth scrolling code 
$('a[href*="#"]').on('click',function(e){
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $($(this).attr('href')).offset().top,
    },500,'linear');
});