(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
;(function(){
  function MyModule() {
    // 榛樿閰嶇疆椤?
    const config = {
      title: '',
      content: '',
      width: '',
      okText: '纭畾',
      cancelText: '鍙栨秷'
    }
    function modal() {
      this.random = Math.random();
      modalFather.call(this, this.random);
    };
    function modalFather (random) {
      this.random = random || '';
      this.remove = (id) => {
        let element = document.getElementById(id + this.random);
        if (element) {
          document.body.removeChild(element);
        }
      };
      this.close = () => {
        Array.from(document.querySelectorAll("div.cancel, div.submit")).map((item) => {
          item.removeEventListener('click', this.close, false);
        });
        this.remove('mask');
        this.remove('dialog');
      };
      this.openModal = (configMy) => {
        let config = configMy || config;
        let overlay = `<div id="mask${this.random}" class="mask"></div>`;
        let dialog = `<div class="dialog" id="dialog${this.random}" style="width:${config.width}px">
                    <div class="title">${config.title}</div>
                    <div class="content">${config.content}</div>
                    <div class="button-area">
                      <div class="cancel">${config.cancelText || '鍙栨秷'}</div>
                      <div class="submit">${config.okText || '纭畾'}</div>
                    </div>
                  </div>`
        document.body.innerHTML += overlay;
        document.body.innerHTML += dialog;
        Array.from(document.querySelectorAll("div.cancel, div.submit")).map((item) => {
          item.addEventListener('click', this.close, false);
        });
      };
    }

    let confirmModal = new modal();
    return confirmModal;
  }

  var moduleName = MyModule;

  if (typeof module !== 'undefined' && typeof exports === 'object') {
    // CommonJS
    module.exports = moduleName;
  } else if (typeof define === 'function' && (define.amd || define.cmd)) {
    // CMD and AMD
    define(function() { return moduleName; });
  } else {
    // 鍘熺敓
    this.moduleName = moduleName;
  }
}).call(this || (typeof window !== 'undefined' ? window : global));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
var modal = require('./modal');
openModal = modal().openModal;

},{"./modal":1}]},{},[2]);
