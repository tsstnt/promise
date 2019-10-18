(function(window){
  /**
   * Promise构造函数
   * @param {执行器函数（同步执行）} executor 
   */
  function Promise(executor) {
    // 给Promise指定status属性，初始值为'pending'
    this.status = 'pending'
    function resolve(value) {
      
    }
    function reject(reason) {
      
    }
    // 立即同步执行executor
    executor(resolve,reject)
  }
  //向外暴露Promise函数
  window.Promise = Promise
})(window)