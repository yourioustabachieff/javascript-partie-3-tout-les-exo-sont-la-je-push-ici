let a = document.getElementById("border");


      a.addEventListener("focus", function () {
       a.style.outline = "none"
        a.style.border = "8px solid green";
      });

      a.addEventListener("focusout", function () {
        a.style.border = "8px solid red";
      });