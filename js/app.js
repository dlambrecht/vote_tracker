'use strict'; //makes it more compatible

var photoArray;
//Photo Constructor
// will display images in webpage as clickable
// need to keep track of votes
// need to find path - location of
var Photo = function (fileLocation) {
  this.path = fileLocation;
  this.votes = 1; //each photo starts with 1 vote
  // this.index = //where it lives in the photoArray
  //             // not sure if we need this
}

//Instantiate each photo object
var photo0 = new Photo ("img/kitten/kit01.jpg",1);
var photo1 = new Photo ("img/kitten/kit02.jpg",1);
var photo2 = new Photo ("img/kitten/kit03.jpg",1);
var photo3 = new Photo ("img/kitten/kit04.jpg",1);
var photo4 = new Photo ("img/kitten/kit05.jpg",1);
var photo5 = new Photo ("img/kitten/kit06.jpg",1);
var photo6 = new Photo ("img/kitten/kit07.jpg",1);
var photo7 = new Photo ("img/kitten/kit08.jpg",1);
var photo8 = new Photo ("img/kitten/kit09.jpg",1);
var photo9 = new Photo ("img/kitten/kit10.jpg",1);
var photo10 = new Photo ("img/kitten/kit11.jpg",1);
var photo11 = new Photo ("img/kitten/kit12.jpg",1);
var photo12 = new Photo ("img/kitten/kit13.jpg",1);
var photo13 = new Photo ("img/kitten/kit14.jpg",1);

//Filling Array with the photo objects

var photoArray = [ {photo0}, {photo1}, {photo2}, {photo3}, {photo4}, {photo5},
                   {photo6}, {photo7}, {photo8}, {photo9}, {photo10}, {photo11},
                   {photo12}, {photo13} ]


//Tracker Object

var Tracker = function () {

 Photo.prototype.highlight = function () {
 // highlight a color around the photo
}

 Tracker.prototype.waitingForVote = function () {
  //This looks like State waiting for Vote
  //receive the click and increment the vote count
  //increment the vote count
  //event listener on each photo
  //highlight = function ()
  //drawTheChart = function ()
 }

Tracker.prototype.getRandonInt = function() {  //picks two a random pic to display
// select two random elements from the photo array

Display.prototype.displayPhotos = function () {
  //display the random photo
  document.writeElementById
  //prevent picking same photo twice
  // do an if then statement if(photo1 === photo2), then re-roll
}

}
//some document get.ElementById = variables to access and manipulate
// the document (html page)
};

