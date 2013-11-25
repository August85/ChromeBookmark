 
var bookmarkGenerator = {
  
 pushOnGAE : '',
 grabTheURL: function() {
   var url = document.URL;
   var req = new XMLHttpRequest();
   req.open("GET", this.pushOnGAE, true);
   req.onload = this.showLinks.bind(this);
   req.send(null);
 },
 
 showLinks: function(e) {
   // this function will have the received JSON object.
   // Iterate through the object and push the URLs on a display.
   
 }
  
};

// Run our bookmarkGenerator script as soon as the document's DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  bookmarkGenerator.grabTheURL();
});