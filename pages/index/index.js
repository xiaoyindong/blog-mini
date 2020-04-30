//index.js
//获取应用实例
const app = getApp()

let stop = false;
Page({
  data: {},
  onLoad: function () {
  },
  scale: function(e) {
    if (stop) {
      return;
    }
    stop = true;
    function vibrateShort() {
      wx.vibrateLong({
        complete (res) {
          setTimeout(vibrateShort, 450);
          console.log(res);
        }
      })
    }
    vibrateShort();
  }
})
