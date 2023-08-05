/*
 * Методи об'єкта та this при звернені до властивостей в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

const topPlaylist = {
    name: "Мій плейлист",
    rating: 5,
    tracks: ["track-1", "track-2", "track-3"],
    play: true,
    trackCount: 3,

    addTracks(track){
       this.tracks.push(track) 
    },
    changeRating(newRating){
        this.rating = newRating;
    },
    getTrackCount(){
        return this.tracks.length;
    },
    changeName(newName){
        this.name = newName;
    }
};

console.table(topPlaylist.tracks)

topPlaylist.addTracks('track-4')
topPlaylist.changeRating(1)
topPlaylist.changeName('Playlist-1')
console.table(topPlaylist.tracks)

console.log("New rating:", topPlaylist.rating);

console.log(`Маємо ${topPlaylist.getTrackCount()} трека`);
topPlaylist.changeName('Playlist-2')
console.log(topPlaylist.name);