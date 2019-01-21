webpackHotUpdate("styles",{

/***/ "../../node_modules/react-image-gallery/styles/css/image-gallery.css":
/*!******************************************************************************************************!*\
  !*** /Users/admin1/Desktop/superProps/node_modules/react-image-gallery/styles/css/image-gallery.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1548038593254");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.6f71962e992e3b160097.hot-update.js.map