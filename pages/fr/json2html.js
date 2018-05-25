
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
  var itemnb, inneriteration;

  for (item in myObj) {
    //CARDS
    cardString += '<div class="col-sm-6 col-md-4 col-lg-4 mt-4">';
    cardString += '  <div class="card">';
    cardString += '    <a class="modal-link" data-toggle="modal" href="#' + item + '">';
    cardString += '      <div class="card-block">';
    cardString += '        <h5 class="card-title">';
    cardString += '          <img class="card-img" src=" ' + myObj[item].logo + '"> ';
    cardString += myObj[item].name + '</h5>';
    cardString += '        <div class="card-text"> ' + myObj[item].description + '</div>';
    cardString += '      </div>';
    cardString += '      <div class="card-footer">';
    cardString += '        <span class="float-right">' + myObj[item].datenum + '</span>';
    cardString += '        <span>';
    cardString += myObj[item].datestart;
    cardString += '          <br>';
    cardString += myObj[item].dateend;
    cardString += '        </span>';
    cardString += '      </div>';
    cardString += '    </a>';
    cardString += '  </div>';
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
        modalString += '<img class="img-modal d-flex flex-column flex-grow" src="' + myObj[item].content[iteration].data + '" alt="' + myObj[item].content[iteration].data + '">';
      }

      if (myObj[item].content[iteration].type == 'smallimg') {
        modalString += '<img class="smallimg-modal d-flex flex-column flex-grow" src="' + myObj[item].content[iteration].data + '" alt="' + myObj[item].content[iteration].data + '">';
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

      if (myObj[item].content[iteration].type == 'vid') {
        //modalString += '<iframe width="100%" class="py-8" src="' + myObj[item].content[iteration].data + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
        modalString += '<a href="' + myObj[item].content[iteration].data + '">video</a>';
      }

      if (myObj[item].content[iteration].type == 'ullist') {
        itemnb = myObj[item].content[iteration].data.length;
        modalString += ' <ul>'
        for (inneriteration = 0; inneriteration < itemnb; inneriteration++) {
          modalString += ' <li>' + myObj[item].content[iteration].data[inneriteration] + '</li>';
        }
        modalString += '</ul>';
      }

      if (myObj[item].content[iteration].type == 'toggle') {
        modalString += '<button type="button" class="btn btn-danger btn-block" data-toggle="collapse" data-target="#' + myObj[item].content[iteration].data[0] + '">' + myObj[item].content[iteration].data[0] + '</button>';
        modalString += '<div id="' + myObj[item].content[iteration].data[0] + '" class="collapse">';
        modalString += myObj[item].content[iteration].data[1];
        modalString += '</div>';
      }

      if (myObj[item].content[iteration].type == 'toggleopen') {
        modalString += '<button type="button" class="btn btn-danger btn-block" data-toggle="collapse" data-target="#' + myObj[item].content[iteration].data + '">' + myObj[item].content[iteration].data + '</button>';
        modalString += '<div id="' + myObj[item].content[iteration].data + '" class="collapse">';
      }

      if (myObj[item].content[iteration].type == 'toggleclose') {
        modalString += '</div>';
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
    jsonUrl = 'education.json';
  }


  //from https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
  var loadedJSON;


  getData(dataURI = jsonUrl, function (response) {
    // Parse JSON string into object
    loadedJSON = JSON.parse(response);
    writeData(loadedJSON);
  });
}

init();