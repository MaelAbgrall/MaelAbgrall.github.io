/* too soon to use
function loadhtml(callback) {

  var xobj = new XMLHttpRequest();
  
  xobj.open('GET', "/pages/fr/navbar.html", true);
  xobj.responseType = "document";
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}*/


function init() {
  var navstring = '';
  var urlpath;
  urlpath = window.location.pathname;
  urlparsed = urlpath.split("/");
  page = urlparsed.slice(-1)[0];
  

  navstring += '<nav class="navbar navbar-expand-lg py-1">';
  navstring += '  <a class="navbar-brand" href="/pages/fr/home.html">Mael Abgrall</a>';
  navstring += '  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">';
  navstring += '    <span class="navbar-toggler-icon"></span>';
  navstring += '  </button>';
  navstring += '  <div class="collapse navbar-collapse" id="collapsibleNavbar">';
  navstring += '    <ul class="navbar-nav">';
  
  
  navstring += '      <li class="nav-item py-0">';
  if(page.indexOf("ccueil") != -1){
    navstring += '      <a class="nav-link active" href="/pages/fr/home.html">';
  } else {
    navstring += '      <a class="nav-link" href="/pages/fr/home.html">';
  }
  navstring += '          <i class="fas fa-home"></i> Accueil</a>';
  navstring += '      </li>';

  
  navstring += '      <li class="nav-item py-0">';
  if(page.indexOf("ducation") != -1){
    navstring += '      <a class="nav-link active" href="/pages/fr/education.html">';
  } else {
    navstring += '      <a class="nav-link" href="/pages/fr/education.html">';
  }
  navstring += '          <i class="fas fa-graduation-cap"></i> Education</a>';
  navstring += '      </li>';

  
  navstring += '      <li class="nav-item">';
  if(string.indexOf("xperience") != -1){
    navstring += '      <a class="nav-link active" href="/pages/fr/experience.html">';
  } else {
    navstring += '      <a class="nav-link" href="/pages/fr/experience.html">';
  }
  navstring += '          <i class="fas fa-suitcase"></i> Expérience</a>';
  navstring += '      </li>';
  

  navstring += '      <li class="nav-item">';
  if(string.indexOf("rojet") != -1){
    navstring += '      <a class="nav-link active" href="/pages/fr/projet.html">';
  } else {
    navstring += '      <a class="nav-link" href="/pages/fr/projet.html">';
  }
  navstring += '          <i class="fas fa-lightbulb"></i> Projets</a>';
  navstring += '      </li>';
  
  
  navstring += '      <li class="nav-item">';
  if(string.indexOf("kill") != -1){
    navstring += '      <a class="nav-link active" href="/pages/fr/skill.html">';
  } else {
    navstring += '      <a class="nav-link" href="/pages/fr/skill.html">';
  }
  navstring += '          <i class="fas fa-wrench"></i> Compétences</a>';
  navstring += '      </li>';
  

  navstring += '      <li class="nav-item">';
  if(string.indexOf("obby") != -1){
    navstring += '      <a class="nav-link active" href="/pages/fr/hobby.html">';
  } else {
    navstring += '      <a class="nav-link" href="/pages/fr/hobby.html">';
  }
  navstring += '          <i class="fas fa-map-signs"></i> Hobbies</a>';
  navstring += '      </li>';
  

  navstring += '      <li class="nav-item">';
  if(string.indexOf("ontact") != -1){
    navstring += '      <a class="nav-link active" href="/pages/fr/contact.html">';
  } else {
    navstring += '      <a class="nav-link" href="/pages/fr/contact.html">';
  }
  navstring += '          <i class="fas fa-address-card"></i> Contact</a>';
  navstring += '      </li>';
  navstring += '    </ul>';


  

  navstring += '    <ul class="navbar-nav ml-auto">';
  navstring += '      <li class="nav-item dropdown">';
  navstring += '        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">';
  navstring += '          <i class="fas fa-flag"></i> Langue';
  navstring += '        </a>';
  navstring += '        <div class="dropdown-menu">';
  navstring += '          <a class="dropdown-item active" href="/pages/fr/home.html">Français</a>';
  navstring += '          <a class="dropdown-item" href="/pages/en/home.html">Anglais</a>';
  navstring += '        </div>';
  navstring += '      </li>';
  
  navstring += '      <li class="nav-item">';
  navstring += '        <a class="nav-link" href="#">';
  navstring += '          <i class="fas fa-sign-out-alt"></i> Changer de site</a>';
  navstring += '      </li>';
  navstring += '    </ul>';
  navstring += '  </div>';
  navstring += '</nav>';


  document.getElementById("navstring").innerHTML = navstring;
}

init();