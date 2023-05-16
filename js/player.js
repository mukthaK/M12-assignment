class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
    getAlbum = function(val){
        return this.albums[val];
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

window.addEventListener('load', () => {
    const albumsArr = [
        ['Green Day', 'Dookie'],
        ['The Beatles', 'Sergeant Pepper'],
        ['Metallica', 'Ride The Lightning'],
        ['Operation Ivy', 'Energy'],
        ['Blink 182', 'Dude Ranch'],
        ['New Found Glory', 'Sticks and Stones']
    ];
    const jbox = new Jukebox();
    let albums = document.getElementById('albums');
    let play = document.getElementById('play');
    let showFav = document.getElementById('showFav');
    let displayFavoriteAlbum = document.getElementById('favoriteAlbum');

    // Bind the array to the dropdown select list
    albumsArr.forEach(function (item, i) {
        // console.log(item, i);
        jbox.addAlbum(new Album(item[0], item[1]));
        let optionText = item[0] + ' : ' + item[1];
        let optionValue = i;
        albums.add(new Option(optionText, optionValue));
    });

    // Get the Album to play and display
    play.addEventListener('click', () => {
        //console.log(albums.value);
        jbox.getAlbum(albums.value).play();
        console.log(jbox.getAlbum(albums.value).display());
    });

    // Most played - Favorite album
    showFav.addEventListener('click', () => {
        displayFavoriteAlbum.innerHTML = jbox.favoriteAlbum();
    });
})
