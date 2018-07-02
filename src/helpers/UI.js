const UI = {
  Toast: {
    TYPE: {
      success: 'success',
      warn: 'warn',
      info: 'info',
      error: 'error',
    },
    show(type,msg,opts){
      var _options = {
        hideProgressBar: true,
        pauseOnHover: true,
        autoClose: 1500,
      };
      _options = Object.assign(_options,opts||{});

      switch(type){
        case this.TYPE.success:
          toast.success(msg,_options);break;
        case this.TYPE.warn:
          toast.warn(msg,_options);break;
        case this.TYPE.info:
          toast.info(msg,_options);break;
        case this.TYPE.error:
          toast.error(msg,_options);break;
      }
    },
    showSuccess(msg,opts){
      this.show(this.TYPE.success,msg,opts);
    },
    showWarn(msg,opts){
      this.show(this.TYPE.warn,msg,opts);
    },
    showInfo(msg,opts){
      this.show(this.TYPE.info,msg,opts);
    },
    showError(msg,opts){
      this.show(this.TYPE.error,msg,opts);
    },
  },
}

export default UI;