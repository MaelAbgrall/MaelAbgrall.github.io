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
  var modalString = "";

  for (item in myObj) {
    //CARDS
    //cardString += '<div class="col-sm-6 col-md-4 col-lg-4 mt-4">';
    modalString += '<button type="button" class="btn btn-danger btn-block skilltogl" data-toggle="collapse" data-target="#' + item + '">' + myObj[item].title + '</button>';
    modalString += '<div id="' + item + '" class="collapse">';
    modalString += '<br>';
    modalString += '<p>' +  myObj[item].description + '</p>';

    
    for (var iteration = 0; iteration < myObj[item].content.length; iteration++) {
      modalString += '<div class="row">';
      modalString += '  <div class="col-md-2">';
      modalString += '    <img class="img-responsive" src="' + myObj[item].content[iteration].logo + '" alt="' + myObj[item].content[iteration].logo + '" style="height:65px;">';
      modalString += '  </div>';
      modalString += '  <div class="col-md-10">';
      modalString += '    <div class="progress">';
      modalString += '      <div class="progress-bar ' + myObj[item].content[iteration].color + '" role="progressbar" style="width:' + myObj[item].content[iteration].percentage + '%">' + myObj[item].content[iteration].skill + '</div>';
      modalString += '    </div>';
      modalString += '  </div>';
      modalString += '</div>';
    }
    modalString += '</div><br>';
  }

  //document.getElementById('spinner').style.display = "none";
  document.getElementById("bars").innerHTML = modalString;
}



function init() {
  var jsonUrl = 'skill.json';


  //from https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
  var loadedJSON;


  getData(dataURI = jsonUrl, function (response) {
    // Parse JSON string into object
    loadedJSON = JSON.parse(response);
    writeData(loadedJSON);
  });
}

init();