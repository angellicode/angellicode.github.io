function scrollback(){
	var arrowleft = document.getElementById("arrowl");
	var adverts = document.getElementById("item2");
	
	adverts.src = "imgs/sample_biz_2.png";
}

function scrollforward(){
	var arrowright = document.getElementById("arrowr");
	var adverts = document.getElementById("item1");
	
	adverts.src = "imgs/sample_biz.png";
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var basei = document.getElementById("baseimg").style.display = "none";
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}