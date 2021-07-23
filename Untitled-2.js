
var majeurOuMineur2 = document.getElementById("Sub");




majeurOuMineur2.addEventListener("click", function(event){


  var majeurOuMineur = document.getElementById("sAge");
  var recup = majeurOuMineur.value;
  console.log("recup");

  if (recup >= 18) {


    document.getElementById("print").innerHTML="«vous êtes majeur.»";
    console.log("« vous êtes majeur»");
  
  }
  
  
  else   {
  
  
    document.getElementById("print").innerHTML="«vous êtes mineur.»";
    console.log("« vous êtes mineur»");
  
    }

})


  







