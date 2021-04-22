define(['exports'], function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var Localtime = /*#__PURE__*/function () {
    function Localtime() {
      _classCallCheck(this, Localtime);
    }

    _createClass(Localtime, [{
      key: "getNow",
      value: function getNow() {
        return new Date();
      }
    }]);

    return Localtime;
  }();

  var Main = /*#__PURE__*/function () {
    function Main() {
      _classCallCheck(this, Main);

      console.log("===> test");
    }

    _createClass(Main, [{
      key: "show",
      value: function show() {
        var t = new Localtime();
        console.log("===> now", t.getNow());
        console.log("show", t.getNow());
      }
    }]);

    return Main;
  }();

  exports.Main = Main;

  Object.defineProperty(exports, '__esModule', { value: true });

});
//# sourceMappingURL=main.js.map
