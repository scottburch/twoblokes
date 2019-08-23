webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/header/HeaderLinks.js":
/*!******************************************!*\
  !*** ./components/header/HeaderLinks.js ***!
  \******************************************/
/*! exports provided: HeaderLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLinks", function() { return HeaderLinks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PageLink */ "./components/PageLink.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _youTubeLink_YouTubeLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../youTubeLink/YouTubeLink */ "./components/youTubeLink/YouTubeLink.js");
/* harmony import */ var _patreonLink_PatreonLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../patreonLink/PatreonLink */ "./components/patreonLink/PatreonLink.js");
var _jsxFileName = "/Users/scott/work/two-blokes/web/components/header/HeaderLinks.js";





var HeaderLinks = function HeaderLinks() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Toggle, {
    "aria-controls": "header-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Collapse, {
    id: "header-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "ml-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    as: "span",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PageLink__WEBPACK_IMPORTED_MODULE_1__["PageLink"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    as: "span",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PageLink__WEBPACK_IMPORTED_MODULE_1__["PageLink"], {
    href: "/contact-us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Contact Us")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    as: "span",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_youTubeLink_YouTubeLink__WEBPACK_IMPORTED_MODULE_3__["YouTubeLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    as: "span",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patreonLink_PatreonLink__WEBPACK_IMPORTED_MODULE_4__["PatreonLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })))));
};

/***/ }),

/***/ "./components/patreonLink/PatreonLink.js":
/*!***********************************************!*\
  !*** ./components/patreonLink/PatreonLink.js ***!
  \***********************************************/
/*! exports provided: PatreonLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatreonLink", function() { return PatreonLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patreon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patreon.png */ "./components/patreonLink/patreon.png");
/* harmony import */ var _patreon_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patreon_png__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/scott/work/two-blokes/web/components/patreonLink/PatreonLink.js";


var PatreonLink = function PatreonLink() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.patreon.com/twoblokesafloat",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _patreon_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    style: {
      height: 16
    },
    alt: "patreon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), " Patreon");
};

/***/ }),

/***/ "./components/youTubeLink/YouTubeLink.js":
/*!***********************************************!*\
  !*** ./components/youTubeLink/YouTubeLink.js ***!
  \***********************************************/
/*! exports provided: YouTubeLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YouTubeLink", function() { return YouTubeLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _youtube_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./youtube.png */ "./components/youTubeLink/youtube.png");
/* harmony import */ var _youtube_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_youtube_png__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/scott/work/two-blokes/web/components/youTubeLink/YouTubeLink.js";


var YouTubeLink = function YouTubeLink() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.youtube.com/channel/UCN2MnvMFtlHsDjyP_7esXJQ",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _youtube_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    style: {
      height: 16
    },
    alt: "youtube",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), " YouTube");
};

/***/ })

})
//# sourceMappingURL=index.js.94dd05a0d5a6929e029a.hot-update.js.map