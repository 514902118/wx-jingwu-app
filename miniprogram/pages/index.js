Page({
  data: {
    disabled:true,
    num: 0,
    numtext: '点击开始按钮-获取位置',
    timer: null, // 定时器开关
    longitude: "无", // 经度
    latitude: '无' // 纬度
  },
  getPhoneNumber (e) {
    let self = this;
    wx.cloud.callFunction({
      name: 'getPhoneNumber',
      data: {
        weRunData: wx.cloud.CloudID(e.detail.cloudID),
      }
    }).then(res => {
      console.log('获取用户手机号-开始')
      // let phoneNumber = res.result.phoneNumber
      // self.getLocationChange(phoneNumber)
      self.setintervalHandle();
    }).catch(err => {
      console.error(err);
    });
  },

  // 定时器
  setintervalHandle () {
    console.log("开启定时器");
    this.setData({ numtext: `3秒后-获取位置` });
    let num = 0;
    this.data.timer = setInterval(() => {
      this.getLocationChange(num);
      num += 1;
      this.setData({
        disabled:false,
        num: num,
        numtext: `第${num}次-获取位置`
      });
    }, 3000);
  },

  // 清除定时器
  clearIntervalHandle () {
    console.log("清除定时器");
    clearInterval(this.data.timer)
    this.setData({
      disabled:true,
      num: 0,
      numtext: `结束-获取位置`,
      latitude: `最后一次纬度：${this.data.latitude}`,
      longitude: `最后一次经度：${this.data.longitude}`
    })
  },

  getLocationChange (phoneNumber) {
    let self = this;
    wx.getLocation({
      type: 'wgs84',
      altitude: true,
      isHighAccuracy: true,
      highAccuracyExpireTime: 3500,
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        console.log('经度', longitude)
        console.log('纬度', latitude)
        self.setData({
          latitude: latitude,
          longitude: longitude
        })
        // wx.showToast({
        //   title: '警情已发出',
        //   icon: 'success',
        //   duration: 2000
        // })
        // 发送报警信息 
        // self.privateChange(latitude, longitude, phoneNumber)
      }
    })
  },

  // 提交信息
  privateChange (latitude, longitude, phoneNumber) {
    console.log(phoneNumber)
    wx.cloud.callFunction({
      name: 'private',
      data: {
        longitude: latitude,
        latitude: longitude,
        mobile: phoneNumber,
        areaCode: '654326' //吉木乃
      }
    }).then((res) => {
      this.makePhoneCallChange();
    })
  },

  // 扫一扫
  scanCodeHandle () {
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },

  makePhoneCallChange () {
    wx.makePhoneCall({
      phoneNumber: '0906-6198110' //阿勒泰市局电话号码
    })
  },
})