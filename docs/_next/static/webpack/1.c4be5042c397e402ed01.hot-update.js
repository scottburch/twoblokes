webpackHotUpdate(1,{

/***/ "./components/map/Map.js":
/*!*******************************!*\
  !*** ./components/map/Map.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_ol_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/ol.css */ "./node_modules/ol/ol.css");
/* harmony import */ var ol_ol_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ol_ol_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");
/* harmony import */ var _boat_icon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./boat-icon.png */ "./components/map/boat-icon.png");
/* harmony import */ var _boat_icon_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_boat_icon_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ol_style_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/style.js */ "./node_modules/ol/style.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data */ "./data.js");
var _jsxFileName = "/Users/scott/work/two-blokes/web/components/map/Map.js";











var lonLat = [_data__WEBPACK_IMPORTED_MODULE_9__["data"].currentLocation.lon, _data__WEBPACK_IMPORTED_MODULE_9__["data"].currentLocation.lat];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var map = new ol__WEBPACK_IMPORTED_MODULE_1__["Map"]({
      target: mapRef.current,
      layers: [new ol_layer__WEBPACK_IMPORTED_MODULE_3__["Tile"]({
        source: new ol_source__WEBPACK_IMPORTED_MODULE_2__["OSM"]()
      }), new ol_layer__WEBPACK_IMPORTED_MODULE_3__["Vector"]({
        source: new ol_source__WEBPACK_IMPORTED_MODULE_2__["Vector"]({
          features: [new ol__WEBPACK_IMPORTED_MODULE_1__["Feature"]({
            type: 'icon',
            geometry: new ol_geom__WEBPACK_IMPORTED_MODULE_6__["Point"](Object(ol_proj__WEBPACK_IMPORTED_MODULE_4__["fromLonLat"])(lonLat))
          })]
        }),
        style: new ol_style_js__WEBPACK_IMPORTED_MODULE_8__["Style"]({
          image: new ol_style_js__WEBPACK_IMPORTED_MODULE_8__["Icon"]({
            src: _boat_icon_png__WEBPACK_IMPORTED_MODULE_7___default.a
          })
        })
      })],
      view: new ol__WEBPACK_IMPORTED_MODULE_1__["View"]({
        center: Object(ol_proj__WEBPACK_IMPORTED_MODULE_4__["fromLonLat"])(lonLat),
        zoom: 6
      })
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: mapRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=1.c4be5042c397e402ed01.hot-update.js.map