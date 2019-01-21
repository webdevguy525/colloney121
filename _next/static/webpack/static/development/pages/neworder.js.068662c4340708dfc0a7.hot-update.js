webpackHotUpdate("static/development/pages/neworder.js",{

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
  }, "#234")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: _objectSpread({}, sectionTitle),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, sectionTitle.content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: _objectSpread({}, sectionTitle1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, sectionTitle1.content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: _objectSpread({}, sectionTitle2),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, sectionTitle2.content)));
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
    verticalAlign: 'middle',
    width: '40px',
    height: '40px',
    border: '1px solid',
    borderColor: '#ffdb45',
    borderRadius: '20px '
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

/***/ })

})
//# sourceMappingURL=neworder.js.068662c4340708dfc0a7.hot-update.js.map