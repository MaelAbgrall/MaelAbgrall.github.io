
function getData(dataURI, callback) {

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");

  xobj.open('GET', dataURI, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function writeData(myObj) {
  var cardString = "";
  var modalString = "";

  for (item in myObj) {
    //CARDS
    cardString += '<div class="card" data-toggle="modal" data-target="#' + item + '">';
    cardString += '  <div class="card-body">';
    cardString += '    <h3 class="card-title">';
    cardString += '      <img class="card-img" src=" ' + myObj[item].logo + '"> ';
    cardString += myObj[item].name + '</h3>';
    cardString += '<p class="card-text"> ' + myObj[item].description + '</p>';
    cardString += '</div>';
    cardString += '</div>';


    //MODALS
    modalString += '<div class="modal fade" id="' + item + '">';
    modalString += '  <div class="modal-dialog modal-dialog-centered modal-lg">';
    modalString += '    <div class="modal-content">';
    modalString += '      <div class="modal-header py-2">';
    modalString += '        <h4 class="modal-title">' + myObj[item].name + '</h4>';
    modalString += '        <button type="button" class="close" data-dismiss="modal">&times;</button>';
    modalString += '      </div>';
    modalString += '      <div class="modal-body d-flex flex-column h-100">';



    for (var iteration = 0; iteration < myObj[item].content.length; iteration++) {

      if (myObj[item].content[iteration].type == 'link') {
        modalString += '<a class="d-flex flex-column flex-grow" href="' + myObj[item].content[iteration].data + '"> ';
        modalString += myObj[item].content[iteration].linktext;
        modalString += '</a>';
      }

      if (myObj[item].content[iteration].type == 'img') {
        modalString += '<img class="img-card d-flex flex-column flex-grow" src="' + myObj[item].content[iteration].data + '" alt="' + myObj[item].content[iteration].data + '">';
      }

      if (myObj[item].content[iteration].type == 'title') {
        modalString += '<h4 class="d-flex flex-column flex-grow">' + myObj[item].content[iteration].data + '</h4>';
      }

      if (myObj[item].content[iteration].type == 'text') {
        modalString += '<p>' + myObj[item].content[iteration].data + '</p>';
      }

      if (myObj[item].content[iteration].type == 'html') {
        modalString += myObj[item].content[iteration].data;
      }

    }

    modalString += '      </div>';
    modalString += '      <div class="modal-footer">';
    modalString += '        <button type="button" class="btn custombtn-red" data-dismiss="modal">Close</button>';
    modalString += '      </div>';
    modalString += '    </div>';
    modalString += '  </div>';
    modalString += '</div>'



  }

  document.getElementById('spinner').style.display = "none";

  document.getElementById("cards").innerHTML = cardString;
  document.getElementById("modals").innerHTML = modalString;
}



function init() {
  var navstring = '';
  var urlpath;
  urlpath = window.location.pathname;
  urlparsed = urlpath.split("/");
  page = urlparsed.slice(-1)[0];

  if (page.indexOf("ducation") != -1) {
    jsonUrl = 'education.json';
  }
  if (page.indexOf("xperience") != -1) {
    jsonUrl = 'experience.json';
  }
  if (page.indexOf("rojet") != -1) {
    jsonUrl = 'projet.json';
  }
  if (page.indexOf("est") != -1) {
    jsonUrl = 'projet.json';
  }


  //from https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
  var loadedJSON;

  
  getData(dataURI=jsonUrl, function (response) {
    // Parse JSON string into object
    loadedJSON = JSON.parse(response);
    writeData(loadedJSON);
  });
}

init();