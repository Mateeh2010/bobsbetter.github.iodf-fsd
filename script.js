var version = "v3.1.6"

function setTheme() {
	var sel = document.getElementById("themeSelect")
	var theme
	if (sel === null) {
		if (localStorage.getItem('theme')===null) {localStorage.setItem('theme', "Classic");}
		theme = localStorage.getItem('theme')
	} else {theme = document.getElementById("themeSelect").value}
 
 if (theme==="Classic") {
   document.getElementById("title").style.color="#fc033d";
	 	document.getElementById("title2").style.color="#fc033d";
 }
 if (theme==="Gold") {
   document.getElementById("title").style.color="#ffbb00";
		document.getElementById("title2").style.color="#ffbb00";
 }
 if (theme==="Blue") {
   document.getElementById("title").style.color="#0073ff";
		document.getElementById("title2").style.color="#0073ff";
 }
 if (theme==="Green") {
   document.getElementById("title").style.color="#0be600";
		document.getElementById("title2").style.color="#0be600";
 }
}


window.addEventListener("load",function(){
	
	var themeSelect = document.getElementById("themeSelect")
 if (localStorage.getItem('theme')===null) {localStorage.setItem('theme', "Classic");}
 
  console.log(localStorage.getItem('theme'));

 var ddl = document.getElementById('themeSelect');
	console.log(ddl)
	if (ddl == null) {} else	{
var opts = ddl.options.length;
for (var i=0; i<opts; i++){
    if (ddl.options[i].value == localStorage.getItem('theme')){
        ddl.options[i].selected = true;
        break;
    }
} }
})
	
window.onload = (event) => {
	document.getElementById("title2").innerHTML = version
	
 setTheme()
	
		var themeSelect = document.getElementById("themeSelect")
		themeSelect.addEventListener("change",function(event){
	if (localStorage.getItem('theme')===null) {localStorage.setItem('theme', "Classic");}
 localStorage.setItem('theme', event.target.value);
 console.log(localStorage.getItem('theme'))
 setTheme()
}
)
};

document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

var threshold = 160;
var devtools = {
		open: false,
		orientation: null
	};
setInterval(function () {
		var widthThreshold = window.outerWidth - window.innerWidth > threshold;
		var heightThreshold = window.outerHeight - window.innerHeight > threshold;
		var orientation = widthThreshold ? 'vertical' : 'horizontal';

		if (!(heightThreshold && widthThreshold) &&
      ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)) {
			if (!devtools.open || devtools.orientation !== orientation) {
				window.open("about:blank","_self")
			}

		} else {
			//closed
		}
	}, 100);

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = devtools;
	} else {
		window.devtools = devtools;
	}