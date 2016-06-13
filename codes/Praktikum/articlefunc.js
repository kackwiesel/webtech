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

function hamburger(){
  var icon = document.getElementById('hamburger');
  icon.style.display = "none";

  var list = document.getElementById('list');
  list.style.display = "block";
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
