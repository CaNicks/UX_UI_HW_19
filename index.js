console.log("Your Index.js file is loaded")

$(".item2").ready(function(){
    $(".item").click(function(){
      $(".item2").show("slide", { direction: "right" }, 1000);
    });
  });

  $(".item3").ready(function(){
    $(".Picture4").click(function(){
      $("#panel").show("slide", { direction: "right" }, 1000);
    });
  });