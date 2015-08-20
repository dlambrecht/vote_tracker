// 6372bb21c05054d ID
// 8221ff1296e23e34a79418ce3279e9b2c84a4153 SECRET
// Authorization: Client-ID YOUR_CLIENT_ID (send an authorization 
// header with your client_id in your requests
'use strict'

var Photo = function(fileLocation, startVotes) {
	this.path  = fileLocation;
	this.votes = startVotes;
};

var Tracker = function() {
  // array of Photo objects - filled in by initializeData()
  this.photos = [];
  
  // maximum number of photos
  this.maxPhotos = 14;
  
  // handle to the left Photo instance
  this.leftPhoto = null;
  
  // handle to the right Photo instance
  this.rightPhoto = null;
  
  $('#leftImg').on('click', $.proxy(this.leftImgClicked, this));
  $('#rightImg').on('click', $.proxy(this.rightImgClicked, this));
  $('#next').on('click', $.proxy(this.showNextPair, this));
};

Tracker.prototype.initializeLocalData = function() {
  for(var i = 0; i < this.maxPhotos; i++) {
    var photo = new Photo('img/kitten/kit' + (i + 1) + '.jpg', 0);
    this.photos.push(photo);
    
  }
};

Tracker.prototype.initializeImgurData = function() {
  $.ajax ( {
    url: 'https://api.imgur.com/3/album/DDoWy',
    method: 'GET',
    headers: {
      'Authorization': 'Client-ID 6372bb21c05054d'
    }
  })
  .done($.proxy(function(res) {
    for (var i = 0; i < res.data.images.length; i++) {
      var photo = new Photo(res.data.images[i].link, 0);
      this.photos.push(photo);
    }
    this.showNextPair();
  }, this))
  .fail(function(err) {
    console.log(err);
  });
};


Tracker.prototype.leftImgClicked = function() {
  $('#leftImg').addClass('highlight');
  this.leftPhoto.votes++;
 
}

Tracker.prototype.rightImgClicked = function() {
  $('#rightImg').addClass('highlight');
  this.rightPhoto.votes++;
 
}

// Return: random index into photos array
Tracker.prototype.generateRandom = function() {
	return Math.floor(Math.random() * this.photos.length);
};

// Return random photo object from the photo array
Tracker.prototype.randomPhoto = function() {
  return this.photos[this.generateRandom()];
};

Tracker.prototype.showNextPair = function() {
  this.leftPhoto = this.randomPhoto();
  this.rightPhoto = this.randomPhoto();
  while (this.leftPhoto === this.rightPhoto) {
    this.rightPhoto = this.randomPhoto();
  }
	$('#leftImg').attr('src', this.leftPhoto.path);
  $('#rightImg').attr('src', this.rightPhoto.path);
  $('#leftImg').removeClass('highlight');
  $('#rightImg').removeClass('highlight');
};


$(document).ready(function() {

  var tracker = new Tracker();
  tracker.initializeImgurData();
});
