$(document).ready(function(){
    $(".container").on("click", function(event){
        console.log("hey")
        var id = event.target.id;
        var num = id.charAt(3)
        console.log("hey" + num)
        if($("#v" + num).css("display") === "block"){
          $("#v" + num).css("display","none")
          $("#cv" + num).css("display","block")
        }
        else{
          $("#v" + num).css("display","block")
          $("#cv" + num).css("display","none")
        }
      })
})