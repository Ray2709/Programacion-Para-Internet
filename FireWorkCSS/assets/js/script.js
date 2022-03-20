$(window).on('load', function() {
    $('#page-loader').fadeOut(500);
});
var num = 50;
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.menu').addClass('fixed');
    } else {
        $('.menu').removeClass('fixed');
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
                } else {
                    document.documentElement.setAttribute('tema', 'dark');
                }
            }
            colorSwitch.addEventListener('change', cambiaTema);