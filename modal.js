;(function(){
  function MyModule() {
    // 默认配置项
    const config = {
      title: '',
      content: '',
      width: '',
      okText: '确定',
      cancelText: '取消'
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
                      <div class="cancel">${config.cancelText || '取消'}</div>
                      <div class="submit">${config.okText || '确定'}</div>
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
    // 原生
    this.moduleName = moduleName;
  }
}).call(this || (typeof window !== 'undefined' ? window : global));
