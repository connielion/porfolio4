

  M.AutoInit();


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
     var instances = M.Sidenav.init(elems, {
       draggable: true,
       preventScrolling: true
     });

   var elems = document.querySelectorAll('.fixed-action-btn');
   var instances = M.FloatingActionButton.init(elems,
     {
       direction: 'left',
       hoverEnabled: false
     }
   );
   var elems = document.querySelectorAll('.carousel');
   var instances = M.Carousel.init(elems, {
     fullWidth: true,
     indicators: true,
     duration: 200,
   });

  var elem = document.querySelector('.collapsible.expandable');
  var instance = M.Collapsible.init(elem, {
    accordion: false
  });
 });
