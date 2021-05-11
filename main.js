window.onload = () => {
	const cardHeaders = document.getElementsByClassName("js--cardHeader");
  const colors = ["grey", "blue"];
  const randomNumber = Math.floor(Math.random() * 2);
  const searchbar = document.getElementById("js--searchbar");
  const cardsList = document.getElementsByClassName("card");

  for(let i = 0; i < cardHeaders.length; i++){
    cardHeaders[i].style.backgroundColor = colors[randomNumber];
  }

  document.getElementById('pizza').checked = true;
  document.getElementById('pasta').checked = true;
  document.getElementById('drank').checked = true;
  document.getElementById('favoriet').checked = true;

  function hide(classToHide) {
    [].forEach.call(document.getElementsByClassName(classToHide), function (el) {
    	el.hidden = true;
  	});
  }

  function show(classToShow) {
    [].forEach.call(document.getElementsByClassName(classToShow), function (el) {
    	el.hidden = false;
  	});
  }

  function addFav(number) {
    if(document.getElementById(number).className === 'pizza'){
      document.getElementById(number).className = 'favoriet';
    } else {
      document.getElementById(number).className = 'pizza';
    }
  }

  function addFav2(number) {
    if(document.getElementById(number).className === 'pasta'){
      document.getElementById(number).className = 'favoriet';
    } else {
      document.getElementById(number).className = 'pasta';
    }
  }

  function addFav3(number) {
    if(document.getElementById(number).className === 'drank'){
      document.getElementById(number).className = 'favoriet';
    } else {
      document.getElementById(number).className = 'drank';
    }
  }

  document.getElementById('pizza').onchange = function() {
  	if (this.checked) show('pizza'); else hide('pizza');
  }

  document.getElementById('pasta').onchange = function() {
  	if (this.checked) show('pasta'); else hide('pasta');
  }

  document.getElementById('drank').onchange = function() {
  	if (this.checked) show('drank'); else hide('drank');
  }

  document.getElementById('favoriet').onchange = function() {
  	if (this.checked) show('favoriet'); else hide('favoriet');
  }

  document.getElementById("btn1").onclick = function(){
    addFav(1)
  }
  document.getElementById("btn2").onclick = function(){
    addFav(2)
  }
  document.getElementById("btn3").onclick = function(){
    addFav(3)
  }
  document.getElementById("btn4").onclick = function(){
    addFav2(4)
  }
  document.getElementById("btn5").onclick = function(){
    addFav2(5)
  }
  document.getElementById("btn6").onclick = function(){
    addFav2(6)
  }
  document.getElementById("btn7").onclick = function(){
    addFav3(7)
  }
  document.getElementById("btn8").onclick = function(){
    addFav3(8)
  }
  document.getElementById("btn9").onclick = function(){
    addFav3(9)
  }







}
