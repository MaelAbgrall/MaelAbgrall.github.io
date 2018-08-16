/* too soon to use
function loadhtml(callback) {

  var xobj = new XMLHttpRequest();
  
  xobj.open('GET', "/cv/html/navbar.html", true);
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
  var footString = '';
  var currentTime = new Date();
  var year = currentTime.getFullYear();
  var urlpath;
  urlpath = window.location.pathname;
  urlparsed = urlpath.split("/");
  page = urlparsed.slice(-1)[0];


  navstring += '<nav class="navbar navbar-expand-lg py-1">';
  navstring += '  <a class="navbar-brand" href="../../cv/html/home.html">Mael Abgrall</a>';
  navstring += '  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">';
  navstring += '    <i class="fas fa-bars"></i>';
  navstring += '  </button>';
  navstring += '  <div class="collapse navbar-collapse" id="collapsibleNavbar">';
  navstring += '    <ul class="navbar-nav">';


  navstring += '      <li class="nav-item py-0">';
  if (page.indexOf("ome") != -1) {
    navstring += '      <a class="nav-link active" href="../../cv/html/home.html">';
  } else {
    navstring += '      <a class="nav-link" href="../../cv/html/home.html">';
  }
  navstring += '          <i class="fas fa-home"></i> Home</a>';
  navstring += '      </li>';


  navstring += '      <li class="nav-item py-0">';
  if (page.indexOf("ducation") != -1) {
    navstring += '      <a class="nav-link active" href="../../cv/html/education.html">';
  } else {
    navstring += '      <a class="nav-link" href="../../cv/html/education.html">';
  }
  navstring += '          <i class="fas fa-graduation-cap"></i> Education</a>';
  navstring += '      </li>';


  navstring += '      <li class="nav-item">';
  if (page.indexOf("xperience") != -1) {
    navstring += '      <a class="nav-link active" href="../../cv/html/experience.html">';
  } else {
    navstring += '      <a class="nav-link" href="../../cv/html/experience.html">';
  }
  navstring += '          <i class="fas fa-suitcase"></i> Experience</a>';
  navstring += '      </li>';


  navstring += '      <li class="nav-item">';
  if (page.indexOf("rojet") != -1) {
    navstring += '      <a class="nav-link active" href="../../cv/html/projet.html">';
  } else {
    navstring += '      <a class="nav-link" href="../../cv/html/projet.html">';
  }
  navstring += '          <i class="fas fa-lightbulb"></i> Projects</a>';
  navstring += '      </li>';


  navstring += '      <li class="nav-item">';
  if (page.indexOf("kill") != -1) {
    navstring += '      <a class="nav-link active" href="../../cv/html/skill.html">';
  } else {
    navstring += '      <a class="nav-link" href="../../cv/html/skill.html">';
  }
  navstring += '          <i class="fas fa-cogs"></i> Skills</a>';
  navstring += '      </li>';


  navstring += '      <li class="nav-item">';
  if (page.indexOf("obby") != -1) {
    navstring += '      <a class="nav-link active" href="../../cv/html/hobby.html">';
  } else {
    navstring += '      <a class="nav-link" href="../../cv/html/hobby.html">';
  }
  navstring += '          <i class="fas fa-map-signs"></i> Hobbies</a>';
  navstring += '      </li>';


  navstring += '      <li class="nav-item">';
  if (page.indexOf("ontact") != -1) {
    navstring += '      <a class="nav-link active" href="../../cv/html/contact.html">';
  } else {
    navstring += '      <a class="nav-link" href="../../cv/html/contact.html">';
  }
  navstring += '          <i class="fas fa-address-card"></i> Contact</a>';
  navstring += '      </li>';
  navstring += '    </ul>';




  navstring += '    <ul class="navbar-nav ml-auto">';
  /*navstring += '      <li class="nav-item dropdown">';
  navstring += '        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">';
  navstring += '          <i class="fas fa-flag"></i> Langue';
  navstring += '        </a>';
  navstring += '        <div class="dropdown-menu">';
  navstring += '          <a class="dropdown-item active" href="../../cv/html/home.html">htmlançais</a>';
  navstring += '          <a class="dropdown-item" href="../../cv/en/home.html">Anglais</a>';
  navstring += '        </div>';*/
  navstring += '      </li>';

  navstring += '      <li class="nav-item">';
  navstring += '        <a class="nav-link" href="../../index.html">';
  navstring += '          <i class="fas fa-sign-out-alt"></i> Change website</a>';
  navstring += '      </li>';
  navstring += '    </ul>';
  navstring += '  </div>';
  navstring += '</nav>';
  navstring += '<br>';


  document.getElementById("navstring").innerHTML = navstring;

  footString += '<hr>';
  footString += '<div class="footer d-flex justify-content-between mb-3">';
  footString += '  <div class="p-2">';
  footString += '    Mael Abgrall <i class="far fa-copyright"></i> 2010-' + year;
  footString += '  </div>';
  footString += '  <div class="p-2"></div>';
  footString += '  <div class="p-2">';
  footString += '    Connect with me';
  footString += '    <a href="https://www.linkedin.com/in/mael-abgrall-4010b3b5/" data-toggle="tooltip" title="Linkedin">';
  footString += '      <i class="fab fa-linkedin"></i>';
  footString += '    </a>';
  footString += '    <a href="https://github.com/MelAbgrall" data-toggle="tooltip" title="GitHub">';
  footString += '      <i class="fab fa-github"></i>';
  footString += '    </a>';
  footString += '  </div>';
  footString += '</div>';

  document.getElementById("footer").innerHTML = footString;
}

init();