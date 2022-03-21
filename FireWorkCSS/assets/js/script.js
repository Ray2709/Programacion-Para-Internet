$(window).on('load', function() {
    $('#page-loader').fadeOut(500);
});
var num = 50;
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.menu').addClass('fixed');
        $('.breadcum').css("margin-top","100px");
        $('.masthead').css("margin-top","100px");
    } else {
        $('.menu').removeClass('fixed');
        $('.breadcum').css("margin-top","0px");
        $('.masthead').css("margin-top","0px");
    }
});

function myFunction() {
    if($('#navBarMov').is(":visible")){
        $('#navBarMov').hide();
    }else{
        $('#navBarMov').show();
    }
  /*var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }*/
}

/*var navBarMov = $('#myTopnav').html();
$('#navBarMov').html('<ul>'+navBarMov+'</ul>');*/


const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
function cambiaTema(ev){
    if(ev.target.checked){
        document.documentElement.setAttribute('tema', 'light');
        $("#imagenPrincipal").attr("src","assets/img/backgrounddark.png");
    } else {
        document.documentElement.setAttribute('tema', 'dark');
        $("#imagenPrincipal").attr("src","assets/img/background.png");
    }
}
colorSwitch.addEventListener('change', cambiaTema);