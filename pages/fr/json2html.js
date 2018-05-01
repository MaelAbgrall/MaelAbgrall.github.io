// Call our main function. Pass it a URI and a callback function
getData('http://fakedomain1234.com/userlist', writeData);

// Write some stuff to the p tag
//document.getElementById('output').innerHTML += 'show this before data ...';

// Define our main function
function getData(dataURI, callback) {

  // Normally you would actually connect to a server here.
  // We're just going to simulate a 3-second delay.
  var timer = setTimeout(function () {

    // Here's some data which we're pretending came from dataURI
    var dataArray = {
      "project1": {
        "name": " 1 st project",
        "description": "scanner 3D",
        "logo": "http://ethereum-classic-guide.readthedocs.io/en/latest/_images/cpp_35k9.png",
        "content": [
          {
            "type": "link",
            "data": "mylink",
            "linktext":"this is a link"
          },
          {
            "type": "img",
            "data": "mylink2"
          }
        ]
      },
      "project": {
        "name": "2nd project",
        "description": "scanner 3D",
        "logo": "data:image/jpeg;base64,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",
        "content": [
          {
            "type": "link",
            "data": "mylink3",
            "linktext":"this is a link"
          },
          {
            "type": "img",
            "data": "mylink4"
          }
        ]
      },
      "project3": {
        "name": "3rd project",
        "description": "scanner 3D",
        "logo": "http://ethereum-classic-guide.readthedocs.io/en/latest/_images/cpp_35k9.png",
        "content": [
          {
            "type": "link",
            "data": "mylink3"
          },
          {
            "type": "img",
            "data": "http://ethereum-classic-guide.readthedocs.io/en/latest/_images/cpp_35k9.png"
          }
        ]
      }
    };

    // run our callback function
    callback(dataArray);

  }, 3000);
}

function writeData(myObj) {
  var cardString = "";
  var modalString = "";

  for (item in myObj) {
    //CARDS
    cardString += '<div class="card" data-toggle="modal" data-target="#' + item + '">';
    cardString += '  <div class="card-body">';
    cardString += '    <h4 class="card-title">';
    cardString += '      <img class="card-img" src=" ' + myObj[item].logo + '"> ';
    cardString += myObj[item].name + '</h4>';
    cardString += '<p class="card-text"> ' + myObj[item].description + '</p>';
    cardString += '</div>';
    cardString += '</div>';


    //MODALS
    modalString += '<div class="modal fade" id="' + item + '">';
    modalString += '  <div class="modal-dialog modal-dialog-centered">';
    modalString += '    <div class="modal-content">';
    modalString += '      <div class="modal-header py-2">';
    modalString += '        <h4 class="modal-title">' + myObj[item].name + '</h4>';
    modalString += '        <button type="button" class="close" data-dismiss="modal">&times;</button>';
    modalString += '      </div>';
    modalString += '      <div class="modal-body d-flex flex-column">';



    for (var iteration = 0; iteration < myObj[item].content.length; iteration++) {

      if (myObj[item].content[iteration].type == 'link') {
        console.log("plop", myObj[item].content[iteration].data);

        modalString += '<a class="p-2" href="' + myObj[item].content[iteration].data + '"> ';
        modalString += myObj[item].content[iteration].linktext;
        modalString += '</a>';
      }

      if (myObj[item].content[iteration].type == 'img') {
        
        modalString += '<img class="img-fluid p-4" src="' + myObj[item].content[iteration].data +'" alt="' + myObj[item].content[iteration].data + '">';
      }

      if (myObj[item].content[iteration].type == 'title') {
        console.log("not plop");
      }

      if (myObj[item].content[iteration].type == 'text') {
        console.log("not plop");
      }

      if (myObj[item].content[iteration].type == 'customhtml') {
        console.log("not plop");
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