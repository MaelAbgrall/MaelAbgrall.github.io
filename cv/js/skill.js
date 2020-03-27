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

function generateDropDownCards(myObj, modalString){
    //drop down button
    modalString += '<button type="button" class="btn btn-danger btn-block skilltogl" data-toggle="collapse" data-target="#' + item + '">' + myObj[item].title + '</button>';
    modalString += '<div id="' + item + '" class="collapse col-12">';
    modalString += '<br>';
    modalString += '<p>' + myObj[item].description + '</p>';
    //generate a card column
    //modalString += '<div class="card-columns">';
    modalString += '<div class="row m-3">'

    //for each content in the json file
    for (var iteration = 0; iteration < myObj[item].content.length; iteration++) {
        //create card
        modalString += '<div class="card col-6 col-md-4 col-lg-2 border-0 p-0">';
        modalString += '  <div class="card-body text-center">'
        modalString += '    <img class="img-fluid" src="' + myObj[item].content[iteration].logo + '" alt="' + myObj[item].content[iteration].logo + '" style="height:65px;">';
        modalString += '    <p class="card-text">' //text box
        //modalString += '      <div class="progress-bar progress ' + myObj[item].content[iteration].color + '" style="width:100%">' + myObj[item].content[iteration].skill + '</div>';
        modalString += '      <div class="card skilltext ' + myObj[item].content[iteration].color + ' border-0">' + myObj[item].content[iteration].skill + '</div>';
        
        modalString += '    </p>' //clode text box
        modalString += '  </div>'; //close card body
        modalString += '</div>'; //close card
    }
    //close card column
    modalString += '</div>';

    //close collapse
    modalString += '</div><br>';
    return modalString;
}

function writeData(myObj) {
    var modalString = ''; //creating row

    for (item in myObj) {
        // if it's a section title
        if(myObj[item].type == "title"){
            modalString += '<br><h4>' + myObj[item].text + '</h4>'
        }

        //if it's a drop down
        if(myObj[item].type == "dropdown"){
            modalString = generateDropDownCards(myObj, modalString);
        }
    }

    //modalString += '</div>'; //closing row

    //document.getElementById('spinner').style.display = "none";
    document.getElementById("bars").innerHTML = modalString;
}



function init() {
    var jsonUrl = '../database/skill.json';


    //from https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
    var loadedJSON;


    getData(dataURI = jsonUrl, function (response) {
        // Parse JSON string into object
        loadedJSON = JSON.parse(response);
        writeData(loadedJSON);
    });
}

init();