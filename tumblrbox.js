/*
 * tumblrbox - Lightbox effect for Tumblr
 * using FancyBox
 *
 * Copyright (c) 2011 Picuous
 *
 * Version: alpha
 *
 * Licensed under the MIT license
 *   http://www.opensource.org/licenses/mit-license.php
 */

;(function() {
  
  if(typeof(window.console) === "undefined" || typeof(window.console.log) === "undefined") {
    window.console = {
      debug: function() {},
      log: function() {},
      warn: function() {},
      error: function() {}
    }
  }
  console.debug('tumblrbox');
  
  // Global variables
  var otherlib = false;
  
  if(typeof jQuery != 'undefined') {
    console.debug('This page is already using jQuery v'+jQuery.fn.jquery);
  } else if (typeof $ == 'function') {
    console.debug('This page is using another $ library');
    otherlib = true;
  }
  
  // more or less stolen form jquery core and adapted by paul irish
  function load_file(url, success) {
    var script;
    if(url.match(/\.js$/)) {
      script = document.createElement('script');
      script.src = url;
      script.type = 'text/javascript';
    } else {
      script = document.createElement('link');
      script.rel = 'stylesheet';
      script.type = 'text/css';
      script.href = url;
    }
    var head = document.getElementsByTagName('head')[0],
        done = false;
    // Attach handlers for all browsers
    script.onload=script.onreadystatechange = function() {
      if(!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') ) {
        done = true;
        if(success) {
          success();
        }
        script.onload = script.onreadystatechange = null;
        //head.removeChild(script);
      }
    };
    head.appendChild(script);
  }
  load_file('http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js', function() {
    if(typeof jQuery=='undefined') {
      console.debug('Sorry, but jQuery wasn\'t able to load');
    } else {
      $ = jQuery.noConflict();
      console.debug('loaded '+$.fn.jquery);
      load_file('http://picuous.github.com/tumblrbox/lib/jquery.fancybox.min.js', function() {
        console.debug('loaded fancybox');
          var $pics = $('.post .media a>img').parent();
          $pics.fancybox({
            'type': 'image',
            'transitionIn': 'elastic',
            'transitionOut': 'elastic',
            'opacity': true,
            'titleShow': false,
            'padding': 0,
            'overlayShow': true
          });
          console.debug($pics.length+' pictures fancyboxed');
      });
    }
  });
  
  // Add CSS
  load_file('http://picuous.github.com/tumblrbox/lib/jquery.fancybox.css');
  
})();
