
function change_article(id){

//get all articles
var articles=document.getElementsByTagName("article");

//iterate over articles, set display to block if ID matches desired article
for (i=0; i<articles.length;i++){
	if (articles[i].id==id){
		articles[i].style.display = "block";
    	}else{
		articles[i].style.display = "none";
	}
}
return true;
}

function mouse_over(id){
	document.getElementById(id).style.backgroundColor = "#EAEBEB";
}

function mouse_out(id){
	document.getElementById(id).style.backgroundColor = "#4B564E";
}

function mouse_over_link(id){
	document.getElementById(id).style.color = "#4B564E";
}

function mouse_out_link(id){
	document.getElementById(id).style.color = "white";
}

function hamburger(){
    var mq = window.matchMedia( "(max-width: 769px)" );

  var hamburger = document.getElementById('hamburger');
  hamburger.style.display = "none";

  var list = document.getElementById('list');
  list.style.display = "block";

  var cross = document.getElementById('cross_icon');
  cross.style.display = "block";

}

function cross(){

  var list = document.getElementById('list');
  list.style.display = "none";

  var cross = document.getElementById('cross_icon');
  cross.style.display = "none";

  var hamburger = document.getElementById('hamburger');
  hamburger.style.display = "block";


}

// function change_article(id){
//
// // bei einer Aktion zunächst alle ausblenden
// AlleAus()
//
// var article = document.getElementById(id);
//
// // Prüfung exixtiert eine Element mit dieser ID?
// if(!article)return true;
//
//   // Umschaltung
//   if(article.style.display == "none")
//   {
//   article.style.display = "block"
//   }
//   else
//   {
//   article.style.display = "none"
//   }
//
// return true;
// }
// function AlleAus() {
//    about_me.style.display = "none";
//    kompetenzen.style.display = "none";
// }
