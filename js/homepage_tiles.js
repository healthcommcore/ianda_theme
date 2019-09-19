/**
 * @file
 * Homepage tile height equalizer
 *
 */
(function($) {

  $(document).ready( function() {
    if(window.innerWidth <= 767) {
      return false;
    }

    var homepage_tiles = $(".homepage-tile");
    if (homepage_tiles.length === 0) {
      return false;
    }

// Loop through all homepage tiles, add all tile heights
// to an array, return the largest height value
    var getTallestTile = function(homepage_tiles) {
      var tallest = [];
      homepage_tiles.map( function(i, tile) {
        tallest.push(tile.offsetHeight);
      });
      return tallest.sort().pop();
    }

// Get the largest tile height value, then assign it to 
// all homepage tiles
    var tile_height = getTallestTile(homepage_tiles);
    homepage_tiles.map( function(i, tile) {
      tile.style.height = tile_height + "px";
    });
  });
})(jQuery);
