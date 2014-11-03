// as per http://www.html5rocks.com/en/tutorials/appcache/beginner/

// Check if a new cache is available on page load.
window.addEventListener('load', function(e) {

  window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      // Browser downloaded a new app cache.
      if (confirm('A new version of this app is available. Load it?')) {
        window.location.reload();
      }
    } else {
      // Manifest didn't change. Nothing new to serve.
    }
  }, false);

}, false);
