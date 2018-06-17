/* 
  common.js中是所有的通过的js功能
*/

//配置关闭了进度环
//NProgress.configure({ showSpinner: false });
//所有的ajax开始的时候，会触发的事件
$(document).ajaxStart(function () {
  console.log("开始啦......");
  NProgress.start();
});

$(document).ajaxStop(function () {
  setTimeout(function () {
    NProgress.done();
  }, 500);
});


