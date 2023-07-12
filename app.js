// This is the JavaScript code for the SPA application.

var content = document.getElementById('content');

var routes = {
  '/': function() {
    content.innerHTML = 'This is the home page.';
  },
  '/about': function() {
    content.innerHTML = 'This is the about page.';
  },
  '/contact': function() {
    content.innerHTML = 'This is the contact page.';
  }
};

var router = function(event) {
  var route = event.target.href;
  var handler = routes[route];
  if (handler) {
    handler();
  }
};

document.addEventListener('click', router);
