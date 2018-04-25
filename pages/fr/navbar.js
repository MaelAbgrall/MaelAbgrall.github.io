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

  navstring += '<nav class="navbar navbar-expand-lg py-1">';
  navstring += '<a class="navbar-brand" href="#">Mael Abgrall</a>';
  navstring += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">';
  navstring += '<span class="navbar-toggler-icon"></span>';
  navstring += '</button>';
  navstring += '<div class="collapse navbar-collapse" id="collapsibleNavbar">';
  navstring += '<ul class="navbar-nav">';
  navstring += '<li class="nav-item py-0">';
  navstring += '<a class="nav-link" href="#">';
  navstring += '<i class="fas fa-home"></i> Accueil</a>';
  navstring += '</li>';
  navstring += '<li class="nav-item py-0">';
  navstring += '<a class="nav-link" href="#">';
  navstring += '<i class="fas fa-graduation-cap"></i> Education</a>';
  navstring += '</li>';
  navstring += '<li class="nav-item">';
  navstring += '<a class="nav-link" href="#">';
  navstring += '<i class="fas fa-suitcase"></i> Expérience</a>';
  navstring += '</li>';
  navstring += '<li class="nav-item">';
  navstring += '<a class="nav-link" href="#">';
  navstring += '<i class="fas fa-lightbulb"></i> Projets</a>';
  navstring += '</li>';
  navstring += '<li class="nav-item">';
  navstring += '<a class="nav-link" href="#">';
  navstring += '<i class="fas fa-wrench"></i> Compétences</a>';
  navstring += '</li>';
  navstring += '<li class="nav-item">';
  navstring += '<a class="nav-link" href="#">';
  navstring += '<i class="fas fa-map-signs"></i> Hobbies</a>';
  navstring += '</li>';
  navstring += '<li class="nav-item">';
  navstring += '<a class="nav-link" href="#">';
  navstring += '<i class="fas fa-address-card"></i> Contact</a>';
  navstring += '</li>';
  navstring += '</ul>';

  navstring += '<ul class="navbar-nav ml-auto">';
  navstring += '<li class="nav-item dropdown">';
  navstring += '<a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">';
  navstring += '<i class="fas fa-flag"></i> Langue';
  navstring += '</a>';
  navstring += '<div class="dropdown-menu">';
  navstring += '<a class="dropdown-item active" href="#">Français</a>';
  navstring += '<a class="dropdown-item" href="#">Anglais</a>';
  navstring += '</div>';
  navstring += '</li>';
  navstring += '<li class="nav-item">';
  navstring += '<a class="nav-link" href="#">';
  navstring += '<i class="fas fa-sign-out-alt"></i> Changer de site</a>';
  navstring += '</li>';
  navstring += '</ul>';
  navstring += '</div>';
  navstring += '</nav>';


  document.getElementById("navstring").innerHTML = navstring;
}

init();