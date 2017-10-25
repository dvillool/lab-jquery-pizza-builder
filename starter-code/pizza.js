// Write your Pizza Builder JavaScript in this file.
'use strict';
//$(document).ready(main) tambe per começar

function main () {

  $(".sauce").removeClass("sauce-white");

  $(".btn-pepperonni").on("click", function(){
      $(this).toggleClass("active");
      $(".pep").toggle(2000);
  });

  $(".btn-mushrooms").click(function(){
    $(this).toggleClass("active");
    $(".mushroom").toggle(3000);
  });

  $(".btn-green-peppers").click(function(){
    $(this).toggleClass("active");
    $(".green-pepper").toggle(1000);
  });


/* WE WERE TRYING TO REMOVE THE WHITE
SAUCE AS DEFAULT*/


  $(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white");
    $(this).toggleClass("active");
    //$(".sauce-white").toggle(3000);
  });

  $(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    $(this).toggleClass("active");
  });

}


$(document).ready(main);
