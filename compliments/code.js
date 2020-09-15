var aa = 0;
function gComp(){
	//document.getElementById("buttn").style.visibility = "hidden";
	document.getElementById("cText").style.visibility = "visible";
	document.getElementById("cText").style.visibility = "visible";
	i =0;
	document.getElementById("cText").innerHTML = "";
	txt1 = txt[Math.floor(Math.random() * 20)]
	
	doneit();
	typeWriter();
}

var i = 0;
var txt = ["Smile, Beautiful.","You are doing a great job.","Believe in yourself.",
"You are blessed.","Don't let any negativity get to ya <3!","You have amazing qualities, like your smile.",
"Be happy :)","Believe in a future for yourself.","Stay focused! You can do this.","You are intelligent.",
"Remember you are the reason someone smiled today.","You are worthy, magical, and amazing. Hope this made you feel better.",
";) Cutie!","I hope you have a day as amazing as yourself.","You are strong.","You are so intelligent, that I had to give YOU this specific compliment!",
"Know that YOU are loved by many.","You are beautiful inside and out.","You are pretty cool.","You are more spectacular than the stars."];
var speed = 50;
var txt1=txt[Math.floor(Math.random() * 20)];

function typeWriter() {
  if (i < txt1.length) {
    document.getElementById("cText").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

aa=1;

function doneit(){
	document.getElementById("cText").innerHTML += document.getElementById("entername").value + ", ";
}
