webpackHotUpdate(1,{

/***/ "./components/map/Map.js":
/*!*******************************!*\
  !*** ./components/map/Map.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_ol_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/ol.css */ "./node_modules/ol/ol.css");
/* harmony import */ var ol_ol_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ol_ol_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");
/* harmony import */ var _boat_icon_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./boat-icon.png */ "./components/map/boat-icon.png");
/* harmony import */ var _boat_icon_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_boat_icon_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ol_style_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/style.js */ "./node_modules/ol/style.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../data */ "./data.js");



var _jsxFileName = "/Users/scott/work/two-blokes/web/components/map/Map.js";












var latOrLonToDecimal = function latOrLonToDecimal(latOrLon) {
  var _latOrLon$split = latOrLon.split(':'),
      _latOrLon$split2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_latOrLon$split, 2),
      degrees = _latOrLon$split2[0],
      minutes = _latOrLon$split2[1];

  degrees = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(degrees);
  minutes = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(minutes);
  console.log(degrees, minutes);
  return degrees + 60 / minutes;
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var lonLat = [latOrLonToDecimal(_data__WEBPACK_IMPORTED_MODULE_12__["data"].currentLocation.lon), latOrLonToDecimal(_data__WEBPACK_IMPORTED_MODULE_12__["data"].currentLocation.lat)];
  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["createRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var map = new ol__WEBPACK_IMPORTED_MODULE_4__["Map"]({
      target: mapRef.current,
      layers: [new ol_layer__WEBPACK_IMPORTED_MODULE_6__["Tile"]({
        source: new ol_source__WEBPACK_IMPORTED_MODULE_5__["OSM"]()
      }), new ol_layer__WEBPACK_IMPORTED_MODULE_6__["Vector"]({
        source: new ol_source__WEBPACK_IMPORTED_MODULE_5__["Vector"]({
          features: [new ol__WEBPACK_IMPORTED_MODULE_4__["Feature"]({
            type: 'icon',
            geometry: new ol_geom__WEBPACK_IMPORTED_MODULE_9__["Point"](Object(ol_proj__WEBPACK_IMPORTED_MODULE_7__["fromLonLat"])(lonLat))
          })]
        }),
        style: new ol_style_js__WEBPACK_IMPORTED_MODULE_11__["Style"]({
          image: new ol_style_js__WEBPACK_IMPORTED_MODULE_11__["Icon"]({
            src: _boat_icon_png__WEBPACK_IMPORTED_MODULE_10___default.a
          })
        })
      })],
      view: new ol__WEBPACK_IMPORTED_MODULE_4__["View"]({
        center: Object(ol_proj__WEBPACK_IMPORTED_MODULE_7__["fromLonLat"])(lonLat),
        zoom: 6
      })
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    ref: mapRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=1.6ed5e7cc98bf4ff60204.hot-update.js.map