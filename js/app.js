///////////// Highlight navigation anchors on scroll to element

// Get link by section or article id
function getRelatedNavigation(el){
  return $('nav a[href=#'+$(el).attr('id')+']');
}

$('section')
   .waypoint(function(direction) {
     // Highlight element when related content
     // is 10% percent from the bottom... 
     // remove if below
     getRelatedNavigation(this).toggleClass('active', direction === 'down');
   }, {
     offset: '20%' // 
   })
   .waypoint(function(direction) {
     // Highlight element when bottom of related content
     // is 100px from the top - remove if less
     // TODO - make function for this
     getRelatedNavigation(this).toggleClass('active', direction === 'up');
   }, {
     offset: function() {  return -$(this).height() + 100; }
   });

///////////// Smooth scroll to elements
$('a').on('click',function(e){
  e.preventDefault();
  var h = $(this).attr("href");
  var i = h.substring(1);

  $('html,body').stop().animate({scrollTop:$("section[id='" + i + "']").offset().top - 0});
});



//////////// Contact box
//rolling over any of the buttons will animate the slide thing
$( "#contactbox > ul > li > a" ).mouseover(function(){
	$( this ).children(".bgroll").animate({width: '100%'},200);
});

//stops the animation on mouse roll out
$( "#contactbox > ul > li > a" ).mouseleave(function(){
	$( this ).children(".bgroll").stop(true).animate({width: '0%'},200);
});
