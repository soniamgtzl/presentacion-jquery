$(document).ready(function () {
  /*INICIALIZANDO LA ANIMACION, EJECUTANDO LA FUNCION
  INTRO DESPUES DE 3 SEGUNDOS*/
  setTimeout("intro()",3000);
});

$(function(){
  /*OCULTANDO LOS ELEMENTOS HTML, DEJANDO VISIBLES
  LOS DEL INICIO*/
  $("#home").css('opacity','0.0');//logo de entrada

  $("#contmenu").hide();//contenedor del menu
  $("#logomenu").css('opacity','0.0');//Logo del menu
  $("morebtn").css('opacity','0.0');//MENU
  $("#contactobtn").css('opacity','0.0');//Menu

  $("#cont1").hide(); //about
  $("#cont2").hide(); //people
  $("#cont3").hide(); //Contato

  $("#about").css('opacity','0.0'); //hijo de cont1
  $("#people").css('opacity','0.0'); //hijjo cont2
  $("#inquire").css('opacity','0.0'); //hijo cont3

  /*
    PARA EL MENU PRINCIPAL
    Elementos que contengan la class ".link", y que esten dentro de
    "#contmenu" realizaran lo siguiente:
    Al estar dentro de una <ul> el ".next()" toma como
    referencia el siguiente <ul> anidado, para ejecutar
    el eventp de jquery slideDown().

    Le agregamos un class al momento del click al
    objero "(this)" con addClass, para cambiar el color
    o algun atributo CSS. Al resto de elementos con class
    ".links" le quitamos esa clase, por ultimo return false
    ,no nos devolvera nada
  */
  $("#contmenu a.link").click(function() {
    $(this).next().slideDown();
    $(this).addClass('selected');
    $('a.links').removeClass('selected');
    return false;
  });

  /*
    El setName almacena un nombre, en este caso con el
    "attr(atributo)" y el "href" que contiene dicho
    nombre de id especificado en el HTML como ancla que nos
    mostrara ese contenedor. Le agregamos tambien una class
  */
  $('a.link').click(function () {
    setName($(this).attr('href'));
    $(this).addClass('selected');
  });
  $('a.linkc').click(function () {
    setName($(this).attr('href'));
    $(this).addClass('selected');
    return false;
  });
});

/*ANIMACION DE ENTRADA*/

function intro(){
  /*
    Con el metodo animate(), podemos dar tiempo a cualquier atributo
    css, en este caso la opacidad, la posicion y la estructura
    de este evento es;
    $(selectos).animate({parametros}, tiempo, tiempoDeAceleracion);
    Mas tipos de aceleracion en:
    http://easings.net/es
  */


  $("#home").animate({opacity:'1.0'},4000,"easeOutExpo");
  /*LINE*/
  $(".vertical").animate({bottom:'0px',opacity:'1.0'},3500,"easeOutExpo");
  $(".horizontal").animate({right:'0px',opacity:'1.0'},3500,"easeOutExpo");
}
  /*ANIMACION DE LINEAS HORIZONTAL Y VERTICAL (FUNCION)*/

  function lineas() {
    $(".vertical").animate({bottom:'0px',opacity:'1.0'},3000,"easeOutExpo");
    $(".horizontal").animate({right:'0px',opacity:'1.0'},3000,"easeOutExpo");
  }

  /*ANIMACION DEL MENU*/
  function menuanim() {
    $("#logomenu").animate({opacity:'1'},2000,"easeOutExpo", function() {
      $("#morebtn").animate({opacity:'1'},800,"easeOutExpo",function() {
        $("#contactobtn").animate({opacity:'1'},800,"easeOutExpo");
      });
    });
  }


  /*
  FUNCION DEL BTN PARA HOME (EL LOGO), APLICANDO EFECTO FACDEOUT A
  CONTENIDO PRINCIPAL Y MOSTRAR EL SIGUIENTE #cont1()about
  */

  function animateX() {
    /*
    Agregamos el setTimeOut para que en cuanto demos click sobre el
    logo del intro arracque la funcion menuanim() y cambie la opacidad
    del menu
    */

    setTimeout(function() {
      menuanim();
    }, 1000);

    /*Ajustemos estilos particulares*/
    $("#contmenu").css('display', 'block');
    $("#cont_center").css('top','50%');
    /*
      Ocultamos divs de intro y mostramos siguiente seccion
      #cont1(about) esta sera la logica para todas las demas secciones
    */
    $("#home").hide("slow");
    $("#cont1").show("slow");
    $("#cont1").animate({
      opacity:'1'
    },1000, "easeOutExpo",function(){
      $("#about").animate({
        opacity:'1'
      },1000, "easeOutExpo");
    });

    /*LINE*/
    /*
    Enviamos las lineas fuera de la pantalla y las llamamos al
    final de la animacion con la funcion linea() para mostrarlas de nuevo
    */

    $(".vertical").animate({
      bottom:'500px',
      opacity:'0'
    },2000,"easeOutExpo");

    $(".horizontal").animate({
      right:'500px',
      opacity:'0'
    },2000,"easeOutExpo",function(){
      lineas();
      });
  };

  /*
  Funcion para cargar el home o intro al pulsar el logo del menu o
  el de contacto
  */
  function home() {
    /*Al pulsar el link con el id #moreclick se ejecutara la funcion bio()*/
    $("a#moreclick").attr('onclick','bio()');
    //Ocultando menu
    $("#logomenu").animate({
      opacity:'0'
    },300,"easeOutExpo", function() {
      $("#morebtn").animate({
        opacity:'0'
      },300,"easeOutExpo");
      $("#contactobtn").animate({
        opacity:'0'
      },300,"easeOutExpo");
      $("#contmenu").css("display","none");
    });
   //Mostrando el menu y el contenedor del Home
   $(".logo-menu").animate({
     opacity:'1'
   },800,"easeOutExpo");
   $("#home").animate({
     opacity:'1'
   },800,"easeOutExpo");
   $("#home").show("slow");//efecto de visualizacion lento

   //Ocultar los elementos de People
   $("#cont1").animate({
     opacity:'0'
   },800,"easeOutExpo");
   $("#cont1").hide("slow");//ocultar lento

   $("#cont2").animate({
      opacity:'0'
   },800,"easeOutExpo");
    $("#cont2").hide("slow");

    $("#cont3").animate({
       opacity:'0'
    },800,"easeOutExpo");
    $("#cont3").hide("slow");

    $("#cont_center_people").animate({
      opacity:'0'
    },500,"easeOutExpo");

    /*
    Ocultando contenedores principales: About, people y regresando
    a su posicion inicial
    */
    $("#about").css("opacity","0");
    $("#people").animate({
      opacity:'0'
    },800,"easeOutExpo");
    $("#cont_center").css("top","60%");
    $("#cont_center_people").css("top","30%");

    //Ocultando menu
    $("#contmenu ul ul").hide();
    $("a.link").removeClass('selected');
    $("a.linkc").removeClass('selected');
    $("a.links").removeClass('selected');

    /*
    Enviamos las lineas fuera de la pantalla y las llamamos al final de
    la animacion con la funcion lineas() para reiniciarlas de nuevo
    y reiniciamos el timer
    */
    $(".vertical").animate({
      botton:'500px',
      opacity:'0'
    },3000,"easeOutExpo");

    $(".horizontal").animate({
      right:'500px',
      opacity:'0'
    },3000,"easeOutExpo", function(){
      lineas();
      clearTimeout();
    });
  };
//FUNCION BIO
  function bio() {
    //Back to Home
    $("a#moreclick").attr('onclick','');

    //Ocultando home, about, contact y mostrando #cont2 (people)
    $(".logo-menu").animate({
      opacity:'1'
    },800,"easeOutExpo");
    $("#home").animate({
      opacity:'0'
    },800,"easeOutExpo");
    $("#home").hide('slow');

    $("#cont1").animate({
      opacity:'0'
    },800,"easeOutExpo");
    $("#cont1").hide('slow');

    $("#cont3").animate({
      opacity:'0'
    },500,"easeOutExpo", function() {
      $("#cont_center_people").css('top','30%');
      $("#cont3").hide("slow");
      $("#cont2").fadeIn(1000)
    });
    $("#cont2").animate({
      opacity:'1'

    },800, "easeOutExpo", function() {
      $("#cont_center_people").animate({
        opacity:'1',
        top:'10%'
      },2000,"easeOutExpo");
      $("#people").animate({
        opacity:'1'
      },1000,"easeOutExpo");
    });

    //Submenu
    $("a.link").addClass('selected');
    $("a.linkc").addClass('selected');
    $("a.links").addClass('selected');

    /*
    Enviamos las lineas fuera de la pantalla y las volvemos a llamar con
    la funcion lineas() para mostrarlas de nuevo
    */
    $(".vertical").animate({
      bottom:'500px',
      opacity:'0'
    },3000,"easeOutExpo");
    $(".horizontal").animate({
      right:'500px',
      opacity:'0'
    },3000,"easeOutExpo", function(){
      lineas();
    });
  };
//FIN FUNCION BIO

//FUNCION CONTACT
  function contact() {
    $("#people").css("opacity","0");
    $("a#moreclick").attr("onclick","bio()");

    $("#home").animate({
      opacity:'0'
    },800,"easeOutExpo");
    $("#home").hide("slow");

    $("#cont1").animate({
      opacity:'0'
    },800,"easeOutExpo");
    $("#cont1").hide("slow");

    $("#cont2").animate({
      opacity:'0'
    },800,"easeOutExpo", function() {
      $(".logo-menu").animate({
        opacity:'0'
      },800,"easeOutExpo");

    $("#cont2").hide("slow");
    $("#cont3").show("slow");

    $("#cont3").animate({
      opacity:'1'
    },800,"easeOutExpo",function() {
        $("#cont_center").animate({
          top:'50%'
        },800,"easeOutExpo");
        $("#inquire").animate({
          opacity:'1'
        },800,"easeOutExpo");
    });
  });

  //Submenu

  $("#contmenu ul ul").hide("slow");
  $("a.link").removeClass('selected');
  $("a.linkc").addClass('selected');
  $("a.links").removeClass('selected');

  /*line*/
  $(".vertical").animate({
    bottom:'500px',
    opacity:'0'
  },1000,"easeOutExpo");
  $(".horizontal").animate({
    right:'500px',
    opacity:'0'
  },1000,"easeOutExpo", function(){
    lineas();
  });
};
//FIN FUNCION CONTACT
