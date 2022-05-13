var version = "v3.1.6"

function loadGame(){
	
	var game = window.location.hash;
	if (game == null) {
		window.location = "/g/"
	} else {
		game = game.replace('#','');
	}
	var url = "https://000687715.codepen.website/#"+game;
	document.getElementById("gameIframe").src = url;
	
	setTheme();
	
	if (window.location != window.parent.location) {
		var fs = document.getElementById("fullScreenBtn")
		if (fs == null) {} else {
			fs.innerHTML = "Open in full screen tab"
		}
		
		if (document.getElementById("likeButton")) {
			document.getElementById("likeButton").setAttribute("data-identifier", game);
		}
	}
	
	var themeSelect = document.getElementById("themeSelect")
	themeSelect.addEventListener("change",function(event){
	if (localStorage.getItem('theme')===null) {localStorage.setItem('theme', "Classic");}
 localStorage.setItem('theme', event.target.value);
 console.log(localStorage.getItem('theme'))
 setTheme()
}
)
}

function search() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('game');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].id.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="inline-table";                 
        }
    }
}

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
	if (document.getElementById("title2")) {
		document.getElementById("title2").innerHTML = version
	}
	
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

function play(game,gameName){
	window.location = "/g/gamepage.html#"+game
}

function showEmbed() {
	var embedCode = document.getElementById("embedCodeDiv")
	if (embedCode.style.display == "none") {
		var code = '<iframe style="width:1000px;height:600px;border-radius:5px;" src="https://bgembed.netlify.app/'
 	code = code + window.location.hash;
 	code = code + '">'
 	document.getElementById("embedCode").value = code
 	embedCode.style.display = "block"
	} else {embedCode.style.display = "none";}
}

function fullscreen() {
	if (window.location == window.parent.location) {
		//not iframe
			var elem = document.getElementById("gameIframe");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
	} else {
		//iframe
		var url = "/g/gamepage-full.html"+window.location.hash
		window.open(url,"_self")
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
