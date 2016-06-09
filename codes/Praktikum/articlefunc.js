function change_article(id){

// bei einer Aktion zunächst alle ausblenden
AlleAus()

var article = document.getElementById(id);

// Prüfung exixtiert eine Element mit dieser ID?
if(!article)return true;

  // Umschaltung
  if(article.style.display == "none")
  {
  article.style.display = "block"
  }
  else
  {
  article.style.display = "none"
  }

return true;
}
function AlleAus() {
   about_me.style.display = "none";
   kompetenzen.style.display = "none";
}
