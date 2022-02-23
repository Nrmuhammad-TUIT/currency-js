var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elSelect = document.querySelector(".form__select");
var elSpan = document.querySelector(".form__span");


elForm.addEventListener("submit" , function(event) {

   event.preventDefault();


  var elInputVal = elInput.value;
  var elSelectVal = elSelect.value;


  if(elInputVal >= 0) {
     elSpan.textContent = (elInputVal * elSelectVal);
  }

  else {
     elSpan.textContent = ("Xatolik")
  }

}); 