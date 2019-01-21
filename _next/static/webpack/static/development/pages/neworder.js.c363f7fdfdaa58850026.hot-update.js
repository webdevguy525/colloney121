webpackHotUpdate('static/development/pages/neworder.js', {
  /***/ './containers/NewOrder/Navbar/index.js':
    /*!*********************************************!*\
  !*** ./containers/NewOrder/Navbar/index.js ***!
  \*********************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */ '../../node_modules/react/index.js'
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! prop-types */ '../../node_modules/prop-types/index.js'
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var reusecore_src_elements_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! reusecore/src/elements/Navbar */ '../../node_modules/reusecore/src/elements/Navbar/index.js'
      );
      /* harmony import */ var reusecore_src_elements_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! reusecore/src/elements/Drawer */ '../../node_modules/reusecore/src/elements/Drawer/index.js'
      );
      /* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! reusecore/src/elements/Button */ '../../node_modules/reusecore/src/elements/Button/index.js'
      );
      /* harmony import */ var reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! reusecore/src/elements/UI/Logo */ '../../node_modules/reusecore/src/elements/UI/Logo/index.js'
      );
      /* harmony import */ var _components_HamburgMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ../../../components/HamburgMenu */ './components/HamburgMenu/index.js'
      );
      /* harmony import */ var _components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ../../../components/ScrollSpyMenu */ './components/ScrollSpyMenu/index.js'
      );
      /* harmony import */ var _navbar_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ./navbar.style */ './containers/NewOrder/Navbar/navbar.style.js'
      );
      /* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! @redq/reuse-modal */ '../../node_modules/@redq/reuse-modal/es/index.js'
      );
      /* harmony import */ var _SearchPanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ../SearchPanel */ './containers/NewOrder/SearchPanel/index.js'
      );
      /* harmony import */ var _LoginModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! ../LoginModal */ './containers/NewOrder/LoginModal/index.js'
      );
      /* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
        /*! react-icons-kit */ '../../node_modules/react-icons-kit/index.js'
      );
      /* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(
        react_icons_kit__WEBPACK_IMPORTED_MODULE_12__
      );
      /* harmony import */ var react_icons_kit_ionicons_androidClose__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
        /*! react-icons-kit/ionicons/androidClose */ '../../node_modules/react-icons-kit/ionicons/androidClose.js'
      );
      /* harmony import */ var react_icons_kit_ionicons_androidClose__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(
        react_icons_kit_ionicons_androidClose__WEBPACK_IMPORTED_MODULE_13__
      );
      /* harmony import */ var _static_image_app_logo_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
        /*! ../../../static/image/app/logo.png */ './static/image/app/logo.png'
      );
      /* harmony import */ var _static_image_app_logo_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(
        _static_image_app_logo_png__WEBPACK_IMPORTED_MODULE_14__
      );
      /* harmony import */ var _static_image_neworder_portfolio_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
        /*! ../../../static/image/neworder/portfolio.png */ './static/image/neworder/portfolio.png'
      );
      /* harmony import */ var _static_image_neworder_portfolio_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(
        _static_image_neworder_portfolio_png__WEBPACK_IMPORTED_MODULE_15__
      );
      /* harmony import */ var _static_image_neworder_bell_none_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
        /*! ../../../static/image/neworder/bell_none.png */ './static/image/neworder/bell_none.png'
      );
      /* harmony import */ var _static_image_neworder_bell_none_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(
        _static_image_neworder_bell_none_png__WEBPACK_IMPORTED_MODULE_16__
      );
      /* harmony import */ var _static_image_neworder_bell_alert_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
        /*! ../../../static/image/neworder/bell_alert.png */ './static/image/neworder/bell_alert.png'
      );
      /* harmony import */ var _static_image_neworder_bell_alert_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(
        _static_image_neworder_bell_alert_png__WEBPACK_IMPORTED_MODULE_17__
      );
      /* harmony import */ var _contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
        /*! ../../../contexts/DrawerContext */ './contexts/DrawerContext.js'
      );
      /* harmony import */ var _data_App_MenuItems__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
        /*! ../../../data/App/MenuItems */ './data/App/MenuItems/index.js'
      );
      /* harmony import */ var react_avatar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
        /*! react-avatar */ '../../node_modules/react-avatar/es/index.js'
      );
      var _jsxFileName =
        '/Users/admin1/Desktop/superProps/packages/landing/containers/NewOrder/Navbar/index.js';

      function _extends() {
        _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

      var CloseModalButton = function CloseModalButton() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_4__['default'],
          {
            className: 'modalCloseBtn',
            variant: 'fab',
            onClick: function onClick() {
              return Object(
                _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_9__['closeModal']
              )();
            },
            icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'i',
              {
                className: 'flaticon-plus-symbol',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                },
                __self: this,
              }
            ),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26,
            },
            __self: this,
          }
        );
      };

      var CloseModalButtonAlt = function CloseModalButtonAlt() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_4__['default'],
          {
            className: 'modalCloseBtn alt',
            variant: 'fab',
            onClick: function onClick() {
              return Object(
                _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_9__['closeModal']
              )();
            },
            icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'i',
              {
                className: 'flaticon-plus-symbol',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                },
                __self: this,
              }
            ),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34,
            },
            __self: this,
          }
        );
      };

      var Navbar = function Navbar(_ref) {
        var navbarStyle = _ref.navbarStyle,
          logoStyle = _ref.logoStyle,
          buttonStyle = _ref.buttonStyle;

        var _useContext = Object(
            react__WEBPACK_IMPORTED_MODULE_0__['useContext']
          )(
            _contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_18__[
              'DrawerContext'
            ]
          ),
          state = _useContext.state,
          dispatch = _useContext.dispatch; // Search modal handler

        var handleSearchModal = function handleSearchModal() {
          Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_9__['openModal'])({
            config: {
              className: 'search-modal',
              disableDragging: true,
              default: {
                width: '100%',
                height: '100%',
                x: 0,
                y: 0,
              },
            },
            component: _SearchPanel__WEBPACK_IMPORTED_MODULE_10__['default'],
            componentProps: {},
            closeComponent: CloseModalButtonAlt,
            closeOnClickOutside: false,
          });
        }; // Authentication modal handler

        var handleLoginModal = function handleLoginModal() {
          Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_9__['openModal'])({
            config: {
              className: 'login-modal',
              disableDragging: true,
              default: {
                width: '100%',
                height: '100%',
                x: 0,
                y: 0,
              },
            },
            component: _LoginModal__WEBPACK_IMPORTED_MODULE_11__['default'],
            componentProps: {},
            closeComponent: CloseModalButton,
            closeOnClickOutside: false,
          });
        }; // Toggle drawer

        var toggleHandler = function toggleHandler() {
          dispatch({
            type: 'TOGGLE',
          });
        };

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          reusecore_src_elements_Navbar__WEBPACK_IMPORTED_MODULE_2__['default'],
          _extends({}, navbarStyle, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89,
            },
            __self: this,
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _navbar_style__WEBPACK_IMPORTED_MODULE_8__['Container'],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 90,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_5__[
                'default'
              ],
              {
                href: '#',
                logoSrc:
                  _static_image_app_logo_png__WEBPACK_IMPORTED_MODULE_14___default.a,
                title: 'New Order',
                logoStyle: logoStyle,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                },
                __self: this,
              }
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                  },
                  __self: this,
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'img',
                  {
                    src:
                      _static_image_neworder_bell_alert_png__WEBPACK_IMPORTED_MODULE_17___default.a,
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      width: 30,
                      height: 30,
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 109,
                    },
                    __self: this,
                  }
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_avatar__WEBPACK_IMPORTED_MODULE_20__['default'],
                {
                  src:
                    _static_image_neworder_portfolio_png__WEBPACK_IMPORTED_MODULE_15___default.a,
                  size: '40',
                  round: true,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116,
                  },
                  __self: this,
                }
              )
            )
          )
        );
      }; // Navbar style props

      Navbar.propTypes = {
        navbarStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
        logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
        buttonStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
        wrapperStyle2: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
      };
      Navbar.defaultProps = {
        navbarStyle: {
          minHeight: '70px',
        },
        logoStyle: {
          width: ['100px', '140px'],
        },
        buttonStyle: {
          minHeight: '70px',
          color: '#fff',
        },
      };
      /* harmony default export */ __webpack_exports__['default'] = Navbar;

      /***/
    },
});
//# sourceMappingURL=neworder.js.c363f7fdfdaa58850026.hot-update.js.map
