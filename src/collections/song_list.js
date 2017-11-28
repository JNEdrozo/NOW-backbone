import Backbone from 'backbone';
import Song from '../models/song';

const SongList = Backbone.Collection.extend({
  model: Song
});

export default SongList;
