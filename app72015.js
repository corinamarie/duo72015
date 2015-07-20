$(document).ready(function() { 
var horiz = $( "#path" ).width() - 20,
  vert = $( "#path" ).height() - 20;
 
var btns = {
  bstt: function() {
    $( "div.box" ).stop( true, true );
  },
  bs: function() {
    $( "div.box" ).stop();
  },
  bsft: function() {
    $( "div.box" ).stop( false, true );
  },
  bf: function() {
    $( "div.box" ).finish();
  },
  bcf: function() {
    $( "div.box" ).clearQueue().finish();
  },
  bsff: function() {
    $( "div.box" ).stop( false, false );
  },
  bstf: function() {
    $( "div.box" ).stop( true, false );
  },
  bcs: function() {
    $( "div.box" ).clearQueue().stop();
  }
};
 
$( "button.b" ).on( "click", function() {
  btns[ this.id ]();
});
 
$( "#go" ).on( "click", function() {
  $( ".box" )
    .clearQueue()
    .stop()
    .css({
      left: 10,
      top: 10
    })
    .animate({
      top: vert
    }, 3000 )
    .animate({
      left: horiz
    }, 3000 )
    .animate({
      top: 10
    }, 3000 );
});

});