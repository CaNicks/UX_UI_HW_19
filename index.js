console.log("Your Index.js file is loaded")
  $(".item2").hide();
  $(".item3").hide();



    $(".item").on( "click", function(){
      $(".item3").show("slide", { direction: "right" }, 1000);
    });
  


    $(".Picture4").on("click", function(){
      $(".item2").show("slide", { direction: "left" }, 1000);
      
    });
  

  console.log(".item2")

  