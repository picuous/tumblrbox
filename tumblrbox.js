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
  
  // Track - http://remysharp.com/2009/02/27/analytics-for-bookmarklets-injected-scripts/
  function gaTrack(g,h,i){function c(e,j){return e+Math.floor(Math.random()*(j-e))}var f=1000000000,k=c(f,9999999999),a=c(10000000,99999999),l=c(f,2147483647),b=(new Date()).getTime(),d=window.location,m=new Image(),n='http://www.google-analytics.com/__utm.gif?utmwv=1.3&utmn='+k+'&utmsr=-&utmsc=-&utmul=-&utmje=0&utmfl=-&utmdt=-&utmhn='+h+'&utmr='+d+'&utmp='+i+'&utmac='+g+'&utmcc=__utma%3D'+a+'.'+l+'.'+b+'.'+b+'.'+b+'.2%3B%2B__utmb%3D'+a+'%3B%2B__utmc%3D'+a+'%3B%2B__utmz%3D'+a+'.'+b+'.2.2.utmccn%3D(referral)%7Cutmcsr%3D'+d.host+'%7Cutmcct%3D'+d.pathname+'%7Cutmcmd%3Dreferral%3B%2B__utmv%3D'+a+'.-%3B';m.src=n}
  gaTrack('UA-19333053-5', 'picuous.github.com', '/tumblrbox/tumblrbox.js');
  
  // Global variables
  var otherlib = false;
  
  if(typeof jQuery != 'undefined') {
    //console.debug('This page is already using jQuery v'+jQuery.fn.jquery);
  } else if (typeof $ == 'function') {
    //console.debug('This page is using another $ library');
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
        
        var $tumblr_pics = $('a[href*="http://www.tumblr.com/photo"]>img[src*="media.tumblr.com"]').parent();
        $tumblr_pics.fancybox({
          'type': 'image',
          'transitionIn': 'elastic',
          'transitionOut': 'elastic',
          'opacity': true,
          'padding': 0,
          'overlayOpacity':	0.95,
          'overlayColor': '#111',
          'showCloseButton': false,
          'hideOnContentClick': true,
          'onComplete': function() {
            $('#fancybox-title').after('<a id="powered_by_tumblrbox" href="http://picuous.github.com/tumblrbox" target="_blank"><img src="http://picuous.github.com/tumblrbox/css/img/powered_by.png" alt="powered by Tumblrbox" /></a>');
            setTimeout(function() { $('#powered_by_tumblrbox').fadeIn() }, 500);
          },
          'onCleanup': function() {
            $('#powered_by_tumblrbox').fadeOut(100, function() {
              $(this).remove();
            });
          }
        });
        console.debug($tumblr_pics.length+' tumblr pictures tumblrboxed');
        
        // Make it more responsive over click intents
        $tumblr_pics.hover(function() {
          (new Image()).src = $(this).attr('href');
        });
        
        // Flickr doesn't allow displaying its content as in an iframe
        /*var $flickr_pics = $('a[href*="http://www.flickr.com/photos"]>img[src*="media.tumblr.com"]').parent();
        $flickr_pics.fancybox({
          'type': 'iframe',
          'transitionIn': 'elastic',
          'transitionOut': 'elastic',
          'opacity': true,
          'titleShow': false,
          'padding': 0,
          'overlayShow': true
        });
        console.debug($flickr_pics.length+' flickr pictures tumblrboxed');*/
      });
    }
  });
  
  // Add CSS
  load_file('http://picuous.github.com/tumblrbox/lib/jquery.fancybox.css');
  
})();
