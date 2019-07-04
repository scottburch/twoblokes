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
    style: {
      color: '#ddd'
    },
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
    style: {
      color: '#ddd'
    },
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patreon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patreon.png */ "./components/patreonLink/patreon.png");
/* harmony import */ var _patreon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patreon_png__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/scott/work/two-blokes/web/components/patreonLink/PatreonLink.js";


var PatreonLink = function PatreonLink(_ref) {
  var style = _ref.style;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.patreon.com/twoblokesafloat",
    target: "_blank",
    rel: "noopener noreferrer",
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      color: '#ddd',
      textDecoration: 'none'
    }, style),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _patreon_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    style: {
      height: 16
    },
    alt: "patreon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), " Patreon");
};

/***/ }),

/***/ "./components/patreonLink/patreon.png":
/*!********************************************!*\
  !*** ./components/patreonLink/patreon.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAB3RJTUUH4wcEAxEK0Az8nAAABJtJREFUWMPNmE1sVFUUx3/3vq9OZ6ZlaG1TykC1iAgSaBGFRGUnhC40xoSFJm5NhDXu1CVLA4lrNyYsMG6KSqLRLhRUCkb51GpLLdIy7dhO5+PNe+9eF2860zJTOsMQ5SQ3b3LnzTn/+z+fd8Tgc/s1j4CY9b5oCEg6Fs/GHQbjDv0Rg07LokWE5yhoQcrzGMsHjGZcfsq4TLoeQZ3HFGsxIoFtUZuhjlb2tzl0WSaGuL/SQMOM5/P9gsvwbI7r2SKqGSCdlsGRrihD66MkLPlAlKc9xfBcltMzWVJe0LhrtkdtjvW2sytmI5rwfcKSvNEd55mow8mpea5mi6syXyWDcZv3+taxu0kQZdqB3bFQ52Dcrg/I9qjN8WSCTY4VBikgRbjWBKU1aBU+a8gmx+J4MsH2qH1/IJ2WwdHedja1hB5TGsZdzc2c4mZOMefrajBag1JgO4iOxxBdvYi2dSBkuH8vmBaTo73tdFpG7RiRQnCkK8pAzC7TmVWaY2MuPy+GCt9NWryzwcJfOrBSiEQHcu8LiJ17EB1dYBiQz6EnxlA/jKBu/ApBAKJyhIGYzZGuKB/dzqBK7JWBPB2xGOqIrjwskPI0t4shE4vBMvdohejfhvn6W4jHn1xhiHXrET0bkbv2or79Ev+LT6GQX/HOUEeUb9IFruSKFddIITjc2UrClDUDTZaeK0D09mG++Tbiia0rQSyXSCvy5VcwD70WMrU8m0zJ4c5WZOm3EmCzY7Kvzak/DSwb4+CriA3Jtd+VEnngIPKpnVUxs6/NYbNjVoDsiTt0W3VWe6UQG/uQOwbqBx5pRT7/IpgrbXRbJnviTgXIYNxZs2wvjxzZtwWiscZqyeZ+RKxtRWobIrRdBtIfMRoqT6J9feNVLRKDlpZSClRkybYM64fVkE7t+40DUUEpRsQ9/cyqAGlpqJ9p9J2/QsWNyNxd9GKmanvJduMtVUj0HzfQ0383RsiVS5DPrZrqEqCgGgEi0HMp1Mg5COpzkZ4cR10Yqfndkm0JkPK8hokJvvuaYORcWL7vJ3enCc58jJ6dqcnGkm0TYCwflLttvazgFgg++wRS08gDhxCd3SCXedotoK7/QvD5GfT472ETrCFj+aACZDTj8lJ7SwO1ZBmYr4ZRl39EbNmG7EmibRvm06g/f0NPjIU9RspVR8rRjFsBcjHjMu35bLDNBgM3RK5nZ9CpOyhEuKdLaSrlqiAApj2fiyUgEmDC9Tm/4DYxggmQRmh0+ec15PyCy4TrV4AorTmbypH21SqVo7IelqR9xdlUrjyPlGFfy3sMz2arRoA2Q5IwBQlTEJEPD8jwbJZrea96QlNac3omy46ow0DMRgOtUvBhv0VOhRnVY4vKdNaEXFoscnomW2ajqrKmvIBTU/PcKvjl7ri1VTIYC1eXJZp2z62Cz6mp+ao7ThXZV7NFTkymueV65QHaL62mQbgeJybTNe82Nb0+minywfg/XF4sPpQA1cDlxVDnaKb2Bcvo6U2+X7MyewEXFlwUmqRjETEe7KqV9hRnUoucnFpgouA/+pfwNUupKsXNjVzx//1b4r+SfwEwEueXwJLZ6QAAAABJRU5ErkJggg=="

/***/ })

})
//# sourceMappingURL=index.js.701af8faa952e6c3ebae.hot-update.js.map