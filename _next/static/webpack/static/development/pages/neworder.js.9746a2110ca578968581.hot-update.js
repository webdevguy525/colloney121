webpackHotUpdate("static/development/pages/neworder.js",{

/***/ "./containers/NewOrder/PayListSection/featureSection.style.js":
/*!********************************************************************!*\
  !*** ./containers/NewOrder/PayListSection/featureSection.style.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");

var PayListSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "featureSectionstyle__PayListSectionWrapper",
  componentId: "sc-1iax2sa-0"
})(["padding:0px 0 0px;.feature__block{position:relative;height:100%;transition:box-shadow 0.3s ease;.icon__wrapper{position:relative;background:transperent;.flaticon-flask{&:before{margin-left:8px;}}&:before{transform:rotate(45deg);background-color:rgba(255,255,255,0.15);}&:after{transform:rotate(-45deg);background-color:rgba(0,0,0,0.05);}}&:hover{box-shadow:0 40px 90px -30px rgba(39,79,117,0.2);cursor:pointer;}}.row{> .col{&:nth-child(1){.feature__block{.icon__wrapper{color:#29cf8a;transition:all 0.6s ease;}}&:hover{.feature__block{.icon__wrapper{background:#29cf8a;color:#fff;border:0;}}}}&:nth-child(2){.feature__block{.icon__wrapper{color:#ff86ab;transition:all 0.6s ease;}}&:hover{.feature__block{.icon__wrapper{background:#ff86ab;color:#fff;border:0;}}}}&:nth-child(3){.feature__block{.icon__wrapper{color:#ff9000;transition:all 0.6s ease;}}}&:hover{.feature__block{.icon__wrapper{background:#ff9000;color:#fff;}}}}}"]);
/* harmony default export */ __webpack_exports__["default"] = (PayListSectionWrapper);

/***/ }),

/***/ "./containers/NewOrder/PayListSection/index.js":
/*!*****************************************************!*\
  !*** ./containers/NewOrder/PayListSection/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var _components_FeatureBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/FeatureBlock */ "./components/FeatureBlock/index.js");
/* harmony import */ var _data_App_FeatureSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/App/FeatureSection */ "./data/App/FeatureSection/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UI/Container */ "./components/UI/Container/index.js");
/* harmony import */ var _featureSection_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./featureSection.style */ "./containers/NewOrder/PayListSection/featureSection.style.js");
var _jsxFileName = "/Users/admin1/Desktop/superProps/packages/landing/containers/NewOrder/PayListSection/index.js";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var PayListSection = function PayListSection(_ref) {
  var row = _ref.row,
      col = _ref.col,
      sectionHeader = _ref.sectionHeader,
      sectionTitle = _ref.sectionTitle,
      sectionTitle1 = _ref.sectionTitle1,
      sectionTitle2 = _ref.sectionTitle2,
      sectionSubTitle = _ref.sectionSubTitle,
      featureTitle = _ref.featureTitle,
      featureDescription = _ref.featureDescription,
      iconStyle = _ref.iconStyle,
      contentStyle = _ref.contentStyle,
      blockWrapperStyle = _ref.blockWrapperStyle,
      featureStyle = _ref.featureStyle;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_featureSection_style__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: sectionHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: _objectSpread({}, sectionTitle),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, sectionTitle.content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: _objectSpread({}, sectionTitle1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, sectionTitle1.content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: _objectSpread({}, sectionTitle2),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, sectionTitle2.content))));
}; // FeatureSection style props


PayListSection.propTypes = {
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  sectionTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  sectionSubTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  featureTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  featureDescription: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
}; // FeatureSection default style

PayListSection.defaultProps = {
  // section header default style
  sectionHeader: {
    // mb: ['30px', '30px', '30px', '56px'],
    display: 'flex',
    alignItems: 'center',
    verticalAlign: 'middle',
    width: '768px',
    height: '88px',
    border: '1px solid',
    borderColor: '#d9d9da',
    borderRadius: '5px 5px 0px 0px ',
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "yellow"
  },
  sectionTitle: {
    paddingLeft: "30px",
    content: 'Dernières commandes',
    fontSize: ['12px', '16px', '16px', '16px', '18px'],
    fontWeight: '400',
    color: '#2B313D',
    width: "100%",
    letterSpacing: '-0.025em' // textAlign: ['center'],

  },
  sectionTitle1: {
    content: 'En cours de validation',
    fontSize: ['10px', '12px', '12px', '12px', '14px'],
    fontWeight: '400',
    color: '#949FB7',
    width: "100%",
    letterSpacing: '-0.025em',
    textAlign: 'right'
  },
  sectionTitle2: {
    paddingRight: "30px",
    content: 'Validées',
    fontSize: ['10px', '12px', '12px', '12px', '14px'],
    fontWeight: '400',
    color: '#2B313D',
    letterSpacing: '-0.025em',
    width: "30%",
    textAlign: 'right' // textAlign: ['center'],

  },
  featureStyle: {},
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '20px'],
    letterSpacing: '-0.020em'
  },
  // sub section default style
  sectionSubTitle: _defineProperty({
    content: 'OUR SERVICES',
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.13em',
    fontWeight: '700',
    color: '#1a73e8',
    mb: '10px'
  }, "textAlign", ['center']),
  // section title default style
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap'
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 3, 1 / 3, 1 / 3]
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['20px', '20px', '20px', '40px']
  },
  // feature icon default style
  iconStyle: {
    width: '84px',
    height: '84px',
    m: '0 auto',
    borderRadius: '50%',
    bg: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '36px',
    color: '#29cf8a',
    overflow: 'hidden',
    mb: ['20px', '20px', '20px', '30px'],
    border: '1px solid rgba(36, 74, 117,0.1)'
  },
  // feature content default style
  contentStyle: {
    textAlign: 'center'
  },
  // feature title default style
  // feature description default style
  featureDescription: {
    fontSize: ['14px', '15px'],
    lineHeight: '1.75',
    color: '#343d48'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (PayListSection);

/***/ }),

/***/ "./pages/neworder.js":
/*!***************************!*\
  !*** ./pages/neworder.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "../../node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-stickynode */ "../../node_modules/react-stickynode/index.js");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme_neworder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/neworder */ "./theme/neworder/index.js");
/* harmony import */ var _containers_NewOrder_app_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/NewOrder/app.style */ "./containers/NewOrder/app.style.js");
/* harmony import */ var _static_css_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/css/style */ "./static/css/style.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _containers_NewOrder_Navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../containers/NewOrder/Navbar */ "./containers/NewOrder/Navbar/index.js");
/* harmony import */ var _containers_NewOrder_Banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../containers/NewOrder/Banner */ "./containers/NewOrder/Banner/index.js");
/* harmony import */ var _containers_NewOrder_FeatureSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../containers/NewOrder/FeatureSection */ "./containers/NewOrder/FeatureSection/index.js");
/* harmony import */ var _containers_NewOrder_priceSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../containers/NewOrder/priceSection */ "./containers/NewOrder/priceSection/index.js");
/* harmony import */ var _containers_NewOrder_phoneSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../containers/NewOrder/phoneSection */ "./containers/NewOrder/phoneSection/index.js");
/* harmony import */ var _containers_NewOrder_paySection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../containers/NewOrder/paySection */ "./containers/NewOrder/paySection/index.js");
/* harmony import */ var _containers_NewOrder_titleSection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../containers/NewOrder/titleSection */ "./containers/NewOrder/titleSection/index.js");
/* harmony import */ var _containers_NewOrder_PayListSection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../containers/NewOrder/PayListSection */ "./containers/NewOrder/PayListSection/index.js");
/* harmony import */ var _containers_NewOrder_Control__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../containers/NewOrder/Control */ "./containers/NewOrder/Control/index.js");
/* harmony import */ var _containers_NewOrder_Testimonial__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../containers/NewOrder/Testimonial */ "./containers/NewOrder/Testimonial/index.js");
/* harmony import */ var _containers_NewOrder_PartnerHistory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../containers/NewOrder/PartnerHistory */ "./containers/NewOrder/PartnerHistory/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var _containers_NewOrder_PaymentSection__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../containers/NewOrder/PaymentSection */ "./containers/NewOrder/PaymentSection/index.js");
/* harmony import */ var _containers_NewOrder_Footer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../containers/NewOrder/Footer */ "./containers/NewOrder/Footer/index.js");
/* harmony import */ var _containers_NewOrder_FeatureSlider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../containers/NewOrder/FeatureSlider */ "./containers/NewOrder/FeatureSlider/index.js");
/* harmony import */ var _containers_NewOrder_FeatureSliderTwo__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../containers/NewOrder/FeatureSliderTwo */ "./containers/NewOrder/FeatureSliderTwo/index.js");
/* harmony import */ var react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-image-gallery/styles/css/image-gallery.css */ "../../node_modules/react-image-gallery/styles/css/image-gallery.css");
/* harmony import */ var react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../contexts/DrawerContext */ "./contexts/DrawerContext.js");
var _jsxFileName = "/Users/admin1/Desktop/superProps/packages/landing/pages/neworder.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





























function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth
  };
}

function useWindowSize() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getSize()),
      _useState2 = _slicedToArray(_useState, 2),
      windowSize = _useState2[0],
      setWindowSize = _useState2[1];

  function handleResize() {
    setWindowSize(getSize());
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return windowSize;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var size = true && useWindowSize();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: _theme_neworder__WEBPACK_IMPORTED_MODULE_5__["NewOrderTheme"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Calloney - Logiciel de reservations t\xE9l\xE9phoniques"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "Description",
    content: "React next landing page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#ec5555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "../static/css/flaticon.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,700",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_css_style__WEBPACK_IMPORTED_MODULE_7__["ResetCSS"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_NewOrder_app_style__WEBPACK_IMPORTED_MODULE_6__["GlobalStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_NewOrder_app_style__WEBPACK_IMPORTED_MODULE_6__["NewOrderWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stickynode__WEBPACK_IMPORTED_MODULE_4___default.a, {
    top: 0,
    innerZ: 9999,
    activeClass: "sticky-nav-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_26__["DrawerProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_NewOrder_Navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_NewOrder_Banner__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_NewOrder_FeatureSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_NewOrder_priceSection__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_NewOrder_phoneSection__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_NewOrder_paySection__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_NewOrder_titleSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_NewOrder_titleSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }))));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/neworder")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "../../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=neworder.js.9746a2110ca578968581.hot-update.js.map