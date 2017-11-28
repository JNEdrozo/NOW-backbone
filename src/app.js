// Vendor Modules
import $ from 'jquery';
import _ from 'underscore';

// CSS
import './css/foundation.css';
import './css/style.css';

// Models
import Song from './models/song';

// Collections
import SongList from './collections/song_list';

// Initial Set Up
console.log('it loaded!');

// Songs
const songData = [
  {
    title: "Drop It Like It's Hot",
    year: 2004,
    artist: "Snoop Dog"
  }, {
    title: "Why Are There Boundaries",
    year: 2017,
    artist: "FKJ"
  }, {
    title: "Cant Wait",
    year: 2017,
    artist: "Millic"
  }, {
    title: "Serendipity",
    year: 2017,
    artist: "BTS"
  }
];

// Create an instance of Song
const song1 = new Song ({
  title: "Silver Lining",
  year: 2016,
  artist: "S. Mars"
});
console.log(song1);

// Add song1 to song collection
const songList = new SongList(songData);
songList.add(song1);
console.log(songList);

// View the Collection Data
const render = function render(songList) {
  const $songList = $('#song-list');

  songList.each((song) => {
    $songList.append(songTemplate(song.attributes));
  });
};


//WHY DO WE DECLARE IT OUTSIDE OF DOC READY?
let songTemplate;

$(document).ready( () => {
  songTemplate = _.template($('#song-template').html());

  $('#song-list').append(songTemplate(song1.attributes));

  render(songList);
});

// $(document).ready(() => {
//   bookTemplate = _.template($('#book-template').html());
//
//   $('#book-list').append(bookTemplate( {
//     title: 'You Dont Know JS',
//     author: 'Kyle Sim',
//     publication_year: 2008,
//   }));
//
//   $('#book-list').append(bookTemplate(codingInterview.attributes));
//
//   $('#book-list').append(bookTemplate(codingInterview.toJSON()));
//
//   render(bookList);
//
// });
