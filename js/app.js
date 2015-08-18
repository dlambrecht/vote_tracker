'use strict'; //makes it more compatible

var photoArray;
//Photo Constructor
// will display images in webpage as clickable
// need to keep track of votes
// need to find path - location of
var Photo = function (fileLocation) {
  this.path = fileLocation;
  this.votes = 0;
}
 Photo.prototype.highlight = function () {
 // highlight a color around the photo
}

////Instantiate each photo object



//Tracker Object

var Tracker = function () {
}

 Tracker.prototype.waitingForVote = function () {
  //This looks like State waiting for Vote
  //receive the click and increment the vote count
  //increment the vote count
  //event listener on each photo
  //highlight = function ()
  //drawTheChart = function ()
 }

Tracker.prototype.getRandomInt = function() {  //picks two a random pic to display
// select two random elements from the photo array
console.log("random", Math.floor((Math.random() * (13 - 0) +1) +0));
 // var rand = Math.floor((Math.random() * (13 - 0) +1) +0);
 // var rightPhoto = photoArray[rand];
 // var leftPhoto = photoArray[rand];
}

var Election = function(leftImg, rightImg) {
  this.leftImg = leftImg;
  this.rightImg = rightImg;
  this.tracker = new Tracker();

}



var CutestKitten = function() {
  this.elections = [];
  for (var i = 1; i <= 13; i = i + 2){
    this.elections.push(new Election("img/kitten/kit" + i + ".jpg", "img/kitten/kit" + (i + 1) + ".jpg"));
  }
  this.displayElection(this.elections[0]);
  var _this = this;
  document.getElementById("vote").addEventListener('click', function(){
    _this.nextElection();
  });
}
CutestKitten.prototype.nextElection = function (election) {
  var random = Math.floor(Math.random() * this.elections.length);
  this.displayElection(this.elections[random]);
}

CutestKitten.prototype.displayElection = function (election) {
  this.currentElection = election;
  document.getElementById('leftImg').setAttribute('src', election.leftImg);
  document.getElementById('rightImg').setAttribute('src', election.rightImg);
}

var cutestKitten = new CutestKitten();










//Display.prototype.displayPhotos = function () {
  //display the random photo
  //document.writeElementById
  //prevent picking same photo twice
  // do an if then statement if(photo1 === photo2), then re-roll
//}

//}
//some document get.ElementById = variables to access and manipulate
// the document (html page)
//};

