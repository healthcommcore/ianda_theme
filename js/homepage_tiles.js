/**
 * @file
 * Homepage tile height equalizer
 *
 */
( ($) => {

  $(document).ready( () => {
    const homepage_tiles = $(".homepage-tile");
    if (homepage_tiles.length === 0) {
      return false;
    }

// Loop through all homepage tiles, add all tile heights
// to an array, return the largest height value
    const getTallestTile = (homepage_tiles) => {
      const tallest = [];
      homepage_tiles.map( (i, tile) => {
        tallest.push(tile.offsetHeight);
      });
      return tallest.sort().pop();
    }

// Get the largest tile height value, then assign it to 
// all homepage tiles
    const tile_height = getTallestTile(homepage_tiles);
    homepage_tiles.map( (i, tile) => {
      tile.style.height = tile_height + "px";
    });
  });
})(jQuery);
