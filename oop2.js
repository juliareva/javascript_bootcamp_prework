function Player() {
    this.library = [];
    this.currentSongNum = 0;
}

Player.prototype.add = function (songName) {
    this.library.push(songName);
}

Player.prototype.play = function() {
    this.library[this.currentSongNum].play();
}

Player.prototype.next = function() {
    if (this.currentSongNum == this.library.length - 1) {
        this.currentSongNum = 0;
    } else {
    this.currentSongNum += 1;
    }
}

Player.prototype.previous = function() {
    if (this.currentSongNum == 0) {
        this.currentSongNum = this.library.length - 1
    } else {
    this.currentSongNum -= 1;
    }
}

function Track(artist, title, album) {
    this.artist = artist;
    this.title = title;
    this.album = album;
}

let player = new Player();


Track.prototype.play = function() {
    console.log(`Playing: ${this.title} by ${this.artist}`);
}

Player.prototype.setCurr = function(num) {
    this.currentSongNum = num;
}

Player.prototype.printAll = function() {
    console.log(this.library);
}

// player.add('drive');
// player.play();

// player.play(); // should print some track, ex: 'drive'
// player.add('La Bamba');
// player.next();
// player.play();
// // should print next track, in this example 'La Bamba'


let driveTrack = new Track('Incubus', 'Drive', 'Make Yourself');
let laBambaTrack = new Track('Ritchie Valens', 'La Bamba', 'La Bamba');

// instead of adding a string, we are actually adding a whole object
player.add(driveTrack);
player.add(laBambaTrack);

player.play()